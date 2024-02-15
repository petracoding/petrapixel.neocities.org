document.addEventListener("DOMContentLoaded", function () {
  const iframeEl = document.querySelector("#spotifyIFrame");
  if (!iframeEl) return;

  const closeBtn = document.querySelector(".spotify-iframe-container__close");
  closeBtn.addEventListener("click", () => {
    iframeEl.closest(".spotify-iframe-container").setAttribute("aria-hidden", "true");
    iframeEl.setAttribute("src", "");
  });

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      iframeEl.closest(".spotify-iframe-container").setAttribute("aria-hidden", "true");
      iframeEl.setAttribute("src", "");
    }
  };

  const playlistEls = document.querySelectorAll(".playlists .playlist");
  [...playlistEls].forEach((playlistEl) => {
    aEl = playlistEl.querySelector(".playlist__infos a");
    aEl.addEventListener("click", (e) => {
      const playlistLink = e.target.getAttribute("href");
      const playlistId = playlistLink.replace("https://open.spotify.com/playlist/", "").substring(0, playlistLink.indexOf("?"));
      const iFrameSrc = "https://open.spotify.com/embed/playlist/" + playlistId + "?utm_source=generator";
      iframeEl.setAttribute("src", iFrameSrc);
      iframeEl.closest(".spotify-iframe-container").setAttribute("aria-hidden", "false");

      // stop default link click:
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });
});
