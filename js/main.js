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
  const container = document.querySelector("#toc");
  if (!container) return;
  if (container.getAttribute("data-leave-alone")) return;
  const twoLevels = container.getAttribute("data-two-levels");
  const allHeadings = document.querySelectorAll(twoLevels ? "main h2, main h3" : "main h2");
  if (allHeadings.length < 2) return;
  let output = "<b>Table of Contents:</b><ol>";
  let isFirst = true;
  [...allHeadings].forEach((headingEl) => {
    const title = headingEl.innerHTML.replaceAll("(Optional)", "");
    const link =
      headingEl.getAttribute("id") ||
      encodeURI(
        title
          .replaceAll(" ", "-")
          .replaceAll(":", "")
          .replaceAll("#", "")
          .replaceAll(".", "")
          .replaceAll("(", "")
          .replaceAll(")", "")
          .replaceAll("&amp;", "")
          .replaceAll(/<[^>]*>?/gm, "")
          .replace(/-$/, "")
          .replaceAll("--", "-")
      ).toLowerCase();
    headingEl.setAttribute("id", link);
    const isH2 = headingEl.tagName == "H2";
    if (twoLevels && isH2) {
      if (!isFirst) output += `</ol></li>`;
      output += `
	  <li><a href="#${link}">${title}</a>
	  <ol>`;
    } else {
      output += `
	  <li><a href="#${link}">${title}</a></li>`;
    }
    isFirst = false;
  });
  container.innerHTML = output + "</ol>";
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
    } else if (oldUrl.contains(".xml")) {
    } else if (oldUrl.charAt(0) == "/") {
      const newUrl = publicStr + oldUrl + ".html";
      linkEl.setAttribute("href", newUrl);
    }
  });
}
