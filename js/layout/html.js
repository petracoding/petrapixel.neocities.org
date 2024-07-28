import { themeSwitcherHTML } from "./dark-mode";

const isLocalhost = window.location.href.includes("http://localhost");
const localHref = isLocalhost ? "/public" : "";
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
			 		<summary>the site <small>(5)</small></summary>
					<ul>
						<li><a href="${localHref}/about/about-the-site.html">about the site</a></li>
						<li><a href="${localHref}/about/guestbook.html">guestbook</a></li>
						<li><a href="${localHref}/about/neighbors.html">neighbors</a></li>
						<li><a href="${localHref}/about/credits.html">credits</a></li>
            			<li><a href="${localHref}/sitemap.html">sitemap</a></li>
					</ul>
				</details>
			</li>
            <li>
			  	<details id="menu-aboutme">
			 		<summary>about me <small>(4)</small></summary>
					<ul>
						<li><a href="${localHref}/about/about-me.html">about me</a></li>
		    			<li><a href="${localHref}/about/cats.html">my cats</small></a></li>
						<li><a href="${localHref}/about/media-log.html">media log</a></li>
						<li><a href="${localHref}/about/social-media.html">social media</a></li>
					</ul>
				</details>
			</li>
			<li>
			  	<details id="menu-mycreations">
			 		<summary>my creations <small>(6)</small></summary>
					<ul>
						<li><a href="${localHref}/creations/art.html">my art</a></li>
		                <li><a href="${localHref}/creations/coding.html">my coding</a></li>
		                <li><a href="${localHref}/creations/playlists.html">my playlists<small class="aside-nav__new"><img src="${nesting}img/layout/new.gif" alt="" aria-hidden="true"/></small></a> </li>
		                <li><a href="${localHref}/creations/video-edits.html">my video edits</a></li>
		                <!-- <li><a href="${localHref}/creations/web-weaves.html">my web weaves</a></li> -->
		                <li><a href="${localHref}/creations/writing.html">my writing</a></li>   
						<li><a href="${localHref}/creations/picmix.html">my picmixes</a></li>
					</ul>
				</details>
			</li>
			<li>
			  	<details id="menu-mediarecs">
			 		<summary>media recs <small>(5)</small><small class="aside-nav__new"><img src="${nesting}img/layout/new.gif" alt="" aria-hidden="true"/></small></summary>
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
						<li><a href="${localHref}/resources/bookmarks.html">bookmarks</a></li>
		                <li><a href="${localHref}/resources/software-recs.html">software recs</a></li>
		                <li><a href="${localHref}/resources/clipboard.html">clipboard</a></li>
		                <li><a href="${localHref}/resources/notion.html">notion</a></li>
		                <li><a href="${localHref}/resources/google-spreadsheets-excel.html">spreadsheets</a></li>
		                <li><a href="${localHref}/resources/vocabulary.html">vocabulary</a></li>
					</ul>
				</details>
			</li>
			<li>
			  	<details id="menu-codinghelp">
			 		<summary>coding help <small>(7)</small></summary>
					<ul>
						<li><a href="${localHref}/coding/need-help.html">need help?</a></li>
						<li><a href="${localHref}/coding/common-questions.html">common questions</a></li>
						<li><a href="${localHref}/coding/common-mistakes.html">common mistakes</a></li>
						<li><a href="${localHref}/coding/layout-base-code.html">layout base code</a></li>
						<!-- <li><a href="${localHref}/coding/checklist.html">checklist</a></li> -->
						<li><a href="${localHref}/coding/snippets.html">snippets & tips</a></li>
						<li><a href="${localHref}/coding/neocities.html">neocities help</a></li>
						<li><a href="${localHref}/coding/my-setup.html">my coding setup</a></li>
						<!-- <li><a href="${localHref}/coding/layout-generator.html">layout generator</a></li> -->
					</ul>
				</details>
			</li>
			<li>
			  	<details id="menu-more">
			 		<summary>more <small>(4)</small></summary>
					<ul>
						<li><a href="${localHref}/shrines/index.html">shrines</a></li>
						<li><a href="${localHref}/about/blinkies.html">blinkies & more</a></li> 
						<li><a href="${localHref}/fun/list-idea-generator.html">list idea generator</a></li>
						<li><a href="${localHref}/fun/bored-button.html">are you bored?</a></li>
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
          <ul id="changelog" class="changelog custom-scrollbar" aria-label="Changelog">
		  </ul>
        </div>
		

		<!-- ----------------- LINK BACK ----------------- -->
		<div class="aside-stuff aside-link-back">
          <div class="aside-stuff__heading">Link back!<img src="${nesting}img/layout/icon-copy.png" alt="" aria-hidden="true"/></div>
          <p>Hotlinking is a-okay!<br><small>You can change the .webp to .gif if you want, but the image will be 1KB bigger.</small></p>
            <a href="https://petrapixel.neocities.org/" target="_blank"  tabindex="-1"
              ><img src="https://github.com/petracoding/petrapixel.neocities.org/blob/master/public/img/linkback.webp?raw=true" alt="petrapixel"
            /></a>
            <textarea class="code-textarea" name="" id="" rows="10" aria-label="link-back code">
