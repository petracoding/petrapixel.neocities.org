export function getHTML(variables, loadPerJs, isPreview) {
  const head = isPreview ? "" : getHead(loadPerJs);
  if (loadPerJs) {
    return head + getStart(loadPerJs) + getMainContent(variables) + getEnd(variables);
  }
  return head + getStart(loadPerJs) + getBefore(variables) + getMainContent(variables) + getAfter(variables) + getEnd(variables);
}

function getHead(loadPerJs) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>TITLE</title>
	<meta name="description" content="SHORT DESCRIPTION OF YOUR PAGE" />
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
    <meta content="utf-8" http-equiv="encoding" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="favicon.ico" rel="icon" type="image/x-icon" />
    <link href="./style.css" rel="stylesheet" />
    ${loadPerJs ? '<script src="./layout.js"></script>' : ""}
    <script>
      // Template generated with petrapixel's layout generator.
      // Please do not remove this.
      console.log("%c Template generated with petrapixel's layout generator.", "font-size: 14pt;");
      console.log("%c https://petrapixel.neocities.org/coding/layout-generator", "font-size: 14pt;");
    </script>
  </head>
  <body>
    `;
}

function getStart(loadPerJs) {
  return `<!-- The next line is a skip-to-content link for keyboard users. Do not remove it! -->
    <a href="#content" id="skip-to-content-link">Skip to content</a>
    <div class="layout">
	${loadPerJs ? `<noscript>Please enable JavaScript to view this website!</noscript>` : ""}`;
}

export function getBefore(variables) {
  return `
<header>
${
  variables.headerImageUrl
    ? `<div class="header-image">
          <img src="${variables.headerImageUrl}" alt="" />
        </div>`
    : ""
}
        <div class="header-content">
			<div class="header-title">Website Title</div>
	        ${variables.menuPosition == "header" ? "<nav>" : "<nav style='display:none'>"}
	          <ul>
	            <li><a href="#">Home</a></li>
	            <li><a href="#">Page 1</a></li>
	            <li><a href="#">Page 2</a></li>
	            <li><a href="#">Page 3</a></li>
	            <li><a href="#">Page 5</a></li>
	            <li><a href="#">Page 4</a></li>
	          </ul>
	        </>
		</div>
      </header>
	  ${
      variables.sidebars == "left" || variables.sidebars == "both"
        ? `
      <aside class="left-sidebar">
	  ${
      variables.menuPosition == "leftSidebar"
        ? `
        <nav>
          <div class="sidebar-title">Navigation</div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
			${variables.submenus == "alwaysOpen" ? '<li><a href="#"><strong>Submenu</strong></a></li>' : ""}
            <li>
              	${variables.submenus == "openByDefault" ? '<details open="open">' : variables.submenus == "toggleOnClick" ? "<details>" : ""}
				${variables.submenus == "openByDefault" || variables.submenus == "toggleOnClick" ? '<summary><a href="#">Submenu</a></summary>' : ""}
                <ul>
                  <li><a href="#">Page A</a></li>
                  <li><a href="#">Page B</a></li>
                  <li><a href="#">Page C</a></li>
                  <li><a href="#">Page D</a></li>
                  <li><a href="#">Page E</a></li>
                </ul>
				${variables.submenus == "openByDefault" || variables.submenus == "toggleOnClick" ? "</details>" : ""}
            </li>
          </ul>
        </nav>`
        : ""
    }
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
          </blockquote>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="#">List</a></li>
            <li>List</li>
          </ul>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <marquee>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
		  </marquee>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/25/900/400">
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
			<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
		  </div>
        </div>
      </aside>`
        : ""
    }
	${
    variables.sidebars == "right" || variables.sidebars == "both"
      ? `
      <aside class="right-sidebar">
	  ${
      variables.menuPosition == "rightSidebar"
        ? `
        <nav>
          <div class="sidebar-title">Navigation</div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
			${variables.submenus == "alwaysOpen" ? '<li><a href="#"><strong>Submenu</strong></a></li>' : ""}
            <li>
              	${variables.submenus == "openByDefault" ? '<details open="open">' : variables.submenus == "toggleOnClick" ? "<details>" : ""}
				${variables.submenus == "openByDefault" || variables.submenus == "toggleOnClick" ? '<summary><a href="#">Submenu</a></summary>' : ""}
                <ul>
                  <li><a href="#">Page A</a></li>
                  <li><a href="#">Page B</a></li>
                  <li><a href="#">Page C</a></li>
                  <li><a href="#">Page D</a></li>
                  <li><a href="#">Page E</a></li>
                </ul>
				${variables.submenus == "openByDefault" || variables.submenus == "toggleOnClick" ? "</details>" : ""}
            </li>
          </ul>
        </nav>`
        : ""
    }
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
          </blockquote>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="#">List</a></li>
            <li>List</li>
          </ul>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <marquee>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
		  </marquee>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/25/900/400">
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
			<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
		  </div>
        </div>
      </aside>`
      : ""
  }
      `;
}

function getMainContent(variables) {
  return `
<main id="content">
        <section>
          <h1>Page Title</h1>
          <p>This is the preview of a layout generated with <a href="https://petrapixel.neocities.org/" target="_blank">petrapixel</a>'s layout generator.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia ipsa repudiandae dolorum facilis corrupti eaque aut, tenetur iusto corporis delectus quos alias fuga maiores nulla
            illum! Esse, possimus ipsa.
          </p>
          <h2>Heading 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
            <b>This is bold text.</b> <i>This is italic text.</i> <strike>This is strikethrough text.</strike> <u>This is underlined text.</u> <a href="#">This is a link.</a>
            <code>This is code.</code> <abbr title="Example.">This is an abbreviation.</abbr>
          </p>
          <blockquote>This is a blockquote. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</blockquote>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <pre>This is preformatted text.</pre>
          <p>This is preformatted code:</p>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;body&gt;
   &lt;h1&gt;My First Heading&lt;/h1&gt;
   &lt;p&gt;My first paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <h3>Heading 3</h3>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat.
          </p>
		  <p>Here are two columns:</p>
		  <div class="two-columns">
		   <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
		   <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
		  </div>
          <p>This is an image:</p>
          <img class="image" alt="" src="https://picsum.photos/id/25/200/100" />
          <p>This is a full-width image:</p>
          <img class="full-width-image" src="https://picsum.photos/id/25/900/400" />
          <p>These are two images:</p>
          <div class="images">
            <img class="image" alt="" src="https://picsum.photos/id/25/900/400" />
            <img class="image" alt="" src="https://picsum.photos/id/25/900/400" />
          </div>
          <p>These are three images:</p>
          <div class="images">
            <img class="image" alt="" src="https://picsum.photos/id/25/900/400" />
            <img class="image" alt="" src="https://picsum.photos/id/25/900/400" />
            <img class="image" alt="" src="https://picsum.photos/id/25/900/400" />
          </div>
          <h4>Heading 4</h4>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
            feugait nulla facilisi.
          </p>
          <h5>Heading 5</h5>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
            feugait nulla facilisi.
          </p>
          <h6>Heading 6</h6>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
            feugait nulla facilisi.
          </p>
        </section>
      </main>`;
}

export function getAfter(variables) {
  if (variables.footer == "none") return "";

  return `
<footer><div>Footer Text. <a href="#">Link.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</div></footer>`;
}

function getEnd(variables) {
  return `
</div>
    <!-- Add any additional Javascript code (<script></script>) here. -->
  </body>
</html>
`;
}
