export function initAboutMePage() {
  initNavigation();
}

function initNavigation() {
  const navigationLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  const currentSection = window.location.hash.substring(1); // get from url
  if (currentSection) {
    document.querySelector("section.visible").classList.remove("visible");
    document.querySelector("nav .active").classList.remove("active");
    document.querySelector("#" + currentSection).classList.add("visible");
    document
      .querySelector("nav a[href*='" + currentSection + "']")
      .closest("li")
      .classList.add("active");
  }

  [...navigationLinks].forEach((navigationLink) => {
    navigationLink.addEventListener("click", () => {
      [...navigationLinks].forEach((el) => {
        if (el.getAttribute("href") == navigationLink.getAttribute("href")) {
          el.closest("li").classList.add("active");
        } else {
          el.closest("li").classList.remove("active");
        }
      });
      [...sections].forEach((section) => {
        if (section.getAttribute("id") == navigationLink.getAttribute("href").replace("#", "")) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    });
  });
}
