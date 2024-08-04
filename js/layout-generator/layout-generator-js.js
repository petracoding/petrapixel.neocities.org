export function getJS(layoutBefore, layoutAfter) {
  return `document.addEventListener("DOMContentLoaded", function () {
  loadLayout();
  giveClassToActiveLinks();
});

function loadLayout() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToLinks();
}

function headerHTML() {
  const nesting = getNesting();
  // "nesting" outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // example: <img src="\$\{nesting}img/logo.png"> might output <img src="../img/logo.png">

  return ${"`" + layoutBefore + "`"};
}

function footerHTML() {
  const nesting = getNesting();
  // "nesting" outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // example: <img src="\$\{nesting}img/logo.png"> might output <img src="../img/logo.png">

  return ${"`" + layoutAfter + "`"};
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

function giveActiveClassToLinks() {
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
}`;
}
