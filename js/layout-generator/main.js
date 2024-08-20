import "../../css/pages/layout-generator.scss";
import { getCSS } from "./layout-generator-css";
import { getHTML, getBefore, getAfter } from "./layout-generator-html";
import { getJS } from "./layout-generator-js";
import { getRandomItems, getRandomSettings } from "./layout-generator-random";

const isLocalhost = window.location.href.includes("http://localhost");
const COOKIE_NAME = "layoutGeneratorSettings";

const defaultSettings = {
  width: "small",
  backgroundImageUrl: "random 1",
  coverBackgroundImage: false,
  headerImageUrl: "",
  footer: "none",
  sidebars: "right",
  menuPosition: "header",
  submenus: "visible",
  margins: "0",
  padding: "0",
  borderRadius: "0",
  jsLayout: true,
  collapseMobileMenu: false,
  headerImageMobile: "none",
  mobileLeftSidebar: "hide",
  mobileRightSidebar: "hide",
  font: "Times New Roman",
  fontSize: "12",
  pageBackgroundColor: "#f1f1f1",
  mainBackgroundColor: "#ffffff",
  textColor: "#000000",
  sidebarBackgroundColor: "#ffffff",
  sidebarTextColor: "#000000",
  linkColor: "#f32e33",
  linkHoverColor: "#9c4aff",
  sidebarWidth: "200",
};

let settings = {},
  html,
  css,
  js,
  askBeforeRandomize = false,
  lastRandom = "default";

document.addEventListener("DOMContentLoaded", function () {
  initLayoutGenerator();
  initScrollClass();
});

function initScrollClass() {
  let scrollpos = window.scrollY;

  window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;
    const threshold = window.innerHeight > 700 ? 1 : 150;

    if (scrollpos >= threshold) {
      this.document.body.classList.add("scrolled-down");
    } else {
      this.document.body.classList.remove("scrolled-down");
    }
  });
}

