const scriptEl = document.querySelector('head script[src*="main.js"]');
const nesting = scriptEl ? (scriptEl.getAttribute("src").startsWith("assets/js/main.js") ? "./" : "../") : "../";

function getCurrentTheme() {
  // if there's a cookie, use cookie
  const themeFromStorage = localStorage.getItem("theme");
  if (themeFromStorage) return themeFromStorage;

  // otherwise, use browser preference
  /*
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark-mode";
   } else {
      return "light-mode";
 }
 */

  // ... actually fuck that, default is light mode
  return "light-mode";
}

export function loadTheme(theme) {
  if (!theme) theme = getCurrentTheme();

  localStorage.setItem("theme", theme);
  document.body.classList.remove("light-mode");
  document.body.classList.remove("dark-mode");
  document.body.classList.add(theme);

  const themeTogglerBtn = document.querySelector("#theme-toggler button");
  const favIcon = document.querySelector("link[rel~='icon']");

  if (theme === "dark-mode") {
    if (themeTogglerBtn) themeTogglerBtn.querySelector("span").innerHTML = "switch to light theme";
    if (favIcon.href.includes("favicon.ico")) favIcon.href = favIcon.href.replace("favicon", "favicon-moon");
  } else {
    if (themeTogglerBtn) themeTogglerBtn.querySelector("span").innerHTML = "switch to dark theme";
    if (favIcon.href.includes("favicon-moon.ico")) favIcon.href = favIcon.href.replace("favicon-moon", "favicon");
  }
}

export function initThemeSwitcher() {
  const btn = document.querySelector("#theme-toggler button");
  if (btn) {
    loadTheme();

    btn.addEventListener("click", () => {
      if (getCurrentTheme() === "dark-mode") {
        loadTheme("light-mode");
      } else {
        loadTheme("dark-mode");
      }
    });
  }
}

export function themeSwitcherHTML() {
  return `<div id="theme-toggler" aria-hidden="true">
    <button type="button">
      <img src="${nesting}img/layout/moon.gif" width="20" style="height:20px;image-rendering:pixelated;" alt="" />
      <span>toggle theme</span>
    </button>
  </div>`;
}

// for non-standard-layout pages
export function addThemeSwitcherToPage() {
  document.body.insertAdjacentHTML("afterbegin", themeSwitcherHTML());
  initThemeSwitcher();
}
