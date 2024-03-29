const isLocalhost = window.location.href.includes("http://localhost");
const localHref = isLocalhost ? "/public" : "";
const scriptEl = document.querySelector('head script[src*="main.js"]');
const nesting = scriptEl ? (scriptEl.getAttribute("src").startsWith("main.js") ? "./" : "../") : "../";

export function getBeforeMain() {
  return `
  
	  <div id="theme-toggler" aria-hidden="true"><button type="button">
	  	<img src="${nesting}img/layout/moon.gif" width="17" style="image-rendering:pixelated;" />
		<span>toggle theme</span>
	  </button></div>
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
				
	              <!-- <li><a href="${localHref}/about/guestbook.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>guestbook</a></li>
	              <li><a href="${localHref}/about/blinkies.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>blinkies</a></li> -->
			
	              <!-- <li><a href="${localHref}/about/archive.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>archive</a></li> -->
				  <li><a href="${localHref}/about/cats.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>cats :3 </small></a></li>
	              <li class="mobile-only"><a href="${localHref}/about/credits.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>credits</a></li>
	              <li class="mobile-only"><a href="${localHref}/sitemap.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>sitemap</a></li>
				  	  <li><a href="${localHref}/shrines/index.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>shrines</a></li>
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
					<li><a href="${localHref}/creations/picmix.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>my picmixes <small class="aside__new"><img src="${nesting}img/layout/new.gif" aria-hidden="true"/></small></a></li>
	              </ul>
	            </div>
	            <div class="aside-nav__section">
	              <div class="aside__heading aside__heading--recs">Media Recs</div>
	              <ul>
				    <li><a href="${localHref}/about/media-log.html"><img width="9" src="${nesting}img/layout/heart.png" aria-hidden="true"/>media log</a></li>
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

export function getAfterMain() {
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
