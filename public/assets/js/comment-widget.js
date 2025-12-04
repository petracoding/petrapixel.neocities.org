/*
    (PLEASE DO NOT DELETE THIS HEADER OR CREDIT!)

    User customizable settings below!
    Please refer to my guide over on https://virtualobserver.moe/ayano/comment-widget if you're confused on how to use this.
    The IDs at the top are a requirement but everything else is optional!
    Do not delete any settings even if you aren't using them! It could break the program.

    After filling out your options, just paste this anywhere you want a comment section
    (But change the script src URL to wherever you have this widget stored on your site!)

        <div id="c_widget"></div>
        <script src="comment-widget.js"></script>

    Have fun! Bug reports are encouraged if you happen to run into any issues.
    - Ayano (https://virtualobserver.moe/)
*/

// The values in this section are REQUIRED for the widget to work! Keep them in quotes!
// const s_stylePath = "PATH HERE";
const s_formId = "1FAIpQLSeLNKzEA9LYmTl-3Vz1-O_AQi0N_nZ6sJlX1ccqt1WZI0PEhA";
const s_nameId = "1481026605";
const s_websiteId = "528195876";
const s_textId = "197515224";
const s_pageId = "666920126";
const s_replyId = "394318007";
const s_sheetId = "1kTwuc-F_jyLVFDzPZv2aOi-enBQALt8aHuQOTcpX58g";

// The values below are necessary for accurate timestamps, I've filled it in with EST as an example
const s_timezone = 2; // Your personal timezone (Example: UTC-5:00 is -5 here, UTC+10:30 would be 10.5)
const s_daylightSavings = true; // If your personal timezone uses DST, set this to true
// For the dates DST start and end where you live: [Month, Weekday, which number of that weekday, hour (24 hour time)]
const s_dstStart = ["March", "Sunday", 2, 2]; // Example shown is the second Sunday of March at 2:00 am
const s_dstEnd = ["November", "Sunday", 1, 2]; // Example shown is the first Sunday of November at 2:00 am

// Misc - Other random settings
const s_commentsPerPage = 10; // The max amount of comments that can be displayed on one page, any number >= 1 (Replies not counted)
const s_maxLength = 10000; // The max character length of a comment
const s_maxLengthName = 50; // The max character length of a name
const s_commentsOpen = true; // Change to false if you'd like to close your comment section site-wide (Turn it off on Google Forms too!)
const s_collapsedReplies = false; // True for collapsed replies with a button, false for replies to display automatically
const s_longTimestamp = false; // True for a date + time, false for just the date
let s_includeUrlParameters = false; // Makes new comment sections on pages with URL parameters when set to true (If you don't know what this does, leave it disabled)
const s_fixRarebitIndexPage = false; // If using Rarebit, change to true to make the index page and page 1 of your webcomic have the same comment section

// Word filter - Censor profanity, etc
const s_wordFilterOn = false; // True for on, false for off
const s_filterReplacement = "****"; // Change what filtered words are censored with (**** is the default)
const s_filteredWords = [
  // Add words to filter by putting them in quotes and separating with commas (ie. 'heck', 'dang')
  "heck",
  "dang",
];

// Text - Change what messages/text appear on the form and in the comments section (Mostly self explanatory)
const s_widgetTitle = "Leave a comment!";
const s_nameFieldLabel = "Your Name";
const s_websiteFieldLabel = "Your Website (Optional)";
const s_textFieldLabel = "";
const s_submitButtonLabel = "Submit";
const s_loadingText = "Loading comments...";
const s_noCommentsText = "No comments yet!";
const s_closedCommentsText = "Comments are closed temporarily!";
const s_websiteText = "Website"; // The links to websites left by users on their comments
const s_replyButtonText = "Reply"; // The button for replying to someone
const s_replyingText = "Replying to"; // The text that displays while the user is typing a reply
const s_expandRepliesText = "Show Replies";
const s_leftButtonText = "<< newer";
const s_rightButtonText = "older >>";

/*
    DO NOT edit below this point unless you are confident you know what you're doing!
    Everything else is automatic, you don't have to change anything else. ^^
    However, feel free to edit this code as much as you like! Just please don't remove my credit if possible <3
*/

// Fix the URL parameters setting for Rarebit just in case
if (s_fixRarebitIndexPage) {
  s_includeUrlParameters = true;
}

// Apply CSS
// const c_cssLink = document.createElement("link");
// c_cssLink.type = "text/css";
// c_cssLink.rel = "stylesheet";
// c_cssLink.href = s_stylePath;
// document.getElementsByTagName("head")[0].appendChild(c_cssLink);

