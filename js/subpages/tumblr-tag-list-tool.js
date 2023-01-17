document.addEventListener("DOMContentLoaded", function (event) {
  if (document.querySelector(".tumblr-tag-list-tool")) {
    const eachTagInNewLineCheckbox = document.querySelector("#eachTagInNewLine");
    const separatorWrapEl = document.querySelector(".separator-wrap");
    const groupTagsCheckbox = document.querySelector("#groupTags");
    const groupTagsWrapEl = document.querySelector(".group-tags-wrap");

    prepare();
    eachTagInNewLineCheckbox.addEventListener("change", prepare);
    groupTagsCheckbox.addEventListener("change", prepare);

    function prepare() {
      if (eachTagInNewLineCheckbox.checked) {
        separatorWrapEl.style.display = "none";
      } else {
        separatorWrapEl.style.display = "block";
      }
      if (groupTagsCheckbox.checked) {
        groupTagsWrapEl.style.display = "block";
      } else {
        groupTagsWrapEl.style.display = "none";
      }
    }

    document.querySelector("#go").addEventListener("click", () => {
      const outputEl = document.querySelector("#output");
      const input = document.querySelector("textarea").value;
      const addHashtags = document.querySelector("#addHashtags").checked;
      const useSearch = document.querySelector("#useSearch").checked;
      const eachTagInNewLine = eachTagInNewLineCheckbox.checked;
      const groupTags = groupTagsCheckbox.checked;
      const useHeadings = groupTags && document.querySelector("#headings").checked;
      const url = document.querySelector("#url").value;
      const separator = document.querySelector("#separator").value || "";
      let o = "";
      let isHeading = false;
      let isFirstGroup = true;

      const groups = groupTags ? input.split(/\n\n/) : [input];

      groups.forEach((group) => {
        const tags = group.split(/[\n,#]+/);
        isHeading = useHeadings;
        if (groupTags && !isFirstGroup) {
          o += "<br/>";
        }
        tags.forEach((tag) => {
          tag = tag.trim();
          if (tag !== "," && tag !== "") {
            if (isHeading) {
              o += tag + "<br/>";
              isHeading = false;
            } else {
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
          }
        });
        isFirstGroup = false;
      });

      outputEl.innerHTML = o;
    });
  }
});
