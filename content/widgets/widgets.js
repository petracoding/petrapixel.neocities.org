document.addEventListener("DOMContentLoaded", function () {
  console.log("%c Widget provided by petrapixel !!!", "font-size: 14pt;");
  console.log("%c Get yours: https://petrapixel.neocities.org/coding/widgets", "font-size: 12pt;");

  const params = getSearchParameters();
  if (params["color"]) document.body.style.color = params["color"] == "black" || params["color"] == "white" ? params["color"] : "#" + params["color"];
  if (params["fontSize"]) document.body.style.fontSize = params["fontSize"];
  if (params["center"]) document.body.style.textAlign = params["center"] == "1" ? "center" : "left";
  if (params["font"]) document.body.style.fontFamily = '"' + params["font"].replaceAll("%20", " ") + '"';

  console.log(params);

  initStatuscafe(params);
  initLastFm(params);
});

function getSearchParameters() {
  let prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
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

/**
 *  STATUS CAFE
 */
function initStatuscafe(params) {
  if (!document.getElementById("statuscafe-username")) return;

  let username = params["username"];
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
      document.getElementById("statuscafe-username").innerHTML = '<a href="https://status.cafe/users/' + username + '" target="_blank">' + r.author + "</a> " + r.face + " " + r.timeAgo;
      document.getElementById("statuscafe-content").innerHTML = username == "petra1999" ? "this is an example status text!" : r.content;

      // Styling:
      if (params["linkColor"])
        document.querySelector("#statuscafe-username a").style.color = params["linkColor"] == "black" || params["linkColor"] == "white" ? params["linkColor"] : "#" + params["linkColor"];
      if (params["hideUsernameAndTime"]) {
        if (params["hideUsernameAndTime"] == "1") document.querySelector("#statuscafe-username").style.display = "none";
      }
      if (params["hideUsername"]) {
        if (params["hideUsername"] == "1") document.querySelector("#statuscafe-username a").style.display = "none";
      }
    });
}

/**
 *  LAST FM
 */
function initLastFm(params) {
  if (!document.querySelector("#song")) return;

  // Styling:
  if (params["color"]) document.querySelector("#song").style.color = params["color"] == "black" || params["color"] == "white" ? params["color"] : "#" + params["color"];
  if (params["linkColor"]) document.querySelector("#song").style.color = params["linkColor"] == "black" || params["linkColor"] == "white" ? params["linkColor"] : "#" + params["linkColor"];
  if (params["underline"]) {
    if (params["underline"] == "0") document.querySelector("#song").style.textDecoration = "none";
  }

  let username = params["username"];
  if (!username) {
    document.getElementById("statuscafe-content").innerHTML = "Please enter a username.";
  }
  username = username.trim();

  let delimiter = params["delimiter"];
  if (!delimiter) {
    delimiter = "–";
  }
  if (delimiter == ":") {
    delimiter = delimiter + " ";
  } else {
    delimiter = " " + delimiter + " ";
  }

  let swapPositions = false;
  if (params["swapPositions"]) {
    if (params["swapPositions"] == "1") swapPositions = true;
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
