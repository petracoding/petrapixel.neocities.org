import "../css/main.scss";
import { loadTheme, initThemeSwitcher } from "./layout/dark-mode";
import { initSidebar } from "./layout/sidebar";
import { initClipboard } from "./pages/clipboard";
import { initPlaylists } from "./pages/playlists";
import { initWritingChart } from "./pages/writing";
import { initRandomGenerator } from "./pages/random-generator";
import { initChecklist } from "./pages/checklist";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

document.addEventListener("DOMContentLoaded", function () {
  loadTheme();
  document.body.classList.add("-js");

  console.log("%c Hi! :) Feel free to inspect my code, but please do not copy large sections without asking!", "font-size: 14pt;color:white;background:#86677b");
  console.log("%c My code is available on GitHub: https://github.com/petracoding/petrapixel.neocities.org", "font-size: 12pt");

  initSidebar();
  doActiveLinks();
  buildTableOfContents();
  initThemeSwitcher();
  prepareScrollToTop();

  // Specific Pages:
  initClipboard();
  initPlaylists();
  initWritingChart();
  initRandomGenerator();
  initChecklist();

  // Misc.
  initTooltips();
  initProgressBar();

  // Localhost only:
  localhostHelper();
});

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
  const containers = document.querySelectorAll("#toc");

  [...containers].forEach((container) => {
    if (container.innerHTML) return;
    const twoLevels = container.getAttribute("data-two-levels");
    const allHeadings = document.querySelectorAll(twoLevels ? "main h2, main h3" : "main h2");
    if (allHeadings.length < 2) return;
    let output = "<b>Table of Contents:</b><ul>";
    if (container.closest("aside")) {
      output += `<li><a href="#">(Top)</a></li>`;
    }
    let isFirst = true;
    [...allHeadings].forEach((headingEl) => {
      const title = headingEl.innerHTML.replaceAll("<b>", "").replaceAll("</b>", "");
      const link =
        headingEl.getAttribute("id") ||
        encodeURI(
          title
            .replaceAll("(Optional)", "")
            .replaceAll(" ", "-")
            .replaceAll(":", "")
            .replaceAll("#", "")
            .replaceAll(".", "")
            .replaceAll("(", "")
            .replaceAll(")", "")
            .replaceAll('"', "")
            .replaceAll("&amp;", "")
            .replaceAll(/<[^>]*>?/gm, "")
            .replace(/-$/, "")
            .replaceAll("--", "-")
        ).toLowerCase();
      headingEl.setAttribute("id", link);
      const isH2 = headingEl.tagName == "H2";
      if (twoLevels && isH2) {
        if (!isFirst) output += `</ul></li>`;
        output += `
	  <li><a href="#${link}">${title}</a>
	  <ul>`;
      } else {
        output += `
	  <li><a href="#${link}">${title}</a></li>`;
      }
      isFirst = false;
    });
    container.innerHTML = output + "</ul>";
  });

  initSidebarTableOfContents();
}

function initSidebarTableOfContents() {
  const el = document.querySelector(".coding-page-layout .aside #toc");
  if (!el) return;
  const allSections = document.querySelectorAll("main section h2");

  updateSidebarTableOfContentsPosition(el, allSections);

  // debounced: https://www.onlywebpro.com/tutorials/javascript/optimize-scrolling-performance-by-debouncing-scroll-event-calls
  let debounce_timer;
  window.addEventListener("scroll", function () {
    if (debounce_timer) {
      window.clearTimeout(debounce_timer);
    }
    debounce_timer = window.setTimeout(function () {
      console.log("scroll");
      updateSidebarTableOfContentsPosition(el, allSections);
    }, 20);
  });
}

