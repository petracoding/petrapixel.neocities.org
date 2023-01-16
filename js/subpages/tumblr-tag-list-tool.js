document.addEventListener("DOMContentLoaded", function (event) {
  if (document.querySelector(".tumblr-tag-list-tool")) {
    const eachTagInNewLineCheckbox = document.querySelector("#eachTagInNewLine");
    const separatorWrapEl = document.querySelector(".separator-wrap");

    prepare();
    eachTagInNewLineCheckbox.addEventListener("change", prepare);

    function prepare() {
      if (eachTagInNewLineCheckbox.checked) {
        separatorWrapEl.style.display = "none";
      } else {
        separatorWrapEl.style.display = "block";
      }
    }

    document.querySelector("#go").addEventListener("click", () => {
      console.log("TEST");
      const outputEl = document.querySelector("#output");
      const input = document.querySelector("textarea").value;
      const addHashtags = document.querySelector("#addHashtags").checked;
      const useSearch = document.querySelector("#useSearch").checked;
      const eachTagInNewLine = eachTagInNewLineCheckbox.checked;
      const url = document.querySelector("#url").value;
      const separator = document.querySelector("#separator").value || "";
      const tags = input.split(/[\n,]+/);
      let o = "";

      tags.forEach((tag) => {
        tag = tag.trim();
        if (tag !== "," && tag !== "") {
          const tagSafeForString = tag;
          o +=
            "<a href='https://" +
            (url ? url + "." : "") +
            "tumblr.com" +
            (useSearch ? "/search/" : "/tagged/") +
            tagSafeForString +
            "'>" +
            (addHashtags ? "#" : "") +
            tag +
            "</a>" +
            (eachTagInNewLine ? "<br/>" : separator);
        }
      });

      outputEl.innerHTML = o;
    });
  }
});
