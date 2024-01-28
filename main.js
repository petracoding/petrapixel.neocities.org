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

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ \"./css/main.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _subpages_tumblr_tag_list_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subpages/tumblr-tag-list-tool */ \"./js/subpages/tumblr-tag-list-tool.js\");\n/* harmony import */ var _subpages_tumblr_tag_list_tool__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subpages_tumblr_tag_list_tool__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _subpages_notion_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subpages/notion-widgets */ \"./js/subpages/notion-widgets.js\");\n/* harmony import */ var _subpages_notion_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subpages_notion_widgets__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n//\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\r\n  //do work\r\n});\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/subpages/notion-widgets.js":
/*!***************************************!*\
  !*** ./js/subpages/notion-widgets.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function (event) {\r\n  if (document.querySelector(\".notion-widgets\")) {\r\n    const isLocal = false;\r\n    const urlBase = isLocal ? \"http://localhost:52330/notion/\" : \"https://petracoding.github.io/notion/\";\r\n\r\n    doText();\r\n    const textOptionElements = document.querySelector(\"#text\").querySelectorAll(\"input, select\");\r\n    [...textOptionElements].forEach((e) => e.addEventListener(\"input\", doText));\r\n\r\n    function doText() {\r\n      const container = document.querySelector(\"#text\");\r\n      let url = urlBase + \"text.html\";\r\n      const mode = container.querySelector('[name=\"text-mode\"]:checked').value;\r\n      url += \"?mode=\" + mode;\r\n      const centered = container.querySelector(\"#text-centered\").checked;\r\n      url += \"&centered=\" + (centered ? \"1\" : \"0\");\r\n      const size = container.querySelector(\"#text-size\").value;\r\n      url += \"&size=\" + size;\r\n      const color = container.querySelector(\"#text-color\").value.replace(\"#\", \"\");\r\n      url += \"&color=\" + color;\r\n      if (container.querySelector(\"#text-bg\").checked) {\r\n        const background = container.querySelector(\"#text-background\").value.replace(\"#\", \"\");\r\n        url += \"&background=\" + background;\r\n        const corners = container.querySelector(\"#text-corners\").value;\r\n        url += \"&corners=\" + corners;\r\n      }\r\n      const font = container.querySelector(\"#text-font\").value;\r\n      url += \"&font=\" + font;\r\n      const text = container.querySelector(\"#text-text\").value;\r\n      url += \"&text=\" + text;\r\n      container.querySelector(\".output\").value = url;\r\n      container.querySelector(\"iframe\").setAttribute(\"src\", url);\r\n    }\r\n  }\r\n\r\n  // WIDGETS THEMSELVES:\r\n\r\n  // TEXT\r\n  if (document.querySelector(\"#notion-widget-text\")) {\r\n    const mode = findGetParameter(\"mode\");\r\n    const text = findGetParameter(\"text\");\r\n    const size = findGetParameter(\"size\");\r\n    const color = findGetParameter(\"color\");\r\n    const corners = findGetParameter(\"corners\");\r\n    const font = findGetParameter(\"font\");\r\n    const background = findGetParameter(\"background\");\r\n\r\n    if (mode == \"dark\") document.body.classList.add(\"dark-mode\");\r\n\r\n    const textEl = this.querySelector(\"#text\");\r\n\r\n    if (findGetParameter(\"centered\") == \"1\") {\r\n      textEl.classList.add(\"centered\");\r\n    }\r\n    if (size) textEl.style.fontSize = size + \"px\";\r\n    if (font) textEl.style.fontFamily = font;\r\n    if (color) textEl.style.color = \"#\" + color;\r\n    if (corners) textEl.style.borderRadius = corners + \"px\";\r\n    if (background) textEl.style.backgroundColor = \"#\" + background;\r\n\r\n    textEl.innerHTML = text;\r\n  }\r\n});\r\n\r\nfunction findGetParameter(parameterName) {\r\n  var result = null,\r\n    tmp = [];\r\n  location.search\r\n    .substr(1)\r\n    .split(\"&\")\r\n    .forEach(function (item) {\r\n      tmp = item.split(\"=\");\r\n      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);\r\n    });\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack:///./js/subpages/notion-widgets.js?");

/***/ }),

