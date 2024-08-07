// START

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("-js");
  console.log("%c website template by petrapixel (https://petrapixel.neocities.org/)", "font-size: 14pt;color:white;background:#86677b");
  loadLayout();

  // DELETE FROM HERE --------------
  if (isPreview()) {
    document.querySelector("nav a").classList.add("active");
    const previewOptions = getPreviewOptions();
    console.log(previewOptions);
    return;
  }
  // TO HERE -----------------------

  giveClassToActiveLinks();
});

function loadLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  //   mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  //   mainEl.insertAdjacentHTML("afterend", footerHTML());
}

function headerHTML() {
  const nesting = getNesting();
  // "nesting" outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
<header>
	<div>Website Title</div>
</header>
<aside>
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3</a></li>
    <li>
      <details>
        <summary><a href="#">Submenu 1</a></summary>
        <ul>
          <li><a href="#">Page A</a></li>
          <li><a href="#">Page B</a></li>
          <li><a href="#">Page C</a></li>
          <li><a href="#">Page D</a></li>
          <li><a href="#">Page E</a></li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>Submenu 2</summary>
        <ul>
          <li><a href="#">Page A</a></li>
          <li><a href="#">Page B</a></li>
          <li><a href="#">Page C</a></li>
          <li><a href="#">Page D</a></li>
          <li><a href="#">Page E</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>
<p>Blah blah.</p>
</aside>
	  `;
}

function footerHTML() {
  const nesting = getNesting();
  // "nesting" outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `<footer>Footer Text. <a href="#">Link.</a> Template generated with <a href="https://petrapixel.neocities.org/">Petrapixel</a>'s <a href="https://petrapixel.neocities.org/coding/layout-generator.html">layout generator</a>.</footer>`;
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  if (numberOfSlashes == 2) return "../";
  if (numberOfSlashes == 3) return "../../";
  if (numberOfSlashes == 4) return "../../../";
  if (numberOfSlashes == 5) return "../../../../";
  // add more lines if needed.
}

function giveClassToActiveLinks() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");

    if (href == "/" || href == "/index.html") {
      if (window.location.href == "http://localhost:52330/" || pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");

        if (el.closest("summary")) {
          el.closest("summary").classList.add("active");
        }
      }
    }
  });
}
