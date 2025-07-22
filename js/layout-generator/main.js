import "../../css/pages/layout-generator.scss";
import { getCSS } from "./layout-generator-css";
import { getHTML, getBefore, getAfter } from "./layout-generator-html";
import { getJS } from "./layout-generator-js";
import { getRandomItems, getRandomSettings } from "./layout-generator-random";

/*
	VARIABLES
*/

const isLocalhost = window.location.href.includes("http://localhost");
const COOKIE_NAME = "layoutGeneratorSettings";

const picsumIDs = ["10", "11", "12", "13", "14", "16", "18", "24", "37", "38", "40", "106", "112", "141"];
const randomPicsumID = picsumIDs[Math.floor(Math.random() * picsumIDs.length)];

const defaultSettings = {
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

let settings = {},
  html,
  css,
  js,
  askBeforeRandomize = false,
  lastRandom = "default";

/*
	INIT
*/

document.addEventListener("DOMContentLoaded", function () {
  const layoutGenerator = document.querySelector("#tab");
  if (!layoutGenerator) return;

  // load cookie or random
  if (localStorage.getItem(COOKIE_NAME)) {
    settings = JSON.parse(localStorage.getItem(COOKIE_NAME));
  } else {
    // default
    settings = defaultSettings;
  }

  loadSettingsIntoDOM();
  initSettings();
  updatePreview();
  initPreviewControls();

  // Init Code Generator
  const showCodeBtn = document.querySelector("#tab6btn");
  showCodeBtn.addEventListener("click", generateCode);

  // Init Tabs
  const tabBtns = document.querySelectorAll(".tabs__tab");
  [...tabBtns].forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      const id = tabBtn.getAttribute("id").replace("btn", "");
      const activeTab = document.querySelector(".tabs__tab--active");
      activeTab.classList.remove("tabs__tab--active");
      const visibleTab = document.querySelector(".tabs__content:not([aria-hidden])");
      visibleTab.setAttribute("aria-hidden", "true");
      const tab = document.querySelector("#" + id);
      tab.removeAttribute("aria-hidden");
      tabBtn.classList.add("tabs__tab--active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Init 'Randomize' button
  const randomizeBtn = document.querySelector("#randomize");
  randomizeBtn.addEventListener("click", askToRandomize);

  // Init 'Copy' buttons
  initCopyButton("html", "HTML");
  initCopyButton("css", "CSS");
  initCopyButton("js", "JavaScript");

  // Init auto code selection
  [...document.querySelectorAll(".layout-generator-codes code")].forEach((codeEl) => {
    codeEl.addEventListener("click", () => {
      if (!isLocalhost) window.getSelection().selectAllChildren(codeEl);
    });
  });

  // Init 'Download' button
  const downloadBtn = document.querySelector("#downloadBtn");
  downloadBtn.addEventListener("click", startDownload);

  // Scroll to Top
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function initSettings() {
  const settingEls = document.querySelectorAll("input, select");
  [...settingEls].forEach((settingEl) => {
    const nameOfSetting = settingEl.getAttribute("name");

    dealWithDependency(settingEl);

    settingEl.addEventListener("change", () => {
      settings[nameOfSetting] = settingEl.getAttribute("type") == "checkbox" ? settingEl.checked : settingEl.value;
      dealWithDependency(settingEl);
      updatePreview();
      saveSettingsCookie();
      askBeforeRandomize = true;
    });

    // Also update when user types:
    settingEl.addEventListener("input", () => {
      if (settingEl.getAttribute("type") == "text") {
        settings[nameOfSetting] = settingEl.getAttribute("type") == "checkbox" ? settingEl.checked : settingEl.value;
        dealWithDependency(settingEl);
        updatePreview();
      }
    });
  });
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

function initPreviewControls() {
  const zoomControlBtns = document.querySelectorAll(".zoom-btn");
  [...zoomControlBtns].forEach((zoomControlBtn) => {
    zoomControlBtn.addEventListener("click", () => {
      const activeBtn = document.querySelector(".zoom-btn--active");
      activeBtn.classList.remove("zoom-btn--active");
      zoomControlBtn.classList.add("zoom-btn--active");

      const id = zoomControlBtn.getAttribute("id").replace("zoom", "");
      if (id == "Auto") {
        autoResizePreview();
      } else {
        const zoomPercent = parseInt(id);
        setPreviewZoom(zoomPercent);
      }
    });
  });

  // Init preview sizing on window resize
  autoResizePreview();
  window.addEventListener(
    "resize",
    debounce(() => autoResizePreview(), 200, false),
    false
  );
  window.addEventListener("orientationchange", () => autoResizePreview(), false);
}

/*
	ZOOM
*/

function autoResizePreview() {
  const activeBtn = document.querySelector(".zoom-btn--active");
  activeBtn.classList.remove("zoom-btn--active");
  document.querySelector("#zoomAuto").classList.add("zoom-btn--active");

  const widthAvailable = document.querySelector("#right").getBoundingClientRect().width;
  let requiredWidth = 1300;

  //   let requiredWidth = settings["width"] == "small" ? 1000 : 1200;
  //   requiredWidth = requiredWidth + 100;
  let zoomPercent = (widthAvailable / requiredWidth) * 100;
  if (widthAvailable >= requiredWidth) {
    setPreviewZoom(100);
    document.querySelector("#zoomAuto").innerHTML = "Auto (100%)";
  } else {
    setPreviewZoom(zoomPercent);
    document.querySelector("#zoomAuto").innerHTML = "Auto (" + Math.floor(zoomPercent) + "%)";
  }
  document.querySelector("#preview").style.width = requiredWidth + "px";
}

function setPreviewZoom(zoomPercent) {
  if (zoomPercent == 100) {
    document.querySelector("#preview").style.transform = "none";
  } else {
    let zoom = zoomPercent / 100;
    document.querySelector("#preview").style.transform = "scale(" + zoom + ")";
  }
}

/*
	SAVE/LOAD
*/

function saveSettingsCookie() {
  localStorage.setItem(COOKIE_NAME, JSON.stringify(settings));
}

function loadSettingsIntoDOM() {
  const layoutGenerator = document.querySelector("#tab");
  const settingEls = layoutGenerator.querySelectorAll("input, select");
  jscolor.install();
  [...settingEls].forEach((settingEl) => {
    const nameOfSetting = settingEl.getAttribute("name");

    if (settings[nameOfSetting] !== undefined) {
      // load setting
      if (settingEl.getAttribute("type") == "checkbox") {
        settingEl.checked = settings[nameOfSetting];
      } else if (settingEl.getAttribute("data-jscolor")) {
        settingEl.jscolor.fromString(settings[nameOfSetting]);
      } else {
        settingEl.value = settings[nameOfSetting];
      }
    }
  });
}

/*
	RANDOMIZE
*/

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
  const settingEls = document.querySelector("#tab").querySelectorAll("input, select");
  [...settingEls].forEach((settingEl) => {
    dealWithDependency(settingEl);
  });
  updatePreview();
  askBeforeRandomize = false;
}

/*
	PREVIEW + CODE GENERATOR
*/

function updatePreview() {
  if (isLocalhost) {
    console.log("%c Generating layout with these settings:", "font-size: 14pt;");
    console.log(settings);
  } else {
    console.clear();
    console.log("%c Use the 'Code' tab to get the code! Don't copy anything from the inspector!", "font-size: 12pt;");
  }

  document.querySelector("#css").innerHTML = "<style>" + getCSS(settings).replace("body {", "#preview {") + "</style>";
  document.querySelector("#preview").innerHTML = getHTML(settings, false, true, randomPicsumID);

  if ((settings["font"] == "custom" || settings["headingFont"] == "custom") && settings["customFontName"] && settings["customFontUrl"] && settings["customFontUrlForPreview"]) {
    // Load Custom Font for Preview
    var customFontFace = new FontFace("'" + settings["customFontName"] + "'", "url(" + settings["customFontUrlForPreview"] + ")");
    customFontFace
      .load()
      .then(function (loaded_face) {
        document.fonts.add(loaded_face);
      })
      .catch(function (err) {
        console.error("Error loading custom font face: " + err.message);
      });
  }
}

function generateCode() {
  updatePreview();

  html = getHTML(settings, settings.jsLayout, false, randomPicsumID);
  css = getCSS(settings);
  js = getJS(getBefore(settings), getAfter(settings));

  document.querySelector("#output-html").innerHTML = escape(html);
  document.querySelector("#output-css").innerHTML = escape(css);
  if (settings.jsLayout) {
    document.querySelector(".layout-generator-codes").classList.remove("layout-generator-codes--no-js");
    document.querySelector("#output-js").innerHTML = escape(js);
  } else {
    document.querySelector(".layout-generator-codes").classList.add("layout-generator-codes--no-js");
  }

  // code highlight:
  document.querySelector("#output-html").removeAttribute("data-highlighted");
  document.querySelector("#output-css").removeAttribute("data-highlighted");
  document.querySelector("#output-js").removeAttribute("data-highlighted");
  hljs.configure({
    cssSelector: "#tab pre code",
  });
  hljs.highlightAll();
}

/*
	HELPERS
*/

function escape(htmlStr) {
  return htmlStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").trim();
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

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function startDownload() {
  var JSZip = require("jszip");
  var zip = new JSZip();

  html = getHTML(settings, settings.jsLayout, false, randomPicsumID);
  css = getCSS(settings);
  js = getJS(getBefore(settings), getAfter(settings));

  zip.file("index.html", html);
  zip.file("style.css", css);
  if (settings.jsLayout) zip.file("layout.js", js);

  zip.generateAsync({ type: "blob" }).then(function (blob) {
    var FileSaver = require("file-saver");
    FileSaver.saveAs(blob, "website.zip");
  });
}

/*
	SETTINGS
*/

function dealWithDependency(settingEl) {
  const layoutGenerator = document.querySelector(".layout-generator-settings");
  let shouldBeEnabled;

  if (settingEl.getAttribute("name").toLowerCase().includes("font")) {
    settingEl.style.fontFamily = settingEl.value == "custom" ? "sans-serif" : settingEl.value;
  }

  const hasDependency = settingEl.closest("[data-dependency]");
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

      const menuLeftDisappears = sMenu.value == "leftSidebar" && activeValue != "left" && activeValue != "both";
      const menuRightDisappears = sMenu.value == "rightSidebar" && activeValue != "right" && activeValue != "both";

      if (menuLeftDisappears || menuRightDisappears) {
        // Automatically change menu option so that there is a menu

        if (menuLeftDisappears && activeValue == "right") {
          sMenu.value = "rightSidebar";
        } else if (menuRightDisappears && activeValue == "left") {
          sMenu.value = "leftSidebar";
        } else {
          sMenu.value = "header";
        }

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
      let onlyAllowToggle = settingEl && settingEl.value == "header";
      if (onlyAllowToggle) {
        layoutGenerator.querySelector("[name=submenus]").disabled = true;
        layoutGenerator.querySelector("[name=submenus]").value = "toggleOnClick";
        layoutGenerator.querySelector("[name=submenus]").closest(".layout-generator-setting").classList.add("layout-generator-setting--disabled");
      } else {
        layoutGenerator.querySelector("[name=submenus]").disabled = false;
        layoutGenerator.querySelector("[name=submenus]").closest(".layout-generator-setting").classList.remove("layout-generator-setting--disabled");
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
    } else if (dependency == "customFont") {
      const activateCustomFont = settings["font"] == "custom" || settings["headingFont"] == "custom";
      const customFontWrapper = document.querySelector("#customFont");
      if (activateCustomFont) {
        customFontWrapper.style.display = "block";
      } else {
        customFontWrapper.style.display = "none";
      }
    }
  }
}