// HTML Form
const v_mainHtml = `
    <div id="c_inputDiv">
        <form id="c_form" onsubmit="c_submitButton.disabled = true; v_submitted = true;" method="post" target="c_hiddenIframe" action="https://docs.google.com/forms/d/e/${s_formId}/formResponse"></form>
    </div>
    <div id="c_container">${s_loadingText}</div>
`;
const v_formHtml = `
    <div id="c_widgetTitle">${s_widgetTitle}</div>

    <div id="c_nameWrapper" class="c-inputWrapper">
        <label class="c-label c-nameLabel" for="entry.${s_nameId}">${s_nameFieldLabel}</label>
        <input class="c-input c-nameInput" name="entry.${s_nameId}" id="entry.${s_nameId}" type="text" maxlength="${s_maxLengthName}" required>
    </div>

    <div id="c_websiteWrapper" class="c-inputWrapper">
        <label class="c-label c-websiteLabel" for="entry.${s_websiteId}">${s_websiteFieldLabel}</label>
        <input class="c-input c-websiteInput" name="entry.${s_websiteId}" id="entry.${s_websiteId}" type="url" pattern="https://.*">
    </div>

    <div id="c_textWrapper" class="c-inputWrapper">
        <label class="c-label c-textLabel" for="entry.${s_textId}">${s_textFieldLabel}</label>
        <textarea class="c-input c-textInput" name="entry.${s_textId}" id="entry.${s_textId}" rows="4" cols="50"  maxlength="${s_maxLength}" placeholder="your comment..." required></textarea>
    </div>

    <input id="c_submitButton" name="c_submitButton" type="submit" value="${s_submitButtonLabel}" disabled>
`;

// Insert main HTML to page
document.getElementById("c_widget").innerHTML = v_mainHtml;
const c_form = document.getElementById("c_form");
if (s_commentsOpen) {
  c_form.innerHTML = v_formHtml;
} else {
  c_form.innerHTML = s_closedCommentsText;
}

// Initialize misc things
const c_container = document.getElementById("c_container");
let v_pageNum = 1;
let v_amountOfPages = 1;
let v_commentMax = 1;
let v_commentMin = 1;

// Set up the word filter if applicable
let v_filteredWords;
if (s_wordFilterOn) {
  v_filteredWords = s_filteredWords.join("|");
  v_filteredWords = new RegExp(String.raw`\b(${v_filteredWords})\b`, "ig");
}

// The fake button is just a dummy placeholder for when comments are closed
let c_submitButton;
if (s_commentsOpen) {
  c_submitButton = document.getElementById("c_submitButton");
} else {
  c_submitButton = document.createElement("button");
}

// Add invisible page input to document
let v_pagePath = window.location.pathname;
if (s_includeUrlParameters) {
  v_pagePath += window.location.search;
}
if (s_fixRarebitIndexPage && v_pagePath == "/") {
  v_pagePath = "/?pg=1";
}
const c_pageInput = document.createElement("input");
c_pageInput.value = v_pagePath;
c_pageInput.type = "text";
c_pageInput.style.display = "none";
c_pageInput.id = "entry." + s_pageId;
c_pageInput.name = c_pageInput.id;
c_form.appendChild(c_pageInput);

// Add the "Replying to..." text to document
let c_replyingText = document.createElement("span");
c_replyingText.style.display = "none";
c_replyingText.id = "c_replyingText";
c_form.appendChild(c_replyingText);
c_replyingText = document.getElementById("c_replyingText");

// Add the invisible reply input to document
let c_replyInput = document.createElement("input");
c_replyInput.type = "text";
c_replyInput.style.display = "none";
c_replyInput.id = "entry." + s_replyId;
c_replyInput.name = c_replyInput.id;
c_form.appendChild(c_replyInput);
c_replyInput = document.getElementById("entry." + s_replyId);

// Add the invisible iFrame to the document for catching the default Google Forms submisson page
let v_submitted = false;
let c_hiddenIframe = document.createElement("iframe");
c_hiddenIframe.id = "c_hiddenIframe";
c_hiddenIframe.name = "c_hiddenIframe";
c_hiddenIframe.style.display = "none";
c_hiddenIframe.setAttribute("onload", "if(v_submitted){fixFrame()}");
c_form.appendChild(c_hiddenIframe);
c_hiddenIframe = document.getElementById("c_hiddenIframe");

// Fix the invisible iFrame so it doesn't keep trying to load stuff
function fixFrame() {
  v_submitted = false;
  c_hiddenIframe.srcdoc = "";
  getComments(); // Reload comments after submission
}

