import "../../css/pages/layout-generator.scss";
import { getCSS } from "./layout-generator-css";
import { getHTML, getBefore, getAfter } from "./layout-generator-html";
import { getJS } from "./layout-generator-js";

document.addEventListener("DOMContentLoaded", function () {
  initLayoutGenerator();
});

let settings = {},
  cssVariables = {},
  htmlVariables = {},
  html,
  css,
  js,
  firstChange = true;

export function initLayoutGenerator() {
  const layoutGenerator = document.querySelector(".layout-generator-settings");
  const showCodeBtn = document.querySelector(".layout-generator-settings__submit button");
  const closeBtn = document.querySelector("#close");
  if (!layoutGenerator || !showCodeBtn || !closeBtn || !document.querySelector("#css") || !document.querySelector("#preview")) return;

  // Init settings + dependencies
  const settingEls = layoutGenerator.querySelectorAll("input, select");
  [...settingEls].forEach((settingEl) => {
    const nameOfSetting = settingEl.getAttribute("name");
    settings[nameOfSetting] = settingEl.getAttribute("type") == "checkbox" ? settingEl.checked : settingEl.value;
    dealWithDependency(settingEl);

    settingEl.addEventListener("change", () => {
      settings[nameOfSetting] = settingEl.getAttribute("type") == "checkbox" ? settingEl.checked : settingEl.value;

      dealWithDependency(settingEl);
      updatePreview();

      if (firstChange) {
        window.onbeforeunload = function () {
          return "Are you sure you want to navigate away?";
        };
      }
    });
  });

  updatePreview();

  // Init Show+Close buttons
  showCodeBtn.addEventListener("click", generateAndShowCode);
  closeBtn.addEventListener("click", closeCodes);

  // Init auto selection + Copy buttons
  initCopyButton("html", "HTML");
  initCopyButton("css", "CSS");
  initCopyButton("js", "JavaScript");

  [...document.querySelectorAll(".layout-generator-codes code")].forEach((codeEl) => {
    codeEl.addEventListener("click", () => {
      window.getSelection().selectAllChildren(codeEl);
    });
  });
}

