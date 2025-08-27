import "../css/main.scss";
import "remixicon/fonts/remixicon.css";
import { loadTheme, initThemeSwitcher } from "./layout/dark-mode";
import { initScrollToTop, initTableOfContents, initTooltips, initProgressBar, initActiveLinks, initToggleExplanationComments } from "./layout/layout";
import { initSidebar } from "./layout/sidebar";
import { initClipboard } from "./pages/clipboard";
import { initPlaylists } from "./pages/playlists";
import { initRandomGenerator } from "./pages/random-generator";
import { initChecklist } from "./pages/checklist";
import { initGoogleSheets } from "./pages/google-sheets";
import { initWebsiteAgeCounter } from "./pages/about-the-site";
// import { initWritingChart } from "./pages/writing";
// import { initComprehensionQuestions } from "./pages/comprehension-questions";

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("-js");

  console.log("%c Hi! :) Feel free to inspect my code, but please do not copy large sections without asking!", "font-size: 14pt;color:white;background:#86677b");
  console.log("%c My code is available on GitHub: https://github.com/petracoding/petrapixel.neocities.org", "font-size: 12pt");

  /* LAYOUT: */
  loadTheme();
  initSidebar();
  initActiveLinks();
  initThemeSwitcher();
  initScrollToTop();
  initTooltips();
  initProgressBar();

  /* CONTENT: */
  initTableOfContents();
  initToggleExplanationComments();

  /* PAGES: */
  initClipboard();
  initPlaylists();
  initRandomGenerator();
  initChecklist();
  initGoogleSheets();
  initWebsiteAgeCounter();
  //initWritingChart();
  //initComprehensionQuestions();

  /* SPECIAL: */
  //initAprilFools();
  //initSnow();
});