// Processes comment data with the Google Sheet ID
function getComments() {
  // Disable the submit button while comments are reloaded
  c_submitButton.disabled;

  // Reset reply stuff to default
  c_replyingText.style.display = "none";
  c_replyInput.value = "";

  // Clear input fields too
  if (s_commentsOpen) {
    document.getElementById(`entry.${s_nameId}`).value = "";
    document.getElementById(`entry.${s_websiteId}`).value = "";
    document.getElementById(`entry.${s_textId}`).value = "";
  }

  // Get the data
  const url = `https://docs.google.com/spreadsheets/d/${s_sheetId}/gviz/tq?`;
  const retrievedSheet = getSheet(url);

  // Do stuff with the data here
  retrievedSheet.then((result) => {
    // The data comes with extra stuff at the beginning, get rid of it
    const json = JSON.parse(result.split("\n")[1].replace(/google.visualization.Query.setResponse\(|\);/g, ""));

    // Need index of page column for checking if comments are for the right page
    const isPage = (col) => col.label == "Page";
    let pageIdx = json.table.cols.findIndex(isPage);

    // Turn that data into usable comment data
    // All of the messy val checks are because Google Sheets can be weird sometimes with comment deletion
    let comments = [];
    if (json.table.parsedNumHeaders > 0) {
      // Check if any comments exist in the sheet at all before continuing
      for (r = 0; r < json.table.rows.length; r++) {
        // Check for null rows
        let val1;
        if (!json.table.rows[r].c[pageIdx]) {
          val1 = "";
        } else {
          val1 = json.table.rows[r].c[pageIdx].v;
        }

        // Check if the page name matches before adding to comment array
        if (val1 == v_pagePath) {
          let comment = {};
          for (c = 0; c < json.table.cols.length; c++) {
            // Check for null values
            let val2;
            if (!json.table.rows[r].c[c]) {
              val2 = "";
            } else {
              val2 = json.table.rows[r].c[c].v;
            }

            // Finally set the value properly
            comment[json.table.cols[c].label] = val2;
          }
          comment.Timestamp2 = json.table.rows[r].c[0].f;
          comments.push(comment);
        }
      }
    }

    // Check for empty comments before displaying to page
    if (comments.length == 0 || Object.keys(comments[0]).length < 2) {
      // Once again, Google Sheets can be weird
      c_container.innerHTML = s_noCommentsText;
    } else {
      displayComments(comments);
    }

    c_submitButton.disabled = false; // Now that everything is done, re-enable the submit button
  });
}

// Fetches the Google Sheet resource from the provided URL
function getSheet(url) {
  return new Promise(function (resolve, reject) {
    fetch(url).then((response) => {
      if (!response.ok) {
        reject("Could not find Google Sheet with that URL");
      } // Checking for a 404
      else {
        response.text().then((data) => {
          if (!data) {
            reject("Invalid data pulled from sheet");
          }
          resolve(data);
        });
      }
    });
  });
}

