const isLocal = window.location.hostname == "localhost";
const urlBase = isLocal ? "http://localhost:52330/notion/" : "https://petracoding.github.io/notion/";

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".notion-widgets")) {
    doText();
    const textOptionElements = document.querySelector("#text").querySelectorAll("input, select");
    [...textOptionElements].forEach((e) => e.addEventListener("input", doText));
  }

  function doText() {
    const container = document.querySelector("#text");
    let url = urlBase + "text.html";
    const mode = container.querySelector('[name="text-mode"]:checked').value;
    url += "?mode=" + mode;
    const centered = container.querySelector("#text-centered").checked;
    url += "&centered=" + (centered ? "1" : "0");
    const size = container.querySelector("#text-size").value;
    url += "&size=" + size;
    const fullWidth = container.querySelector("#text-fullWidth").checked;
    url += "&fullWidth=" + (fullWidth ? "1" : "0");
    const bold = container.querySelector("#text-bold").checked;
    url += "&bold=" + (bold ? "1" : "0");
    const italic = container.querySelector("#text-italic").checked;
    url += "&italic=" + (italic ? "1" : "0");
    const underline = container.querySelector("#text-underline").checked;
    url += "&underline=" + (underline ? "1" : "0");
    const color = container.querySelector("#text-color").value.replace("#", "");
    url += "&color=" + color;
    if (container.querySelector("#text-bg").checked) {
      container.querySelector(".only-show-if-bg-color").style.visibility = "visible";
      const background = container.querySelector("#text-background").value.replace("#", "");
      url += "&background=" + background;
      const corners = container.querySelector("#text-corners").value;
      url += "&corners=" + corners;
    } else {
      container.querySelector(".only-show-if-bg-color").style.visibility = "hidden";
    }
    const font = container.querySelector("#text-font").value;
    url += "&font=" + font;
    const text = container.querySelector("#text-text").value;
    url += "&text=" + encodeURIComponent(text).replaceAll("%20", "§");
    container.querySelector(".output").value = url;
    container.querySelector("iframe").setAttribute("src", url);
  }

  // WIDGETS THEMSELVES:

  // TEXT
  if (document.querySelector("#notion-widget-text")) {
    const background = findGetParameter("background");
    const centered = findGetParameter("centered");
    const color = findGetParameter("color");
    const corners = findGetParameter("corners");
    const font = findGetParameter("font");
    const fullWidth = findGetParameter("fullWidth");
    const mode = findGetParameter("mode");
    const size = findGetParameter("size");
    const text = findGetParameter("text");
    const bold = findGetParameter("bold");
    const italic = findGetParameter("italic");
    const underline = findGetParameter("underline");

    if (mode == "dark") document.body.classList.add("dark-mode");

    const textEl = this.querySelector("#text");

    if (centered == "1") {
      textEl.closest("div:not(#text)").classList.add("centered");
    }
    if (size) textEl.style.fontSize = size + "px";
    if (font) textEl.style.fontFamily = font;
    if (color) textEl.style.color = "#" + color;
    if (corners) textEl.style.borderRadius = corners + "px";
    if (fullWidth == "1") textEl.style.width = "100%";
    if (bold == "1") textEl.style.fontWeight = "bold";
    if (italic == "1") textEl.style.fontStyle = "italic";
    if (underline == "1") textEl.style.textDecoration = "underline";
    if (background) {
      textEl.style.backgroundColor = "#" + background;
      textEl.style.padding = "0 0.5em";
    }

    textEl.innerHTML = decodeURIComponent(text.replaceAll("§", "%20"));
  }
});

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}
