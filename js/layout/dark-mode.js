const scriptEl = document.querySelector('head script[src*="main.js"]');

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

  // Font:

  if (getCurrentFontTheme() === "readable") {
    document.body.classList.add("readable-font");
  }

  const btn2 = document.querySelector("#font-toggler button");
  if (btn2) {
    btn2.addEventListener("click", () => {
      if (getCurrentFontTheme() === "readable") {
        document.body.classList.remove("readable-font");
        localStorage.setItem("fontTheme", "default");
      } else {
        document.body.classList.add("readable-font");
        localStorage.setItem("fontTheme", "readable");
      }
    });
  }
}

function getCurrentFontTheme() {
  // if there's a cookie, use cookie
  const fontFromStorage = localStorage.getItem("fontTheme");
  if (fontFromStorage) return fontFromStorage;
  return "default";
}