function updateSidebarTableOfContentsPosition(el, allSections) {
  const minPixelInViewport = 200;
  const cutOff = document.querySelector("#toc-position").getBoundingClientRect().top;

  if (cutOff < 0) {
    el.classList.add("fixed-toc");
  } else {
    el.classList.remove("fixed-toc");
  }

  // Current section
  [...allSections].forEach((section) => {
    const theId = section.getAttribute("id");
    const theTocElement = el.querySelector('[href="#' + theId + '"]').closest("li");
    const theSection = section.closest("section");
    const theSectionRect = theSection.getBoundingClientRect();
    const sectionIsInViewport = theSectionRect.bottom >= minPixelInViewport && theSectionRect.top + minPixelInViewport <= (window.innerHeight || document.documentElement.clientHeight);

    if (sectionIsInViewport) {
      theTocElement.classList.add("active");
    } else {
      theTocElement.classList.remove("active");
    }
  });
}

function initTooltips() {
  tippy("[title]", {
    arrow: true,
    placement: "top", // top, right, bottom, left
    delay: 5, //ms
    distance: 15, //px or string
    maxWidth: 300, //px or string
    followCursor: true,
    allowHTML: true,
    theme: "custom",
    ignoreAttributes: true,
    content(reference) {
      const title = reference.getAttribute("title");
      reference.removeAttribute("title");
      return title;
    },
  });
}

function localhostHelper() {
  if (!window.location.href.includes("http://localhost")) return;
  const publicStr = window.location.href.includes("8080") ? "" : "/public";
  const linkEls = document.querySelectorAll("a");
  [...linkEls].forEach((linkEl) => {
    const oldUrl = linkEl.getAttribute("href");
    if (oldUrl == "/") {
    } else if (oldUrl.includes(".xml")) {
    } else if (oldUrl.charAt(0) == "/") {
      const newUrl = publicStr + oldUrl + ".html";
      linkEl.setAttribute("href", newUrl);
    }
  });
}

function initProgressBar() {
  const progressBar = document.querySelector(".progress-bar");
  if (!progressBar) return;

  progressBar.style.width = 1 + "%";

  const buyMeCoffeeHeight = document.querySelector(".buy-me-a-coffee") ? document.querySelector(".buy-me-a-coffee").getBoundingClientRect().height : 0;
  const commentSectionHeight = document.querySelector(".buy-me-a-coffee + section") ? document.querySelector(".buy-me-a-coffee + section").getBoundingClientRect().height : 0;

  window.addEventListener("scroll", function () {
    // console.log(window.scrollY);
    if (window.scrollY > 800) {
      document.querySelector(".progress-bar-container").classList.add("show");
    } else {
      document.querySelector(".progress-bar-container").classList.remove("show");
    }

    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight - buyMeCoffeeHeight - commentSectionHeight;
    let scrolled = (scroll / height) * 100;
    if (scrolled > 100) scrolled = 100;

    document.querySelector(".progress-bar-percent").innerHTML = Math.round(scrolled);

    if (scrolled <= 1) {
      progressBar.style.width = 1 + "%";
    } else if (scrolled >= 2 && scrolled <= 99.9) {
      progressBar.style.width = scrolled + "%";
      progressBar.classList.remove("progress-bar--100");
    } else if (scrolled === 100) {
      progressBar.style.width = scrolled + "%";
      progressBar.classList.add("progress-bar--100");
    }
  });
}

function doActiveLinks() {
  const pathname = window.location.pathname.replace("/public", "");
  const els = document.querySelectorAll(".aside-nav li a, .coding-navigation li a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
        if (el.closest(".aside-nav details, .coding-navigation-category")) {
          el.closest(".aside-nav details, .coding-navigation-category").setAttribute("open", "open");
          el.closest(".aside-nav details, .coding-navigation-category").classList.add("active");
        }
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");
        if (el.closest(".aside-nav details, .coding-navigation-category")) {
          el.closest(".aside-nav details, .coding-navigation-category").setAttribute("open", "open");
          el.closest(".aside-nav details, .coding-navigation-category").classList.add("active");
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
    document.querySelector("#menu-more").removeAttribute("open");
    document.querySelector("#menu-more .active").classList.remove("active");
  }
}
