import { getBeforeMain, getAfterMain } from "./html";
import { loadTheme, initThemeSwitcher } from "./dark-mode";
import { initLuckyBtn, getChangelog, initLastFmWidget, initHitcountWidget, initStatusCafeWidget } from "./sidebar";

export function buildLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;

  loadTheme(); // we're doing this as soon as possible

  mainEl.insertAdjacentHTML("beforebegin", getBeforeMain());
  mainEl.insertAdjacentHTML("afterend", getAfterMain());

  initMenu();
  initThemeSwitcher();
  doActiveLinks();
  prepareScrollToTop();
  buildTableOfContents();
  initInlineImages();
  initExternalLinks();

  // Sidebar
  initLuckyBtn();
  getChangelog();
  initLastFmWidget();
  initHitcountWidget();
  initStatusCafeWidget();
}

// -------------------

function initExternalLinks() {
  const allLinks = document.querySelectorAll("main a[href]:not([target])");
  [...allLinks].forEach((linkEl) => {
    const href = linkEl.getAttribute("href");
    const isLocal = href.includes("localhost:") || href.includes("petrapixel") || Array.from(href)[0] == "/" || Array.from(href)[0] == "#";
    if (!isLocal) linkEl.setAttribute("target", "_blank");
  });
}

function initInlineImages() {
  const allInlineImages = document.querySelectorAll('img[src*="inline/"]:not([class])');
  [...allInlineImages].forEach((inlineImg) => {
    inlineImg.setAttribute("aria-hidden", "true");
    inlineImg.setAttribute("alt", "");
  });
}

function initMenu() {
  const detailsEl = document.querySelector(".aside--left details");
  if (detailsEl) {
    let mql = window.matchMedia("(min-width: 576px)");
    if (mql.matches) {
      detailsEl.open = true;
    }
  }
}

function doActiveLinks() {
  const els = document.querySelectorAll(".aside-nav li a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("/public", "");
    const pathname = window.location.pathname.replace("/public", "");

    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");
      }
    }
  });
}

function prepareScrollToTop() {
  const el = document.querySelector("#back-to-top-link");
  if (!el) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

function buildTableOfContents() {
  const container = document.querySelector("#toc");
  if (!container) return;
  const allHeadings = document.querySelectorAll("main h2");
  if (allHeadings.length < 2) return;
  let output = "<b>Table of Contents:</b><ol>";
  [...allHeadings].forEach((headingEl) => {
    const title = headingEl.innerHTML;
    const link =
      headingEl.getAttribute("id") ||
      encodeURI(
        title
          .replaceAll(" ", "-")
          .replaceAll(":", "")
          .replaceAll("#", "")
          .replaceAll(/<[^>]*>?/gm, "")
          .replace(/-$/, "")
      ).toLowerCase();
    headingEl.setAttribute("id", link);
    output += `
	  <li><a href="#${link}">${title}</a></li>`;
  });
  container.innerHTML = output + "</ol>";
}
