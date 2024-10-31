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
