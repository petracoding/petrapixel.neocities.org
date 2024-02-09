const localHref = window.location.href.includes("http://localhost") ? "/public" : "";

const beforeMain = `
  	<header><h1 class="header-heading">petra pixel</h1></header>
      <aside class="aside aside--left">
        <nav class="aside-nav">
          <div class="aside-nav__section">
            <div class="aside__heading desktop-only">Menu</div>
            <ul>
              <li><a href="${localHref}/">home</a></li>
              <li><a href="${localHref}/about/about-me.html">about me</a></li>
              <li><a href="${localHref}/guestbook.html">guestbook</a></li>
              <li><a href="${localHref}/about/web-rings.html">web rings</a></li>
              <!-- <li><a href="${localHref}/about/archive.html">archive</a></li> -->
              <li class="mobile-only"><a href="${localHref}/about/credits.html">credits</a></li>
              <li class="mobile-only"><a href="${localHref}/sitemap.html">sitemap</a></li>
            </ul>
          </div>
        </nav>
        <div class="aside-stuff desktop-only">
          <div class="aside__heading">Changelog</div>
          <div id="changelog" class="custom-scrollbar"></div>
        </div>
      </aside>
      <aside class="aside aside--right">
        <details>
          <summary>Open Navigation</summary>
          <nav class="aside-nav">
            <div class="aside-nav__section">
              <div class="aside__heading">Creations</div>
              <ul>
                <li><a href="${localHref}/creations/art.html">my art</a></li>
                <li><a href="${localHref}/creations/coding.html">my coding</a></li>
                <li><a href="${localHref}/creations/playlists.html">my playlists</a></li>
                <li><a href="${localHref}/creations/video-edits.html">my video edits</a></li>
                <!-- <li><a href="${localHref}/creations/web-weaves.html">my web weaves</a></li> -->
                <li><a href="${localHref}/creations/writing.html">my writing</a></li>
              </ul>
            </div>
            <div class="aside-nav__section">
              <div class="aside__heading">Recommendations</div>
              <ul>
                <li><a href="${localHref}/recs/books.html">books</a></li>
                <li><a href="${localHref}/recs/games.html">games</a></li>
                <li><a href="${localHref}/recs/movies.html">movies</a></li>
                <li><a href="${localHref}/recs/music.html">music</a></li>
                <li><a href="${localHref}/recs/tv-shows.html">tv shows</a></li>
              </ul>
            </div>
            <div class="aside-nav__section">
              <div class="aside__heading">Resources</div>
              <ul>
                <li><a href="${localHref}/resources/bookmarks.html">bookmarks</a></li>
                <li><a href="${localHref}/resources/clipboard.html">clipboard</a></li>
                <li><a href="${localHref}/resources/neocities.html">neocities</a></li>
                <li><a href="${localHref}/resources/notion.html">notion</a></li>
                <li><a href="${localHref}/resources/templates.html">templates</a></li>
                <li><a href="${localHref}/resources/vocabulary.html">vocabulary</a></li>
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
          > <i>┊</i> <a href="https://neocities.org/site/petrapixel/stats" target="_blank">hit count</a> <span class="desktop-only"> <i>┊</i> <a href="${localHref}/about/credits.html">credits</a> <i>┊</i> <a href="${localHref}/sitemap.html">sitemap</a></span>
        </div>
      </footer>
  	  `;

export const buildLayout = () => {
  const mainEl = document.querySelector("main:not(.no-layout)");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", beforeMain);
  mainEl.insertAdjacentHTML("afterend", afterMain);

  // Menu Toggle
  const detailsEl = document.querySelector(".aside--right details");
  if (detailsEl) {
    let mql = window.matchMedia("(min-width: 576px)");
    if (mql.matches) {
      detailsEl.open = true;
    }
  }

  doActiveLinks();
  getChangelog();
  buildTableOfContents();
};

function getChangelog() {
  fetch("https://petrapixel.neocities.org/changelog.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      // note: changelog[0] ist the template
      let changelogHtml = "";
      let i = 1;
      data.changelog.forEach((c) => {
        if (c.t !== "TEMPLATE" && i <= 10) {
          i++;
          if (c.l !== "") {
            changelogHtml += `
		  <div class="asides-stat">
            <strong>${c.d}</strong>
            <a href="${c.l}">${c.t}</a>
          </div>
		  `;
          } else {
            changelogHtml += `
		  <div class="asides-stat">
            <strong>${c.d}</strong>
            <span>${c.t}</span>
          </div>
		  `;
          }
        }
      });
      document.querySelector("#changelog").innerHTML = changelogHtml;
    })
    .catch((error) => console.error("Unable to fetch data:", error));
}

function doActiveLinks() {
  const els = document.querySelectorAll(".aside-nav li a, main a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("/public", "");

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

function buildTableOfContents() {
  const container = document.querySelector("#toc");
  if (!container) return;
  const allHeadings = document.querySelectorAll("main h2");
  //   if (allHeadings.length < 2) return;
  let output = "<b>Table of Contents:</b><ol>";
  [...allHeadings].forEach((headingEl) => {
    const title = headingEl.innerHTML;
    const link = encodeURI(title).toLowerCase().replace("#", "");
    headingEl.setAttribute("id", link);
    output += `
	  <li><a href="#${link}">${title}</a></li>`;
  });
  container.innerHTML = output + "</ol>";
}
