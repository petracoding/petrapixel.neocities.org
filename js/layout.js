const beforeMain = `
  	<header><h1 class="header-heading">petra pixel</h1></header>
      <aside class="aside aside--left">
        <nav class="aside-nav">
          <div class="aside-nav__section">
            <div class="aside__heading">Menu</div>
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/about/about-me.html">about</a></li>
              <li><a href="/about/changelog.html">changelog</a></li>
              <li><a href="/about/credits.html">credits</a></li>
              <!-- <li><a href="/about/archive.html">archive</a></li> -->
              <li><a href="/sitemap.html">sitemap</a></li>
            </ul>
          </div>
        </nav>
        <div class="aside-stuff">
          <div class="aside__heading">Stats</div>
          <div class="asides-stats">
            <div class="asides-stat">
              <strong>Vistior Count</strong>
              <span id="hitcount">123</span>
            </div>
          </div>
          <div class="asides-stat">
            <strong>Last Website Update</strong>
            <span id="lastupdate">2024</span>
          </div>
          <div class="asides-stat" id="statuscafe">
            <strong><a href="https://status.cafe/users/petra1999">Status</a></strong>
            <div id="statuscafe-username"></div>
            <div id="statuscafe-content"></div>
          </div>
        </div>
      </aside>
      <aside class="aside aside--right">
        <details>
          <summary>Open Navigation</summary>
          <nav class="aside-nav">
            <div class="aside-nav__section">
              <div class="aside__heading">Creations</div>
              <ul>
                <li><a href="/creations/art.html">art</a></li>
                <li><a href="/creations/coding.html">coding</a></li>
                <li><a href="/creations/playlists.html">playlists</a></li>
                <li><a href="/creations/web-weaves.html">web weaves</a></li>
                <li><a href="/creations/writing.html">writing</a></li>
              </ul>
            </div>
            <div class="aside-nav__section">
              <div class="aside__heading">Recommendations</div>
              <ul>
                <li><a href="/recs/books.html">books</a></li>
                <li><a href="/recs/games.html">games</a></li>
                <li><a href="/recs/movies.html">movies</a></li>
                <li><a href="/recs/music.html">music</a></li>
                <li><a href="/recs/tv-shows.html">tv shows</a></li>
              </ul>
            </div>
            <div class="aside-nav__section">
              <div class="aside__heading">Resources</div>
              <ul>
                <li><a href="/resources/bookmarks.html">bookmarks</a></li>
                <li><a href="/resources/clipboard.html">clipboard</a></li>
                <li><a href="/resources/neocities.html">neocities</a></li>
                <li><a href="/resources/notion.html">notion</a></li>
                <li><a href="/resources/templates.html">templates</a></li>
                <li><a href="/resources/vocabulary.html">vocabulary</a></li>
              </ul>
            </div>
          </nav>
        </details>
      </aside>
  	  `;

const afterMain = `
   <footer>
        <div class="footer-content">
          © petrapixel 2024 <i>┊</i> hosted on <a href="https://neocities.org/" target="_blank">neocities</a> <i>┊</i>
          <a href="https://neocities.org/site/petrapixel" target="_blank">follow me on neocities</a
          ><span class="desktop-only"> <i>┊</i> <a href="/about/credits.html">credits</a> <i>┊</i> <a href="/sitemap.html">sitemap</a></span>
        </div>
      </footer>
  	  `;

export const buildLayout = () => {
  const mainEl = document.querySelector("main:not(.no-layout)");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", beforeMain);
  mainEl.insertAdjacentHTML("afterend", afterMain);

  var statusCafeScript = document.createElement("script");
  statusCafeScript.setAttribute("src", "https://status.cafe/current-status.js?name=petra1999");
  document.body.appendChild(statusCafeScript);

  // Menu Toggle
  const detailsEl = document.querySelector(".aside--right details");
  if (detailsEl) {
    let mql = window.matchMedia("(min-width: 576px)");
    if (mql.matches) {
      detailsEl.open = true;
    }
  }

  doActiveLinks();
  updateAndHitCount();
};

function doActiveLinks() {
  const els = document.querySelectorAll(".aside-nav li a, main a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href");

    if (href == "/" || href == "/index.html") {
      if (window.location.href == "http://localhost:52330/" || window.location.href == "https://petrapixel.neocities.org/") {
        el.classList.add("active");
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");
      }
    }
  });
}

function updateAndHitCount() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var site_data = JSON.parse(this.responseText);
      var num_arr = site_data.info.views.toString().split("");
      var num_str = "";
      for (let i = 0; i < num_arr.length; i++) {
        num_str += num_arr[i];
        if ((num_arr.length - 1 - i) % 3 == 0 && num_arr.length - 1 - i != 0) {
          num_str += ",";
        }
        var date_str = site_data.info.last_updated;
        var date_obj = new Date(site_data.info.last_updated);
        document.getElementById("lastupdate").innerHTML = date_obj.getMonth() + 1 + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
      }
      document.getElementById("hitcount").innerHTML = num_str;
    }
  };
  xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=petrapixel", true);
  xhttp.send();
}