// Displays comments on page
let a_commentDivs = []; // For use in other functions
function displayComments(comments) {
  // Clear for re-display
  a_commentDivs = [];
  c_container.innerHTML = "";

  // Get all reply comments by taking them out of the comment array
  let replies = [];
  for (i = 0; i < comments.length; i++) {
    if (comments[i].Reply) {
      replies.push(comments[i]);
      comments.splice(i, 1);
      i--;
    }
  }

  // Values for pagination
  v_amountOfPages = Math.ceil(comments.length / s_commentsPerPage);
  v_commentMax = s_commentsPerPage * v_pageNum;
  v_commentMin = v_commentMax - s_commentsPerPage;

  // Main comments (not replies)
  comments.reverse(); // Newest comments go to top
  for (i = 0; i < comments.length; i++) {
    let comment = createComment(comments[i]);

    // Reply button
    let button = document.createElement("button");
    button.innerHTML = s_replyButtonText;
    button.value = comment.id;
    button.setAttribute("onclick", `openReply(this.value)`);
    button.className = "c-replyButton";
    comment.appendChild(button);

    // Choose whether to display or not based on page number
    comment.style.display = "none";
    if (i >= v_commentMin && i < v_commentMax) {
      comment.style.display = "block";
    }

    comment.className = "c-comment";
    c_container.appendChild(comment);
    a_commentDivs.push(document.getElementById(comment.id)); // Add to array for use later
  }

  // Replies
  for (i = 0; i < replies.length; i++) {
    let reply = createComment(replies[i]);
    const parentId = replies[i].Reply;
    const parentDiv = document.getElementById(parentId);

    // Check if a container doesn't already exist for this comment, if not, make one
    let container;
    if (!document.getElementById(parentId + "-replies")) {
      container = document.createElement("div");
      container.id = parentId + "-replies";
      if (s_collapsedReplies) {
        container.style.display = "none";
      } // Default to hidden if collapsed
      container.className = "c-replyContainer";
      parentDiv.appendChild(container);
    } else {
      container = document.getElementById(parentId + "-replies");
    }
    reply.className = "c-reply";
    container.appendChild(reply);
  }

  // Handle adding the buttons to show or hide replies if collapsed replies are enabled
  if (s_collapsedReplies) {
    const containers = document.getElementsByClassName("c-replyContainer");
    for (i = 0; i < containers.length; i++) {
      const num = containers[i].childNodes.length;
      const parentDiv = containers[i].parentElement;

      // The button to expand replies
      const button = document.createElement("button");
      button.innerHTML = s_expandRepliesText + ` (${num})`;
      button.setAttribute("onclick", `expandReplies(this.parentElement.id)`);
      button.className = "c-expandButton";
      parentDiv.insertBefore(button, parentDiv.lastChild);
    }
  }

  // Handle pagination if there's more than one page
  if (v_amountOfPages > 1) {
    let pagination = document.createElement("div");

    leftButton = document.createElement("button");
    leftButton.innerHTML = s_leftButtonText;
    leftButton.id = "c_leftButton";
    leftButton.name = "left";
    leftButton.setAttribute("onclick", `changePage(this.name)`);
    if (v_pageNum == 1) {
      leftButton.disabled = true;
    } // Can't go before page 1
    leftButton.className = "c-paginationButton";
    pagination.appendChild(leftButton);

    rightButton = document.createElement("button");
    rightButton.innerHTML = s_rightButtonText;
    rightButton.id = "c_rightButton";
    rightButton.name = "right";
    rightButton.setAttribute("onclick", `changePage(this.name)`);
    if (v_pageNum == v_amountOfPages) {
      rightButton.disabled = true;
    } // Can't go after the last page
    rightButton.className = "c-paginationButton";
    pagination.appendChild(rightButton);

    pagination.id = "c_pagination";
    c_container.appendChild(pagination);
  }
}

// Create basic HTML comment, reply or not
function createComment(data) {
  let comment = document.createElement("div");

  // Get the right timestamps
  // IF THERE IS AN ERROR HERE IT IS BECAUSE THE COLUMN IN THE GOOGLE DOC IS NOT NAMED "Timestamp" !!!
  // console.log(data);
  let timestamps = convertTimestamp(data.Timestamp || data.Zeitstempel);
  let timestamp;
  if (s_longTimestamp) {
    timestamp = timestamps[0];
  } else {
    timestamp = timestamps[1];
  }

  // Set the ID (uses Name + Full Timestamp format)
  const id = data.Name + "|--|" + data.Timestamp2;
  comment.id = id;

  // Name of user
  let name = document.createElement("h3");
  let filteredName = data.Name;
  if (s_wordFilterOn) {
    filteredName = filteredName.replace(v_filteredWords, s_filterReplacement);
  }
  name.innerText = filteredName;
  name.className = "c-name";
  comment.appendChild(name);

  // Timestamp
  let time = document.createElement("span");
  time.innerText = timestamp;
  time.className = "c-timestamp";
  comment.appendChild(time);

  // Website URL, if one was provided
  if (data.Website) {
    let site = document.createElement("a");
    site.target = "_blank";
    site.innerText = s_websiteText;
    site.href = data.Website;
    site.className = "c-site";
    comment.appendChild(site);
  }

  // Text content
  let text = document.createElement("p");
  let filteredText = data.Text;
  if (s_wordFilterOn) {
    filteredText = filteredText.replace(v_filteredWords, s_filterReplacement);
  }
  text.innerText = filteredText;
  text.className = "c-text";
  comment.appendChild(text);

  return comment;
}