export function initLayoutGenerator() {
  const layoutGenerator = document.querySelector(".layout-generator-settings");
  const showCodeBtn = document.querySelector("#showCode");
  const closeBtn = document.querySelector("#close");
  if (!layoutGenerator || !showCodeBtn || !closeBtn || !document.querySelector("#css") || !document.querySelector("#preview")) return;

  // load cookie or random
  if (localStorage.getItem(COOKIE_NAME)) {
    settings = JSON.parse(localStorage.getItem(COOKIE_NAME));
  } else {
    // default
    settings = {
      width: "small",
      backgroundImageUrl: "",
      coverBackgroundImage: false,
      headerImageUrl: "",
      footer: "centered",
      sidebars: "left",
      menuPosition: "header",
      submenus: "toggleOnClick",
      margins: "10",
      padding: "20",
      borderRadius: "0",
      jsLayout: false,
      collapseMobileMenu: true,
      headerImageMobile: "fullWidth",
      mobileLeftSidebar: "before",
      mobileRightSidebar: "hide",
      font: "Arial, sans-serif",
      fontSize: "14",
      pageBackgroundColor: "#eeeeee",
      mainBackgroundColor: "#ffffff",
      textColor: "#000000",
      sidebarBackgroundColor: "#ffffff",
      sidebarTextColor: "#000000",
      linkColor: "#3026e8",
      linkHoverColor: "#7780ec",
      sidebarWidth: "200",
      tileBackgroundImage: false,
      headingFont: "Georgia, serif",
      borderWidth: "2",
      borderColor: "#000000",
      transparentBackground: false,
    };
  }

  loadSettingsIntoDOM();

  // Init settings + dependencies
  const settingEls = layoutGenerator.querySelectorAll("input, select");
  [...settingEls].forEach((settingEl) => {
    const nameOfSetting = settingEl.getAttribute("name");

    dealWithDependency(settingEl);

    settingEl.addEventListener("change", () => {
      askBeforeRandomize = true;
      settings[nameOfSetting] = settingEl.getAttribute("type") == "checkbox" ? settingEl.checked : settingEl.value;
      saveSettingsCookie();

      dealWithDependency(settingEl);
      updatePreview();
    });
  });

  updatePreview();

  // Init buttons
  showCodeBtn.addEventListener("click", generateAndShowCode);
  closeBtn.addEventListener("click", closeCodesWindow);
  const randomizeBtn = document.querySelector("#randomize");
  randomizeBtn.addEventListener("click", askToRandomize);

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

function saveSettingsCookie() {
  localStorage.setItem(COOKIE_NAME, JSON.stringify(settings));
}

function loadSettingsIntoDOM() {
  const layoutGenerator = document.querySelector(".layout-generator-settings");
  const settingEls = layoutGenerator.querySelectorAll("input, select");
  [...settingEls].forEach((settingEl) => {
    const nameOfSetting = settingEl.getAttribute("name");

    if (settings[nameOfSetting] !== undefined) {
      if (settingEl.getAttribute("type") == "checkbox") {
        // load setting
        settingEl.checked = settings[nameOfSetting];
      } else {
        settingEl.value = settings[nameOfSetting];
      }
    }
  });
}

function askToRandomize() {
  if (!askBeforeRandomize) {
    doRandomize();
  } else if (confirm("Are you sure you want to randomize? All your chosen settings will be overwritten.") == true) {
    doRandomize();
  }
}

function doRandomize() {
  const items = getRandomItems().filter((i) => i != lastRandom);
  const randomItem = items[Math.floor(Math.random() * items.length)];
  console.log("Loading randomized settings: " + randomItem);
  lastRandom = randomItem;
  const randomSettings = getRandomSettings(randomItem);
  if (!randomSettings) return;
  settings = { ...defaultSettings, ...settings, ...randomSettings };
  loadSettingsIntoDOM();
  saveSettingsCookie();
  const settingEls = document.querySelector(".layout-generator-settings").querySelectorAll("input, select");
  [...settingEls].forEach((settingEl) => {
    dealWithDependency(settingEl);
  });
  updatePreview();
  askBeforeRandomize = false;
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
      const sSidebarWidth = document.querySelector("[name=sidebarWidth]");

      sMenu.querySelector("[value=leftSidebar]").disabled = activeValue != "left" && activeValue != "both";
      sMenu.querySelector("[value=rightSidebar]").disabled = activeValue != "right" && activeValue != "both";

      //   console.log(sMenu);
      //   console.log(sMenu.value);
      //   console.log(activeValue);

      // TODO DOESNT WORK
      if (sMenu.value == "leftSidebar" && activeValue != "left" && activeValue != "both") {
        // console.log("A!");
        sMenu.value == "header";
        sMenu.dispatchEvent(new Event("change"));
      } else if (sMenu.value == "rightSidebar" && activeValue != "right" && activeValue != "both") {
        // console.log("B!");
        sMenu.value == "header";
        sMenu.dispatchEvent(new Event("change"));
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
        sSidebarWidth.disabled = false;
        sSidebarWidth.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else if (activeValue == "right") {
        sLeft.disabled = true;
        sLeft.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        sRight.disabled = false;
        sRight.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sText.disabled = false;
        sText.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sBg.disabled = false;
        sBg.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sSidebarWidth.disabled = false;
        sSidebarWidth.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else if (activeValue == "both") {
        sLeft.disabled = false;
        sLeft.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sRight.disabled = false;
        sRight.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sText.disabled = false;
        sText.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sBg.disabled = false;
        sBg.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        sSidebarWidth.disabled = false;
        sSidebarWidth.closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else {
        sLeft.disabled = true;
        sLeft.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        sRight.disabled = true;
        sRight.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        sText.disabled = true;
        sText.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        sBg.disabled = true;
        sBg.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        sSidebarWidth.disabled = true;
        sSidebarWidth.closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
      }
    } else if (dependency == "coverBackgroundImage") {
      shouldBeEnabled = settingEl && settingEl.value !== "";
      if (shouldBeEnabled) {
        layoutGenerator.querySelector("[name=coverBackgroundImage]").disabled = false;
        layoutGenerator.querySelector("[name=coverBackgroundImage]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else {
        layoutGenerator.querySelector("[name=coverBackgroundImage]").disabled = true;
        layoutGenerator.querySelector("[name=coverBackgroundImage]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
      }
    } else if (dependency == "headerImage") {
      shouldBeEnabled = settingEl && settingEl.value !== "";
      //   if (shouldBeEnabled) {
      //     layoutGenerator.querySelector("[name=headerImageMobile]").disabled = false;
      //     layoutGenerator.querySelector("[name=headerImageMobile]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      //   } else {
      //     layoutGenerator.querySelector("[name=headerImageMobile]").disabled = true;
      //     layoutGenerator.querySelector("[name=headerImageMobile]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
      //   }
    } else if (dependency == "submenus") {
      shouldBeEnabled = settingEl && settingEl.value !== "header";
      if (shouldBeEnabled) {
        layoutGenerator.querySelector("[name=submenus]").disabled = false;
        layoutGenerator.querySelector("[name=submenus]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else {
        layoutGenerator.querySelector("[name=submenus]").disabled = true;
        layoutGenerator.querySelector("[name=submenus]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
      }
    } else if (dependency == "border") {
      shouldBeEnabled = settingEl && settingEl.value !== "0";
      if (shouldBeEnabled) {
        layoutGenerator.querySelector("[name=borderColor]").disabled = false;
        layoutGenerator.querySelector("[name=borderColor]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else {
        layoutGenerator.querySelector("[name=borderColor]").disabled = true;
        layoutGenerator.querySelector("[name=borderColor]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
      }
    } else if (dependency == "transparentBackground") {
      shouldBeEnabled = settingEl && settingEl.checked;
      if (!shouldBeEnabled) {
        layoutGenerator.querySelector("[name=mainBackgroundColor]").disabled = false;
        layoutGenerator.querySelector("[name=mainBackgroundColor]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
        layoutGenerator.querySelector("[name=sidebarBackgroundColor]").disabled = false;
        layoutGenerator.querySelector("[name=sidebarBackgroundColor]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
      } else {
        layoutGenerator.querySelector("[name=mainBackgroundColor]").disabled = true;
        layoutGenerator.querySelector("[name=mainBackgroundColor]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
        layoutGenerator.querySelector("[name=sidebarBackgroundColor]").disabled = true;
        layoutGenerator.querySelector("[name=sidebarBackgroundColor]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
      }
    }
  }
}

function initCopyButton(codeType, label) {
  document.querySelector("#copy-" + codeType).addEventListener("click", () => {
    let textToCopy = codeType == "html" ? html : codeType == "css" ? css : js;
    copyToClipboard(textToCopy);
    document.querySelector("#copy-" + codeType).innerHTML = "Copied.";
    setTimeout(function () {
      document.querySelector("#copy-" + codeType).innerHTML = "Copy " + label;
    }, 1000);
  });
}

function updatePreview() {
  if (!isLocalhost) console.clear();
  console.log("%c Generating layout with these settings:", "font-size: 14pt;");
  console.log(settings);
  console.log("%c Use the 'Show Code' button to get the code. Don't copy anything from the inspector!", "font-size: 12pt;");

  document.querySelector("#css").innerHTML = "<style>" + getCSS(settings).replace("body {", "#preview {") + "</style>";
  document.querySelector("#preview").innerHTML = getHTML(settings, false, true);
}

function generateAndShowCode() {
  updatePreview();

  html = getHTML(settings, settings.jsLayout, false);
  css = getCSS(settings);
  js = getJS(getBefore(settings), getAfter(settings));

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

  document.body.classList.add("no-scroll");

  // code highlight:
  document.querySelector("#output-html").removeAttribute("data-highlighted");
  document.querySelector("#output-css").removeAttribute("data-highlighted");
  document.querySelector("#output-js").removeAttribute("data-highlighted");
  hljs.highlightAll();
}

function closeCodesWindow() {
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
