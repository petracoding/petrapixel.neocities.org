let output = "";
let count = 0;
let currentYearTags;
let currentMonthTags;

function initMediaLog() {
  count = 0;

  // Read
  const yearEls = document.querySelectorAll("#media-log-content > [data-year]");
  [...yearEls].forEach((yearEl) => {
    currentYearTags = new Set([]);
    const year = yearEl.getAttribute("data-year");
    const months = buildMonths(yearEl, year);
    const space = " ";
    output += `<h2 class="media-log__item ${year} ${Array.from(currentYearTags).join(space)}">${year}</h2>`;
    output += months;
  });

  document.querySelector(".media-log").innerHTML = output;
  document.querySelector("#total-entries").innerHTML = count;
  initIsotope();
}

function buildMonths(yearEl, year) {
  let monthOutput = "";
  const monthHeadings = yearEl.querySelectorAll("p");
  [...monthHeadings].forEach((monthHeading) => {
    currentMonthTags = new Set([]);
    if (monthHeading.querySelector("em")) {
      const monthHeadingText = monthHeading.querySelector("em").innerHTML;
      const monthEntries = monthHeading.nextElementSibling;
      const entries = buildLines(monthEntries, year);
      monthOutput += `<h3 class="media-log__item ${year} ${Array.from(currentMonthTags).join(" ")}">${monthHeadingText}</h3>`;
      monthOutput += entries;
    }
  });
  return monthOutput;
}

function buildLines(markup, year) {
  let entriesOutput = "";
  const entries = markup.querySelectorAll("li");
  [...entries].forEach((entry) => {
    const markup = entry.innerHTML.replaceAll('<span class="gend-link"></span>', "").replaceAll(" ♡", "");
    const strongEl = entry.querySelector("strong");

    const types = getTypes(markup);
    const info = entry.querySelector("em") ? entry.querySelector("em").innerHTML : getInfo(markup);
    let title = strongEl ? strongEl.innerHTML : getTitle(markup, info);
    title = title.replace(info, "").trim().replace("(↺)", "").replace("↺", "").replace("ﾐ", "").replace("♪", "").replace(/,$/, "").trim();
    const re = markup.includes("↺");
    const bolded = strongEl ? true : false;

    entriesOutput += buildLine(types, title, info, re, bolded, year);
  });
  return entriesOutput;
}

function getInfo(markup) {
  if (markup.includes("(") && markup.includes(")")) return markup.substring(markup.indexOf("("), markup.indexOf(")") + 1);
  return null;
}

function getTitle(markup, hasInfo) {
  if (markup.includes("ﾐ")) return markup.substr(2, markup.indexOf("ﾐ"));
  if (hasInfo && markup.includes(",")) return markup.substr(2, markup.lastIndexOf(","));
  if (markup.includes("↺")) return markup.substr(2, markup.indexOf("↺"));
  return markup.substr(2);
}

function getTypes(markup) {
  if (markup.includes("∷")) return ["tv"];
  if (markup.includes("ﾐ")) return ["movie", "cinema"];
  if (markup.includes("⋆")) return ["movie"];
  if (markup.includes("▫")) return ["video"];
  if (markup.includes("♪")) return ["book", "audiobook"];
  if (markup.includes("❝")) return ["book"];
  if (markup.includes("⧖")) return ["podcast"];
  if (markup.includes("ϟ")) return ["game"];
  if (markup.includes("๑")) return ["music"];
  if (markup.includes("♡")) return ["ship"];
}

function buildLine(types, title, info, re, bolded, year) {
  count++;
  //   const titleStr = bolded ? `<strong>${title}</strong>` : title;
  const infoStr = info ? `<span class="media-log__entry-info">${info}</span>` : "";
  const tags = `${types.join(" ")} ${re ? "re" : "notre"} ${bolded ? "bolded" : ""}`;
  tags.split(" ").forEach((tag) => {
    currentMonthTags.add(tag);
    currentYearTags.add(tag);
  });
  return `<div class="media-log__item media-log__entry ${year} ${tags}">
	  <span class="media-log__entry-type">${types[0].replace("tv", "tv show")}:</span> 
	  <span class="media-log__entry-title">${title}</span> 
	  ${infoStr}
	  <span class="media-log__entry-re">${re && !infoStr.includes("↺") ? "↺" : ""}</span> 
  </div>`;
}

// ISOTOPE:

function initIsotope() {
  if (!document.querySelector(".rec-filters")) return;

  const options = {
    itemSelector: ".media-log__item",
    percentPosition: true,
    layoutMode: "fitRows",
    masonry: {
      // use element for option
      columnWidth: ".media-log__item",
    },
  };

  let $isotope = $(".media-log").isotope(options);
  //   $isotope.imagesLoaded().progress(function () {
  //     $isotope.isotope(options);
  //   });
  let isotopeFilters = {};

  $("button").click(function () {
    let $buttonGroup = $(this).parents(".rec-filters__buttons");
    let filterGroup = $buttonGroup.attr("data-filter-group");
    isotopeFilters[filterGroup] = $(this).attr("data-filter");
    let filterValue = concatValues(isotopeFilters);
    $isotope.isotope({ filter: filterValue });

    // active state
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });

  function concatValues(obj) {
    let value = "";
    for (let prop in obj) {
      value += obj[prop];
    }
    return value;
  }
}
