(() => {
  var e = {
      532: (e, t, n) => {
        (t = n(312)(!1)).push([e.id, "@import url(https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap);"]),
          t.push([
            e.id,
            'body.layout-generator{display:block;padding:0;margin:0}body.layout-generator a:hover,body.layout-generator a:focus{text-decoration:none}body.layout-generator.no-scroll{overflow:hidden}#preview{display:flex;align-items:center;justify-content:center;min-height:100vh;font-size:15px;margin:0;padding:0;font-family:sans-serif;line-height:1}.layout-generator-settings{font-family:sans-serif;background:#ffecf8;color:#592038;border-bottom:5px solid #592038;padding:1em;padding-bottom:0}.layout-generator-settings a,.layout-generator-settings a:visited{color:#c26f84}.layout-generator-settings a:hover,.layout-generator-settings a:focus{color:#ffba39;text-decoration:underline}.layout-generator-settings h1{margin:0}.layout-generator-settings h1,.layout-generator-settings strong,.layout-generator-settings button[type="submit"]{font-family:"Share Tech Mono", sans-serif}.layout-generator-settings__section{margin-bottom:1em}.layout-generator-settings__section>strong{display:block;font-size:1.4em;margin-top:1.5em}.layout-generator-settings__section select,.layout-generator-settings__section label{cursor:pointer}.layout-generator-settings__section input[type="color"]{max-height:2em;max-width:2.5em;margin-top:-2px;padding:0;cursor:pointer}.layout-generator-setting{display:flex;flex-wrap:wrap;align-items:center;margin:0.3em 0}.layout-generator-setting.layout-generator-setting--disabled{pointer-events:none;opacity:0.5;cursor:not-allowed}.layout-generator-setting>span{margin-right:1em}.layout-generator-setting>span::after{content:":"}.layout-generator-setting input[type="checkbox"]+span::after{content:""}.layout-generator-settings__columns{display:flex;flex-wrap:wrap}.layout-generator-settings__columns>div{padding:1em;flex:1 1 0}.layout-generator-settings__columns>div:first-child{padding-left:0}.layout-generator-settings__columns>div:last-child{padding-right:0}.layout-generator-settings__columns>div>.layout-generator-settings__section:first-child>strong{margin-top:0}.layout-generator-settings__submit{margin-top:3em}.layout-generator-settings__submit button{font-size:2em;cursor:pointer}.layout-generator-settings__submit p{margin-top:0.5em;font-size:0.9em}.layout-generator-settings__submit h2{margin-bottom:0}.layout-generator-codes{position:fixed;top:0;right:0;bottom:0;left:0;font-family:sans-serif;background:#ffecf8;color:#592038;border-bottom:5px solid #592038;padding:1em;padding-bottom:0;overflow-y:auto;z-index:1}.layout-generator-codes.layout-generator-codes--no-js .layout-generator-codes__js{display:none}.layout-generator-codes.layout-generator-codes--no-js code,.layout-generator-codes.layout-generator-codes--no-js code.hljs{height:20em;max-height:35vh}.layout-generator-codes a,.layout-generator-codes a:visited{color:#c26f84}.layout-generator-codes a:hover,.layout-generator-codes a:focus{color:#ffba39;text-decoration:underline}.layout-generator-codes strong{font-family:"Share Tech Mono", sans-serif;display:block;font-size:1.4em;margin-top:1.5em;margin-bottom:0.1em}.layout-generator-codes strong small{font-size:0.7em}.layout-generator-codes pre{margin-bottom:0}.layout-generator-codes code,.layout-generator-codes code.hljs{display:block;height:20em;max-height:16vh;background:white;overflow-y:scroll;font-size:12px;border:1px solid currentColor;border-radius:5px;overflow-x:hidden;margin-bottom:0.5em}.layout-generator-codes[aria-hidden]{display:none}.layout-generator-codes__close{position:fixed;top:0.5em;right:1em;font-weight:bold}.layout-generator-codes__close button{cursor:pointer;font-size:1.5em}.layout-generator-codes{padding-bottom:3em}@media (max-width: 1000px){.layout-generator-settings__columns{display:block}.layout-generator-settings__columns>div{padding:0}.layout-generator-codes code,.layout-generator-codes code.hljs{height:10em;max-height:none}}\n',
            "",
          ]),
          (e.exports = t);
      },
      312: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = (function (e, t) {
                  var n,
                    a,
                    i,
                    o = e[1] || "",
                    r = e[3];
                  if (!r) return o;
                  if (t && "function" == typeof btoa) {
                    var s =
                        ((n = r), (a = btoa(unescape(encodeURIComponent(JSON.stringify(n))))), (i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a)), "/*# ".concat(i, " */")),
                      l = r.sources.map(function (e) {
                        return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                      });
                    return [o].concat(l).concat([s]).join("\n");
                  }
                  return [o].join("\n");
                })(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, a) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var i = {};
              if (a)
                for (var o = 0; o < this.length; o++) {
                  var r = this[o][0];
                  null != r && (i[r] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                (a && i[l[0]]) || (n && (l[2] ? (l[2] = "".concat(n, " and ").concat(l[2])) : (l[2] = n)), t.push(l));
              }
            }),
            t
          );
        };
      },
      356: (e, t, n) => {
        var a = n(596),
          i = n(532);
        "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.id, i, ""]]);
        a(i, { insert: "head", singleton: !1 }), (e.exports = i.locals || {});
      },
      596: (e, t, n) => {
        "use strict";
        var a,
          i = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          o = [];
        function r(e) {
          for (var t = -1, n = 0; n < o.length; n++)
            if (o[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function s(e, t) {
          for (var n = {}, a = [], i = 0; i < e.length; i++) {
            var s = e[i],
              l = t.base ? s[0] + t.base : s[0],
              d = n[l] || 0,
              u = "".concat(l, " ").concat(d);
            n[l] = d + 1;
            var c = r(u),
              m = { css: s[1], media: s[2], sourceMap: s[3] };
            -1 !== c ? (o[c].references++, o[c].updater(m)) : o.push({ identifier: u, updater: f(m, t), references: 1 }), a.push(u);
          }
          return a;
        }
        function l(e) {
          var t = document.createElement("style"),
            a = e.attributes || {};
          if (void 0 === a.nonce) {
            var o = n.nc;
            o && (a.nonce = o);
          }
          if (
            (Object.keys(a).forEach(function (e) {
              t.setAttribute(e, a[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var r = i(e.insert || "head");
            if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            r.appendChild(t);
          }
          return t;
        }
        var d,
          u =
            ((d = []),
            function (e, t) {
              return (d[e] = t), d.filter(Boolean).join("\n");
            });
        function c(e, t, n, a) {
          var i = n ? "" : a.media ? "@media ".concat(a.media, " {").concat(a.css, "}") : a.css;
          if (e.styleSheet) e.styleSheet.cssText = u(t, i);
          else {
            var o = document.createTextNode(i),
              r = e.childNodes;
            r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o);
          }
        }
        function m(e, t, n) {
          var a = n.css,
            i = n.media,
            o = n.sourceMap;
          if (
            (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
            o && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
            e.styleSheet)
          )
            e.styleSheet.cssText = a;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(a));
          }
        }
        var g = null,
          p = 0;
        function f(e, t) {
          var n, a, i;
          if (t.singleton) {
            var o = p++;
            (n = g || (g = l(t))), (a = c.bind(null, n, o, !1)), (i = c.bind(null, n, o, !0));
          } else
            (n = l(t)),
              (a = m.bind(null, n, t)),
              (i = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            a(e),
            function (t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                a((e = t));
              } else i();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === a && (a = Boolean(window && document && document.all && !window.atob)), a));
          var n = s((e = e || []), t);
          return function (e) {
            if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
              for (var a = 0; a < n.length; a++) {
                var i = r(n[a]);
                o[i].references--;
              }
              for (var l = s(e, t), d = 0; d < n.length; d++) {
                var u = r(n[d]);
                0 === o[u].references && (o[u].updater(), o.splice(u, 1));
              }
              n = l;
            }
          };
        };
      },
    },
    t = {};
  function n(a) {
    var i = t[a];
    if (void 0 !== i) return i.exports;
    var o = (t[a] = { id: a, exports: {} });
    return e[a](o, o.exports, n), o.exports;
  }
  (n.nc = void 0),
    (() => {
      "use strict";
      n(356),
        document.addEventListener("DOMContentLoaded", function () {
          !(function () {
            const e = document.querySelector(".layout-generator-settings"),
              t = document.querySelector(".layout-generator-settings__submit button"),
              n = document.querySelector("#close");
            e &&
              t &&
              n &&
              document.querySelector("#css") &&
              document.querySelector("#preview") &&
              ([...e.querySelectorAll("input, select")].forEach((e) => {
                const t = e.getAttribute("name");
                (i[t] = "checkbox" == e.getAttribute("type") ? e.checked : e.value),
                  l(e),
                  e.addEventListener("change", () => {
                    (i[t] = "checkbox" == e.getAttribute("type") ? e.checked : e.value),
                      l(e),
                      u(),
                      s &&
                        (window.onbeforeunload = function () {
                          return "Are you sure you want to navigate away?";
                        });
                  });
              }),
              u(),
              t.addEventListener("click", g),
              n.addEventListener("click", p),
              d("html", "HTML"),
              d("css", "CSS"),
              d("js", "JavaScript"),
              [...document.querySelectorAll(".layout-generator-codes code")].forEach((e) => {
                e.addEventListener("click", () => {
                  window.getSelection().selectAllChildren(e);
                });
              }));
          })();
        });
      let e,
        t,
        a,
        i = {},
        o = {},
        r = {},
        s = !0;
      function l(e) {
        const t = document.querySelector(".layout-generator-settings"),
          n = e.closest("[data-dependency]");
        let a;
        if (n) {
          const i = n.getAttribute("data-dependency");
          if ("sidebar" == i) {
            const t = e.value,
              n = document.querySelector("[name=mobileLeftSidebar]"),
              a = document.querySelector("[name=mobileRightSidebar]"),
              i = document.querySelector("[name=sidebarTextColor]"),
              o = document.querySelector("[name=sidebarBackgroundColor]"),
              r = document.querySelector("[name=menuPosition]");
            (r.querySelector("[value=leftSidebar]").disabled = "left" != t && "both" != t),
              (r.querySelector("[value=rightSidebar]").disabled = "right" != t && "both" != t),
              console.log(r.value),
              console.log(t),
              "leftSidebar" == r.value && "left" != t && "both" != t
                ? (console.log("EINS"), console.log(r), r.value)
                : "rightSidebar" == r.value && "right" != t && "both" != t && (console.log("WZEI"), r.value),
              "left" == t
                ? ((n.disabled = !1),
                  n.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"),
                  (a.disabled = !0),
                  a.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled"),
                  (i.disabled = !1),
                  i.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"),
                  (o.disabled = !1),
                  o.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"))
                : "right" == t
                ? ((n.disabled = !0),
                  n.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled"),
                  (a.disabled = !1),
                  a.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"),
                  (i.disabled = !1),
                  i.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"),
                  (o.disabled = !1),
                  o.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"))
                : "both" == t
                ? ((n.disabled = !1),
                  n.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"),
                  (a.disabled = !1),
                  a.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"),
                  (i.disabled = !1),
                  i.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"),
                  (o.disabled = !1),
                  o.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"))
                : ((n.disabled = !0),
                  n.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled"),
                  (a.disabled = !0),
                  a.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled"),
                  (i.disabled = !0),
                  i.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled"),
                  (o.disabled = !0),
                  o.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled"));
          } else
            "tileBackgroundImage" == i
              ? ((a = e && "" !== e.value),
                a
                  ? ((t.querySelector("[name=tileBackgroundImage]").disabled = !1),
                    t.querySelector("[name=tileBackgroundImage]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"))
                  : ((t.querySelector("[name=tileBackgroundImage]").disabled = !0),
                    t.querySelector("[name=tileBackgroundImage]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled")))
              : "headerImage" == i &&
                ((a = e && "" !== e.value),
                a
                  ? ((t.querySelector("[name=headerImageMobile]").disabled = !1),
                    t.querySelector("[name=headerImageMobile]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled"))
                  : ((t.querySelector("[name=headerImageMobile]").disabled = !0),
                    t.querySelector("[name=headerImageMobile]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled")));
        }
      }
      function d(e, t) {
        document.querySelector("#copy-" + e).addEventListener("click", () => {
          !(function (e) {
            if (window.clipboardData && window.clipboardData.setData) return window.clipboardData.setData("Text", e);
            if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
              var t = document.createElement("textarea");
              (t.textContent = e), (t.style.position = "fixed"), document.body.appendChild(t), t.select();
              try {
                return document.execCommand("copy");
              } catch (t) {
                return console.warn("Copy to clipboard failed.", t), prompt("Copy to clipboard: Ctrl+C, Enter", e);
              } finally {
                document.body.removeChild(t);
              }
            }
          })(a),
            (document.querySelector("#copy-" + e).innerHTML = "Copied."),
            setTimeout(function () {
              document.querySelector("#copy-" + e).innerHTML = "Copy " + t;
            }, 1e3);
        });
      }
      function u() {
        console.clear(),
          console.log("%c Generating layout with these settings:", "font-size: 14pt;"),
          console.log(i),
          console.log("%c Use the 'Show Code' button to get the code. Don't copy anything from the inspector!", "font-size: 12pt;"),
          (document.querySelector("#css").innerHTML = "<style>" + c() + "</style>"),
          (document.querySelector("#preview").innerHTML = m());
      }
      function c() {
        return (
          (o = { ...i, maxWidth: "small" == i.width ? "800px" : "wide" == i.width ? "1200px" : "none" }),
          `/* CHANGE COLORS HERE: */\n:root {\n  --background-color: ${(e = o).pageBackgroundColor};\n  --content-background-color: ${e.mainBackgroundColor};\n  --text-color: ${
            e.textColor
          };\n  --link-color: ${e.linkColor};\n  --link-color-hover: ${
            e.linkHoverColor
          };\n  --selection-color: rgba(0, 0, 0, 0.2);\n  --nav-link-color: var(--link-color);\n  --nav-link-color-hover: var(--link-color-hover);\n  --nav-link-background-hover: rgba(0, 0, 0, 0.2);\n}\n/* BASICS */\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--background-color);\n  min-height: 100vh;\n  font-size: 15px;\n  margin: 0;\n  padding: 0;\n  color: var(--text-color);\n  font-family: sans-serif;\n  line-height: 1;\n}\n::selection {\n  background: var(--selection-color);\n}\na {\n  text-decoration: underline;\n}\na,\na:visited {\n  color: var(--link-color);\n}\na:hover,\na:focus {\n  color: var(--link-color-hover);\n  text-decoration: none;\n}\n/* LAYOUT */\n#layout {\n  display: grid;\n  max-width: 800px;\n  border: 1px solid;\n  grid-template: "header header" auto "aside main" auto "footer footer" auto / 200px auto;\n}\n#layout.sidebar-right {\n  grid-template: "header header" auto "main aside" auto "footer footer" auto / auto 200px;\n}\nheader {\n  grid-area: header;\n  font-size: 1.2em;\n  border-bottom: 1px solid;\n  padding: 15px;\n  background: var(--content-background-color);\n}\naside {\n  grid-area: aside;\n  border-right: 1px solid;\n  background: var(--content-background-color);\n}\n.sidebar-right aside {\n  border-right: none;\n  border-left: 1px solid;\n}\nnav {\n  padding: 0.5em;\n}\nnav a,\nnav a:visited {\n  color: var(--nav-link-color);\n}\nnav a:hover,\nnav a:focus {\n  color: var(--nav-link-color-hover);\n}\nnav ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: var(--content-background-color);\n  user-select: none;\n}\nnav ul li {\n  margin-bottom: 0;\n}\nnav ul li > a {\n  display: block;\n}\nnav ul li > a,\nnav ul li summary {\n  padding: 0.25em 0.5em;\n}\nnav ul li > a.active,\nnav ul li summary.active {\n  font-weight: bold;\n}\nnav ul li > a:hover,\nnav ul li summary:hover {\n  background: var(--nav-link-background-hover);\n}\nnav ul summary {\n  cursor: pointer;\n}\nnav ul ul li > a {\n  padding-left: 1em;\n}\nmain {\n  grid-area: main;\n  max-height: 70vh;\n  overflow-y: auto;\n  padding: 1em 1.5em;\n  background: var(--content-background-color);\n}\nfooter {\n  grid-area: footer;\n  border-top: 1px solid;\n  font-size: 0.75em;\n  padding: 15px;\n  background: var(--content-background-color);\n}\nfooter a,\nfooter a:visited {\n  color: var(--nav-link-color);\n}\nfooter a:hover,\nfooter a:focus {\n  color: var(--nav-link-color-hover);\n}\n#skip-to-content-link {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  line-height: 1;\n  font-size: 1.25rem;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  transform: translateY(-3rem);\n  transition: transform 0.1s ease-in;\n  z-index: 99999999999;\n}\n#skip-to-content-link:focus,\n#skip-to-content-link:focus-within {\n  transform: translateY(0);\n}\n/* CONTENT */\nmain {\n  line-height: 1.5;\n}\nmain a,\nmain a:visited {\n  color: var(--link-color);\n}\nmain a:hover,\nmain a:focus {\n  color: var(--link-color-hover);\n  text-decoration-style: wavy;\n}\nmain p {\n  margin: 0.75em 0;\n}\nmain ol,\nmain ul {\n  margin: 0.5em 0;\n  padding-left: 1.5em;\n}\nmain ol li,\nmain ul li {\n  margin-bottom: 0.2em;\n  line-height: 1.3;\n}\nmain ol {\n  padding-left: 2em;\n}\nmain blockquote {\n  background: yellow;\n  padding: 15px;\n  margin: 1em 0;\n  border-radius: 10px;\n}\nmain pre {\n  margin: 1em 0 1.5em;\n}\nmain code {\n  text-transform: none;\n}\nmain center {\n  margin: 1em 0;\n  padding: 0 1em;\n}\n@media (min-width: 800px) {\n  main center {\n    padding: 0 2em;\n  }\n}\nmain hr {\n  border: 0;\n  border-top: 2px dotted green;\n  margin: 1.5em 0;\n}\nmain h1,\nmain h2,\nmain h3,\nmain h4,\nmain h5,\nmain h6 {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\nmain h1:first-child,\nmain h2:first-child,\nmain h3:first-child,\nmain h4:first-child,\nmain h5:first-child,\nmain h6:first-child {\n  margin-top: 0;\n}\nmain h1 {\n  font-size: 24px;\n  letter-spacing: 1px;\n}\n@media (min-width: 800px) {\n  main h1 {\n    font-size: 32px;\n  }\n}\nmain h2 {\n  font-size: 18px;\n}\n@media (min-width: 800px) {\n  main h2 {\n    font-size: 24px;\n  }\n}\nmain h3 {\n  font-size: 16px;\n}\n@media (min-width: 800px) {\n  main h3 {\n    font-size: 22px;\n  }\n}\n/* -------------------------------------------------------- */\n/* MOBILE */\n@media (max-width: 800px) {\n  body {\n    font-size: 14px;\n  }\n  #layout {\n    grid-template: "header" auto "aside" auto "main" auto "footer" auto / 1fr;\n  }\n  aside {\n    border-bottom: 1px solid;\n    padding: 9px;\n    font-size: 0.9em;\n  }\n  nav {\n    padding: 0;\n  }\n  nav > ul {\n    display: flex;\n    flex-wrap: wrap;\n    list-style: none;\n    padding-top: 0.5em;\n  }\n  nav > ul li > a,\n  nav > ul li summary {\n    padding: 0.5em;\n  }\n  main {\n    max-height: none;\n    padding: 15px;\n  }\n  #skip-to-content-link {\n    font-size: 1rem;\n  }\n}\n`
        );
        var e;
      }
      function m() {
        return (
          (r = { ...i }),
          i.jsLayout
            ? '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>TITLE</title>\n    <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />\n    <meta content="utf-8" http-equiv="encoding" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link href="img/favicon.ico" rel="icon" type="image/x-icon" />\n    \x3c!-- Template generated with petrapixel\'s layout generator. --\x3e\n  </head>\n  <body>\n    \x3c!-- The next line is a skip-to-content link for keyboard users. --\x3e\n    <a href="#content" id="skip-to-content-link">Skip to content</a>\n    <div id="layout">\n<main id="content">\n        <section>\n          <h1>Page Title</h1>\n          <p>This is the preview of template 1 ("Square One") by <a href="https://petrapixel.neocities.org/" target="_blank">petrapixel</a>.</p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia ipsa repudiandae dolorum facilis corrupti eaque aut, tenetur iusto corporis delectus quos alias fuga maiores nulla\n            illum! Esse, possimus ipsa.\n          </p>\n          <h2>Heading 2</h2>\n          <p>\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo\n            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod\n            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.\n            <b>This is bold text.</b> <i>This is italic text.</i> <strike>This is strikethrough text.</strike> <u>This is underlined text.</u> <a href="#">This is a link.</a>\n            <code>This is code.</code> <abbr title="Example.">This is an abbreviation.</abbr>\n          </p>\n          <blockquote>This is a blockquote. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</blockquote>\n          <p>\n            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n          </p>\n          <pre>This is preformatted text.</pre>\n          <p>\n            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n          </p>\n          <h3>Heading 3</h3>\n          <p>\n            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui\n            blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n            laoreet dolore magna aliquam erat volutpat.\n          </p>\n          <p>This is an image:</p>\n          <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n          <img class="image" src="http://localhost:52330/public/img/layout/divider3.gif" />\n          <p>This is a full-width image:</p>\n          <img class="image full-width-image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n          <p>These are two images:</p>\n          <div class="images">\n            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n          </div>\n          <p>These are three images:</p>\n          <div class="images">\n            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n          </div>\n          <h4>Heading 4</h4>\n          <p>\n            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate\n            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te\n            feugait nulla facilisi.\n          </p>\n          <h5>Heading 5</h5>\n          <p>\n            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate\n            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te\n            feugait nulla facilisi.\n          </p>\n          <h6>Heading 6</h6>\n          <p>\n            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate\n            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te\n            feugait nulla facilisi.\n          </p>\n        </section>\n      </main>\n</div>\n    \x3c!-- Add any additional Javascript code (<script></script>) here. --\x3e\n  </body>\n</html>'
            : '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>TITLE</title>\n    <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />\n    <meta content="utf-8" http-equiv="encoding" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link href="img/favicon.ico" rel="icon" type="image/x-icon" />\n    \x3c!-- Template generated with petrapixel\'s layout generator. --\x3e\n  </head>\n  <body>\n    \x3c!-- The next line is a skip-to-content link for keyboard users. --\x3e\n    <a href="#content" id="skip-to-content-link">Skip to content</a>\n    <div id="layout">\n<header>\n        <div>Website Title</div>\n      </header>\n      <aside>\n        <nav>\n          <ul>\n            <li><a href="#">Home</a></li>\n            <li><a href="#">Page 1</a></li>\n            <li><a href="/templates/template1.html">Page 2</a></li>\n            <li><a href="#">Page 3</a></li>\n            <li>\n              <details>\n                <summary><a href="#">Submenu 1</a></summary>\n                <ul>\n                  <li><a href="#">Page A</a></li>\n                  <li><a href="#">Page B</a></li>\n                  <li><a href="#">Page C</a></li>\n                  <li><a href="#">Page D</a></li>\n                  <li><a href="#">Page E</a></li>\n                </ul>\n              </details>\n            </li>\n            <li>\n              <details>\n                <summary>Submenu 2</summary>\n                <ul>\n                  <li><a href="#">Page A</a></li>\n                  <li><a href="#">Page B</a></li>\n                  <li><a href="#">Page C</a></li>\n                  <li><a href="#">Page D</a></li>\n                  <li><a href="#">Page E</a></li>\n                </ul>\n              </details>\n            </li>\n          </ul>\n        </nav>\n        <p>Blah blah.</p>\n      </aside>\n<main id="content">\n        <section>\n          <h1>Page Title</h1>\n          <p>This is the preview of template 1 ("Square One") by <a href="https://petrapixel.neocities.org/" target="_blank">petrapixel</a>.</p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia ipsa repudiandae dolorum facilis corrupti eaque aut, tenetur iusto corporis delectus quos alias fuga maiores nulla\n            illum! Esse, possimus ipsa.\n          </p>\n          <h2>Heading 2</h2>\n          <p>\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo\n            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod\n            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.\n            <b>This is bold text.</b> <i>This is italic text.</i> <strike>This is strikethrough text.</strike> <u>This is underlined text.</u> <a href="#">This is a link.</a>\n            <code>This is code.</code> <abbr title="Example.">This is an abbreviation.</abbr>\n          </p>\n          <blockquote>This is a blockquote. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</blockquote>\n          <p>\n            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n          </p>\n          <pre>This is preformatted text.</pre>\n          <p>\n            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n          </p>\n          <h3>Heading 3</h3>\n          <p>\n            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui\n            blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n            laoreet dolore magna aliquam erat volutpat.\n          </p>\n          <p>This is an image:</p>\n          <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n          <img class="image" src="http://localhost:52330/public/img/layout/divider3.gif" />\n          <p>This is a full-width image:</p>\n          <img class="image full-width-image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n          <p>These are two images:</p>\n          <div class="images">\n            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n          </div>\n          <p>These are three images:</p>\n          <div class="images">\n            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />\n          </div>\n          <h4>Heading 4</h4>\n          <p>\n            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate\n            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te\n            feugait nulla facilisi.\n          </p>\n          <h5>Heading 5</h5>\n          <p>\n            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate\n            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te\n            feugait nulla facilisi.\n          </p>\n          <h6>Heading 6</h6>\n          <p>\n            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate\n            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te\n            feugait nulla facilisi.\n          </p>\n        </section>\n      </main>\n<footer>Footer Text. <a href="#">Link.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel\'s layout generator</a>.</footer>\n</div>\n    \x3c!-- Add any additional Javascript code (<script></script>) here. --\x3e\n  </body>\n</html>'
        );
      }
      function g() {
        u(),
          (e = m()),
          (t = c()),
          (a =
            'document.addEventListener("DOMContentLoaded", function () {\n  loadLayout();\n  giveClassToActiveLinks();\n});\n\nfunction loadLayout() {\n  const mainEl = document.querySelector("main");\n  if (!mainEl) return;\n  mainEl.insertAdjacentHTML("beforebegin", headerHTML());\n  mainEl.insertAdjacentHTML("afterend", footerHTML());\n  giveActiveClassToLinks();\n}\n\nfunction headerHTML() {\n  const nesting = getNesting();\n  // "nesting" outputs "./" or "../" depending on current page depth.\n  // You can use it to refer to images etc.\n  // example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">\n\n  return `\n<header>\n        <div>Website Title</div>\n      </header>\n      <aside>\n        <nav>\n          <ul>\n            <li><a href="#">Home</a></li>\n            <li><a href="#">Page 1</a></li>\n            <li><a href="/templates/template1.html">Page 2</a></li>\n            <li><a href="#">Page 3</a></li>\n            <li>\n              <details>\n                <summary><a href="#">Submenu 1</a></summary>\n                <ul>\n                  <li><a href="#">Page A</a></li>\n                  <li><a href="#">Page B</a></li>\n                  <li><a href="#">Page C</a></li>\n                  <li><a href="#">Page D</a></li>\n                  <li><a href="#">Page E</a></li>\n                </ul>\n              </details>\n            </li>\n            <li>\n              <details>\n                <summary>Submenu 2</summary>\n                <ul>\n                  <li><a href="#">Page A</a></li>\n                  <li><a href="#">Page B</a></li>\n                  <li><a href="#">Page C</a></li>\n                  <li><a href="#">Page D</a></li>\n                  <li><a href="#">Page E</a></li>\n                </ul>\n              </details>\n            </li>\n          </ul>\n        </nav>\n        <p>Blah blah.</p>\n      </aside>`;\n}\n\nfunction footerHTML() {\n  const nesting = getNesting();\n  // "nesting" outputs "./" or "../" depending on current page depth.\n  // You can use it to refer to images etc.\n  // example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">\n\n  return `\n<footer>Footer Text. <a href="#">Link.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel\'s layout generator</a>.</footer>`;\n}\n\nfunction getNesting() {\n  const numberOfSlashes = window.location.pathname.split("/").length - 1;\n  if (numberOfSlashes == 1) return "./";\n  if (numberOfSlashes == 2) return "../";\n  if (numberOfSlashes == 3) return "../../";\n  if (numberOfSlashes == 4) return "../../../";\n  if (numberOfSlashes == 5) return "../../../../";\n  // add more lines if needed.\n}\n\nfunction giveActiveClassToLinks() {\n\tconst els = document.querySelectorAll("nav a");\n\t[...els].forEach((el) => {\n\t  const href = el.getAttribute("href").replace(".html", "").replace("#", "");\n\t  const pathname = window.location.pathname.replace("/public/", "");\n\n\t  if (href == "/" || href == "/index.html") {\n\t    if (window.location.href == "http://localhost:52330/" || pathname == "/") {\n\t      el.classList.add("active");\n\t    }\n\t  } else {\n\t    if (window.location.href.includes(href)) {\n\t      el.classList.add("active");\n\n\t      if (el.closest("summary")) {\n\t        el.closest("summary").classList.add("active");\n\t      }\n\t    }\n\t  }\n\t});\n}'),
          document.querySelector(".layout-generator-codes").removeAttribute("aria-hidden"),
          (document.querySelector("#output-html").innerHTML = f(e)),
          (document.querySelector("#output-css").innerHTML = f(t)),
          i.jsLayout
            ? (document.querySelector(".layout-generator-codes").classList.remove("layout-generator-codes--no-js"), (document.querySelector("#output-js").innerHTML = f(a)))
            : document.querySelector(".layout-generator-codes").classList.add("layout-generator-codes--no-js"),
          document.querySelector("#output-html").removeAttribute("data-highlighted"),
          document.querySelector("#output-css").removeAttribute("data-highlighted"),
          document.querySelector("#output-js").removeAttribute("data-highlighted"),
          hljs.highlightAll(),
          document.body.classList.add("no-scroll");
      }
      function p() {
        document.querySelector(".layout-generator-codes").setAttribute("aria-hidden", "true"), document.body.classList.remove("no-scroll");
      }
      function f(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
      }
    })();
})();
