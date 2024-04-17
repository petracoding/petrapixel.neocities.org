import { loadTheme, initThemeSwitcher } from "./dark-mode";

export function buildAboutMeLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;

  loadTheme(); // we're doing this as soon as possible

  mainEl.insertAdjacentHTML("beforebegin", getBeforeMain());
  mainEl.insertAdjacentHTML("afterend", getAfterMain());

  initThemeSwitcher();
  initExternalLinks();

  document.body.classList.add("-layout-loaded");
}

// -------------------

function getBeforeMain() {
  return `<header>header</header>`;
}

function getAfterMain() {
  return `<footer>footer</footer>`;
}

function initExternalLinks() {
  const allLinks = document.querySelectorAll("main a[href]:not([target])");
  [...allLinks].forEach((linkEl) => {
    const href = linkEl.getAttribute("href");
    const isLocal = href.includes("localhost:") || href.includes("petrapixel") || Array.from(href)[0] == "/" || Array.from(href)[0] == "#";
    if (!isLocal) linkEl.setAttribute("target", "_blank");
  });
}
