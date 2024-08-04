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
    const propertiesForClasses = [d.tags, d.genres, d.platform, d.ageRange, d.gameType, d.ongoing ? "ongoing" : "ended"].join(",");
    const titleClass = d.title.length > 20 ? " rec__title--long" : "";

    let linklabel = false;
    switch (typeStr) {
      case "movies":
        linklabel = "letterboxd";
        break;
      case "tv-shows":
        linklabel = "Serializd";
        break;
      case "books":
        linklabel = "goodreads";
        break;
      case "games":
        linklabel = "backloggd";
        break;
    }

    const authorStr = d.author ? `<p class="rec__author">${d.author}</p>` : "";
    const seasonStr = typeStr == "tv-shows" ? (d.seasons ? d.seasons + (d.seasons == 1 ? " season, " : " seasons, ") : "") : "";
    const tvShowStatusStr = typeStr == "tv-shows" ? `<p class="rec__author">(${seasonStr}${d.ongoing ? "ongoing" : "ended"})</p>` : "";
    const ratingStr = d.rating ? `<p><strong>My rating:</strong> <span class="rec__stars">${getRatingStr(d.rating)}</span></p>` : "";
    const yearStr = d.year ? `<p><strong>${typeStr == "tv-shows" ? "Start " : ""}Year:</strong> ${d.year}</p>` : "";
    const ageRangeStr = d.ageRange ? `<p><strong>Age Range:</strong> ${d.ageRange}</p>` : "";
    const gameInfoStr = typeStr == "games" ? `<p><strong>Platform:</strong> ${d.platform}</p><p><strong>Type:</strong> ${d.gameType}</p>` : "";
    const linkStr = linklabel ? `<div class="rec__link"><a href="${d.link}" target="_blank">${linklabel}</a></div>` : "";
    const genresStr = d.genres ? `<p><strong>Genres:</strong> ${d.genres}</p>` : "";
    const fandomStr = typeStr == "ships" ? `<p class="rec__author">${d.fandom}</p>` : "";
    const shipStr = typeStr == "ships" ? `${d.who}` : "";
    const tagsStr = d.tags ? `<p><strong>Tags:</strong> ${d.tags.replaceAll("-", " ")}</p>` : "";
    const ifYouLikeStr = d.ifYouLike ? `  ‍ ‍ ‍‍ ‍ You will like this if you enjoy ${d.ifYouLike}!` : ``;
    const popupStr = d.why ? d.why.replaceAll("'", "´") + ifYouLikeStr.replaceAll("'", "´") : "";
    const whyStr = d.why ? `<button class='rec__why' onClick='alert("${popupStr}");'>Let me convince you!</button>` : "";

    const html = `
	  <div class="rec ${getRatingClass(d.rating)} ${turnToDecade(d.year)} ${turnToClasses(propertiesForClasses)}">
	  	<div class="rec__inner">
              <div class="rec__image"><img src="${d.image}" /></div>
              <div class="rec__info">
                <div class="rec__title ${titleClass}">${d.title}</div>
				${authorStr}
				${tvShowStatusStr}
				${fandomStr}
				<div class="rec__desc">
					${ratingStr}
					${yearStr}
					${ageRangeStr}
					${gameInfoStr}
					${genresStr}
					${shipStr}
					${tagsStr}
				</div>
				${linkStr}
				${whyStr}
              </div>
            </div>
		</div>`;

    if (d.title.toLowerCase() !== "example") {
      output += html;
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
  if (ratingValue == 2) return "★★★★<small>½</small>";
  if (ratingValue == 3) return "★★★★★";
  return "";
}

function turnToDecade(str) {
  if (!str) return "";
  const year = parseInt(str);
  if (year > 1980) {
    const decade = Math.floor(year / 10) * 10;
    return ("" + decade).replace("19", "") + "s";
  }

  if (year >= 1950) return "1950-79";
  if (year >= 1900) return "1900-49";
  return "1800s";
}

function turnToClasses(str) {
  if (!str) return "";
  return str.toLowerCase().replaceAll(" ", "").replaceAll(",", " ");
}

// Init:

function initIsotope() {
  if (!document.querySelector(".rec-filters")) return;

  const options = {
    itemSelector: ".rec",
    percentPosition: true,
    layoutMode: "fitRows",
    masonry: {
      // use element for option
      columnWidth: ".rec",
    },
  };

  let $isotope = $(".isotope-items").isotope(options);
  $isotope.imagesLoaded().progress(function () {
    $isotope.isotope(options);
  });
  let isotopeFilters = {};

  $(".rec-filters button").click(function () {
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
