const isLocalhost = window.location.href.includes("http://localhost");
const noCache = "?nocache=" + new Date().getTime();

export function buildLayout() {
  const mainEl = document.querySelector("main:not(.no-layout)");
  if (mainEl) {
    const localHref = isLocalhost ? "/public" : "";
    const scriptEl = document.querySelector('head script[src*="main.js"]');
    const nesting = scriptEl ? (scriptEl.getAttribute("src") == "main.js" ? "./" : "../") : "../";

    mainEl.insertAdjacentHTML("beforebegin", getBeforeMain(localHref, nesting));
    mainEl.insertAdjacentHTML("afterend", getAfterMain(localHref));

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
    prepareScrollToTop();
  }

  buildTableOfContents();
}

function getBeforeMain(localHref, nesting) {
  return `
  	<header><h1 class="header-heading"><a href="${localHref}/">♡ petra pixel ♡</a></h1></header>
      <aside class="aside aside--left">
        <nav class="aside-nav">
          <div class="aside-nav__section">
            <div class="aside__heading desktop-only">Menu</div>
            <ul>
              <li><a href="${localHref}/">home</a></li>
              <li><a href="${localHref}/about/about-me.html">about me</a></li>
              <li><a href="${localHref}/about/guestbook.html">guestbook</a></li>
              <li><a href="${localHref}/about/blinkies.html">blinkies</a></li>
              <!-- <li><a href="${localHref}/about/archive.html">archive</a></li> -->
              <li class="mobile-only"><a href="${localHref}/about/credits.html">credits</a></li>
              <li class="mobile-only"><a href="${localHref}/sitemap.html">sitemap</a></li>
            </ul>
          </div>
        </nav>
		<div class="aside-stuff desktop-only">
          <div class="aside__heading">Changelog</div>
          <div id="changelog" class="changelog custom-scrollbar">
		  </div>
        </div>
		<div class="aside-stuff desktop-only">
          <div class="aside__heading">Coming Soon</div>
          <div class="changelog custom-scrollbar">
			  <ul>
			 	<li>recommendations</li> 
			 	<li>meow page (my cats)</li> 
			 	<li>rawr page (dino facts)</li> 
			 	<li>shrines/quote pages</li> 
			 	<li>vocabulary page</li> 
			 	<li>accessability</li> 
			  </ul>
		  </div>
        </div>
		<div class="aside-stuff desktop-only">
          <div class="aside__heading">Stats</div>
          <div>
			<center>hit count:</center>
			<iframe allowtransparency="true" tabindex="-1" id="iframe-stats" src="https://petracoding.github.io/neocities/stats.html${noCache}" ></iframe>
			<center>listening to:</center>
			<iframe allowtransparency="true" id="iframe-lastfm" src="https://petracoding.github.io/neocities/lastfm.html${noCache}" ></iframe>
			<center>my status:</center>
			<iframe allowtransparency="true" tabindex="-1" id="iframe-status" src="https://petracoding.github.io/neocities/status.html${noCache}" ></iframe>
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
                <li><a href="${localHref}/creations/art.html">my art</a></li>
                <li><a href="${localHref}/creations/coding.html">my coding</a></li>
                <li><a href="${localHref}/creations/playlists.html">my playlists</a> <small class="aside__new" style="right: 50px;"><img src="${nesting}img/new.gif" /></small></li>
                <li><a href="${localHref}/creations/video-edits.html">my video edits</a></li>
                <!-- <li><a href="${localHref}/creations/web-weaves.html">my web weaves</a></li> -->
                <li><a href="${localHref}/creations/writing.html">my writing</a></li>
              </ul>
            </div>
            <div class="aside-nav__section">
              <div class="aside__heading">Recommendations</div>
              <ul>
			  <li><a href="${localHref}/recs/music.html">music</a></li>
			  	<li><a href="${localHref}/recs/tv-shows.html">tv shows</a></li>
			  	<li><a href="${localHref}/recs/movies.html">movies</a></li>
			  	<li><a href="${localHref}/recs/books.html">books</a></li>
			  	<li><a href="${localHref}/recs/games.html">games</a></li>
                <!-- <li><a href="${localHref}/recs/software.html">software</a></li> -->
              </ul>
            </div>
			<!-- 
			<div class="aside-nav__section">
              <div class="aside__heading">Shrines</div>
              <ul>
                <li><a href="${localHref}/shrines/hannibal.html">hannibal<img src="${nesting}img/link.png" /></a></li>
              </ul>
            </div>
			-->
            <div class="aside-nav__section">
              <div class="aside__heading">Resources</div>
              <ul>
                <li><a href="${localHref}/resources/bookmarks.html">bookmarks</a></li>
                <li><a href="${localHref}/resources/clipboard.html">clipboard</a></li>
				<!--
                <li><a href="${localHref}/resources/notion.html">notion</a></li>
                <li><a href="${localHref}/resources/templates.html">templates</a></li>
                <li><a href="${localHref}/resources/vocabulary.html">vocabulary</a></li>
				-->
              </ul>
            </div>
			<div class="aside-nav__section">
              <div class="aside__heading">Coding Help</div>
              <ul>
				<li><a href="${localHref}/coding/neocities.html">neocities</a></li>
                <li><a href="${localHref}/coding/advanced-coding.html">advanced tutorial<img src="${nesting}img/link.png" /></a></li>
                <li><a href="${localHref}/coding/webpack-tutorial.html">webpack tutorial<img src="${nesting}img/link.png" /></a></li>
              </ul>
            </div>
          </nav>
        </details>
      </aside>
	  <div id="back-to-top-link" aria-hidden="true"><a href="#">scroll to top</a></div>
  	  `;
}

function getAfterMain(localHref) {
  return `
   <footer>
        <div class="footer-content">
          © petrapixel 2024 <i>┊</i>
          <a href="https://neocities.org/site/petrapixel" target="_blank">my neocities profile</a
          > <span class="desktop-only"> <i>┊</i> <a href="${localHref}/about/credits.html">credits</a> <i>┊</i> <a href="${localHref}/sitemap.html">sitemap</a></span>
        </div>
      </footer>
  	  `;
}

function getChangelog() {
  const changelogFile = isLocalhost ? "http://localhost:52330/public/changelog.json" : "https://petrapixel.neocities.org/changelog.json";
  fetch(changelogFile + noCache)
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
            <a href="${c.l}" tabindex="-1">${c.t}</a>
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

function prepareScrollToTop() {
  const el = document.querySelector("#back-to-top-link");
  if (!el) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
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
    const link =
      headingEl.getAttribute("id") ||
      encodeURI(
        title
          .replaceAll(" ", "-")
          .replaceAll(":", "")
          .replaceAll("#", "")
          .replaceAll(/<[^>]*>?/gm, "")
      ).toLowerCase();
    headingEl.setAttribute("id", link);
    output += `
	  <li><a href="#${link}">${title}</a></li>`;
  });
  container.innerHTML = output + "</ol>";
}
