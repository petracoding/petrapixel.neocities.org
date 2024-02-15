import "../css/main.scss";
import { buildLayout } from "./layout";

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("-js");

  buildLayout();

  // Tab Title
  const tabTitle = document.title;
  if (tabTitle !== "petrapixel") {
    document.title = tabTitle + " | petrapixel";
  }

  // External Links
  const allLinks = document.querySelectorAll("main a[href]:not([target])");
  [...allLinks].forEach((linkEl) => {
    const href = linkEl.getAttribute("href");
    const isLocal = href.includes("localhost:") || href.includes("petrapixel") || Array.from(href)[0] == "/";
    if (!isLocal) linkEl.setAttribute("target", "_blank");
  });

  // Inline Images
  const allInlineImages = document.querySelectorAll('img[src*="inline/"]:not([class])');
  [...allInlineImages].forEach((inlineImg) => {
    inlineImg.setAttribute("aria-hidden", "true");
  });
});

// Pages
import "./pages/clipboard";
import "./pages/playlists";
import "./pages/writing";
