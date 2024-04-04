import "../css/main.scss";
import { buildLayout } from "./layout/layout";
import { addThemeSwitcher, loadDarkModeCookie } from "./layout/dark-mode";
import { initClipboard } from "./pages/clipboard";
import { initPlaylists } from "./pages/playlists";
import { initWritingChart } from "./pages/writing";
import { initBlog } from "./pages/blog";

// return;

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("-js");
  console.log("%c Hiii! :) Feel free to inspect my code, but please do not copy large sections without asking!", "font-size: 14pt;color:white;background:#86677b");
  console.log("%c My code is available on GitHub: https://github.com/petracoding/petrapixel.neocities.org Have fun perusing, but promise not to judge me for weird code!", "font-size: 12pt");

  // Layout:
  if (document.querySelector("body.load-layout")) {
    buildLayout();
  }

  // Dark Mode:
  if (document.querySelector("body.load-theme-switcher")) {
    addThemeSwitcher();
  } else {
    loadDarkModeCookie();
  }

  // Specific Pages:
  initClipboard();
  initPlaylists();
  initWritingChart();
  initBlog();
});
