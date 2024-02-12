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
});

// Pages
import "./pages/recs";
import "./pages/clipboard";
import "./pages/playlists";
import "./pages/writing";
