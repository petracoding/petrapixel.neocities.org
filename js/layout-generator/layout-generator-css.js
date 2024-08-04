export function getCSS(variables) {
  return `/* CHANGE COLORS HERE: */
:root {
  --background-color: ${variables.pageBackgroundColor};
  --content-background-color: ${variables.mainBackgroundColor};
  --text-color: ${variables.textColor};
  --link-color: ${variables.linkColor};
  --link-color-hover: ${variables.linkHoverColor};
  --selection-color: rgba(0, 0, 0, 0.2);
  --nav-link-color: var(--link-color);
  --nav-link-color-hover: var(--link-color-hover);
  --nav-link-background-hover: rgba(0, 0, 0, 0.2);
}
/* BASICS */
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-color);
  min-height: 100vh;
  font-size: 15px;
  margin: 0;
  padding: 0;
  color: var(--text-color);
  font-family: sans-serif;
  line-height: 1;
}
::selection {
  background: var(--selection-color);
}
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
/* LAYOUT */
#layout {
  display: grid;
  max-width: 800px;
  border: 1px solid;
  grid-template: "header header" auto "aside main" auto "footer footer" auto / 200px auto;
}
#layout.sidebar-right {
  grid-template: "header header" auto "main aside" auto "footer footer" auto / auto 200px;
}
header {
  grid-area: header;
  font-size: 1.2em;
  border-bottom: 1px solid;
  padding: 15px;
  background: var(--content-background-color);
}
aside {
  grid-area: aside;
  border-right: 1px solid;
  background: var(--content-background-color);
}
.sidebar-right aside {
  border-right: none;
  border-left: 1px solid;
}
nav {
  padding: 0.5em;
}
nav a,
nav a:visited {
  color: var(--nav-link-color);
}
nav a:hover,
nav a:focus {
  color: var(--nav-link-color-hover);
}
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  background: var(--content-background-color);
  user-select: none;
}
nav ul li {
  margin-bottom: 0;
}
nav ul li > a {
  display: block;
}
nav ul li > a,
nav ul li summary {
  padding: 0.25em 0.5em;
}
nav ul li > a.active,
nav ul li summary.active {
  font-weight: bold;
}
nav ul li > a:hover,
nav ul li summary:hover {
  background: var(--nav-link-background-hover);
}
nav ul summary {
  cursor: pointer;
}
nav ul ul li > a {
  padding-left: 1em;
}
main {
  grid-area: main;
  max-height: 70vh;
  overflow-y: auto;
  padding: 1em 1.5em;
  background: var(--content-background-color);
}
footer {
  grid-area: footer;
  border-top: 1px solid;
  font-size: 0.75em;
  padding: 15px;
  background: var(--content-background-color);
}
footer a,
footer a:visited {
  color: var(--nav-link-color);
}
footer a:hover,
footer a:focus {
  color: var(--nav-link-color-hover);
}
#skip-to-content-link {
  position: fixed;
  top: 0;
  left: 0;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  line-height: 1;
  font-size: 1.25rem;
  background-color: var(--background-color);
  color: var(--text-color);
  transform: translateY(-3rem);
  transition: transform 0.1s ease-in;
  z-index: 99999999999;
}
#skip-to-content-link:focus,
#skip-to-content-link:focus-within {
  transform: translateY(0);
}
/* CONTENT */
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
main p {
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
  background: yellow;
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
@media (min-width: 800px) {
  main center {
    padding: 0 2em;
  }
}
main hr {
  border: 0;
  border-top: 2px dotted green;
  margin: 1.5em 0;
}
main h1,
main h2,
main h3,
main h4,
main h5,
main h6 {
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
  font-size: 24px;
  letter-spacing: 1px;
}
@media (min-width: 800px) {
  main h1 {
    font-size: 32px;
  }
}
main h2 {
  font-size: 18px;
}
@media (min-width: 800px) {
  main h2 {
    font-size: 24px;
  }
}
main h3 {
  font-size: 16px;
}
@media (min-width: 800px) {
  main h3 {
    font-size: 22px;
  }
}
/* -------------------------------------------------------- */
/* MOBILE */
@media (max-width: 800px) {
  body {
    font-size: 14px;
  }
  #layout {
    grid-template: "header" auto "aside" auto "main" auto "footer" auto / 1fr;
  }
  aside {
    border-bottom: 1px solid;
    padding: 9px;
    font-size: 0.9em;
  }
  nav {
    padding: 0;
  }
  nav > ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-top: 0.5em;
  }
  nav > ul li > a,
  nav > ul li summary {
    padding: 0.5em;
  }
  main {
    max-height: none;
    padding: 15px;
  }
  #skip-to-content-link {
    font-size: 1rem;
  }
}
`;
}
