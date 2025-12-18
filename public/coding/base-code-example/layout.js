// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (document.body.classList.contains("no-layout")) return;

  // Inserting your header and footer:
  document.body.insertAdjacentHTML("afterbegin", headerEl);
  document.body.insertAdjacentHTML("beforeend", footerEl);

  // To insert something inside another element:
  const wrapperElement = document.querySelector(".my-wrapper"); // <- your selector here
  if (wrapperElement) wrapperElement.insertAdjacentHTML("afterbegin", `<b>Element at beginning of wrapper element.</b>`);
  if (wrapperElement) wrapperElement.insertAdjacentHTML("beforeend", `<b>Element at the end of wrapper element.</b>`);

  // Other initializations:
  initActiveLinks();

  // your javascript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
// You don't need to use the <header> element, but I recommend it.
const headerEl = `
	<header>
		Header. Example of how to use the 'active' class to style active links (here: bold):
		<nav>
			<a href="/coding/layout-base-code">homepage</a>
			<a href="/coding/base-code-example/">this page</a>
			<a href="/coding/layout-base-code">other page</a>
			<a href="/coding/layout-base-code">other page</a>
		</nav>
	</header>
`;

// Insert your footer HTML inside these ``. You can use HTML as usual.
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `
	<footer>
		Footer. Example of how to add an image: 
		<img src="${nesting}/assets/img/layout/divider1.gif" alt="" aria-hidden="true"/>
	</footer>
`;
