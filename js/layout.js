const isLocalhost = window.location.href.includes("http://localhost");
const noCache = "?nocache=" + new Date().getTime();

export function buildLayout() {
  const mainEl = document.querySelector("main:not(.no-layout)");
  if (mainEl) {
    const localHref = isLocalhost ? "/public" : "";
    const scriptEl = document.querySelector('head script[src*="main.js"]');
    const nesting = scriptEl ? (scriptEl.getAttribute("src").startsWith("main.js") ? "./" : "../") : "../";

    mainEl.insertAdjacentHTML("beforebegin", getBeforeMain(localHref, nesting));
    mainEl.insertAdjacentHTML("afterend", getAfterMain(localHref));

    // Widgets
    initLastFmWidget();
    initHitcountWidget();
    initStatusCafeWidget();

    // Menu Toggle
    const detailsEl = document.querySelector(".aside--left details");
    if (detailsEl) {
      let mql = window.matchMedia("(min-width: 576px)");
      if (mql.matches) {
        detailsEl.open = true;
      }
    }

    initLuckyBtn();
    doActiveLinks();
    getChangelog();
    prepareScrollToTop();
    buildTableOfContents();
  }
}

function initLuckyBtn() {
  const btn = document.querySelector("#lucky-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const file = isLocalhost ? `http://localhost:52330/public/blog/blog.json` : `https://petrapixel.neocities.org/blog/blog.json`;
    fetch(`${file}${noCache}`)
      .then(function (response) {
        switch (response.status) {
          case 200:
            return response.json();
          case 404:
            throw response;
        }
      })
      .then(function (data) {
        const articlesJson = data["blog"];
        const randomArticle = articlesJson[Math.floor(Math.random() * articlesJson.length)];
        const randomArticleUrl = "/blog/" + randomArticle["fileName"] + ".html";
        window.location.href = (isLocalhost ? "/public" : "") + randomArticleUrl;
      })
      .catch(function (response) {
        console.error("Loading Blog Json: " + response.statusText);
      });
  });
}

