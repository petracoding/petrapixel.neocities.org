document.addEventListener("DOMContentLoaded", function () {
  [...document.querySelectorAll("[data-image-vomit]")].forEach((el) => initImageVomit(el));
});

/*
	Todo:
	- on window resize OR use %?
	- min padding
*/

const usedPositions = []; // [x1, x2, y1, y2]

function initImageVomit(el) {
  const containerRect = el.getBoundingClientRect();
  const containerWidth = Math.floor(containerRect.width);
  const containerHeight = Math.floor(containerRect.height);
  const imageEls = el.getElementsByTagName("*");
  const allowedOverlapStr = el.getAttribute("data-image-vomit");
  const allowedOverlap = allowedOverlapStr ? parseInt(allowedOverlapStr) : 0;

  [...imageEls].forEach((imageEl) => {
    const isActualImage = imageEl.getAttribute("src");
    if (isActualImage) {
      imageEl.addEventListener("load", () => {
        positionImage(imageEl, containerWidth, containerHeight, allowedOverlap);
      });
    } else {
      positionImage(imageEl, containerWidth, containerHeight, allowedOverlap);
    }
  });
}

function positionImage(imageEl, containerWidth, containerHeight, allowedOverlap) {
  const rect = imageEl.getBoundingClientRect();
  const randomPosition = getRandomPosition(containerWidth, containerHeight, rect.width, rect.height, allowedOverlap);
  imageEl.style.left = randomPosition[0] + "px";
  imageEl.style.top = randomPosition[1] + "px";
  usedPositions.push([Math.floor(randomPosition[0]), Math.floor(randomPosition[0] + rect.width), Math.floor(randomPosition[1]), Math.floor(randomPosition[1] + rect.height)]);
}

function getRandomPosition(containerWidth, containerHeight, imageWidth, imageHeight, allowedOverlap) {
  const min = 0;
  const maxX = containerWidth - imageWidth;
  const maxY = containerHeight - imageHeight;
  let positionIsTaken,
    randomX,
    randomY,
    attempts = 0;

  do {
    randomX = Math.floor(Math.random() * (maxX - min + 1) + min);
    randomY = Math.floor(Math.random() * (maxY - min + 1) + min);
    positionIsTaken = isPositionTaken(randomX, randomX + imageWidth, randomY, randomY + imageHeight, allowedOverlap);

    attempts++;
  } while (positionIsTaken && attempts < 100);

  return [randomX, randomY];
}

function isPositionTaken(x1, x2, y1, y2, allowedOverlap) {
  let doesOverlap = false;
  [...usedPositions].forEach((usedPosition) => {
    if (!doesOverlap) {
      doesOverlap = areRectanglesOverlap(x1 - allowedOverlap, x2 - allowedOverlap, y1 - allowedOverlap, y2 - allowedOverlap, usedPosition[0], usedPosition[1], usedPosition[2], usedPosition[3]);
    }
  });
  return doesOverlap;
}

const areRectanglesOverlap = (ax1, ax2, ay1, ay2, bx1, bx2, by1, by2) => {
  // The first rectangle is completely under the second or vice versa
  if (ay1 > by2 || by1 > ay2) return false;

  // The first rectangle is completely to the right of the second or vice versa
  if (ax1 > bx2 || bx1 > ax2) return false;

  return true;
};
