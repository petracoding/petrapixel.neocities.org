const knownParams = [
  "fontSize",
  "center",
  "font",
  "marquee",
  "linkColor",
  "timeColor",
  "username",
  "hideUsername",
  "hideEmoji",
  "hideUsernameAndTime",
  "swapPositions",
  "delimiter",
  "underline",
  "pollcode",
  "ignorePollcodeStyling",
  "viewButtonAsLink",
  "spacing",
  "showAlbumCover",
];

document.addEventListener("DOMContentLoaded", function () {
  console.log(
    "%cWidget provided by petrapixel. Get yours: https://petrapixel.neocities.org/coding/widgets",
    "font-size: 14pt;",
    "font-size: 16pt;",
  );

  const params = getParameters();
  console.log("%cParameters:", "font-size: 13pt;");
  console.log(params);
  doCSS(params);

  initStatuscafe(params);
  initLastFm(params);
  initPollcode(params);
});

function getParameters() {
  let queryString = window.location.search.substr(1).replaceAll(";", "&");
  let hashString = window.location.hash || ""; // in case of color codes with "#"
  if (!queryString) return [];
  const fullString = queryString + hashString;
  let fullStringFixed = fullString.replaceAll("&nbsp;", " "); // Fix for encoding
  fullStringFixed = fullStringFixed.replaceAll("&%20", "＆%20"); // Fix & bug with special character ＆
  return new URLSearchParams(fullStringFixed);
}

function doCSS(params) {
  // Known:
  if (params.get("center")) {
    document.body.style.textAlign =
      params.get("center") == "1" ? "center" : "left";

    if (params.get("center") == "0") {
      document.body.querySelector("main").style.margin = "0";
    }
  }

  // Backwards Compability (now unknown):
  if (params.get("font"))
    document.body.style.fontFamily =
      '"' + params.get("font").replaceAll("%20", " ") + '"';
  if (params.get("fontSize"))
    document.body.style.fontSize = params.get("fontSize");

  // Use unknown parameters as CSS:
  const unknownParams = [];
  params.forEach((v, k) => {
    if (!knownParams.includes(k)) {
      if (k.includes(":") && !v) {
        // fix e.g. font-size:1px to font-size=1px
        unknownParams.push([k.split(":")[0], k.split(":")[1]]);
      } else {
        unknownParams.push([k, v]);
      }
    }
  });
  let cssCode = document.body.getAttribute("style") + ";";
  unknownParams.forEach((p) => {
    if (p[0] == "color" || p[0] == "background-color") {
      // deal with colors
      const hasHash = p[1].includes("#");
      const needsHash = !hasHash && p[1].length == 6;
      cssCode += p[0] + ":" + (needsHash ? "#" : "") + p[1] + ";";
    } else {
      cssCode += p[0] + ":" + p[1].replaceAll("%20", " ") + ";";
    }
  });

  document.body.setAttribute("style", cssCode);
}

function turnIntoMarquee() {
  const marqueeHolderEl = document.getElementById("marquee-holder");
  if (!marqueeHolderEl) return;

  const marqueeEl = document.createElement("marquee");
  marqueeEl.innerHTML = marqueeHolderEl.innerHTML;
  marqueeHolderEl.parentNode.replaceChild(marqueeEl, marqueeHolderEl);

  if (document.querySelector("main"))
    document.querySelector("main").style.width = "100%";
}

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

/**
 *  STATUS CAFE
 */
