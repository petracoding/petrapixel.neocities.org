import { themeSwitcherHTML } from "./dark-mode";

const isLocalhost = window.location.href.includes("http://localhost");
const localHref = isLocalhost ? "/public" : "";
const dotHtml = isLocalhost ? ".html" : "";
const scriptEl = document.querySelector('head script[src*="main.js"]');
const nesting = scriptEl ? (scriptEl.getAttribute("src").startsWith("assets/js/main.js") ? "./" : "../") : "../";

export function getBeforeMain() {
  return `
	 ${themeSwitcherHTML()}
<header><div class="header-heading"><a href="${localHref}/"><img src="${nesting}img/layout/petrapixel.png" aria-label="petrapixel" height="100" width="300" /></a></div></header>
<aside class="aside aside--left">
<details>
  	<summary id="mobile-nav-toggle">Open Navigation</summary>
  	<nav class="aside-nav">
		<div class="aside-nav__heading" aria-hidden="true">Menu</div>
        <ul aria-label="Menu">
            <li><a href="${localHref}/"><img width="9" src="${nesting}img/layout/heart.png" alt="" aria-hidden="true"/>home</a></li>
			<li>
			  	<details id="menu-aboutsite">
			 		<summary>about <small>(5)</small><small class="aside-nav__new"><img src="${nesting}img/layout/new.gif" alt="" aria-hidden="true"/></small></summary>
					<ul>
						<li><a href="${localHref}/about-me/about${dotHtml}">about me ➚ <small class="aside-nav__new"><img src="${nesting}img/layout/new.gif" alt="" aria-hidden="true"/></small></a></li>
						<li><a href="${localHref}/about/about-the-site${dotHtml}">about the site</a></li>
						<li><a href="${localHref}/about/guestbook${dotHtml}">guestbook</a></li>
						<!-- <li><a href="${localHref}/about/neighbors${dotHtml}">neighbors</a></li> -->
						<li><a href="${localHref}/about/credits${dotHtml}">credits</a></li>
            			<li><a href="${localHref}/sitemap${dotHtml}">sitemap</a></li>
					</ul>
				</details>
			</li>
			<!--
            <li>
			  	<details id="menu-aboutme">
			 		<summary>about me <small>(4)</small></summary>
					<ul>
						<li><a href="${localHref}/about/about-me${dotHtml}">about me</a></li>
		    			<li><a href="${localHref}/about/cats${dotHtml}">my cats</small></a></li>
						<li><a href="${localHref}/about/media-log${dotHtml}">media log</a></li>
						<li><a href="${localHref}/about/social-media${dotHtml}">social media</a></li>
					</ul>
				</details>
			</li>
			-->
			<li>
			  	<details id="menu-mycreations">
			 		<summary>my creations <small>(6)</small></summary>
					<ul>
						<li><a href="${localHref}/creations/art${dotHtml}">my art</a></li>
		                <li><a href="${localHref}/creations/coding${dotHtml}">my coding</a></li>
		                <li><a href="${localHref}/creations/playlists${dotHtml}">my playlists<small class="aside-nav__new"><img src="${nesting}img/layout/new.gif" alt="" aria-hidden="true"/></small></a> </li>
		                <li><a href="${localHref}/creations/video-edits${dotHtml}">my video edits</a></li>
		                <!-- <li><a href="${localHref}/creations/web-weaves${dotHtml}">my web weaves</a></li> -->
		                <li><a href="${localHref}/creations/writing${dotHtml}">my writing</a></li>   
						<li><a href="${localHref}/creations/picmix${dotHtml}">my picmixes</a></li>
					</ul>
				</details>
			</li>
			<li>
			  	<details id="menu-mediarecs">
			 		<summary>media recs <small>(5)</small></summary>
					<ul>
						<li><a href="${localHref}/recs/music.html" aria-label="music recommendations">music</a></li>
					  	<li><a href="${localHref}/recs/tv-shows.html" aria-label="tv show recommendations">tv shows</a></li>
					  	<li><a href="${localHref}/recs/movies.html" aria-label="movie recommendations">movies</a></li>
					  	<li><a href="${localHref}/recs/books.html" aria-label="book recommendations">books</a></li>
					  	<li><a href="${localHref}/recs/games.html" aria-label="game recommendations">games</a></small></li>
					</ul>
				</details>
			</li>
			<li>
			  	<details id="menu-resources">
			 		<summary>resources <small>(6)</small></summary>
					<ul>
						<li><a href="${localHref}/resources/bookmarks${dotHtml}">bookmarks</a></li>
		                <li><a href="${localHref}/resources/software-recs${dotHtml}">software recs</a></li>
		                <li><a href="${localHref}/resources/clipboard${dotHtml}">clipboard</a></li>
		                <li><a href="${localHref}/resources/notion${dotHtml}">notion</a></li>
		                <li><a href="${localHref}/resources/google-spreadsheets-excel${dotHtml}">spreadsheets</a></li>
		                <li><a href="${localHref}/resources/vocabulary${dotHtml}">vocabulary</a></li>
					</ul>
				</details>
			</li>
			<li>
			  	<details id="menu-codinghelp">
			 		<summary>coding help <small>(9)</small><small class="aside-nav__new"><img src="${nesting}img/layout/new.gif" alt="" aria-hidden="true"/></small></summary>
					<ul>
						<li><a href="${localHref}/coding/need-help${dotHtml}">need help?</a></li>
						<li><a href="${localHref}/coding/common-questions${dotHtml}">common questions</a></li>
						<li><a href="${localHref}/coding/common-mistakes${dotHtml}">common mistakes</a></li>
						<li><a href="${localHref}/coding/layout-base-code${dotHtml}">layout base code</a></li>
						<li><a href="${localHref}/coding/snippets${dotHtml}">snippets & tips</a></li>
						<li><a href="${localHref}/coding/checklist${dotHtml}">self-study checklist<small class="aside-nav__new aside-nav__new--small"><img src="${nesting}img/layout/new.gif" alt="" aria-hidden="true"/></small></a></li>
						<li><a href="${localHref}/coding/neocities${dotHtml}">neocities help</a></li>
						<li><a href="${localHref}/coding/my-setup${dotHtml}">my coding setup</a></li>
						<li><a href="${localHref}/coding/git-tutorial${dotHtml}">git tutorial<small class="aside-nav__new"><img src="${nesting}img/layout/new.gif" alt="" aria-hidden="true"/></small></a></li>
						<!-- <li><a href="${localHref}/coding/webpack-tutorial${dotHtml}">webpack tutorial<small class="aside-nav__new"><img src="${nesting}img/layout/new.gif" alt="" aria-hidden="true"/></small></a></li> -->
						<!-- <li><a href="${localHref}/coding/layout-generator${dotHtml}">layout generator<small class="aside-nav__new"><img src="${nesting}img/layout/new.gif" alt="" aria-hidden="true"/></small></a></li> -->
					</ul>
				</details>
			</li>
			<li>
			  	<details id="menu-more">
			 		<summary>more <small>(4)</small></summary>
					<ul>
						<li><a href="${localHref}/blog${dotHtml}">blog</a></li>
						<li><a href="${localHref}/shrines/index${dotHtml}">shrines</a></li>
						<li><a href="${localHref}/about/blinkies${dotHtml}">blinkies & more</a></li> 
						<li><a href="${localHref}/fun/list-idea-generator${dotHtml}">list idea generator</a></li>
						<li><a href="${localHref}/fun/bored-button${dotHtml}">are you bored?</a></li>
					</ul>
				</details>
			</li>
        </ul>
    </nav>

	<img src="${nesting}img/layout/divider1.gif" alt="" aria-hidden="true"/>

	<div class="aside-dreamland desktop-only">
	
		<!-- ----------------- CHANGELOG ----------------- -->
		<div class="aside-stuff aside-changelog">
          <div class="aside-stuff__heading" aria-hidden="true">Changelog<img src="${nesting}img/layout/icon-code.png" alt="" aria-hidden="true"/></div>
          <ul class="changelog custom-scrollbar" aria-label="Changelog">
			  <li class="changelog__entry">
	            <strong>2024-08-20</strong>
	            <a href="/coding/layout-generator" tabindex="-1">New tool: Layout Generator!!!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-08-19</strong>
	            <a href="/blog" tabindex="-1">Blog with comment sections!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-08-13</strong>
	            <a href="/coding/git-tutorial" tabindex="-1">New page: Git Tutorial!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-08-12</strong>
	            <a href="/rss.xml" tabindex="-1">I have an RSS feed now!</a>
	          </li> 
			  <li class="changelog__entry">
	            <strong>2024-08-09</strong>
	            <a href="/coding/checklist" tabindex="-1">New page: Self-Study Coding Checklist!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-08-07</strong>
	            <span>New link-back button! If you're not hotlinking please update it!</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-08-06</strong>
	            <a href="/about-me/about" tabindex="-1">New main font and background and about-me page!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-08-04</strong>
	            <span>Image of the moment added to sidebar! Also some small content changes.</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-07-20</strong>
	            <a href="/creations/playlists" tabindex="-1">Added some playlists and tv show recs!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-07-17</strong>
	            <span>Updated my age :)</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-07-07</strong>
	            <a href="/resources/software-recs" tabindex="-1">Improved the look of my software recs and bookmarks pages</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-07-06</strong>
	            <span>Spring cleaning in July.</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-06-28</strong>
	            <span>A few small updates.</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-05-04</strong>
	            <a href="/coding/common-questions" tabindex="-1">New coding help pages! 'Common questions' and 'Need help?'</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-04-26</strong>
	            <a href="/coding/common-mistakes" tabindex="-1">New coding help page: 'Common mistakes'!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-04-21</strong>
	            <a href="/about/social-media" tabindex="-1">Social media page added</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-04-19</strong>
	            <a href="/about-me/about" tabindex="-1">New about-me page!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-04-17</strong>
	            <a href="/about/about-the-site" tabindex="-1">New sidebar layouts, a bunch of new pages, new content on existing pages, performance improvements, and a reworked homepage!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-04-07</strong>
	            <a href="/about/credits" tabindex="-1">New FavIcon!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-04-06</strong>
	            <a href="/resources/google-spreadsheets-excel" tabindex="-1">New page: Spreadsheet templates</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-04-05</strong>
	            <a href="/coding/my-setup" tabindex="-1">New page: My coding setup</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-04-04</strong>
	            <span>Accessibility improvements</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-03-28</strong>
	            <a href="/shrines/minimalism" tabindex="-1">Minimalism shrine added!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-03-28</strong>
	            <a href="/about/about-the-site" tabindex="-1">Dark mode added!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-03-27</strong>
	            <a href="/creations/picmix" tabindex="-1">Picmix page added!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-03-05</strong>
	            <a href="/shrines/index" tabindex="-1">New shrine overview</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-03-02</strong>
	            <a href="/resources/vocabulary" tabindex="-1">Vocabulary page added!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-27</strong>
	            <a href="/about/cats" tabindex="-1">Cats page added!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-26</strong>
	            <a href="/about/media-log" tabindex="-1">Media log added!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-25</strong>
	            <a href="/about/about-the-site" tabindex="-1">'About the site' page added, and a new logo!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-23</strong>
	            <a href="/shrines/german-nostalgia" tabindex="-1">Added my first shrine!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-21</strong>
	            <a href="/blog" tabindex="-1">Another huge update, and blog added!</a>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-15</strong>
	            <span>Huge Update!</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-12</strong>
	            <span>More Content, Design update</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-10</strong>
	            <span>Even more content</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-09</strong>
	            <span>More Content</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-08</strong>
	            <span>Bugfixes</span>
	          </li>
			  <li class="changelog__entry">
	            <strong>2024-02-07</strong>
	            <a href="/" tabindex="-1">Site creation!</a>
	          </li>
		  </ul>
        </div>
		

		<!-- ----------------- LINK BACK ----------------- -->
		<div class="aside-stuff aside-link-back">
          <div class="aside-stuff__heading">Link back!<img src="${nesting}img/layout/icon-copy.png" alt="" aria-hidden="true"/></div>
          <p>Hotlinking is a-okay!
				<!-- <br><small style="line-height: 1;display: block;">You can change the .webp to .gif if you want.</small> -->
		  </p>
            <a href="https://petrapixel.neocities.org/" target="_blank"  tabindex="-1"
              ><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.webp" alt="petrapixel" width="88" height="31"
            /></a>
            <textarea class="code-textarea" name="" id="" rows="10" aria-label="link-back code">
<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea
            >
        </div>
		
		<img src="${nesting}img/layout/divider1.gif" alt="" aria-hidden="true" style="margin-top: 2em;"/>

			
		<!-- ----------------- POLL ----------------- -->
		<div class="aside-stuff aside-poll" aria-hidden="true">
			<div class="aside-stuff__heading" aria-hidden="true">Poll<img src="${nesting}img/layout/icon-stats.png" alt="" aria-hidden="true"/></div>
			
			<form method="post" action="https://poll.pollcode.com/18931664"><div style="background-color:#EEEEEE;padding:2px;width:175px;font-family:Arial;font-size:small;color:#000000;"><div style="padding:2px 0px 4px 2px;"><strong>how much do you usually exercise per week?</strong></div><input type="radio" name="answer" value="1" id="answer189316641" style="float:left;" /><label for="answer189316641" style="float:left;width:150px;">exercise? what's that?</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="2" id="answer189316642" style="float:left;" /><label for="answer189316642" style="float:left;width:150px;">less than 1 hour</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="3" id="answer189316643" style="float:left;" /><label for="answer189316643" style="float:left;width:150px;">1-2 hours</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="4" id="answer189316644" style="float:left;" /><label for="answer189316644" style="float:left;width:150px;">2-3 hours </label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="5" id="answer189316645" style="float:left;" /><label for="answer189316645" style="float:left;width:150px;">3-4 hours</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="6" id="answer189316646" style="float:left;" /><label for="answer189316646" style="float:left;width:150px;">4-5 hours</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="7" id="answer189316647" style="float:left;" /><label for="answer189316647" style="float:left;width:150px;">more than 5 hours</label><div style="clear:both;height:2px;"></div><div align="center" style="padding:3px;"><input type="submit" value=" Vote ">&nbsp;<input type="submit" name="view" value=" View "></div><div align="right" style="font-size:10px">pollcode.com <a href="https://pollcode.com/">free polls</a></div></div></form>
		</div>

		<!-- ----------------- IMAGE OF THE MOMENT ----------------- -->
		<div class="aside-stuff aside-poll">
			<div class="aside-stuff__heading" aria-hidden="true">Image of the Moment<img src="${nesting}img/layout/icon-hearts.png" alt="" aria-hidden="true"/></div>
			<a href="https://www.tumblr.com/petrapng/757874138276839424/pictures-of-wolverine-where-his-hair-makes-him?source=share" target="_blank" class="image-of-the-moment">
				<img src="https://64.media.tumblr.com/d47ef96a9b7767a6ee39927200af1a62/4edd630e3d6f13cd-fe/s640x960/f863f86d9d82052db24d57c9661dcdbd752af283.jpg" alt="Wolverine" title="wolverine <3<3 he has kitty ears" />
			</a>
		</div>
		
		<!-- ----------------- BLINKIES ----------------- -->
		<a href="${localHref}/about/blinkies.html" class="aside-stuff aside-blinkies" data-nesting="${nesting}" aria-hidden="true">
			<div class="marquee aside-blinkies__buttons"><div></div></div>
			<div class="marquee aside-blinkies__stamps" style="display:none;"><div></div></div>
			<div class="marquee aside-blinkies__blinkies"><div></div></div>
			<div class="marquee aside-blinkies__userboxes" style="display:none;"><div></div></div>
		</a>

		<!-- ----------------- COMING SOON ----------------- -->
		<!--
		<div class="aside-stuff aside-changelog">
          <div class="aside__heading aside__heading--comingsoon" aria-hidden="true">Coming Soon</div>
          <div class="changelog custom-scrollbar">
			  <ul aria-label="Coming Soon">
			 	<li>loading screen</li>
			 	<li>blog post about polyamory</li>
			 	<li>dinosaur shrine</li> 
			 	<li>more shrines</li> 
			 	<li>advanced coding tutorials</li> 
				<li>self-made blinkies/buttons/stamps</li>
			  </ul>
		  </div>
        </div>
		-->
    </div>
</details>

</aside>
  <aside class="aside aside--right desktop-only">
  
		
	<!-- ----------------- CLAP, KIRBY ----------------- -->
	<div class="aside-stuff aside-clap-kirby">
		<a class="aside-stuff__guestbook" aria-hidden="true" href="${localHref}/about/guestbook${dotHtml}">
			<img width="145" height="56" src="${nesting}img/layout/kirby1light.png" alt="sign my guestbook" class="only-show-in-light-mode" />
			<img width="145" height="56" src="${nesting}img/layout/kirby1.png" alt="sign my guestbook"  class="only-show-in-dark-mode" />
		</a>
		<a class="aside-stuff__guestbook" aria-label="follow me on neocities" href="https://neocities.org/site/petrapixel" target="_blank">
			<img width="145" height="56" src="${nesting}img/layout/kirby2light.png" alt="follow me on neocities" class="only-show-in-light-mode"  />
			<img width="145" height="56" src="${nesting}img/layout/kirby2.png" alt="follow me on neocities" class="only-show-in-dark-mode"  />
		</a>
		<a id="clap-for-me" href="//clap.fc2.com/post/petrapixel/?url=https%3A%2F%2Fpetrapixel.neocities.org%2F&title=petrapixel" target="_blank">
			<img width="80" height="18" src="//clap.fc2.com/images/button/pink/petrapixel?url=https%3A%2F%2Fpetrapixel.neocities.org%2F&amp;lang=en" alt="clap for me on clap.fc2.com"/>
			<small>click to clap for me!</small>
		</a>
	</div>

	
	<img src="${nesting}img/layout/divider2.gif" alt="" aria-hidden="true" style="image-rendering: pixelated;"/>

	<!-- ----------------- STATS / STATUS ----------------- -->
	<div class="aside-stuff aside-stats">
		<!--
		<div class="aside-stats__stat">
			<div class="aside-stuff__heading"><span>visitors</span><img src="${nesting}img/layout/icon-stats.png" alt="" aria-hidden="true"/></div>
			<div class="aside-stats__stat-content"><a href="https://neocities.org/site/petrapixel/stats" target="_blank" id="hitcount"></a></div>
		</div>
		<div class="aside-stats__stat">
			<div class="aside-stuff__heading"><span>followers</span><img src="${nesting}img/layout/icon-stats.png" alt="" aria-hidden="true"/></div>
			<div class="aside-stats__stat-content"><a href="https://neocities.org/site/petrapixel" target="_blank">54</a></div>
		</div>
		-->
		<div class="aside-stats__stat">
			<div class="aside-stuff__heading"><span>visitors</span><img src="${nesting}img/layout/icon-stats.png" alt="" aria-hidden="true"/></div>
			<div class="aside-stats__stat-content">
				<center>
					${
            isLocalhost
              ? "only shown in live"
              : `<a href='https://www.free-website-hit-counter.com'>
						<img src='https://www.free-website-hit-counter.com/c.php?d=7&id=166390&s=18' border='0' alt='Free Website Hit Counter' />
					</a>`
          }
				</center>
				<small style="font-size: 0.7em; letter-spacing: -0.4px;text-align:center;display: block;">(might not be entirely accurate)</small>
			</div>
		</div>
		<div class="aside-stats__stat">
			<div class="aside-stuff__heading"><span>my time</span><img src="${nesting}img/layout/icon-clock.png" alt="" aria-hidden="true"/></div>
			<div class="aside-stats__stat-content">
		        <div style="text-align: center">
				  <iframe title="my time" src="https://free.timeanddate.com/clock/i9bg5thz/n259/fn8/fs13/fc7f244b/tct/pct/ts1/ta1" frameborder="0" width="150" height="17" allowtransparency="true"></iframe>
		        </div>
		    </div>
		</div>
		<div class="aside-stats__stat">
			<div class="aside-stuff__heading"><span>my status</span><img src="${nesting}img/layout/icon-happy.png" alt="" aria-hidden="true"/></div>
			<div class="aside-stats__stat-content" id="statuscafe">
		        <div id="statuscafe-username"></div>
		        <div id="statuscafe-content"></div>
		    </div>
		</div>
	</div>
	
	<img src="${nesting}img/layout/divider3.gif" alt="" aria-hidden="true" style="margin-top: -2px;"/>

	<!-- ----------------- CURRENTLY ----------------- -->
	<div class="aside-stuff aside-currently">
		<div class="aside-stuff__heading">Currently</div>
		<ul>
		  	<li aria-label="listening to:">
				<img src="${nesting}img/layout/icon-music.png" alt="" title="listening to:" aria-hidden="true"/>
				<a href="https://www.last.fm/user/Petra1999" target="_blank" id="song">various</a>
			</li>
			<li aria-label="watching:">
				<img src="${nesting}img/layout/icon-tv.png" alt="" title="watching:" aria-hidden="true"/>
				<a href="https://app.tvtime.com/user/33116783" target="_blank">Game Grumps Danganronpa v3</a>
			</li>
			<li aria-label="reading:">
				<img src="${nesting}img/layout/icon-book.png" alt="" title="reading:" aria-hidden="true"/>
				<a href="https://www.goodreads.com/user/show/62158941-petra" target="_blank">Moby-Dick <!--<span style="font-family:sans-serif;font-size:0.9em">↺</span>--></a>
			</li>
			<li aria-label="playing:">
				<img src="${nesting}img/layout/icon-game.png" alt="" title="playing:" aria-hidden="true"/>
				<a href="https://www.backloggd.com/u/Petra1999/" target="_blank">Neko Atsume</a>
			</li>
			<li aria-label="obsessed with:">
				<img src="${nesting}img/layout/icon-heart.png" alt="" title="obsessed with:" aria-hidden="true"/>
				<span>Deadpool & Wolverine <!--<span style="font-family:sans-serif;font-size:0.9em">♡</span>--></span>
			</li>
		</ul>
	</div>


	<!-- ----------------- NEIGHBORS ----------------- -->
	<div class="aside-stuff aside-mutuals" data-nesting="${nesting}" aria-hidden="true">
		<div class="aside-stuff__heading"><a href="${localHref}/about/neighbors${dotHtml}">Neighbors<img src="${nesting}img/layout/icon-building.png" alt="" aria-hidden="true"/></a></div>
		<a href="#afterneighbours" class="skiplink" aria-hidden="true">Skip neighbours</a>
        <div id="beforeneighbours"></div>
		<div class="marquee aside-mutuals__buttons"><div></div></div>
        <div id="afterneighbours">Click <a href="/about/neighbors${dotHtml}">here</a> to view them all.</div>
        <a href="#beforeneighbours" class="skiplink" aria-hidden="true">Skip to before neighbours</a>
	</div>




	<!-- ----------------- CHATBOX ----------------- -->
	<div class="aside-stuff aside-chatbox">
		<div class="aside-stuff__heading" aria-hidden="true">Chatbox<img src="${nesting}img/layout/icon-chat.png" alt="" aria-hidden="true"/></div>
		<a href="#afterchatbox" class="skiplink" aria-hidden="true">Skip chatbox iFrame</a>
        <div id="beforechatbox"></div>
		<iframe src="https://www5.cbox.ws/box/?boxid=949361&boxtag=Asuhlk" width="100%" height="300" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" aria-label="Chatbox"></iframe>	
        <div id="afterchatbox"></div>
        <a href="#beforechatbox" class="skiplink" aria-hidden="true">Skip to before chatbox iFrame</a>
	</div>

	  <!-- ----------------- FLAG COUNTER ----------------- -->
	  <!--
		<a class="aside__flag-counter" aria-hidden="true" href="/about/flag-counter.html"
        ><img alt="Flag Counter" src="https://s11.flagcounter.com/count2/wNh/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_3/labels_0/pageviews_0/flags_0/percent_1/" border="0"/></a>
	  -->
    </div>
</aside>


	<!-- ----------------- BACK TO TOP ----------------- -->
  	<div id="back-to-top-link" aria-hidden="true"><a href="#" tabindex="-1">scroll to top</a></div>
  
  <!-- ----------------- FLAG COUNTER ----------------- -->
  <!-- This is here so that it counts mobile views too! -->
  ${
    isLocalhost
      ? ``
      : `<img src="https://s11.flagcounter.com/count2/wNh/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_3/labels_0/pageviews_0/flags_0/percent_0/" aria-hidden="true" alt="" tabindex="-1" style="width: 1px;height: 1px;opacity: 0;" />`
  }
  	  `;
}

