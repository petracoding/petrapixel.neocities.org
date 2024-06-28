import "../css/main.scss";
import { buildLayout } from "./layout/layout";
import { buildAboutMeLayout } from "./layout/about-me-layout";
import { addThemeSwitcherToPage, loadTheme } from "./layout/dark-mode";
import { initClipboard } from "./pages/clipboard";
import { initPlaylists } from "./pages/playlists";
import { initWritingChart } from "./pages/writing";
import { initBlog } from "./pages/blog";
import { initRandomGenerator } from "./pages/random-generator";
import { initAboutMePage } from "./pages/about-me";
import { initLayoutGenerator } from "./layout-generator.js";

document.addEventListener("DOMContentLoaded", function () {
  loadTheme();
  document.body.classList.add("-js");
  if (!document.querySelector(".layout-generator-settings")) {
    console.log("%c Hiii! :) Feel free to inspect my code, but please do not copy large sections without asking!", "font-size: 14pt;color:white;background:#86677b");
    console.log("%c My code is available on GitHub: https://github.com/petracoding/petrapixel.neocities.org Have fun perusing, but promise not to judge me for weird code!", "font-size: 12pt");
  }

  // Layout:
  if (document.querySelector("body.load-layout")) {
    buildLayout();
  } else if (document.querySelector("body.load-about-me-layout")) {
    buildAboutMeLayout();
  } else if (document.querySelector("body.load-theme-switcher")) {
    addThemeSwitcherToPage();
  } else {
    loadTheme();
  }

  // Specific Pages:
  initClipboard();
  initPlaylists();
  initWritingChart();
  initBlog();
  initRandomGenerator();
  initAboutMePage();
  initLayoutGenerator();
});