/***/ "./js/subpages/tumblr-tag-list-tool.js":
/*!*********************************************!*\
  !*** ./js/subpages/tumblr-tag-list-tool.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function (event) {\r\n  if (document.querySelector(\".tumblr-tag-list-tool\")) {\r\n    const eachTagInNewLineCheckbox = document.querySelector(\"#eachTagInNewLine\");\r\n    const separatorWrapEl = document.querySelector(\".separator-wrap\");\r\n    const groupTagsCheckbox = document.querySelector(\"#groupTags\");\r\n    const groupTagsWrapEl = document.querySelector(\".group-tags-wrap\");\r\n\r\n    prepare();\r\n    eachTagInNewLineCheckbox.addEventListener(\"change\", prepare);\r\n    groupTagsCheckbox.addEventListener(\"change\", prepare);\r\n\r\n    function prepare() {\r\n      if (eachTagInNewLineCheckbox.checked) {\r\n        separatorWrapEl.style.display = \"none\";\r\n      } else {\r\n        separatorWrapEl.style.display = \"block\";\r\n      }\r\n      if (groupTagsCheckbox.checked) {\r\n        groupTagsWrapEl.style.display = \"block\";\r\n      } else {\r\n        groupTagsWrapEl.style.display = \"none\";\r\n      }\r\n    }\r\n\r\n    document.querySelector(\"#go\").addEventListener(\"click\", () => {\r\n      const outputEl = document.querySelector(\"#output\");\r\n      const input = document.querySelector(\"textarea\").value;\r\n      const addHashtags = document.querySelector(\"#addHashtags\").checked;\r\n      const useSearch = document.querySelector(\"#useSearch\").checked;\r\n      const eachTagInNewLine = eachTagInNewLineCheckbox.checked;\r\n      const groupTags = groupTagsCheckbox.checked;\r\n      const useHeadings = groupTags && document.querySelector(\"#headings\").checked;\r\n      const url = document.querySelector(\"#url\").value;\r\n      const separator = document.querySelector(\"#separator\").value || \"\";\r\n      let o = \"\";\r\n      let isHeading = false;\r\n      let isFirstGroup = true;\r\n\r\n      const groups = groupTags ? input.split(/\\n\\n/) : [input];\r\n\r\n      groups.forEach((group) => {\r\n        const tags = group.split(/[\\n,#]+/);\r\n        isHeading = useHeadings;\r\n        if (groupTags && !isFirstGroup) {\r\n          o += \"<br/>\";\r\n        }\r\n        tags.forEach((tag) => {\r\n          tag = tag.trim();\r\n          if (tag !== \",\" && tag !== \"\") {\r\n            if (isHeading) {\r\n              o += tag + \"<br/>\";\r\n              isHeading = false;\r\n            } else {\r\n              const tagSafeForString = tag;\r\n              o +=\r\n                \"<a href='https://\" +\r\n                (url ? url + \".\" : \"\") +\r\n                \"tumblr.com\" +\r\n                (useSearch ? \"/search/\" : \"/tagged/\") +\r\n                tagSafeForString +\r\n                \"'>\" +\r\n                (addHashtags ? \"#\" : \"\") +\r\n                tag +\r\n                \"</a>\" +\r\n                (eachTagInNewLine ? \"<br/>\" : separator);\r\n            }\r\n          }\r\n        });\r\n        isFirstGroup = false;\r\n      });\r\n\r\n      outputEl.innerHTML = o;\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./js/subpages/tumblr-tag-list-tool.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n  color: #251d35; }\\n\\nbody {\\n  font-family: \\\"Mukta\\\", sans-serif;\\n  font-size: 17px;\\n  line-height: 1.8;\\n  display: flex;\\n  justify-content: center;\\n  background: #eee; }\\n  @media (min-width: 1000px) {\\n    body {\\n      font-size: 22px;\\n      line-height: 2; } }\\n\\na, a:hover, a:focus, a:visited {\\n  color: #1d5999; }\\n\\nmain {\\n  width: 95%;\\n  max-width: 850px; }\\n  @media (min-width: 1000px) {\\n    main {\\n      width: 90%;\\n      padding-top: 10vh;\\n      padding-bottom: 10vh; } }\\n\\np {\\n  margin: 0.5em 0;\\n  text-align: justify; }\\n\\nul {\\n  margin: 0.5em 0;\\n  padding-left: 1.5em; }\\n\\nh1,\\nh2 {\\n  margin-bottom: 0;\\n  line-height: 1.5; }\\n\\nh2 {\\n  margin-top: 1.5em;\\n  font-size: 20px; }\\n  @media (min-width: 1000px) {\\n    h2 {\\n      font-size: 28px; } }\\n\\n.cursor {\\n  animation: blink 1s step-start 0s infinite; }\\n\\n@keyframes blink {\\n  50% {\\n    opacity: 0; } }\\n\\n@media (prefers-color-scheme: dark) {\\n  body {\\n    background: #0c0b0e; }\\n  * {\\n    color: #bebcc3; }\\n  a, a:hover, a:focus, a:visited {\\n    color: #6c89b7; } }\\n\\n.tumblr-tag-list-tool button,\\n.tumblr-tag-list-tool input[type=\\\"text\\\"],\\n.tumblr-tag-list-tool textarea {\\n  font-family: 'Mukta', sans-serif;\\n  font-size: 16px;\\n  line-height: 1.75;\\n  background: #e9e9e9;\\n  border: 1px solid #898989;\\n  padding: 5px 15px; }\\n  @media (min-width: 1000px) {\\n    .tumblr-tag-list-tool button,\\n    .tumblr-tag-list-tool input[type=\\\"text\\\"],\\n    .tumblr-tag-list-tool textarea {\\n      font-size: 22px; } }\\n  .tumblr-tag-list-tool button:focus,\\n  .tumblr-tag-list-tool input[type=\\\"text\\\"]:focus,\\n  .tumblr-tag-list-tool textarea:focus {\\n    outline: none;\\n    border: 1px solid black; }\\n\\n.tumblr-tag-list-tool input[type=\\\"text\\\"] {\\n  margin-top: 10px;\\n  width: 100%; }\\n\\n.tumblr-tag-list-tool textarea {\\n  width: 100%;\\n  margin: 10px 0;\\n  min-height: 250px; }\\n\\n.tumblr-tag-list-tool button {\\n  margin: 20px 0;\\n  cursor: pointer; }\\n  .tumblr-tag-list-tool button:hover, .tumblr-tag-list-tool button:focus {\\n    filter: brightness(0.95); }\\n\\n.tumblr-tag-list-tool span {\\n  display: block;\\n  margin-top: 30px; }\\n\\n.tumblr-tag-list-tool label {\\n  width: 100%;\\n  display: block;\\n  margin-top: 10px; }\\n\\n.tumblr-tag-list-tool input[type=\\\"checkbox\\\"] {\\n  filter: saturate(0) brightness(0.9); }\\n\\n.tumblr-tag-list-tool #output {\\n  padding: 10px;\\n  border: 2px solid lightgray;\\n  max-height: 85vh;\\n  overflow-y: auto; }\\n  .tumblr-tag-list-tool #output:empty {\\n    display: none; }\\n\\n.tumblr-tag-list-tool .wrap {\\n  margin-left: 30px;\\n  margin-bottom: 20px; }\\n\\n@media (prefers-color-scheme: dark) {\\n  .tumblr-tag-list-tool input[type=\\\"text\\\"],\\n  .tumblr-tag-list-tool textarea,\\n  .tumblr-tag-list-tool button {\\n    color: #bebcc3;\\n    background: #2a2a2c;\\n    border-color: #2a2a2c; }\\n    .tumblr-tag-list-tool input[type=\\\"text\\\"]:focus,\\n    .tumblr-tag-list-tool textarea:focus,\\n    .tumblr-tag-list-tool button:focus {\\n      border-color: #eee; }\\n  .tumblr-tag-list-tool input[type=\\\"checkbox\\\"] {\\n    filter: invert(1) saturate(0); }\\n  .tumblr-tag-list-tool button:hover, .tumblr-tag-list-tool button:focus {\\n    filter: brightness(0.8); } }\\n\\n.notion-widgets button,\\n.notion-widgets input[type=\\\"text\\\"],\\n.notion-widgets input[type=\\\"number\\\"],\\n.notion-widgets input[type=\\\"color\\\"],\\n.notion-widgets textarea,\\n.notion-widgets select {\\n  font-family: \\\"Mukta\\\", sans-serif;\\n  font-size: 16px;\\n  line-height: 1.75;\\n  background: #e9e9e9;\\n  border: 1px solid #898989;\\n  padding: 5px 15px;\\n  margin-bottom: 0.5em; }\\n  @media (min-width: 1000px) {\\n    .notion-widgets button,\\n    .notion-widgets input[type=\\\"text\\\"],\\n    .notion-widgets input[type=\\\"number\\\"],\\n    .notion-widgets input[type=\\\"color\\\"],\\n    .notion-widgets textarea,\\n    .notion-widgets select {\\n      font-size: 22px; } }\\n  .notion-widgets button:focus,\\n  .notion-widgets input[type=\\\"text\\\"]:focus,\\n  .notion-widgets input[type=\\\"number\\\"]:focus,\\n  .notion-widgets input[type=\\\"color\\\"]:focus,\\n  .notion-widgets textarea:focus,\\n  .notion-widgets select:focus {\\n    outline: none;\\n    border: 1px solid black; }\\n\\n.notion-widgets input[type=\\\"text\\\"] {\\n  margin-top: 10px;\\n  width: 100%; }\\n\\n.notion-widgets textarea {\\n  width: 100%;\\n  min-height: 150px; }\\n\\n.notion-widgets h1 {\\n  margin-top: 10vh; }\\n\\n.notion-widgets h2 {\\n  margin-top: 0;\\n  margin-bottom: 0.5em; }\\n\\n.notion-widgets span {\\n  display: block; }\\n\\n.notion-widgets label {\\n  width: 100%;\\n  display: block; }\\n\\n.notion-widgets input[type=\\\"checkbox\\\"] {\\n  filter: saturate(0) brightness(0.9); }\\n\\n.notion-widgets #output {\\n  padding: 10px;\\n  border: 2px solid lightgray;\\n  max-height: 85vh;\\n  overflow-y: auto; }\\n  .notion-widgets #output:empty {\\n    display: none; }\\n\\n.notion-widgets .wrap {\\n  margin-left: 30px;\\n  margin-bottom: 20px; }\\n\\n.notion-widgets iframe {\\n  width: 100%;\\n  border: 2px solid white;\\n  margin-bottom: 1em; }\\n\\n.notion-widgets section {\\n  display: flex;\\n  gap: 30px; }\\n  .notion-widgets section > * {\\n    flex: 0 0 50%; }\\n\\n.notion-widgets .output {\\n  font-size: 0.85em; }\\n\\n@media (prefers-color-scheme: dark) {\\n  .notion-widgets input[type=\\\"text\\\"],\\n  .notion-widgets input[type=\\\"number\\\"],\\n  .notion-widgets input[type=\\\"color\\\"],\\n  .notion-widgets textarea,\\n  .notion-widgets button,\\n  .notion-widgets select {\\n    color: #bebcc3;\\n    background: #2a2a2c;\\n    border-color: #2a2a2c; }\\n    .notion-widgets input[type=\\\"text\\\"]:focus,\\n    .notion-widgets input[type=\\\"number\\\"]:focus,\\n    .notion-widgets input[type=\\\"color\\\"]:focus,\\n    .notion-widgets textarea:focus,\\n    .notion-widgets button:focus,\\n    .notion-widgets select:focus {\\n      border-color: #eee; }\\n  .notion-widgets input[type=\\\"checkbox\\\"] {\\n    filter: invert(1) saturate(0); }\\n  .notion-widgets button:hover, .notion-widgets button:focus {\\n    filter: brightness(0.8); } }\\n\\n.notion-widget {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  background-color: white; }\\n  .notion-widget.dark-mode {\\n    background-color: #191919; }\\n  .notion-widget > * {\\n    width: 100%; }\\n  .notion-widget #text.centered {\\n    text-align: center; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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