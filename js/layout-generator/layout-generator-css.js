export function getCSS(variables) {
  const css = getCSSCode(variables);
  return css;
  //   return autoprefixer.compile(css).css;
}

function getCSSCode(variables) {
  let useCustomFont = (variables.font == "custom" || variables.headingFont == "custom") && variables.customFontName && variables.customFontUrl;

  return `${fontImport(useCustomFont, variables.customFontUrl, variables.font, variables.headingFont)}
  
/* -------------------------------------------------------- */
/* VARIABLES */
/* -------------------------------------------------------- */

/* Variables are used like this: var(--text-color) */
:root {
  /* Background Colors: */
  --background-color: ${variables.pageBackgroundColor};
  --content-background-color: ${variables.transparentBackground ? "transparent" : variables.mainBackgroundColor};
  --sidebar-background-color: ${variables.transparentBackground ? "transparent" : variables.sidebarBackgroundColor};

  /* Text Colors: */
  --text-color: ${variables.textColor};
  --sidebar-text-color: ${variables.sidebarTextColor};
  --link-color: ${variables.linkColor};
  --link-color-hover: ${variables.linkHoverColor};

  /* Text: */
  --font: ${variables.font == "custom" ? "'" + variables.customFontName + "', sans-serif" : variables.font};
  --heading-font: ${variables.headingFont == "custom" ? "'" + variables.customFontName + "', sans-serif" : variables.headingFont};
  --font-size: ${variables.fontSize + "px"};

  /* Other Settings: */
  --margin: ${variables.margins + "px"};
  --padding: ${variables.padding + "px"};
  --border: ${variables.borderWidth == "0" ? "none" : `${variables.borderWidth + "px"} solid ${variables.borderColor}`};
  --round-borders: ${variables.borderRadius + "px"};
  --sidebar-width: ${variables.sidebarWidth + "px"};
}

/* -------------------------------------------------------- */
/* BASICS */
/* -------------------------------------------------------- */

* {
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  font-size: var(--font-size);
  margin: 0;
  padding: var(--margin);
  color: var(--text-color);
  font-family: var(--font);
  line-height: 1.2;
  background: var(--background-color);
  background-image: url("${variables.backgroundImageUrl}");
  ${variables.coverBackgroundImage ? "background-size: cover;" : ""}
}

::selection {
  /* (Text highlighted by the user) */
  background: rgba(0, 0, 0, 0.2);
}

mark {
  /* Text highlighted by using the <mark> element */
  text-shadow: 1px 1px 4px var(--link-color);
  background-color: inherit;
  color: var(--text-color);
}

/* Links: */
a {
  text-decoration: underline;
}

a,
a:visited {
  color: var(--link-color);
}

a:hover,
a:focus {
  color: var(--link-color-hover);
  text-decoration: none;
}

/* -------------------------------------------------------- */
/* LAYOUT */
/* -------------------------------------------------------- */

.layout {
  ${variables.width == "small" ? "width: 1000px;" : variables.width == "wide" ? "width: 1200px;" : "width: 100%;"}
  display: grid;
  grid-gap: var(--margin);
  grid-template: ${
    variables.sidebars == "left"
      ? '"header header" auto "leftSidebar main" auto "footer footer" auto / var(--sidebar-width) auto'
      : variables.sidebars == "right"
      ? '"header header" auto "main rightSidebar" auto "footer footer" auto / auto var(--sidebar-width)'
      : variables.sidebars == "both"
      ? '"header header header" auto "leftSidebar main rightSidebar" auto "footer footer footer" auto / var(--sidebar-width) auto var(--sidebar-width)'
      : '"header" auto "main" auto "footer" auto / auto'
  };
  /* Confused by the grid? Check out my tutorial: https://petrapixel.neocities.org/coding/positioning-tutorial#grid */
}

main {
  grid-area: main;
  overflow-y: auto;
  padding: var(--padding);
  background: var(--content-background-color);
  border: var(--border);
  border-radius: var(--round-borders);
}

/* -------------------------------------------------------- */
/* HEADER */
/* -------------------------------------------------------- */

header {
  grid-area: header;
  font-size: 1.2em;
  border: var(--border);
  border-radius: var(--round-borders);
  background: var(--content-background-color);
}

.header-content {
  padding: var(--padding);
}

.header-title {
  font-family: var(--heading-font);
  font-size: 1.5em;
  font-weight: bold;
}

.header-image img {
  width: 100%;
  height: auto;
}

/* -------------------------------------------------------- */
/* SIDEBARS */
/* -------------------------------------------------------- */

aside {
  grid-area: aside;
  border: var(--border);
  border-radius: var(--round-borders);
  overflow: hidden;
  background: var(--sidebar-background-color);
  padding: var(--padding);
  color: var(--sidebar-text-color);
}

.left-sidebar {
  grid-area: leftSidebar;
}

.right-sidebar {
  grid-area: rightSidebar;
}

.sidebar-title {
  font-weight: bold;
  font-size: 1.2em;
  font-family: var(--heading-font);
}

.sidebar-section:not(:last-child) {
  margin-bottom: 3em;
}

.sidebar-section ul,
.sidebar-section ol {
  padding-left: 1.5em;
}

.sidebar-section > *:not(p):not(ul):not(ol):not(blockquote) {
  margin-top: 10px;
}

/* Sidebar Blockquote: */

.sidebar-section blockquote {
  background: rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 1em 0;
  border-radius: 10px;
  overflow: hidden;
}

.sidebar-section blockquote > *:first-child {
  margin-top: 0;
}

.sidebar-section blockquote > *:last-child {
  margin-bottom: 0;
}

/* Site Button: */

.site-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.site-button textarea {
  font-family: monospace;
  font-size: 0.7em;
}

${
  variables.footer != "none"
    ? `/* -------------------------------------------------------- */
/* FOOTER */
/* -------------------------------------------------------- */

footer {
  grid-area: footer;
  border: var(--border);
  border-radius: var(--round-borders);
  overflow: hidden;
  font-size: 0.75em;
  padding: 15px;
  background: var(--content-background-color);
  display: flex;
  ${variables.footer == "centered" ? "justify-content: center;" : ""}
}

footer a,
footer a:visited {
  color: var(--link-color);
}

footer a:hover,
footer a:focus {
  color: var(--link-color-hover);
}`
    : ""
}

/* -------------------------------------------------------- */
/* NAVIGATION */
/* -------------------------------------------------------- */

nav {
  margin-bottom: 3em;
}

nav .sidebar-title {
  margin-bottom: 0.5em;
}

nav ul {
  margin: 0 -5px;
  padding: 0;
  list-style: none;
  user-select: none;
}

nav ul li {
  margin-bottom: 0;
}

nav > ul li > a,
nav > ul li > strong {
  display: inline-block;
}

nav > ul li > a,
nav > ul li > details summary,
nav > ul li > strong {
  padding: 5px 10px;
}

nav > ul li > a.active,
nav > ul li > details.active summary {
  font-weight: bold;
}

nav ul summary {
  cursor: pointer;
}

nav ul ul li > a {
  padding-left: 30px;
}

${
  variables.menuPosition == "header"
    ? `/* NAVIGATION IN HEADER */

header nav {
  margin-bottom: 0;
}

header nav ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
}

header nav ul li {
  position: relative;
}

header nav ul li:first-child > a {
  padding-left: 0;
}

header nav ul li:last-child > a {
  padding-right: 0;
}

/* Subnavigation (Drop-Down): */

header nav ul ul {
  background: ${variables.transparentBackground ? "var(--background-color)" : "var(--content-background-color)"};
  display: none;
  position: absolute;
  top: 100%;
  left: 10px;
  padding: 0.5em;
  z-index: 1;
  border: var(--border);
  min-width: 100%;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.2);
}

header nav ul li:hover ul,
header nav ul li:focus-within ul {
  display: block;
}

header nav ul li strong {
  color: var(--link-color);
  text-decoration: underline;
  font-weight: normal;
}

header nav ul ul li a {
  display: block;
  padding-left: 0;
  padding-right: 0;
}`
    : ""
}

/* -------------------------------------------------------- */
/* CONTENT */
/* -------------------------------------------------------- */

main {
  line-height: 1.5;
}

main a,
main a:visited {
  color: var(--link-color);
}

main a:hover,
main a:focus {
  color: var(--link-color-hover);
  text-decoration-style: wavy;
}

main p,
main .image,
main .full-width-image,
main .two-columns {
  margin: 0.75em 0;
}

main ol,
main ul {
  margin: 0.5em 0;
  padding-left: 1.5em;
}

main ol li,
main ul li {
  margin-bottom: 0.2em;
  line-height: 1.3;
}

main ol {
  padding-left: 2em;
}

main blockquote {
  background: rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 1em 0;
  border-radius: 10px;
}

main pre {
  margin: 1em 0 1.5em;
}

main code {
  text-transform: none;
}

main center {
  margin: 1em 0;
  padding: 0 1em;
}

main hr {
  border: 0;
  border-top: var(--border);
  margin: 1.5em 0;
}

/* HEADINGS: */

main h1,
main h2,
main h3,
main h4,
main h5,
main h6 {
  font-family: var(--heading-font);
  margin-bottom: 0;
  line-height: 1.5;
}

main h1:first-child,
main h2:first-child,
main h3:first-child,
main h4:first-child,
main h5:first-child,
main h6:first-child {
  margin-top: 0;
}

main h1 {
  font-size: 1.5em;
}

main h2 {
  font-size: 1.4em;
}

main h3 {
  font-size: 1.3em;
}

main h4 {
  font-size: 1.2em;
}

main h5 {
  font-size: 1.1em;
}

main h6 {
  font-size: 1em;
}

/* COLUMNS: */

.two-columns {
  display: flex;
}

.two-columns > * {
  flex: 1 1 0;
  margin: 0;
}

.two-columns > *:first-child {
  padding-right: 0.75em;
}

.two-columns > *:last-child {
  padding-left: 0.75em;
}

/* -------------------------------------------------------- */
/* CONTENT IMAGES */
/* -------------------------------------------------------- */

.image {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
}

.full-width-image {
  display: block;
  width: 100%;
  height: auto;
}

.images {
  display: flex;
  width: calc(100% + 5px + 5px);
  margin-left: -5px;
  margin-right: -5px;
}

.images img {
  width: 100%;
  height: auto;
  padding: 5px;
  margin: 0;
  overflow: hidden;
}

/* -------------------------------------------------------- */
/* ACCESSIBILITY */
/* -------------------------------------------------------- */

/* please do not remove this. */

#skip-to-content-link {
  position: fixed;
  top: 0;
  left: 0;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  line-height: 1;
  font-size: 1.25rem;
  background-color: var(--content-background-color);
  color: var(--text-color);
  transform: translateY(-3rem);
  transition: transform 0.1s ease-in;
  z-index: 99999999999;
}

#skip-to-content-link:focus,
#skip-to-content-link:focus-within {
  transform: translateY(0);
}

/* -------------------------------------------------------- */
/* MOBILE RESPONSIVE */
/* -------------------------------------------------------- */

/* CSS Code for devices < 800px */
@media (max-width: 800px) {
 ${getMobileCSSCode(variables)}
}
`;
}

