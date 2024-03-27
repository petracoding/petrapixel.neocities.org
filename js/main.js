import "../css/main.scss";
import { buildLayout } from "./layout";
import { initClipboard } from "./pages/clipboard";
import { initPlaylists } from "./pages/playlists";
import { initWritingChart } from "./pages/writing";
import { initBlog } from "./pages/blog";

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("-js");
  console.log("%c Hiii! :)", "font-size: 20pt");
  console.log("%c Feel free to inspect my code, but please do not copy large sections without asking!", "font-size: 14pt");

  buildLayout();
  initClipboard();
  initPlaylists();
  initWritingChart();
  initBlog();

  // External Links
  const allLinks = document.querySelectorAll("main a[href]:not([target])");
  [...allLinks].forEach((linkEl) => {
    const href = linkEl.getAttribute("href");
    const isLocal = href.includes("localhost:") || href.includes("petrapixel") || Array.from(href)[0] == "/" || Array.from(href)[0] == "#";
    if (!isLocal) linkEl.setAttribute("target", "_blank");
  });

  // Inline Images
  const allInlineImages = document.querySelectorAll('img[src*="inline/"]:not([class])');
  [...allInlineImages].forEach((inlineImg) => {
    inlineImg.setAttribute("aria-hidden", "true");
  });
});
