import { copyToClipboard } from "../helpers";

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