function dealWithDependency(settingEl) {
  const layoutGenerator = document.querySelector(".layout-generator-settings");
  const hasDependency = settingEl.closest("[data-dependency]");
  let shouldBeEnabled;

  if (hasDependency) {
    const dependency = hasDependency.getAttribute("data-dependency");
    if (dependency == "sidebar") {
      const activeValue = settingEl.value;
      const sLeft = document.querySelector("[name=mobileLeftSidebar]");
      const sRight = document.querySelector("[name=mobileRightSidebar]");
      const sText = document.querySelector("[name=sidebarTextColor]");
      const sBg = document.querySelector("[name=sidebarBackgroundColor]");
      const sMenu = document.querySelector("[name=menuPosition]");

      sMenu.querySelector("[value=leftSidebar]").disabled = activeValue != "left" && activeValue != "both";
      sMenu.querySelector("[value=rightSidebar]").disabled = activeValue != "right" && activeValue != "both";

      console.log(sMenu.value);
      console.log(activeValue);

      // TODO DOESNT WORK
      if (sMenu.value == "leftSidebar" && activeValue != "left" && activeValue != "both") {
        console.log("EINS");
        console.log(sMenu);
        sMenu.value == "header";
      } else if (sMenu.value == "rightSidebar" && activeValue != "right" && activeValue != "both") {
        console.log("WZEI");
        sMenu.value == "header";
      }

      if (activeValue == "left") {
        sLeft.disabled = false;
        sLeft.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sRight.disabled = true;
        sRight.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        sText.disabled = false;
        sText.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sBg.disabled = false;
        sBg.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else if (activeValue == "right") {
        sLeft.disabled = true;
        sLeft.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        sRight.disabled = false;
        sRight.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sText.disabled = false;
        sText.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sBg.disabled = false;
        sBg.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else if (activeValue == "both") {
        sLeft.disabled = false;
        sLeft.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sRight.disabled = false;
        sRight.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sText.disabled = false;
        sText.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sBg.disabled = false;
        sBg.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else {
        sLeft.disabled = true;
        sLeft.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        sRight.disabled = true;
        sRight.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        sText.disabled = true;
        sText.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        sBg.disabled = true;
        sBg.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
      }
    } else if (dependency == "tileBackgroundImage") {
      shouldBeEnabled = settingEl && settingEl.value !== "";
      if (shouldBeEnabled) {
        layoutGenerator.querySelector("[name=tileBackgroundImage]").disabled = false;
        layoutGenerator.querySelector("[name=tileBackgroundImage]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else {
        layoutGenerator.querySelector("[name=tileBackgroundImage]").disabled = true;
        layoutGenerator.querySelector("[name=tileBackgroundImage]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
      }
    } else if (dependency == "headerImage") {
      shouldBeEnabled = settingEl && settingEl.value !== "";
      if (shouldBeEnabled) {
        layoutGenerator.querySelector("[name=headerImageMobile]").disabled = false;
        layoutGenerator.querySelector("[name=headerImageMobile]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else {
        layoutGenerator.querySelector("[name=headerImageMobile]").disabled = true;
        layoutGenerator.querySelector("[name=headerImageMobile]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
      }
    }
  }
}

function initCopyButton(codeType, label) {
  document.querySelector("#copy-" + codeType).addEventListener("click", () => {
    copyToClipboard(js);
    document.querySelector("#copy-" + codeType).innerHTML = "Copied.";
    setTimeout(function () {
      document.querySelector("#copy-" + codeType).innerHTML = "Copy " + label;
    }, 1000);
  });
}

function updatePreview() {
  console.clear();
  console.log("%c Generating layout with these settings:", "font-size: 14pt;");
  console.log(settings);
  console.log("%c Use the 'Show Code' button to get the code. Don't copy anything from the inspector!", "font-size: 12pt;");

  document.querySelector("#css").innerHTML = "<style>" + buildCSS() + "</style>";
  document.querySelector("#preview").innerHTML = buildHTML();
}

function buildCSS() {
  cssVariables = {
    ...settings,
    maxWidth: settings.width == "small" ? "800px" : settings.width == "wide" ? "1200px" : "none",
  };

  return getCSS(cssVariables);
}

function buildHTML() {
  htmlVariables = {
    ...settings,
  };

  return getHTML(htmlVariables, settings.jsLayout);
}

function buildJS() {
  const before = getBefore(htmlVariables);
  const after = getAfter(htmlVariables);
  return getJS(before, after);
}

function generateAndShowCode() {
  updatePreview();

  html = buildHTML();
  css = buildCSS();
  js = buildJS();

  const wrapper = document.querySelector(".layout-generator-codes");
  wrapper.removeAttribute("aria-hidden");
  document.querySelector("#output-html").innerHTML = escape(html);
  document.querySelector("#output-css").innerHTML = escape(css);
  if (settings.jsLayout) {
    document.querySelector(".layout-generator-codes").classList.remove("layout-generator-codes--no-js");
    document.querySelector("#output-js").innerHTML = escape(js);
  } else {
    document.querySelector(".layout-generator-codes").classList.add("layout-generator-codes--no-js");
  }

  highlightCode();
  document.body.classList.add("no-scroll");
}

function highlightCode() {
  document.querySelector("#output-html").removeAttribute("data-highlighted");
  document.querySelector("#output-css").removeAttribute("data-highlighted");
  document.querySelector("#output-js").removeAttribute("data-highlighted");
  hljs.highlightAll();
}

function closeCodes() {
  const wrapper = document.querySelector(".layout-generator-codes");
  wrapper.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

// HELPERS:

function escape(htmlStr) {
  return htmlStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    return window.clipboardData.setData("Text", text);
  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy");
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return prompt("Copy to clipboard: Ctrl+C, Enter", text);
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
