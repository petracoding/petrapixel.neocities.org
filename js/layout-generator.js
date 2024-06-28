const settings = {};

export function initLayoutGenerator() {
  const layoutGenerator = document.querySelector(".layout-generator-settings");
  if (!layoutGenerator) return;

  const settingEls = layoutGenerator.querySelectorAll("input, select");
  [...settingEls].forEach((settingEl) => {
    const nameOfSetting = settingEl.getAttribute("name");
    settings[nameOfSetting] = settingEl.value;
    settingEl.addEventListener("change", () => {
      settings[nameOfSetting] = settingEl.value;
      generateCode();
    });
  });

  generateCode();
}

function generateCode() {
  console.log("Generating code with these settings:");
  console.log(settings);

  updatePreview();
}

function updatePreview() {}
