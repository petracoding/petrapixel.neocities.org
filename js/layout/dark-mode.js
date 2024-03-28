const scriptEl = document.querySelector('head script[src*="main.js"]');
const nesting = scriptEl ? (scriptEl.getAttribute("src").startsWith("main.js") ? "./" : "../") : "../";

export function loadDarkModeCookie() {
  const themeItem = localStorage.getItem("theme");
  if (themeItem) document.body.classList.add(themeItem);
}

export function addThemeSwitcher() {
  loadDarkModeCookie();
  document.body.insertAdjacentHTML("afterbegin", themeSwitcherHTML());
  initDarkMode();
}

export function themeSwitcherHTML() {
  return `<div id="theme-toggler" aria-hidden="true">
    <button type="button">
      <img src="${nesting}img/layout/moon.gif" width="17" style="image-rendering:pixelated;" />
      <span>toggle theme</span>
    </button>
  </div>`;
}

export function initDarkMode() {
  const btn = document.querySelector("#theme-toggler button");
  if (btn) {
    // Init Button
    if (getCurrentTheme() === "dark-mode") {
      btn.querySelector("span").innerHTML = "switch to light theme";
    } else {
      btn.querySelector("span").innerHTML = "switch to dark theme";
    }

    // Button Click
    btn.addEventListener("click", () => {
      // Save to Storage and change class
      if (getCurrentTheme() === "dark-mode") {
        localStorage.setItem("theme", "light-mode");
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        btn.querySelector("span").innerHTML = "switch to dark theme";
      } else {
        localStorage.setItem("theme", "dark-mode");
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        btn.querySelector("span").innerHTML = "switch to light theme";
      }
    });
  }
}

function getCurrentTheme() {
  const themeFromStorage = localStorage.getItem("theme");
  if (themeFromStorage) return themeFromStorage;

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark-mode";
  } else {
    return "light-mode";
  }
}