function initStatuscafe(params) {
  if (!document.getElementById("statuscafe-username")) return;

  if (params.get("marquee")) {
    if (params.get("marquee") == "1") turnIntoMarquee();
  }

  let username = params.get("username");
  if (!username) {
    document.getElementById("statuscafe-content").innerHTML =
      "Please enter a username.";
  }
  username = username.toLowerCase().trim();

  fetch(`https://status.cafe/users/${username}/status.json`)
    .then((r) => r.json())
    .then((r) => {
      if (!r.content.length) {
        document.getElementById("statuscafe-content").innerHTML =
          "No status yet.";
        return;
      }
      let delimiter = "";
      if (params.get("marquee")) {
        if (params.get("marquee") == "1") {
          delimiter = ": ";
        }
      }

      let emoji = r.face;
      if (params.get("hideEmoji")) {
        if (params.get("hideEmoji") == "1") emoji = "";
      }

      document.getElementById("statuscafe-username").innerHTML =
        '<a href="https://status.cafe/users/' +
        username +
        '" target="_blank">' +
        r.author +
        "</a> " +
        emoji +
        " <span>" +
        r.timeAgo +
        delimiter +
        "</span>";
      document.getElementById("statuscafe-content").innerHTML =
        username == "petra1999" ? "this is an example status text!" : r.content;

      // Styling:
      if (params.get("linkColor")) {
        document.querySelector("#statuscafe-username a").style.color =
          params.get("linkColor") == "black" ||
          params.get("linkColor") == "white" ||
          params.get("linkColor").includes("#")
            ? params.get("linkColor")
            : "#" + params.get("linkColor");
      }

      if (params.get("timeColor")) {
        document.querySelector("#statuscafe-username span").style.color =
          params.get("timeColor") == "black" ||
          params.get("timeColor") == "white" ||
          params.get("timeColor").includes("#")
            ? params.get("timeColor")
            : "#" + params.get("timeColor");
      }
      if (params.get("hideUsernameAndTime")) {
        if (params.get("hideUsernameAndTime") == "1")
          document.querySelector("#statuscafe-username").style.display = "none";
      }
      if (params.get("hideUsername")) {
        if (params.get("hideUsername") == "1")
          document.querySelector("#statuscafe-username a").style.display =
            "none";
      }
      if (params.get("swapPositions")) {
        if (params.get("swapPositions") == "1") {
          document.querySelector("#marquee-holder").style.display = "flex";
          document.querySelector("#marquee-holder").style.flexDirection =
            "column-reverse";
        }
      }
      // if (params.get("marquee")) {
      //   if (params.get("marquee") == "1") {
      //     document.querySelector("main").style.width = "100%";
      //     document.querySelector("marquee").style.display = "flex";
      //     document.querySelector("marquee").style.alignItems = "end";
      //     document.querySelector("#statuscafe-username").style.flexShrink = "0";
      //     document.querySelector("#statuscafe-username").style.marginRight = "1em";
      //     document.querySelector("#statuscafe-content").style.flexShrink = "0";
      //   }
      // }
    });
}

/**
 *  LAST FM
 */
