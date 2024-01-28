document.addEventListener("DOMContentLoaded", function (event) {
  if (document.querySelector(".notion-widgets")) {
    const isLocal = false;
    const urlBase = isLocal ? "http://localhost:52330/notion/" : "https://petracoding.github.io/notion/";

    doText();
    const textOptionElements = document.querySelector("#text").querySelectorAll("input, select");
    [...textOptionElements].forEach((e) => e.addEventListener("input", doText));

    function doText() {
      const container = document.querySelector("#text");
      let url = urlBase + "text.html";
      const mode = container.querySelector('[name="text-mode"]:checked').value;
      url += "?mode=" + mode;
      const centered = container.querySelector("#text-centered").checked;
      url += "&centered=" + (centered ? "1" : "0");
      const size = container.querySelector("#text-size").value;
      url += "&size=" + size;
      const color = container.querySelector("#text-color").value.replace("#", "");
      url += "&color=" + color;
      if (container.querySelector("#text-bg").checked) {
        const background = container.querySelector("#text-background").value.replace("#", "");
        url += "&background=" + background;
        const corners = container.querySelector("#text-corners").value;
        url += "&corners=" + corners;
      }
      const font = container.querySelector("#text-font").value;
      url += "&font=" + font;
      const text = container.querySelector("#text-text").value;
      url += "&text=" + text;
      container.querySelector(".output").value = url;
      container.querySelector("iframe").setAttribute("src", url);
    }
  }

  // WIDGETS THEMSELVES:

  // TEXT
  if (document.querySelector("#notion-widget-text")) {
    const mode = findGetParameter("mode");
    const text = findGetParameter("text");
    const size = findGetParameter("size");
    const color = findGetParameter("color");
    const corners = findGetParameter("corners");
    const font = findGetParameter("font");
    const background = findGetParameter("background");

    if (mode == "dark") document.body.classList.add("dark-mode");

    const textEl = this.querySelector("#text");

    if (findGetParameter("centered") == "1") {
      textEl.classList.add("centered");
    }
    if (size) textEl.style.fontSize = size + "px";
    if (font) textEl.style.fontFamily = font;
    if (color) textEl.style.color = "#" + color;
    if (corners) textEl.style.borderRadius = corners + "px";
    if (background) textEl.style.backgroundColor = "#" + background;

    textEl.innerHTML = text;
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