// --------------------------------------------------------------------------
// --------------------------------- FOOTER ---------------------------------
// --------------------------------------------------------------------------

export function getAfterMain() {
  return `
   <footer>
        <div class="footer-content">
			<a class="footer-rss" href="${localHref}/rss.xml" target="_blank" aria-label="RSS Feed" title="RSS Feed"><img src="${nesting}img/layout/rss.png" alt="RSS" /></a>  <i>┊</i> 
          created by petrapixel 2024 - <span style="font-size: 1.3em">∞</span> <i>┊</i>
          <a href="https://neocities.org/site/petrapixel" target="_blank">my neocities profile</a
          > <span class="desktop-only"> <i>┊</i> <a href="${localHref}/sitemap${dotHtml}">sitemap</a> <i>┊</i> <a href="https://github.com/petracoding/petrapixel.neocities.org" target="_blank">github</a></span>
        </div>
		<div class="footer-content mobile-only">
			<a id="clap-for-me" href="//clap.fc2.com/post/petrapixel/?url=https%3A%2F%2Fpetrapixel.neocities.org%2F&title=petrapixel" target="_blank">
				<img width="80" height="18" src="//clap.fc2.com/images/button/pink/petrapixel?url=https%3A%2F%2Fpetrapixel.neocities.org%2F&amp;lang=en" alt="clap for me on clap.fc2.com"/>
				<small>click to clap for me!</small>
			</a>
			<br />
			<center>
				<small>Visitors:</small>
				${
          isLocalhost
            ? "only shown live"
            : `
				<a href='https://www.free-website-hit-counter.com'>
					<img src='https://www.free-website-hit-counter.com/c.php?d=7&id=166390&s=18' border='0' alt='Free Website Hit Counter' />
				</a>`
        }
			</center>
		</div>
      </footer>
  	  `;
}
