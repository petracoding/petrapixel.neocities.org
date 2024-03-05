document.addEventListener("DOMContentLoaded", function () {
  [...document.querySelectorAll("[data-image-vomit]")].forEach((el) => initImageVomit(el));
});

function initImageVomit(el) {
  const containerRect = el.getBoundingClientRect();
  const containerWidth = Math.floor(containerRect.width);
  const containerHeight = Math.floor(containerRect.height);

  const imageEls = el.getElementsByTagName("*");
  const images = []; // image: [el, width, height]
  [...imageEls].forEach((imageEl) => {
    imageEl.addEventListener("load", () => {
      const rect = imageEl.getBoundingClientRect();
      images.push([imageEl, rect.width, rect.height]);
      positionImage(image, containerWidth, containerHeight, images);
    });
  });

  [...images].forEach((image) => {});
}

function positionImage(image, containerWidth, containerHeight, images) {
  console.log(image);
  console.log(containerHeight);
  console.log(containerWidth);
}
