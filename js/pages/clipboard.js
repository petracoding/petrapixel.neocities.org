export function initClipboard() {
  if (!document.querySelector(".clipboard-section")) return;

  const symbols = document.querySelectorAll(".clipboard-section p i");
  [...symbols].forEach((symbol) => {
    symbol.addEventListener("click", () => {
      copyToClipboard(symbol.innerHTML);
      const originalTabTitle = document.title;
      document.title = "copied!";
      setTimeout(function () {
        document.title = originalTabTitle;
      }, 800);
    });
  });
}

// https://stackoverflow.com/a/33928558
function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData("Text", text);
  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return prompt("Copy to clipboard: Ctrl+C, Enter", text);
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
