const knownParams = ["fontSize", "center", "font", "marquee", "linkColor", "username", "hideUsername", "hideEmoji", "hideUsernameAndTime", "swapPositions", "delimiter", "underline"];

document.addEventListener("DOMContentLoaded", function () {
  console.log("%c Widget provided by petrapixel", "font-size: 16pt;");
  console.log("%c Get yours: https://petrapixel.neocities.org/coding/widgets", "font-size: 14pt;");

  const params = getParameters();
  doCSS(params);

  initStatuscafe(params);
  initLastFm(params);
});

function getParameters() {
  let queryString = window.location.search.substr(1).replaceAll(";", "&");
  let hashString = window.location.hash || ""; // in case of color codes with "#"
  if (!queryString) return [];
  return new URLSearchParams(queryString + hashString);
}

function doCSS(params) {
  // Known:
  if (params.get("center")) {
    document.body.style.textAlign = params.get("center") == "1" ? "center" : "left";

    if (params.get("center") == "0") {
      document.body.querySelector("main").style.margin = "0";
    }
  }

  // Backwards Compability (now unknown):
  if (params.get("font")) document.body.style.fontFamily = '"' + params.get("font").replaceAll("%20", " ") + '"';
  if (params.get("fontSize")) document.body.style.fontSize = params.get("fontSize");

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
      const needsHash = p[1] !== "black" && p[1] !== "white" && !hasHash;
      cssCode += p[0] + ":" + (needsHash ? "#" : "") + p[1] + ";";
    } else {
      cssCode += p[0] + ":" + p[1].replaceAll("%20", " ") + ";";
    }
  });

  document.body.setAttribute("style", cssCode);
}

function transformToAssocArray(prmstr) {
  let params = {};
  let prmarr = prmstr.split("&");
  for (let i = 0; i < prmarr.length; i++) {
    let tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}

function turnIntoMarquee() {
  const marqueeHolderEl = document.getElementById("marquee-holder");
  if (!marqueeHolderEl) return;

  const marqueeEl = document.createElement("marquee");
  marqueeEl.innerHTML = marqueeHolderEl.innerHTML;
  marqueeHolderEl.parentNode.replaceChild(marqueeEl, marqueeHolderEl);

  if (document.querySelector("main")) document.querySelector("main").style.width = "100%";
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
    document.getElementById("statuscafe-content").innerHTML = "Please enter a username.";
  }
  username = username.toLowerCase().trim();

  fetch(`https://status.cafe/users/${username}/status.json`)
    .then((r) => r.json())
    .then((r) => {
      if (!r.content.length) {
        document.getElementById("statuscafe-content").innerHTML = "No status yet.";
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
        '<a href="https://status.cafe/users/' + username + '" target="_blank">' + r.author + "</a> " + emoji + " <span>" + r.timeAgo + delimiter + "</span>";
      document.getElementById("statuscafe-content").innerHTML = username == "petra1999" ? "this is an example status text!" : r.content;

      // Styling:
      if (params.get("linkColor"))
        document.querySelector("#statuscafe-username a").style.color =
          params.get("linkColor") == "black" || params.get("linkColor") == "white" ? params.get("linkColor") : "#" + params.get("linkColor");
      if (params.get("hideUsernameAndTime")) {
        if (params.get("hideUsernameAndTime") == "1") document.querySelector("#statuscafe-username").style.display = "none";
      }
      if (params.get("hideUsername")) {
        if (params.get("hideUsername") == "1") document.querySelector("#statuscafe-username a").style.display = "none";
      }
      if (params.get("swapPositions")) {
        if (params.get("swapPositions") == "1") {
          document.querySelector("#marquee-holder").style.display = "flex";
          document.querySelector("#marquee-holder").style.flexDirection = "column-reverse";
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
  if (params.get("color")) document.querySelector("#song").style.color = params.get("color") == "black" || params.get("color") == "white" ? params.get("color") : "#" + params.get("color");
  if (params.get("linkColor"))
    document.querySelector("#song").style.color = params.get("linkColor") == "black" || params.get("linkColor") == "white" ? params.get("linkColor") : "#" + params.get("linkColor");
  if (params.get("underline")) {
    if (params.get("underline") == "0") document.querySelector("#song").style.textDecoration = "none";
  }
  if (params.get("marquee")) {
    if (params.get("marquee") == "1") document.querySelector("#song").style.whiteSpace = "nowrap";
  }

  let username = params.get("username");
  if (!username) {
    document.getElementById("statuscafe-content").innerHTML = "Please enter a username.";
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

  let url = "https://lastfm-last-played.biancarosa.com.br/" + username + "/latest-song";
  let song = document.querySelector("#song");
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      song.setAttribute("href", "https://www.last.fm/user/" + username);

      let artist = json["track"]["artist"]["#text"];
      let songTitle = json["track"]["name"];

      if (username == "Petra1999") {
        artist = "Taylor Swift";
        songTitle = "Love Story";
      }

      if (swapPositions) {
        song.innerHTML = `<span class="artist">${artist}</span>${delimiter}<span class="name">${songTitle}</span>`;
      } else {
        song.innerHTML = `<span span class="name" > ${songTitle}</span>${delimiter}<span class="artist">${artist}</span>`;
      }
    });
}
