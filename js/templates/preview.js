export function isPreview() {
  return window.location.pathname.includes("templates/");
}

export function getPreviewOptions() {
  let options = {};
  let tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      options[tmp[0]] = decodeURIComponent(tmp[1]);
    });
  return options;
}
