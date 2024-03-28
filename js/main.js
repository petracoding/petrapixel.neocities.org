import "../css/main.scss";
import { buildLayout } from "./layout/layout";
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
  const mainEl = document.querySelector("main:not(.no-layout)");
  if (mainEl) buildLayout();

  // Specific Pages:
  initClipboard();
  initPlaylists();
  initWritingChart();
  initBlog();
});
