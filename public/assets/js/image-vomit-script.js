/**
 * IMAGE VOMIT SCRIPT
 * by petra
 * https://petrapixel.neocities.org/
 *
 * - don't distribute without credit.
 * - don't claim as your own.
 * - don't judge how messy the code is >.<
 */

const usedPositions = []; // [x1, x2, y1, y2]

document.addEventListener("DOMContentLoaded", () => {
  console.log("%c Image Vomit Script by petra (petrapixel.neocities.org) loaded", "font-size: 14pt; color: purple");
  [...document.querySelectorAll("[data-image-vomit]")].forEach((el) => initImageVomit(el));
});

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
  const imageRect = imageEl.getBoundingClientRect();
  const randomPosition = getRandomPosition(containerWidth, containerHeight, imageRect.width, imageRect.height, allowedOverlap);
  const leftPx = randomPosition[0];
  const leftPercent = (leftPx / containerWidth) * 100;
  const topPx = randomPosition[1];
  const topPercent = (topPx / containerHeight) * 100;
  imageEl.style.left = leftPercent + "%";
  imageEl.style.top = topPercent + "%";
  imageEl.setAttribute("data-hint", "The 'left' and 'top' positioning of this element were automatically added by petrapixel's 'Image Vomit Script'.");
  usedPositions.push([Math.floor(leftPx), Math.floor(leftPx + imageRect.width), Math.floor(topPx), Math.floor(topPx + imageRect.height)]);
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