// Makes the Google Sheet timestamp usable
function convertTimestamp(timestamp) {
  const vals = timestamp.split("(")[1].split(")")[0].split(",");
  const date = new Date(vals[0], vals[1], vals[2], vals[3], vals[4], vals[5]);
  const timezoneDiff = (s_timezone * 60 + date.getTimezoneOffset()) * -1;
  let offsetDate = new Date(date.getTime() + timezoneDiff * 60 * 1000);
  if (s_daylightSavings) {
    offsetDate = isDST(offsetDate);
  }
  return [offsetDate.toLocaleString(), offsetDate.toLocaleDateString()];
}
// DST checker
function isDST(date) {
  const dstStart = [getMonthNum(s_dstStart[0]), getDayNum(s_dstStart[1]), s_dstStart[2], s_dstStart[3]];
  const dstEnd = [getMonthNum(s_dstEnd[0]), getDayNum(s_dstEnd[1]), s_dstEnd[2], s_dstEnd[3]];

  const year = date.getFullYear();
  let startDate = new Date(year, dstStart[0], 1);
  startDate = nthDayOfMonth(dstStart[1], dstStart[2], startDate, dstStart[3]).getTime();
  let endDate = new Date(year, dstEnd[0], 1);
  endDate = nthDayOfMonth(dstEnd[1], dstEnd[2], endDate, dstEnd[3]).getTime();
  time = date.getTime();

  if (time >= startDate && time < endDate) {
    date.setHours(date.getHours() - 1);
  }
  return date;
}
// Thank you to https://stackoverflow.com/questions/32192982/get-a-given-weekday-in-a-given-month-with-javascript for the below function
function nthDayOfMonth(day, n, date, hour) {
  var count = 0;
  var idate = new Date(date);
  idate.setDate(1);
  while (count < n) {
    idate.setDate(idate.getDate() + 1);
    if (idate.getDay() == day) {
      count++;
    }
  }
  idate.setHours(hour);
  return idate;
}
// Convert weekday and month names into numbers
function getDayNum(day) {
  let num;
  switch (day.toLowerCase()) {
    case "sunday":
      num = 0;
      break;
    case "monday":
      num = 1;
      break;
    case "tuesday":
      num = 2;
      break;
    case "wednesday":
      num = 3;
      break;
    case "thursday":
      num = 4;
      break;
    case "friday":
      num = 5;
      break;
    case "saturday":
      num = 6;
      break;
    default:
      num = 0;
      break;
  }
  return num;
}
function getMonthNum(month) {
  let num;
  switch (month.toLowerCase()) {
    case "january":
      num = 0;
      break;
    case "february":
      num = 1;
      break;
    case "march":
      num = 2;
      break;
    case "april":
      num = 3;
      break;
    case "may":
      num = 4;
      break;
    case "june":
      num = 5;
      break;
    case "july":
      num = 6;
      break;
    case "august":
      num = 7;
      break;
    case "september":
      num = 8;
      break;
    case "october":
      num = 9;
      break;
    case "november":
      num = 10;
      break;
    case "december":
      num = 11;
      break;
  }
  return num;
}

// Handle making replies
const link = document.createElement("a");
link.href = "#c_inputDiv";
function openReply(id) {
  if (c_replyingText.style.display == "none") {
    c_replyingText.innerHTML = s_replyingText + ` ${id.split("|--|")[0]}...`;
    c_replyInput.value = id;
    c_replyingText.style.display = "block";
  } else {
    c_replyingText.innerHTML = "";
    c_replyInput.value = "";
    c_replyingText.style.display = "none";
  }
  link.click(); // Jump to the space to type
}

// Handle expanding replies (should only be accessible with collapsed replies enabled)
function expandReplies(id) {
  const targetDiv = document.getElementById(`${id}-replies`);
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
}

function changePage(dir) {
  const leftButton = document.getElementById("c_leftButton");
  const rightButton = document.getElementById("c_rightButton");

  // Find directional number
  let num;
  switch (dir) {
    case "left":
      num = -1;
      break;
    case "right":
      num = 1;
      break;
    default:
      num = 0;
      break;
  }
  let targetPage = v_pageNum + num;

  // Cancel if impossible direction for safety, should never happen though
  if (targetPage > v_amountOfPages || targetPage < 1) {
    return;
  }

  // Enable/disable buttons if needed
  leftButton.disabled = false;
  rightButton.disabled = false;
  if (targetPage == 1) {
    leftButton.disabled = true;
  } // Can't go before page 1
  if (targetPage == v_amountOfPages) {
    rightButton.disabled = true;
  } // Can't go past the last page

  // Hide all comments and then display the correct ones
  v_pageNum = targetPage;
  v_commentMax = s_commentsPerPage * v_pageNum;
  v_commentMin = v_commentMax - s_commentsPerPage;
  for (i = 0; i < a_commentDivs.length; i++) {
    a_commentDivs[i].style.display = "none";
    if (i >= v_commentMin && i < v_commentMax) {
      a_commentDivs[i].style.display = "block";
    }
  }
}

getComments(); // Run once on page load