function getBeforeMain(localHref, nesting) {
  return `
  	<header><div class="header-heading"><a href="${localHref}/"><img src="${nesting}img/layout/petrapixel.png" aria-label="petrapixel" height="100" width="300" /></a></div></header>
      <aside class="aside aside--left">
	  <details>
          <summary>Open Navigation</summary>
	      <nav class="aside-nav">
	          <div class="aside-nav__section">
	            <div class="aside__heading aside__heading--menu desktop-only">Menu</div>
	            <ul>
	              <li><a href="${localHref}/"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>home</a></li>
	              <li><a href="${localHref}/about/about-me.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>about me</a></li>
	              <li><a href="${localHref}/about/about-the-site.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>about the site </a></li>
	               <!--<li><a href="${localHref}/blog.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>blog</a></li>-->
				  <li><a href="${localHref}/about/media-log.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>media log  <small class="aside__new"><img src="${nesting}img/layout/new.gif" aria-hidden="true"/></small></a></li>
	              <!-- <li><a href="${localHref}/about/guestbook.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>guestbook</a></li>
	              <li><a href="${localHref}/about/blinkies.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>blinkies</a></li> -->
				  <li><a href="${localHref}/shrines/index.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>shrines</a></li>
	              <!-- <li><a href="${localHref}/about/archive.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>archive</a></li> -->
				  <li><a href="${localHref}/about/cats.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>cats :3 </small></a></li>
	              <li class="mobile-only"><a href="${localHref}/about/credits.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>credits</a></li>
	              <li class="mobile-only"><a href="${localHref}/sitemap.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>sitemap</a></li>
	            </ul>
	          </div>
			  <div class="aside-nav__section">
	              <div class="aside__heading aside__heading--creations">My Creations</div>
	              <ul>
	                <li><a href="${localHref}/creations/art.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>my art</a></li>
	                <li><a href="${localHref}/creations/coding.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>my coding</a></li>
	                <li><a href="${localHref}/creations/playlists.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>my playlists</a> </li>
	                <li><a href="${localHref}/creations/video-edits.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>my video edits</a></li>
	                <!-- <li><a href="${localHref}/creations/web-weaves.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>my web weaves</a></li> -->
	                <li><a href="${localHref}/creations/writing.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>my writing</a></li>   
					<li><a href="${localHref}/creations/picmix.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>my picmix <small class="aside__new"><img src="${nesting}img/layout/new.gif" aria-hidden="true"/></small></a></li>
	              </ul>
	            </div>
	            <div class="aside-nav__section">
	              <div class="aside__heading aside__heading--recs">Recommendations</div>
	              <ul>
				  <li><a href="${localHref}/recs/music.html" aria-label="music recommendations"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>music</a></li>
				  	<li><a href="${localHref}/recs/tv-shows.html" aria-label="tv show recommendations"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>tv shows</a></li>
				  	<li><a href="${localHref}/recs/movies.html" aria-label="movie recommendations"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>movies</a></li>
				  	<li><a href="${localHref}/recs/books.html" aria-label="book recommendations"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>books</a></li>
				  	<li><a href="${localHref}/recs/games.html" aria-label="game recommendations"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>games</a></li>
	                <!-- <li><a href="${localHref}/recs/software.html" aria-label="software recommendations"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>software</a></li> -->
	              </ul>
	            </div>
				<!--
				<div class="aside-nav__section">
	              <div class="aside__heading aside__heading--shrines">Shrines</div>
	              <ul>
	                <li><a href="${localHref}/shrines/german-nostalgia.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>german nostalgia </a></li>
	              </ul>
	            </div>
				-->
	            <div class="aside-nav__section">
	              <div class="aside__heading aside__heading--resources">Resources</div>
	              <ul>
	                <li><a href="${localHref}/resources/bookmarks.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>bookmarks</a></li>
	                <li><a href="${localHref}/resources/clipboard.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>clipboard</a></li>
	                <li><a href="${localHref}/resources/notion.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>notion</a></li>
					<!--
	                <li><a href="${localHref}/resources/templates.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>templates</a></li>
						-->
	                <li><a href="${localHref}/resources/vocabulary.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>vocabulary <small class="aside__new"><img src="${nesting}img/layout/new.gif" aria-hidden="true"/></small></a></li>
				
	              </ul>
	            </div>
				<div class="aside-nav__section">
	              <div class="aside__heading aside__heading--coding">Coding Help</div>
	              <ul>
					<li><a href="${localHref}/coding/neocities.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>neocities</a></li>
						<!--
	                <li><a href="${localHref}/coding/cheatsheet.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>cheatsheet<img src="${nesting}img/layout/link.png" /></a></li>
	                <li><a href="${localHref}/coding/advanced-coding.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>advanced tutorial<img src="${nesting}img/layout/link.png" /></a></li>
	                <li><a href="${localHref}/coding/webpack-tutorial.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>webpack tutorial<img src="${nesting}img/layout/link.png" /></a></li>
					-->
	              </ul>
	            </div>
	        </nav>
        </details>
      </aside>
      <aside class="aside aside--right desktop-only">
        <div class="aside-nav__section">
			<div class="aside-stuff">
	          <div class="aside__heading aside__heading--changelog">Changelog</div>
	          <div id="changelog" class="changelog custom-scrollbar">
			  </div>
	        </div>
			<div class="aside-stuff">
	          <div class="aside__heading aside__heading--comingsoon">Coming Soon</div>
	          <div class="changelog custom-scrollbar">
				  <ul>
				 	<li>blog post about polyamory</li> 
					<li>theme switcher</li>
				 	<li>dinosaur shrine</li> 
				 	<li>more shrines</li> 
				 	<li>advanced coding tutorials</li> 
					<li>self-made blinkies/buttons/stamps</li>
				  </ul>
			  </div>
	        </div>
			<div class="aside-stuff">
	          <div class="aside__heading aside__heading--stats">Stats</div>
	          <div>
				<center>hit count:</center>
				<div class="aside-stuff__widget" id="hitcount"></div>
				<center>listening to:</center>
				<div class="aside-stuff__widget" id="lastfm-widget">
			        <div>
			          <a href="https://www.last.fm/user/Petra1999" target="_blank" id="song">loading...</a>
			        </div>
			      </div>
				<center>my status:</center>
				<div class="aside-stuff__widget" id="statuscafe">
			        <div id="statuscafe-username" style="display: none"></div>
			        <a href="https://status.cafe/users/petra1999" target="_blank" id="statuscafe-content"></a>
			      </div>
			  </div>
		    </div>
			<div class="aside-stuff">
				<div class="aside-stuff__center">
	          <a id="clap-for-me" href="//clap.fc2.com/post/petrapixel/?url=https%3A%2F%2Fpetrapixel.neocities.org%2F&title=petrapixel" target="_blank"><img src="//clap.fc2.com/images/button/pink/petrapixel?url=https%3A%2F%2Fpetrapixel.neocities.org%2F&amp;lang=en" alt="clap for me on clap.fc2.com"/></a>
				${
          isLocalhost
            ? ""
            : `<a class="aside__flag-counter" aria-hidden="true" href="/about/flag-counter.html"
	            ><img src="https://s11.flagcounter.com/count2/wNh/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_3/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0"/></a>`
        }
				<!-- comment in once there are more articles
				<div class="aside__lucky-btn"><button type="button" id="lucky-btn" title="Go to a random blog article">I'm feeling lucky.</button></div>
				-->
				<a class="aside-stuff__guestbook"  aria-hidden="true" href="${localHref}/about/guestbook.html"><img src="${nesting}img/layout/kirby-guestbook.png" style="image-rendering:pixelated;" alt="sign my guestbook" /></a>

				<div class="aside-stuff__widget" >
				<a class="aside-stuff__follow" href="https://neocities.org/site/petrapixel" target="_blank">follow me<br>on neocities!</a>
				</div>
				</div>
			</div>
		</div>
      </aside>
	  <div id="back-to-top-link" aria-hidden="true"><a href="#" tabindex="-1">scroll to top</a></div>
	  <!-- This is here so that it counts mobile views too! -->
	  ${
      isLocalhost
        ? ``
        : `<img src="https://s11.flagcounter.com/count2/wNh/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_3/labels_0/pageviews_0/flags_0/percent_0/" aria-hidden="true" tabindex="-1" style="width: 1px;height: 1px;opacity: 0;" />`
    }
	  	  `;
}

