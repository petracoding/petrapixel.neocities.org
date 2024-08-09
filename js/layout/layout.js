import { getBeforeMain, getAfterMain } from "./html";
import { loadTheme, initThemeSwitcher } from "./dark-mode";
import { initSidebar } from "./sidebar";

export function buildLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;

  loadTheme(); // we're doing this as soon as possible

  mainEl.insertAdjacentHTML("beforebegin", getBeforeMain());
  mainEl.insertAdjacentHTML("afterend", getAfterMain());

  initThemeSwitcher();
  prepareScrollToTop();
  buildTableOfContents();
  initSidebar();

  document.body.classList.add("-layout-loaded");
}

// -------------------

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
