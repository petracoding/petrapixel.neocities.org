const isLocalhost = window.location.href.includes("http://localhost");
const noCache = "?nocache=" + new Date().getTime();

export function initLuckyBtn() {
  const btn = document.querySelector("#lucky-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const file = isLocalhost ? `http://localhost:52330/public/blog/blog.json` : `https://petrapixel.neocities.org/blog/blog.json`;
    fetch(`${file}${noCache}`)
      .then(function (response) {
        switch (response.status) {
          case 200:
            return response.json();
          case 404:
            throw response;
        }
      })
      .then(function (data) {
        const articlesJson = data["blog"];
        const randomArticle = articlesJson[Math.floor(Math.random() * articlesJson.length)];
        const randomArticleUrl = "/blog/" + randomArticle["fileName"] + ".html";
        window.location.href = (isLocalhost ? "/public" : "") + randomArticleUrl;
      })
      .catch(function (response) {
        console.error("Loading Blog Json: " + response.statusText);
      });
  });
}

export function initLastFmWidget() {
  let user = "Petra1999";
  let url = "https://lastfm-last-played.biancarosa.com.br/" + user + "/latest-song";
  let song = document.querySelector("#song");
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      song.innerHTML = json["track"]["name"] + " – " + json["track"]["artist"]["#text"];
    });
}

export function initHitcountWidget() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var site_data = JSON.parse(this.responseText);
      var num_arr = site_data.info.views.toString().split("");
      var num_str = "";
      let i;
      for (i = 0; i < num_arr.length; i++) {
        num_str += num_arr[i];
        if ((num_arr.length - 1 - i) % 3 == 0 && num_arr.length - 1 - i != 0) {
          num_str += ",";
        }
        // var date_str = site_data.info.last_updated;
        // var date_obj = new Date(site_data.info.last_updated);
        //   document.getElementById("lastupdate").innerHTML = date_obj.getMonth() + 1 + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
      }
      document.getElementById("hitcount").innerHTML = num_str;
    }
  };
  xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=petrapixel", true);
  xhttp.send();
}

export function initStatusCafeWidget() {
  fetch("https://status.cafe/users/petra1999/status.json")
    .then((r) => r.json())
    .then((r) => {
      if (!r.content.length) {
        document.getElementById("statuscafe-content").innerHTML = "No status yet.";
        return;
      }
      document.getElementById("statuscafe-username").innerHTML = '<a href="https://status.cafe/users/petra1999" target="_blank">' + r.author + "</a> " + r.face + " " + r.timeAgo;
      document.getElementById("statuscafe-content").innerHTML = r.content;
    });
}

export function getChangelog() {
  const changelogFile = isLocalhost ? "http://localhost:52330/public/assets/changelog.json" : "https://petrapixel.neocities.org/assets/changelog.json";
  fetch(changelogFile + noCache)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      // note: changelog[0] ist the template
      let changelogHtml = "";
      let i = 1;
      data.changelog.forEach((c) => {
        if (c.t !== "TEMPLATE" && i <= 10) {
          i++;
          if (c.l !== "") {
            changelogHtml += `
		  <div class="changelog__entry">
            <strong>${c.d}</strong>
            <a href="${c.l}" tabindex="-1">${c.t}</a>
          </div>
		  `;
          } else {
            changelogHtml += `
		  <div class="changelog__entry">
            <strong>${c.d}</strong>
            <span>${c.t}</span>
          </div>
		  `;
          }
        }
      });
      document.querySelector("#changelog").innerHTML = changelogHtml;
    })
    .catch((error) => console.error("Unable to fetch data:", error));
}