function getAfterMain(localHref) {
  return `
   <footer>
        <div class="footer-content">
          © petrapixel 2024 <i>┊</i>
          <a href="https://neocities.org/site/petrapixel" target="_blank">my neocities profile</a
          > <span class="desktop-only"> <i>┊</i> <a href="${localHref}/about/credits.html">credits</a> <i>┊</i> <a href="${localHref}/sitemap.html">sitemap</a> <i>┊</i> <a href="https://github.com/petracoding/petrapixel.neocities.org" target="_blank">github</a></span>
        </div>
      </footer>
  	  `;
}

function initLastFmWidget() {
  let user = "Petra1999";
  let url = "https://lastfm-last-played.biancarosa.com.br/" + user + "/latest-song";
  let song = document.querySelector("#song");
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      song.innerHTML = json["track"]["name"] + " – " + json["track"]["artist"]["#text"];
    });
}

function initHitcountWidget() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var site_data = JSON.parse(this.responseText);
      var num_arr = site_data.info.views.toString().split("");
      var num_str = "";
      let i;
      for (i = 0; i < num_arr.length; i++) {
        num_str += num_arr[i];
        if ((num_arr.length - 1 - i) % 3 == 0 && num_arr.length - 1 - i != 0) {
          num_str += ",";
        }
        // var date_str = site_data.info.last_updated;
        // var date_obj = new Date(site_data.info.last_updated);
        //   document.getElementById("lastupdate").innerHTML = date_obj.getMonth() + 1 + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
      }
      document.getElementById("hitcount").innerHTML = num_str;
    }
  };
  xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=petrapixel", true);
  xhttp.send();
}

function initStatusCafeWidget() {
  fetch("https://status.cafe/users/petra1999/status.json")
    .then((r) => r.json())
    .then((r) => {
      if (!r.content.length) {
        document.getElementById("statuscafe-content").innerHTML = "No status yet.";
        return;
      }
      document.getElementById("statuscafe-username").innerHTML = '<a href="https://status.cafe/users/petra1999" target="_blank">' + r.author + "</a> " + r.face + " " + r.timeAgo;
      document.getElementById("statuscafe-content").innerHTML = r.content;
    });
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
		  <div class="changelog__entry">
            <strong>${c.d}</strong>
            <a href="${c.l}" tabindex="-1">${c.t}</a>
          </div>
		  `;
          } else {
            changelogHtml += `
		  <div class="changelog__entry">
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
  if (allHeadings.length < 2) return;
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
          .replace(/-$/, "")
      ).toLowerCase();
    headingEl.setAttribute("id", link);
    output += `
	  <li><a href="#${link}">${title}</a></li>`;
  });
  container.innerHTML = output + "</ol>";
}
