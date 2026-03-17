export function initToggleButtons() {
  const themeBtn = document.querySelector(".toggle-buttons__button--theme");
  const fontBtn = document.querySelector(".toggle-buttons__button--font");
  const soundBtn = document.querySelector(".toggle-buttons__button--sound");

  document.body.classList.add(getCookie("theme", "light-mode"));

  if (getCookie("fontTheme") === "readable") {
    document.body.classList.add("readable-font");
  }

  if (getCookie("soundTheme") === "muted") {
    document.body.classList.add("sound-muted");
  }

  themeBtn.addEventListener("click", () => {
    if (getCookie("theme", "light-mode") === "dark-mode") {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    }
  });

  fontBtn.addEventListener("click", () => {
    if (getCookie("fontTheme") === "readable") {
      document.body.classList.remove("readable-font");
      localStorage.setItem("fontTheme", "default");
    } else {
      document.body.classList.add("readable-font");
      localStorage.setItem("fontTheme", "readable");
    }
  });

  soundBtn.addEventListener("click", () => {
    if (getCookie("soundTheme") === "muted") {
      document.body.classList.remove("sound-muted");
      localStorage.setItem("soundTheme", "default");
    } else {
      document.body.classList.add("sound-muted");
      localStorage.setItem("soundTheme", "muted");
    }
  });
}

function getCookie(cookieName, fallbackValue) {
  const cookie = localStorage.getItem(cookieName);
  if (cookie) return cookie;
  return fallbackValue || "default";
}

export function initSounds() {
  const hoverSounds = document.querySelectorAll("a, button");
  [...hoverSounds].forEach((el) => {
    el.addEventListener("mouseover", () => {
      playSound("audio1");
    });
    el.addEventListener("click", () => {
      playSound("audio1");
    });
  });
  const hoverSounds2 = document.querySelectorAll(
    ".hello-its-me-facts img, .blinkes img, summary, .coding-navigation-category__title",
  );
  [...hoverSounds2].forEach((el) => {
    el.addEventListener("mouseover", () => {
      playSound("audio2");
    });
    el.addEventListener("click", () => {
      playSound("audio2");
    });
  });
}

function playSound(soundId) {
  if (getCookie("soundTheme") == "default") {
    // console.log("Playing sound " + soundId);
    document.querySelector("#" + soundId).play();
  }
}