function initLastFm(params) {
  if (!document.querySelector("#song")) return;

  if (params.get("marquee")) {
    if (params.get("marquee") == "1") turnIntoMarquee();
  }

  // Styling:
  if (params.get("color"))
    document.querySelector("#song").style.color =
      params.get("color") == "black" || params.get("color") == "white"
        ? params.get("color")
        : "#" + params.get("color");
  if (params.get("linkColor"))
    document.querySelector("#song").style.color =
      params.get("linkColor") == "black" || params.get("linkColor") == "white"
        ? params.get("linkColor")
        : "#" + params.get("linkColor");
  if (params.get("underline")) {
    if (params.get("underline") == "0")
      document.querySelector("#song").style.textDecoration = "none";
  }
  if (params.get("marquee")) {
    if (params.get("marquee") == "1")
      document.querySelector("#song").style.whiteSpace = "nowrap";
  }

  let username = params.get("username");
  if (!username) {
    document.getElementById("statuscafe-content").innerHTML =
      "Please enter a username.";
  }
  username = username.trim();

  let delimiter = params.get("delimiter");
  if (!delimiter) {
    delimiter = "–";
  }
  if (delimiter == ":") {
    delimiter = delimiter + " ";
  } else {
    delimiter = " " + delimiter + " ";
  }

  let swapPositions = false;
  if (params.get("swapPositions")) {
    if (params.get("swapPositions") == "1") swapPositions = true;
  }

  const url =
    "https://lastfm-last-played.biancarosa.com.br/" + username + "/latest-song";
  const song = document.querySelector("#song");
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      song.setAttribute("href", "https://www.last.fm/user/" + username);

      let artist = json["track"]["artist"]["#text"];
      let songTitle = json["track"]["name"];
      let albumCoverUrl = json["track"]["image"]
        ? json["track"]["image"][2]["#text"]
        : null; // 0=small, 1=medium, 2=large, 3=extralarge

      if (username == "Petra1999") {
        // Preview data
        artist = "Taylor Swift";
        songTitle = "Love Story";
        albumCoverUrl =
          "https://lastfm.freetls.fastly.net/i/u/300x300/acdd1489ea27beb10b07c58ffdb99a83.jpg";
      }

      let albumCoverHTML = "";
      if (params.get("showAlbumCover") && albumCoverUrl) {
        if (params.get("showAlbumCover") != "0") {
          const size =
            params.get("showAlbumCover") < 10
              ? 10
              : params.get("showAlbumCover");
          albumCoverHTML = `<img src="${albumCoverUrl}" height="${size}" width="${size}" />`;
        }
      }

      if (swapPositions) {
        song.innerHTML =
          `<span class="artist">${artist}</span>${delimiter}<span class="name">${songTitle}</span>` +
          albumCoverHTML;
      } else {
        song.innerHTML =
          `<span class="name" > ${songTitle}</span>${delimiter}<span class="artist">${artist}</span>` +
          albumCoverHTML;
      }
    });
}

/**
 *   POLLCODE
 */
function initPollcode(params) {
  const wrapper = document.querySelector("#pollcode");
  if (!wrapper) return;

  if (params.get("pollcode")) {
    if (!params.get("pollcode").includes("poll.pollcode.com")) {
      wrapper.innerHTML = "This doesn't seem to be a Pollcode code.";
      return;
    }
    const encodedCode = params.get("pollcode");
    const decodedCode = decodeHtml(encodedCode);
    wrapper.innerHTML = decodedCode;
  }

  if (params.get("ignorePollcodeStyling")) {
    if (params.get("ignorePollcodeStyling") == "1") {
      const allStyledPollcodeElements =
        document.querySelectorAll("#pollcode [style]");
      [...allStyledPollcodeElements].forEach((el) => {
        el.setAttribute("style", "");
      });
    }
  }

  if (params.get("viewButtonAsLink")) {
    if (params.get("viewButtonAsLink") == "1") {
      const viewBtn = document.querySelector("input[name='view']");
      if (viewBtn) {
        const parentEl = viewBtn.closest("div");
        viewBtn.remove();
        const pollId = document
          .querySelector("#pollcode form")
          .getAttribute("action")
          .replace("https://poll.pollcode.com/", "");
        const viewLink = "https://poll.pollcode.com/" + pollId + "_result?v";
        const viewLinkEl = document.createElement("a");
        viewLinkEl.innerHTML = "View";
        viewLinkEl.setAttribute("href", viewLink);
        viewLinkEl.setAttribute("target", "_blank");
        viewLinkEl.setAttribute("style", "color: inherit;");
        parentEl.appendChild(viewLinkEl);
      }
    }
  }

  if (params.get("spacing")) {
    document.head.insertAdjacentHTML(
      "beforeend",
      "<style>form > div > * {margin: " + params.get("spacing") + "}</style>",
    );
  }

  // make sure the pollcode "voted" website opens in new tab, not the iframe:
  document.querySelector("#pollcode form").setAttribute("target", "_blank");

  // hide "pollcode.com free polls" text:
  const creditText = document.querySelector(
    "#pollcode form > div > div:last-child",
  );
  if (creditText) {
    creditText.remove();
  }
}