<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://github.com/petracoding/petrapixel.neocities.org/blob/master/public/img/linkback.webp?raw=true" alt="petrapixel"></a></textarea
            >
        </div>
		
		<img src="${nesting}img/layout/divider1.gif" alt="" aria-hidden="true" style="margin-top: 2em;"/>

			
		<!-- ----------------- POLL ----------------- -->
		<div class="aside-stuff aside-poll" aria-hidden="true">
			<div class="aside-stuff__heading" aria-hidden="true">Poll<img src="${nesting}img/layout/icon-stats.png" alt="" aria-hidden="true"/></div>
			<form method="post" action="https://poll.pollcode.com/52695294"><div style="background-color:#B24C66;padding:2px;width:154px;font-family:Palatino Linotype;font-size:small;color:#FFFFFF;"><div style="padding:2px 0px 4px 2px;"><strong>how often do you listen to music while falling asleep?</strong></div><input type="radio" name="answer" value="1" id="answer526952941" style="float:left;" /><label for="answer526952941" style="float:left;width:129px;">almost always</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="2" id="answer526952942" style="float:left;" /><label for="answer526952942" style="float:left;width:129px;">often</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="3" id="answer526952943" style="float:left;" /><label for="answer526952943" style="float:left;width:129px;">sometimes</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="4" id="answer526952944" style="float:left;" /><label for="answer526952944" style="float:left;width:129px;">rarely</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="5" id="answer526952945" style="float:left;" /><label for="answer526952945" style="float:left;width:129px;">never!</label><div style="clear:both;height:2px;"></div><div align="center" style="padding:3px;"><input type="submit" value=" Vote ">&nbsp;<input type="submit" name="view" value=" View "></div><div align="right" style="font-size:10px">pollcode.com <a href="https://pollcode.com/">free polls</a></div></div></form>
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
		<a class="aside-stuff__guestbook" aria-hidden="true" href="${localHref}/about/guestbook.html">
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
					<a href='https://www.free-website-hit-counter.com'>
						<img src='https://www.free-website-hit-counter.com/c.php?d=7&id=166390&s=18' border='0' alt='Free Website Hit Counter' />
					</a>
				</center>
				<small style="font-size: 0.7em; letter-spacing: -0.4px;text-align:center;display: block;">(might not be entirely accurate)</small>
			</div>
		</div>
		<div class="aside-stats__stat">
			<div class="aside-stuff__heading"><span>my time</span><img src="${nesting}img/layout/icon-clock.png" alt="" aria-hidden="true"/></div>
			<div class="aside-stats__stat-content">
		        <div style="text-align: center">
				  <iframe title="my time and date" src="https://free.timeanddate.com/clock/i9bg5thz/n259/fn8/fs13/fc7f244b/tct/pct/ts1/ta1" frameborder="0" width="150" height="17" allowtransparency="true"></iframe>
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
				<a href="https://app.tvtime.com/user/33116783" target="_blank">Bridgerton, Ripley</a>
			</li>
			<li aria-label="reading:">
				<img src="${nesting}img/layout/icon-book.png" alt="" title="reading:" aria-hidden="true"/>
				<a href="https://www.goodreads.com/user/show/62158941-petra" target="_blank">Warrior Cats ↺</a>
			</li>
				<li aria-label="playing:">
				<img src="${nesting}img/layout/icon-game.png" alt="" title="playing:" aria-hidden="true"/>
				<a href="https://www.backloggd.com/u/Petra1999/" target="_blank">-</a>
			</li>
		</ul>
	</div>


	<!-- ----------------- NEIGHBORS ----------------- -->
	<div class="aside-stuff aside-mutuals" data-nesting="${nesting}" aria-hidden="true">
		<div class="aside-stuff__heading"><a href="${localHref}/about/neighbors.html">Neighbors<img src="${nesting}img/layout/icon-building.png" alt="" aria-hidden="true"/></a></div>
		<a href="#afterneighbours" class="skiplink" aria-hidden="true">Skip neighbours</a>
        <div id="beforeneighbours"></div>
		<div class="marquee aside-mutuals__buttons"><div></div></div>
        <div id="afterneighbours">Click <a href="/about/neighbors.html">here</a> to view them all.</div>
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
          created by petrapixel 2024 - <span style="font-size: 1.3em">∞</span> <i>┊</i>
          <a href="https://neocities.org/site/petrapixel" target="_blank">my neocities profile</a
          > <span class="desktop-only"> <i>┊</i> <a href="${localHref}/sitemap.html">sitemap</a> <i>┊</i> <a href="https://github.com/petracoding/petrapixel.neocities.org" target="_blank">github</a></span>
        </div>
		<div class="footer-content mobile-only">
			<a id="clap-for-me" href="//clap.fc2.com/post/petrapixel/?url=https%3A%2F%2Fpetrapixel.neocities.org%2F&title=petrapixel" target="_blank">
				<img width="80" height="18" src="//clap.fc2.com/images/button/pink/petrapixel?url=https%3A%2F%2Fpetrapixel.neocities.org%2F&amp;lang=en" alt="clap for me on clap.fc2.com"/>
				<small>click to clap for me!</small>
			</a>
			<br />
			<center>
				<small>Visitors:</small>
				<a href='https://www.free-website-hit-counter.com'>
					<img src='https://www.free-website-hit-counter.com/c.php?d=7&id=166390&s=18' border='0' alt='Free Website Hit Counter' />
				</a>
			</center>
		</div>
      </footer>
  	  `;
}
