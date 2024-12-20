export function initSidebar() {
  initMenu();
  initLastFmWidget();
  initStatusCafeWidget();
  initBlinkies();

  //   initMarquee(".aside-mutuals__buttons", 0.5);
}

function initMenu() {
  // toggles
  const menuDetails = document.querySelectorAll(".aside-nav details");
  [...menuDetails].forEach((menuDetailEl) => {
    const summaryEl = menuDetailEl.querySelector("summary");
    summaryEl.addEventListener("click", () => {
      // close all others
      [...menuDetails].forEach((otherEl) => {
        if (otherEl.getAttribute("id") != menuDetailEl.getAttribute("id")) otherEl.removeAttribute("open");
      });
    });
  });

  // mobile
  const mobileDetailsEl = document.querySelector(".aside--left > details");
  if (mobileDetailsEl) {
    let mql = window.matchMedia("(min-width: 576px)");
    if (mql.matches) {
      mobileDetailsEl.open = true;
    }
  }
}

function initLastFmWidget() {
  if (!document.querySelector("#song")) return;
  let user = "Petra1999";
  let url = "https://lastfm-last-played.biancarosa.com.br/" + user + "/latest-song";
  let song = document.querySelector("#song");
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      song.innerHTML = json["track"]["name"] + " – " + json["track"]["artist"]["#text"];
      if (json["track"]["@attr"]) {
        if (json["track"]["@attr"]["nowplaying"]) {
          song.classList.add("nowplaying");
        }
      }
    });

  //   let cardElementAdded = false;
  //   const spotifyCardCode = `<a href="https://data-card-for-spotify.herokuapp.com/card?user_id=11123584461">
  //   <img src="https://data-card-for-spotify.herokuapp.com/api/card?user_id=11123584461" alt="Data Card for Spotify"></a>`;

  //   song.addEventListener("click", () => {
  //     if (!cardElementAdded) {
  //       document.querySelector("#spotifyCard").innerHTML = spotifyCardCode;
  //       cardElementAdded = true;
  //     }
  //     document.querySelector(".spotify-card-popup").setAttribute("aria-hidden", "false");
  //   });

  //   const closeBtn = document.querySelector(".spotify-iframe-container__close");
  //   closeBtn.addEventListener("click", () => {
  //     document.querySelector("#spotifyCard").setAttribute("aria-hidden", "true");
  //   });

  //   doOnEscPress(() => {
  //     document.querySelector("#spotifyCard").setAttribute("aria-hidden", "true");
  //   });
}

function doOnEscPress(f) {
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      f();
    }
  };
}

function initStatusCafeWidget() {
  if (!document.getElementById("statuscafe-username")) return;

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

function initBlinkies() {
  const wrapper = document.querySelector(".aside-blinkies");
  if (!wrapper) return;

  //   initMarquee(".aside-blinkies__buttons", 0.5);
  //   initMarquee(".aside-blinkies__blinkies", 0.5);
}

function initMarquee(selector, speed) {
  // Adjust speed
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
  if (!isFirefox) {
    speed = speed - 0.4;
  }

  const parentSelector = document.querySelector(selector);
  if (!parentSelector) return;
  const clone = parentSelector.innerHTML;
  let i = 0;
  parentSelector.insertAdjacentHTML("beforeend", clone);
  const firstElement = parentSelector.children[0];

  let scrollingAnimation = setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;

    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);

  parentSelector.addEventListener("mouseover", () => {
    clearInterval(scrollingAnimation);
  });

  parentSelector.addEventListener("mouseout", () => {
    scrollingAnimation = setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;

      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  });
}
