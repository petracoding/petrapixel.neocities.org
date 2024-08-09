let checkboxes;

export function initChecklist() {
  const checklistMain = document.querySelector(".checklist-main");
  if (!checklistMain) return;

  checkboxes = checklistMain.querySelectorAll("input[type=checkbox]");

  [...checkboxes].forEach((checkbox) => {
    checkbox.checked = localStorage.getItem(getIdentifierOfCheckbox(checkbox)) === "true" ? true : false;

    checkbox.addEventListener("change", () => {
      console.log(getIdentifierOfCheckbox(checkbox));
      localStorage.setItem(getIdentifierOfCheckbox(checkbox), checkbox.checked);
    });
  });
}

function getIdentifierOfCheckbox(inputEl) {
  const liEl = inputEl.closest("li");
  if (!liEl) return "error";
  const aEl = liEl.querySelector("a");
  if (!aEl) return "webpack";
  return aEl.innerHTML;
}
