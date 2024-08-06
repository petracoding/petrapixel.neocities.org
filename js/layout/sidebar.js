const isLocalhost = window.location.href.includes("http://localhost");
const noCache = "?nocache=" + new Date().getTime();

export function initSidebar() {
  initMenu();
  doActiveLinks();
  initLuckyBtn();
  initLastFmWidget();
  initStatusCafeWidget();
  initBlinkies();
  initMutuals();
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

function doActiveLinks() {
  const pathname = window.location.pathname.replace("/public", "");
  const els = document.querySelectorAll(".aside-nav li a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
        if (el.closest(".aside-nav details")) {
          el.closest(".aside-nav details").setAttribute("open", "open");
          el.closest(".aside-nav details").classList.add("active");
        }
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");
        if (el.closest(".aside-nav details")) {
          el.closest(".aside-nav details").setAttribute("open", "open");
          el.closest(".aside-nav details").classList.add("active");
        }
      }
    }
  });

  // Special pages
  const codingHelpMenu = document.querySelector(".aside-nav details#menu-codinghelp");
  if (!codingHelpMenu) return;
  if (pathname.includes("neocities-external-widgets") || pathname.includes("neocities-automatic-deployment")) {
    codingHelpMenu.setAttribute("open", "open");
    codingHelpMenu.classList.add("active");
  }
}

function initLuckyBtn() {
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

function initLastFmWidget() {
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

function initStatusCafeWidget() {
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

  const file = isLocalhost ? `http://localhost:52330/public/about/blinkies.html` : `https://petrapixel.neocities.org/about/blinkies.html`;
  fetch(file + noCache)
    .then(function (response) {
      switch (response.status) {
        case 200:
          return response.text();
        case 404:
          throw response;
      }
    })
    .then(function (template) {
      // Get DOM from page
      const domParser = new DOMParser();
      const doc = domParser.parseFromString(template, "text/html");

      // Add to Sidebar
      const wrapper = document.querySelector(".aside-blinkies");
      if (!wrapper) return;
      const nesting = wrapper.getAttribute("data-nesting");
      wrapper.querySelector(".aside-blinkies__buttons div").innerHTML = doc.querySelector("#buttons-to-load").innerHTML.replaceAll("../", nesting);
      wrapper.querySelector(".aside-blinkies__stamps div").innerHTML = doc.querySelector("#stamps-to-load").innerHTML.replaceAll("../", nesting);
      wrapper.querySelector(".aside-blinkies__blinkies div").innerHTML = doc.querySelector("#blinkies-to-load").innerHTML.replaceAll("../", nesting);
      wrapper.querySelector(".aside-blinkies__userboxes div").innerHTML = doc.querySelector("#userboxes-to-load").innerHTML.replaceAll("../", nesting);

      initMarquee(".aside-blinkies__buttons", 0.5);
      initMarquee(".aside-blinkies__stamps", 0.4);
      initMarquee(".aside-blinkies__blinkies", 0.5);
      initMarquee(".aside-blinkies__userboxes", 0.6);
    })
    .catch(function (response) {
      console.error("Problem with loading blinkies: " + response.statusText);
    });
}

function initMutuals() {
  const wrapper = document.querySelector(".aside-mutuals");
  if (!wrapper) return;

  const file = isLocalhost ? `http://localhost:52330/public/about/neighbors.html` : `https://petrapixel.neocities.org/about/neighbors.html`;
  fetch(file + noCache)
    .then(function (response) {
      switch (response.status) {
        case 200:
          return response.text();
        case 404:
          throw response;
      }
    })
    .then(function (template) {
      // Get DOM from page
      const domParser = new DOMParser();
      const doc = domParser.parseFromString(template, "text/html");

      // Add to Sidebar
      const wrapper = document.querySelector(".aside-mutuals");
      if (!wrapper) return;
      const nesting = wrapper.getAttribute("data-nesting");
      const neighborsToLoad = doc.querySelector("#neighbors-to-load").innerHTML.replaceAll("../", nesting);
      wrapper.querySelector(".aside-mutuals__buttons div").innerHTML = neighborsToLoad;
      const homeWrapper = document.querySelector("#home-neighbors");
      if (homeWrapper) {
        homeWrapper.innerHTML = neighborsToLoad;
      }

      initMarquee(".aside-mutuals__buttons", 0.6);
    })
    .catch(function (response) {
      console.error("Problem with loading mutuals: " + response.statusText);
    });
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
