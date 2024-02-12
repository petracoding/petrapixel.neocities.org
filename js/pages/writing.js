document.addEventListener("DOMContentLoaded", function () {
  const chartEl = document.querySelector(".writing-chart");
  if (!chartEl) return;

  const bars = document.querySelectorAll(".writing-chart > div");
  [...bars].forEach((bar) => {
    const valueAbsolute = bar.getAttribute("data-value");
    const value = valueAbsolute / 10000;

    // height
    if (valueAbsolute == 0) {
      bar.setAttribute("style", "--fy: " + 0.01);
    } else {
      bar.setAttribute("style", "--fy: " + value);
    }

    // color
    if (valueAbsolute < 1000) {
      bar.classList.add("under");
    } else if (valueAbsolute >= 5000) {
      bar.classList.add("over");
    }

    // label
    if (valueAbsolute >= 1000) {
      const kRounded = Math.round(valueAbsolute / 1000);
      const title = bar.getAttribute("data-title");
      bar.setAttribute("data-title", title + " (" + kRounded + "k)");
    }
  });
});
