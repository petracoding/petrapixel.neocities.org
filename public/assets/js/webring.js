// webstring by june @ webcatz.neocities.org

// webring settings
webring = {
  // list of sites in the ring
  sites: ["https://petrapixel.neocities.org/"],

  // html inserted as your widget
  // PREV and NEXT get replaced with neighboring site urls
  widget: `
    <div id="petrapixel-webring" style="display: flex; gap: 8px">
      <a href="PREV">prev</a>
      <div>webring</div>
      <a href="RANDOM">random</a>
      <a href="NEXT">next</a>
    </div>
  `,

  // html inserted instead of your widget on sites that aren't in the ring
  error: "<div>This site isn't part of the webring yet.</div>",
};

// code
webring.index = location.href.startsWith("file://") ? 0 : webring.sites.findIndex((url) => location.href.startsWith(url));
let index = webring.index;

if (document.querySelector("#webring-iframe-widget")) {
  // iframe code (by petra)
  const params = getParameters();
  if (params["id"]) {
    console.log("Webring code loaded with index " + params["id"]);
    index = params["id"];
  }
}

// test code (by petra)
if (location.href.includes("http://localhost:8080")) {
  index = 0;
}

if (index === -1) document.currentScript.outerHTML = webring.error;
else {
  webring.widget = webring.widget.replace("PREV", webring.sites.at(index - 1));
  webring.widget = webring.widget.replace("NEXT", webring.sites[(index + 1) % webring.sites.length]);
  webring.widget = webring.widget.replace("RANDOM", webring.sites[Math.floor(Math.random() * webring.sites.length)]);
  document.currentScript.outerHTML = webring.widget;
}

delete webring;

// helpers
function getParameters() {
  let prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
  let params = {};
  let prmarr = prmstr.split("&");
  for (let i = 0; i < prmarr.length; i++) {
    let tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}
