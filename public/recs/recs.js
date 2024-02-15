const isLocalhost = window.location.href.includes("http://localhost");
const noCache = "?nocache=" + new Date().getTime();

function loadData(typeStr) {
  const recsFile = isLocalhost ? `http://localhost:52330/public/recs/recs.json` : `https://petrapixel.neocities.org/recs/recs.json`;
  fetch(recsFile + noCache)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      fillData(data[typeStr], typeStr);
    })
    .catch((error) => console.error("Unable to fetch data:", error));
}

function fillData(data, typeStr) {
  let output = "";
  [...data].forEach((d) => {
    if (typeStr == "movies") {
      output += `
	  <div class="rec ${getRatingClass(d.rating)} ${turnToDecade(d.year)} ${turnToClasses(d.genres)}">
              <div class="rec__image"><img src="${d.poster}" /></div>
              <div class="rec__info">
                <div class="rec__title">${d.title}</div>
                <div class="rec__desc">
                  <p><strong>Rating:</strong> ${getRatingStr(d.rating)}</p>
                  <p><strong>Year:</strong> ${d.year}</p>
                  <p><strong>Genres:</strong> ${d.genres}</p>
                </div>
                <div class="rec__link"><a href="${d.link}">letterboxd</a></div>
              </div>
            </div>`;
    }
  });
  document.querySelector(".isotope-items").innerHTML = output;
  initIsotope();
}

function getRatingClass(ratingValue) {
  if (ratingValue == 1) return "r1";
  if (ratingValue == 2) return "r2";
  if (ratingValue == 3) return "r3";
  return "";
}

function getRatingStr(ratingValue) {
  if (ratingValue == 1) return "★★★★";
  if (ratingValue == 2) return "★★★<small>½</small>";
  if (ratingValue == 3) return "★★★★";
  return "";
}

function turnToDecade(str) {
  const year = parseInt(str);
  if (year > 1980) {
    const decade = Math.ceil(year / 10) * 10;
    return ("" + decade).replace("19", "") + "s";
  }

  if (year >= 1950) return "1950-79";
  return "1900-49";
}

function turnToClasses(str) {
  return str.toLowerCase().replaceAll(" ", "").replaceAll(",", " ");
}

// Init:

function initIsotope() {
  if (!document.querySelector(".rec-filters")) return;

  var $isotope = $(".isotope-items").isotope({
    itemSelector: ".rec",
  });
  var isotopeFilters = {};

  $("button").click(function () {
    var $buttonGroup = $(this).parents(".rec-filters__buttons");
    var filterGroup = $buttonGroup.attr("data-filter-group");
    isotopeFilters[filterGroup] = $(this).attr("data-filter");
    var filterValue = concatValues(isotopeFilters);
    $isotope.isotope({ filter: filterValue });

    // active state
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });

  function concatValues(obj) {
    var value = "";
    for (var prop in obj) {
      value += obj[prop];
    }
    return value;
  }
}