function getMobileCSSCode(variables) {
  let showMenuInHeaderOnMobile = false;
  if (variables.menuPosition == "leftSidebar" && variables.mobileLeftSidebar == "hide") {
    showMenuInHeaderOnMobile = true;
  } else if (variables.menuPosition == "rightSidebar" && variables.mobileRightSidebar == "hide") {
    showMenuInHeaderOnMobile = true;
  }

  let mobileLayout = ' "main" auto';
  if (variables.mobileLeftSidebar == "before" && variables.mobileRightSidebar == "after") {
    mobileLayout = ' "leftSidebar" auto "main" auto "rightSidebar" auto';
  } else if (variables.mobileLeftSidebar == "after" && variables.mobileRightSidebar == "after") {
    mobileLayout = ' "main" auto "leftSidebar" auto "rightSidebar" auto';
  } else if (variables.mobileLeftSidebar == "before" && variables.mobileRightSidebar == "before") {
    mobileLayout = ' "leftSidebar" auto "rightSidebar" auto "main" auto';
  } else if (variables.mobileLeftSidebar == "after" && variables.mobileRightSidebar == "before") {
    mobileLayout = ' "rightSidebar" auto "main" auto "leftSidebar" auto';
  } else if (variables.mobileLeftSidebar == "hide" && variables.mobileRightSidebar == "before") {
    mobileLayout = ' "rightSidebar" auto "main" auto';
  } else if (variables.mobileLeftSidebar == "hide" && variables.mobileRightSidebar == "after") {
    mobileLayout = ' "main" auto "rightSidebar" auto';
  } else if (variables.mobileLeftSidebar == "before" && variables.mobileRightSidebar == "hide") {
    mobileLayout = ' "leftSidebar" auto "main" auto';
  } else if (variables.mobileLeftSidebar == "after" && variables.mobileRightSidebar == "hide") {
    mobileLayout = ' "main" auto "leftSidebar" auto';
  }

  return ` body {
    font-size: 14px;
  }

  .layout {
    width: 100%;
    grid-template: "header" auto ${mobileLayout} "footer" auto / 1fr;
    /* Confused by the grid? Check out my tutorial: https://petrapixel.neocities.org/coding/positioning-tutorial#grid */
  }

  ${
    variables.mobileLeftSidebar == "hide"
      ? `.left-sidebar { 
    display: none;
  }`
      : ""
  }
  ${
    variables.mobileRightSidebar == "hide"
      ? `.right-sidebar { 
    display: none;
  }`
      : ""
  }

  aside {
    border-bottom: 1px solid;
    padding: 9px;
    font-size: 0.9em;
  }

  ${
    showMenuInHeaderOnMobile
      ? `header nav {
    display: block !important;
  }`
      : ""
  }
  nav {
    padding: 0;
  }

  nav > ul {
    padding-top: 0.5em;
  }

  nav > ul li > a,
  nav > ul li > details summary,
  nav > ul li > strong {
    padding: 0.5em;
  }

  main {
    max-height: none;
    padding: 15px;
  }

  .images {
    flex-wrap: wrap;
  }

  .images img {
    width: 100%;
  }

  #skip-to-content-link {
    font-size: 1rem;
  }`;
}

function fontImport(useCustomFont, customFontUrl, chosenFont1, chosenFont2) {
  let output = `/* FONT IMPORT */
`;

  if (useCustomFont)
    output += `@import url('${customFontUrl}');
`;

  let font1 = document.querySelector('option[value="' + chosenFont1 + '"]');
  let font2 = document.querySelector('option[value="' + chosenFont2 + '"]');

  let fontUrl1 = font1 ? font1.getAttribute("data-url") : null;
  let fontUrl2 = font2 ? font2.getAttribute("data-url") : null;

  if (!useCustomFont && !fontUrl1 && !fontUrl2) return "";

  if (fontUrl1 == fontUrl2) fontUrl2 = false;

  if (fontUrl1)
    output += `@import url('${fontUrl1}');
`;
  if (fontUrl2)
    output += `@import url('${fontUrl2}');
`;

  return output;
}
