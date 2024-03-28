import "../css/main.scss";
import { buildLayout } from "./layout/layout";
import { addThemeSwitcher } from "./layout/dark-mode";
import { initClipboard } from "./pages/clipboard";
import { initPlaylists } from "./pages/playlists";
import { initWritingChart } from "./pages/writing";
import { initBlog } from "./pages/blog";

document.addEventListener("DOMContentLoaded", function () {
  // All pages:
  document.body.classList.add("-js");
  console.log("%c Hiii! :)", "font-size: 20pt");
  console.log("%c Feel free to inspect my code, but please do not copy large sections without asking!", "font-size: 14pt");

  // Most pages:
  if (document.querySelector("body.load-layout")) {
    buildLayout();
  } else if (document.querySelector("body.load-theme-switcher")) {
    addThemeSwitcher();
  }

  // Specific Pages:
  initClipboard();
  initPlaylists();
  initWritingChart();
  initBlog();
});
