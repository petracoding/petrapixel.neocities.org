export function initWidgetBuilders() {
  [...document.querySelectorAll(".widget-builder")].forEach((el) => {
    initWidgetBuilder(el);
  });
}

function initWidgetBuilder(wrapperEl) {
  const widgetName = wrapperEl.getAttribute("data-widget");
  const settingsStr = wrapperEl.getAttribute("data-settings");
  let outputHtml = "";
  const settings = [];

  settingsStr.split("&").forEach((substr) => {
    const substrArr = substr.split("=");
    settings.push([substrArr[0], substrArr[1]]);
  });

  outputHtml += `<div class='widget-builder__settings'>`;

  settings.forEach((setting) => {
    outputHtml += getSettingHtml(setting);
  });

  outputHtml += `</div>
  <div class='widget-builder__preview'>
    <b>Preview:</b>
    <iframe src="/widgets/${widgetName}?${settingsStr}" frameborder="0" title="Widget Preview"></iframe>
    <b style="margin-top:10px">Code:</b>
    <textarea class='widget-builder__code code-textarea' rows="10"><iframe src="https://petracoding.github.io/neocities/widgets/${widgetName}?${settingsStr}" frameborder="0" title="Widget"></iframe>
    </textarea>
    <button type="button" class="widget-builder__copy">Copy to Clipboard</button>
  </div>`;

  wrapperEl.innerHTML = outputHtml;

  // Done building. Now let's init listeners.

  const inputEls = wrapperEl.querySelectorAll("input, textarea, select");
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("change", () => {
      settingHasChanged(wrapperEl, inputEl, settings, widgetName);
    });
    if (inputEl.getAttribute("type") !== "color") {
      inputEl.addEventListener("input", () => {
        settingHasChanged(wrapperEl, inputEl, settings, widgetName);
      });
    }
  });

  const copyBtn = wrapperEl.querySelector(".widget-builder__copy");

  copyBtn.addEventListener("click", () => {
    copyToClipboard(wrapperEl.querySelector(".widget-builder__code").value);
    copyBtn.innerHTML = "Copied!";
    setTimeout(() => {
      copyBtn.innerHTML = "Copy to Clipboard";
    }, 1000);
  });
}

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    return window.clipboardData.setData("Text", text);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
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

function settingHasChanged(wrapperEl, inputEl, settings, widgetName) {
  const settingName = inputEl.getAttribute("name");
  const newValue =
    inputEl.getAttribute("type") == "checkbox"
      ? inputEl.checked
        ? "1"
        : "0"
      : inputEl.getAttribute("type") == "number"
        ? inputEl.value + "px"
        : inputEl.value;

  settings.forEach((setting) => {
    if (setting[0] == settingName) {
      setting[1] = newValue;
    }
  });

  let newSettingsStr = "";
  let isFirst = true;
  settings.forEach((s) => {
    if (!isFirst) {
      newSettingsStr += "&";
    }
    newSettingsStr += s[0] + "=" + s[1];
    isFirst = false;
  });

  console.log(newSettingsStr);

  const srcString = "/widgets/" + widgetName + "?" + newSettingsStr;

  // update preview
  wrapperEl.querySelector("iframe").src = srcString + "&nocache=" + Date.now();
  setTimeout(() => {
    wrapperEl.querySelector("iframe").contentWindow.location.reload(); // necessary for SOME changes for some reason??
    // in a timeout so that it for sure happens AFTER setting the src attribute
  }, 100);

  const code = `<iframe src="https://petracoding.github.io/neocities${srcString}" frameborder="0" title="Widget"></iframe>`;

  wrapperEl.querySelector(".widget-builder__code").value = code;
}

function getSettingHtml(setting) {
  const settingName = setting[0];
  const value = setting[1];
  const type = getSettingType(settingName, value);

  const label = type == "number" ? settingName + " (px)" : settingName;
  const isRequired = settingName == "username" || settingName == "pollcode";
  const defaultValue = type == "number" ? value.replace("px", "") : value;

  let inputHtml = `<input type="${type}" name="${settingName}" value="${defaultValue}" ${isRequired ? "required" : ""} ${type == "checkbox" && value == "1" ? "checked" : ""} />`;

  if (type == "textarea") {
    inputHtml = `<textarea name="${settingName}">${defaultValue}</textarea>`;
  }

  if (type == "font") {
    inputHtml = `<select name="${settingName}" data-dependency="customFont">
                    <optgroup label="Serif">
                      <option value="Times New Roman">
                        Times New Roman
                      </option>
                      <option value="Georgia">Georgia</option>
                      <option value="Garamond">Garamond</option>
                    </optgroup>
                    <optgroup label="Sans Serif">
                      <option value="Arial">Arial</option>
                      <option value="Verdana">Verdana</option>
                      <option value="Helvetica">Helvetica</option>
                    </optgroup>
                    <optgroup label="Others">
                      <option value="Courier New">Courier New</option>
                      <option value="Brush Script MT">Brush Script MT</option>
                    </optgroup>
                  </select>`;
  }

  return `
  <div class="widget-builder__setting">
	<b>${capitalizeFirstLetter(label)}${isRequired ? "*" : ""}:</b>
	${inputHtml}
  </div>
	`;
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function getSettingType(settingName, value) {
  if (value.includes("px") && !isNaN(value.replace("px", ""))) {
    return "number";
  } else if (settingName == "font-family") {
    return "font";
  } else if (settingName != "line-height" && (value == 1 || value == 0)) {
    return "checkbox";
  } else if (value.length == 7 && value.split("")[0] == "#") {
    return "color";
  } else if (settingName == "pollcode") {
    return "textarea";
  } else {
    return "text";
  }
}
