/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "./js/layout.js":
/*!**********************!*\
  !*** ./js/layout.js ***!
  \**********************/
/*! exports provided: buildLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLayout\", function() { return buildLayout; });\nconst beforeMain = `\r\n  \t<header><h1 class=\"header-heading\">petra pixel</h1></header>\r\n      <aside class=\"aside aside--left\">\r\n        <nav class=\"aside-nav\">\r\n          <div class=\"aside-nav__section\">\r\n            <div class=\"aside__heading\">Menu</div>\r\n            <ul>\r\n              <li><a href=\"/\">home</a></li>\r\n              <li><a href=\"/about/about-me.html\">about</a></li>\r\n              <li><a href=\"/about/credits.html\">credits</a></li>\r\n              <li><a href=\"/guestbook.html\">guestbook</a></li>\r\n              <!-- <li><a href=\"/about/archive.html\">archive</a></li> -->\r\n              <li><a href=\"/sitemap.html\">sitemap</a></li>\r\n            </ul>\r\n          </div>\r\n        </nav>\r\n        <div class=\"aside-stuff\">\r\n          <div class=\"aside__heading\">Changelog</div>\r\n          <div id=\"changelog\" class=\"custom-scrollbar\"></div>\r\n        </div>\r\n      </aside>\r\n      <aside class=\"aside aside--right\">\r\n        <details>\r\n          <summary>Open Navigation</summary>\r\n          <nav class=\"aside-nav\">\r\n            <div class=\"aside-nav__section\">\r\n              <div class=\"aside__heading\">Creations</div>\r\n              <ul>\r\n                <li><a href=\"/creations/art.html\">art</a></li>\r\n                <li><a href=\"/creations/coding.html\">coding</a></li>\r\n                <li><a href=\"/creations/playlists.html\">playlists</a></li>\r\n                <li><a href=\"/creations/video-edits.html\">video edits</a></li>\r\n                <li><a href=\"/creations/web-weaves.html\">web weaves</a></li>\r\n                <li><a href=\"/creations/writing.html\">writing</a></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"aside-nav__section\">\r\n              <div class=\"aside__heading\">Recommendations</div>\r\n              <ul>\r\n                <li><a href=\"/recs/books.html\">books</a></li>\r\n                <li><a href=\"/recs/games.html\">games</a></li>\r\n                <li><a href=\"/recs/movies.html\">movies</a></li>\r\n                <li><a href=\"/recs/music.html\">music</a></li>\r\n                <li><a href=\"/recs/tv-shows.html\">tv shows</a></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"aside-nav__section\">\r\n              <div class=\"aside__heading\">Resources</div>\r\n              <ul>\r\n                <li><a href=\"/resources/bookmarks.html\">bookmarks</a></li>\r\n                <li><a href=\"/resources/clipboard.html\">clipboard</a></li>\r\n                <li><a href=\"/resources/neocities.html\">neocities</a></li>\r\n                <li><a href=\"/resources/notion.html\">notion</a></li>\r\n                <li><a href=\"/resources/templates.html\">templates</a></li>\r\n                <li><a href=\"/resources/vocabulary.html\">vocabulary</a></li>\r\n              </ul>\r\n            </div>\r\n          </nav>\r\n        </details>\r\n      </aside>\r\n  \t  `;\r\n\r\nconst afterMain = `\r\n   <footer>\r\n        <div class=\"footer-content\">\r\n          © petrapixel 2024 <i>┊</i> hosted on <a href=\"https://neocities.org/\" target=\"_blank\">neocities</a> <i>┊</i>\r\n          <a href=\"https://neocities.org/site/petrapixel\" target=\"_blank\">follow me on neocities</a\r\n          > <i>┊</i> <a href=\"https://neocities.org/site/petrapixel/stats\" target=\"_blank\">hit count</a> <span class=\"desktop-only\"> <i>┊</i> <a href=\"/about/credits.html\">credits</a> <i>┊</i> <a href=\"/sitemap.html\">sitemap</a></span>\r\n        </div>\r\n      </footer>\r\n  \t  `;\r\n\r\nconst buildLayout = () => {\r\n  const mainEl = document.querySelector(\"main:not(.no-layout)\");\r\n  if (!mainEl) return;\r\n  mainEl.insertAdjacentHTML(\"beforebegin\", beforeMain);\r\n  mainEl.insertAdjacentHTML(\"afterend\", afterMain);\r\n\r\n  // Menu Toggle\r\n  const detailsEl = document.querySelector(\".aside--right details\");\r\n  if (detailsEl) {\r\n    let mql = window.matchMedia(\"(min-width: 576px)\");\r\n    if (mql.matches) {\r\n      detailsEl.open = true;\r\n    }\r\n  }\r\n\r\n  doActiveLinks();\r\n  getChangelog();\r\n};\r\n\r\nfunction getChangelog() {\r\n  fetch(\"https://petrapixel.neocities.org/changelog.json\")\r\n    .then((res) => {\r\n      if (!res.ok) {\r\n        throw new Error(`HTTP error! Status: ${res.status}`);\r\n      }\r\n      return res.json();\r\n    })\r\n    .then((data) => {\r\n      // note: changelog[0] ist the template\r\n      let changelogHtml = \"\";\r\n      let i = 1;\r\n      data.changelog.forEach((c) => {\r\n        if (c.t !== \"TEMPLATE\" && i <= 10) {\r\n          i++;\r\n          if (c.l !== \"\") {\r\n            changelogHtml += `\r\n\t\t  <div class=\"asides-stat\">\r\n            <strong>${c.d}</strong>\r\n            <a href=\"${c.l}\">${c.t}</a>\r\n          </div>\r\n\t\t  `;\r\n          } else {\r\n            changelogHtml += `\r\n\t\t  <div class=\"asides-stat\">\r\n            <strong>${c.d}</strong>\r\n            <span>${c.t}</span>\r\n          </div>\r\n\t\t  `;\r\n          }\r\n        }\r\n      });\r\n      document.querySelector(\"#changelog\").innerHTML = changelogHtml;\r\n    })\r\n    .catch((error) => console.error(\"Unable to fetch data:\", error));\r\n}\r\n\r\nfunction doActiveLinks() {\r\n  const els = document.querySelectorAll(\".aside-nav li a, main a\");\r\n  [...els].forEach((el) => {\r\n    const href = el.getAttribute(\"href\").replace(\".html\", \"\").replace(\"/public\", \"\");\r\n\r\n    if (href == \"/\" || href == \"/index.html\") {\r\n      if (window.location.href == \"http://localhost:52330/\" || window.location.href == \"https://petrapixel.neocities.org/\") {\r\n        el.classList.add(\"active\");\r\n      }\r\n    } else {\r\n      if (window.location.href.includes(href)) {\r\n        el.classList.add(\"active\");\r\n      }\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/layout.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ \"./css/main.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ \"./js/layout.js\");\n/* harmony import */ var _pages_recs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/recs */ \"./js/pages/recs.js\");\n/* harmony import */ var _pages_recs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_recs__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  document.body.classList.add(\"-js\");\r\n\r\n  Object(_layout__WEBPACK_IMPORTED_MODULE_1__[\"buildLayout\"])();\r\n\r\n  // Tab Title\r\n  const tabTitle = document.title;\r\n  if (tabTitle !== \"petrapixel\") {\r\n    document.title = tabTitle + \" | petrapixel\";\r\n  }\r\n});\r\n\r\n// Pages\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/pages/recs.js":
/*!**************************!*\
  !*** ./js/pages/recs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n  if (document.querySelector(\".recs\")) {\r\n    // todo\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./js/pages/recs.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"basiic\\\";\\n  src: url(https://cinni.net/fonts/basiic.ttf); }\\n\\n* {\\n  box-sizing: border-box; }\\n\\nbody {\\n  font-family: \\\"basiic\\\", sans-serif;\\n  letter-spacing: -0.03em;\\n  font-size: 15px;\\n  line-height: 1.4;\\n  display: flex;\\n  justify-content: center;\\n  background: #dbf3cc;\\n  color: #081820; }\\n  @media (min-width: 992px) {\\n    body {\\n      font-size: 17px;\\n      line-height: 1.5; } }\\n\\na, a:hover, a:focus, a:visited {\\n  color: #081820; }\\n\\nmain a, main a:visited {\\n  color: #295546; }\\n\\nmain a:hover, main a:focus {\\n  color: #88c070;\\n  text-decoration-style: wavy; }\\n\\nmain p {\\n  margin: 0.5em 0;\\n  text-align: justify; }\\n\\nmain ul {\\n  margin: 0.5em 0;\\n  padding-left: 1.5em; }\\n\\nmain blockquote {\\n  background: rgba(41, 85, 70, 0.1);\\n  padding: 1em;\\n  margin: 1em 0;\\n  border-radius: 10px; }\\n\\nmain code {\\n  display: block;\\n  margin: 1em 0;\\n  background: rgba(41, 85, 70, 0.1);\\n  padding: 1em;\\n  border-radius: 10px;\\n  font-size: 0.75em;\\n  line-height: 1.3; }\\n\\nmain center {\\n  margin: 1em 0;\\n  padding: 0 1em; }\\n  @media (min-width: 992px) {\\n    main center {\\n      padding: 0 2em; } }\\n\\nmain hr {\\n  border: 0;\\n  border-top: 2px dotted #88c070;\\n  margin: 1.5em 0; }\\n\\nmain h1,\\nmain h2,\\nmain h3 {\\n  margin-bottom: 0;\\n  line-height: 1.5; }\\n  main h1:first-child,\\n  main h2:first-child,\\n  main h3:first-child {\\n    margin-top: 0; }\\n\\nmain h1 {\\n  font-size: 24px;\\n  letter-spacing: 1px; }\\n  @media (min-width: 1000px) {\\n    main h1 {\\n      font-size: 32px; } }\\n\\nmain h2 {\\n  font-size: 18px; }\\n  @media (min-width: 1000px) {\\n    main h2 {\\n      font-size: 24px; } }\\n\\nmain h3 {\\n  font-weight: normal;\\n  font-size: 16px; }\\n  @media (min-width: 1000px) {\\n    main h3 {\\n      font-size: 22px; } }\\n\\n@media (max-width: 576px) {\\n  .desktop-only {\\n    display: none; } }\\n\\n.custom-scrollbar {\\n  scrollbar-color: #295546 rgba(41, 85, 70, 0.25);\\n  scrollbar-width: thin; }\\n\\n.custom-scrollbar::-webkit-scrollbar {\\n  width: 7px;\\n  height: 7px; }\\n\\n.custom-scrollbar::-webkit-scrollbar-track-piece {\\n  background-color: rgba(41, 85, 70, 0.25); }\\n\\n.custom-scrollbar::-webkit-scrollbar-thumb:vertical {\\n  background-color: #295546; }\\n\\n@media (prefers-reduced-motion) {\\n  marquee {\\n    display: none; } }\\n\\n#content {\\n  max-width: 90%;\\n  width: 1200px;\\n  display: grid;\\n  grid-template: \\\"header\\\" auto\\r \\\"asideLeft\\\" auto\\r \\\"asideRight\\\" auto\\r \\\"main\\\" auto\\r \\\"footer\\\" auto\\r / 1fr; }\\n  @media (min-width: 576px) {\\n    #content {\\n      grid-template: \\\"header header\\\" auto\\r \\\"asideLeft asideRight\\\" auto\\r \\\"main main\\\" auto\\r \\\"footer footer\\\" auto\\r / 1fr 1fr; }\\n      #content summary {\\n        display: none; }\\n        #content summary + * {\\n          display: block; } }\\n  @media (min-width: 1000px) {\\n    #content {\\n      grid-template: \\\"header header header\\\" auto\\r \\\"asideLeft main asideRight\\\" auto\\r \\\"footer footer footer\\\" auto\\r / 200px auto 200px; } }\\n\\n/*----------  Main  ----------*/\\nmain {\\n  grid-area: main;\\n  background: #dbf3cc;\\n  padding: 1em 0;\\n  display: flex;\\n  flex-direction: column;\\n  text-transform: lowercase; }\\n  main section {\\n    width: 100%;\\n    padding: 1em 1em;\\n    border: 1px #295546 dashed;\\n    margin-bottom: 1em; }\\n    main section:first-child:last-child {\\n      min-height: 100%; }\\n  @media (min-width: 1000px) {\\n    main {\\n      padding: 0 1em; }\\n      main section {\\n        padding: 1em; } }\\n\\n@media (min-width: 1400px) {\\n  .sections-two-column {\\n    display: flex;\\n    gap: 15px; } }\\n\\n/*----------  Header  ----------*/\\nheader {\\n  background: none;\\n  grid-area: header;\\n  text-align: center;\\n  margin-bottom: 2vw; }\\n\\n.header-heading {\\n  margin: 0;\\n  padding: 0.25em 1em 0em; }\\n\\n#marquee {\\n  margin-bottom: 15px; }\\n  #marquee:empty {\\n    display: none; }\\n\\n/*----------  Aside  ----------*/\\n.aside {\\n  background: #88c070;\\n  padding: 10px 14px; }\\n\\n.aside--left {\\n  border-top-left-radius: 5px;\\n  border-top-right-radius: 5px;\\n  grid-area: asideLeft; }\\n\\n.aside--right {\\n  border-bottom-left-radius: 5px;\\n  border-bottom-right-radius: 5px;\\n  grid-area: asideRight; }\\n\\n@media (min-width: 576px) {\\n  .aside--left {\\n    border-top-left-radius: 5px;\\n    border-bottom-left-radius: 5px;\\n    border-top-right-radius: 0;\\n    border-bottom-right-radius: 0; }\\n  .aside--right {\\n    border-top-left-radius: 0;\\n    border-bottom-left-radius: 0;\\n    border-top-right-radius: 5px;\\n    border-bottom-right-radius: 5px; } }\\n\\n@media (min-width: 1000px) {\\n  .aside--left,\\n  .aside--right {\\n    border-radius: 5px; } }\\n\\n.aside__heading {\\n  display: block;\\n  border: 1px solid black;\\n  border-radius: 5px;\\n  font-size: 0.7em;\\n  text-transform: uppercase;\\n  letter-spacing: 2px;\\n  padding: 3px 5px 2px;\\n  line-height: 1;\\n  margin-bottom: 5px;\\n  font-weight: bold;\\n  margin-left: -1px;\\n  margin-right: -1px; }\\n\\n.aside-stuff {\\n  line-height: 1.5;\\n  margin-top: 30px;\\n  max-width: 200px; }\\n\\n.asides-stat {\\n  font-size: 0.85em; }\\n  .asides-stat:not(:first-child) {\\n    margin-top: 5px; }\\n  .asides-stat a {\\n    text-decoration: none;\\n    cursor: help;\\n    display: block; }\\n  .asides-stat strong {\\n    display: inline-block; }\\n    .asides-stat strong::after {\\n      content: \\\":\\\"; }\\n\\n#changelog {\\n  max-height: 100px;\\n  overflow-y: scroll;\\n  margin-top: 5px; }\\n\\n@media (min-width: 576px) {\\n  .asides-stat:not(:first-child) {\\n    margin-top: 15px; }\\n  .asides-stat strong {\\n    display: block; }\\n    .asides-stat strong::after {\\n      content: \\\"\\\"; }\\n  #changelog {\\n    max-height: 245px;\\n    margin-top: 18px; } }\\n\\n/*----------  Navs  ----------*/\\n.aside-nav {\\n  max-width: 200px; }\\n  .aside-nav ul {\\n    list-style: none;\\n    padding: 0;\\n    margin: 0; }\\n  .aside-nav li {\\n    line-height: 1; }\\n    .aside-nav li a {\\n      display: block;\\n      padding: 2px 0;\\n      color: #295546;\\n      text-decoration: underline;\\n      text-decoration-style: dashed;\\n      cursor: help; }\\n      .aside-nav li a:hover, .aside-nav li a:focus {\\n        color: #dbf3cc;\\n        text-decoration: none; }\\n      .aside-nav li a.active {\\n        color: #dbf3cc;\\n        text-decoration-style: wavy; }\\n\\n.aside-nav__section {\\n  margin: 10px 0 20px; }\\n\\n/*----------  Footer  ----------*/\\nfooter {\\n  background: none;\\n  grid-area: footer;\\n  margin-top: 5vw; }\\n\\n.footer-content {\\n  text-align: center;\\n  padding: 0.5em 1em;\\n  font-size: 0.8em; }\\n  .footer-content i {\\n    font-style: normal;\\n    display: inline-block;\\n    padding: 0 1px; }\\n  .footer-content a {\\n    cursor: help; }\\n    .footer-content a:hover, .footer-content a:focus {\\n      color: #88c070; }\\n\\n#guestbook {\\n  width: 100%;\\n  height: 390px;\\n  border: 0; }\\n\\n/*----------  No JS Warning  ----------*/\\n#no-js-warning {\\n  background: red;\\n  color: white;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  padding: 5px 50px;\\n  text-align: center;\\n  opacity: 0;\\n  animation: noJsFade ease 1s;\\n  animation-delay: 2s;\\n  animation-iteration-count: 1;\\n  animation-fill-mode: forwards;\\n  z-index: 9999999; }\\n  .-js #no-js-warning {\\n    display: none; }\\n\\n@keyframes noJsFade {\\n  0% {\\n    opacity: 0; }\\n  100% {\\n    opacity: 1; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });