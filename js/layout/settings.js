export function initToggleButtons() {
  const themeBtn = document.querySelector(".toggle-buttons__button--theme");
  const fontBtn = document.querySelector(".toggle-buttons__button--font");
  const motionBtn = document.querySelector(".toggle-buttons__button--motion");
  const soundBtn = document.querySelector(".toggle-buttons__button--sound");

  document.body.classList.add(getCookie("theme", "light-mode"));

  if (getCookie("fontTheme") === "readable") {
    document.body.classList.add("readable-font");
  }

  if (getCookie("soundTheme") === "muted") {
    document.body.classList.add("sound-muted");
  }

  if (getCookie("motionTheme") === "reduced") {
    document.body.classList.add("reduced-motion");
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

  motionBtn.addEventListener("click", () => {
    if (getCookie("motionTheme") === "reduced") {
      document.body.classList.remove("reduced-motion");
      localStorage.setItem("motionTheme", "default");
    } else {
      document.body.classList.add("reduced-motion");
      localStorage.setItem("motionTheme", "reduced");
    }
  });
}

function getCookie(cookieName, fallbackValue) {
  const cookie = localStorage.getItem(cookieName);
  if (cookie) return cookie;
  return fallbackValue || "default";
}

export function initSounds() {
  // small timeout so it works with dynamically loaded content too
  setTimeout(() => {
    initSound("tockSound", true, false, "a");
    initSound(
      "clickSound",
      true,
      false,
      ".hello-its-me-facts img, .blinkies img, summary, .coding-navigation-category__title, .about-me-page__faves-images img, .about-me-page__flags img",
    );
    initSound(
      "actualClick",
      false,
      true,
      "summary, button, input[type='submit'], input[type='checkbox']",
    );
    // initSound("tinySound", true, false, "button, input[type='submit']");
  }, 500);
}

function initSound(soundName, onHover, onClick, selector) {
  const els = document.querySelectorAll(selector);
  [...els].forEach((el) => {
    if (onHover) {
      el.addEventListener("mouseover", () => {
        playSound(soundName);
      });
    }
    if (onClick) {
      el.addEventListener("click", () => {
        playSound(soundName);
      });
    }
  });
}

function playSound(soundId) {
  if (getCookie("soundTheme") == "muted") return;

  const audio = document.querySelector("#" + soundId);
  if (!audio) return;

  audio.muted = false;
  audio.volume = 1;
  if (soundId == "actualClick") audio.volume = 0.1;

  // console.log(
  //   "⏵ " +
  //     soundId +
  //     " (" +
  //     (audio.paused ? "paused" : "unpaused") +
  //     ") [" +
  //     audio.readyState +
  //     "] " +
  //     audio.duration,
  // );

  if (audio.readyState < 4 || !audio.duration) {
    audio.load();
    audio.addEventListener(
      "canplaythrough",
      () => {
        audio
          .play()
          .catch((err) =>
            console.error("Playback of " + soundId + " failed:", err),
          );
        // console.log("played " + soundId);
      },
      { once: true },
    );
  } else {
    audio
      .play()
      .catch((err) =>
        console.error("Playback of " + soundId + " failed:", err),
      );
  }
}
