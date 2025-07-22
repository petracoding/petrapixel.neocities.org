let picsumID = "10";
let loadJs = false;

export function getHTML(variables, loadPerJs, isPreview, randomPicsumID) {
  loadJs = loadPerJs;
  picsumID = randomPicsumID;
  const head = isPreview ? "" : getHead();

  if (loadPerJs) {
    return head + getStart() + getLoadedPerJavascriptHint("Header (and Sidebars)") + getMainContent(variables) + getLoadedPerJavascriptHint("Footer") + getEnd(variables);
  }
  return head + getStart() + getBefore(variables) + getMainContent(variables) + getAfter(variables) + getEnd(variables);
}

function getLoadedPerJavascriptHint(str) {
  return `
      
      <!-- =============================================== -->
      <!-- ${str} will be loaded per JavaScript! Edit layout.js to change. -->
      <!-- =============================================== -->
`;
}

function getHead() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- Change your site title: (It is shown in the tab) -->
    <title>TITLE</title>

    <!-- Change your site description: (It is shown in Google results) -->
    <meta content="My personal website!" name="description" />

    <!-- Setting character encoding and viewport size. Do not remove. -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- FavIcon (small image in tab), change to any image you want: -->
    <link href="favicon.ico" rel="icon" type="image/x-icon" />

    <!-- CSS: -->
    <!-- You will have to change this to "../style.css" if this HTML file is in a subfolder, to "../../style.css" if this HTML file is in 2 subfolders, etc. -->
    <link href="./style.css" rel="stylesheet" />
    ${
      loadJs
        ? `
    <!-- JavaScript: -->
    <!-- You will have to change this to "../layout.js" if this HTML file is in a subfolder, to "../../layout.js" if this HTML file is in 2 subfolders, etc. -->
    <script src="./layout.js"></script>`
        : ""
    }

    <script>
      // Template generated with petrapixel's layout generator.
      // (Please do not remove this credit.)
      console.log("%cTemplate generated with petrapixel's layout generator: https://petrapixel.neocities.org/coding/layout-generator", "font-size: 14pt; color: #922a45; background: #ffd3ef");
    </script>
  </head>
  <body>
    `;
}

function getStart() {
  return `<!-- The next line is a skip-to-content link for keyboard users. Do not remove it! -->
    <a href="#content" id="skip-to-content-link">Skip to content</a>

    <div class="layout">`;
}

export function getBefore(variables) {
  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

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
	        ${
            variables.menuPosition == "header"
              ? `
	        <!-- NAVIGATION -->
	        <nav>
	          <ul>
	            <li><a href="/">Home</a></li>
	            <li><a href="/page1">Page 1</a></li>
	            <li><a href="/page2">Page 2</a></li>
	            <li><a href="/page3">Page 3</a></li>
	            <li>
	                <strong>Submenu (hover to show)</strong>
	                <ul>
	                  <li><a href="/page-a">Page A</a></li>
	                  <li><a href="/page-b">Page B</a></li>
	                  <li><a href="/page-c">Page C</a></li>
	                  <li><a href="/page-d">Page D</a></li>
	                  <li><a href="/page-e">Page E</a></li>
	                </ul>
	            </li>
	          </ul>
	        </nav>`
              : ""
          }
        	
        </div>
      </header>

	  ${
      variables.sidebars == "left" || variables.sidebars == "both"
        ? `
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  ${
      variables.menuPosition == "leftSidebar"
        ? `
        
        <!-- NAVIGATION -->
        <nav>
          <div class="sidebar-title">Navigation</div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/page1">Page 1</a></li>
            <li><a href="/page2">Page 2</a></li>
            <li><a href="/page3">Page 3</a></li>
        	<li>
        	${variables.submenus == "alwaysOpen" ? "<strong>Submenu</strong>" : ""}
              	${variables.submenus == "openByDefault" ? '<details open="open">' : variables.submenus == "toggleOnClick" ? "<details>" : ""}
                ${variables.submenus == "openByDefault" || variables.submenus == "toggleOnClick" ? "<summary>Submenu</summary>" : ""}
                <ul>
                  <li><a href="/page-a">Page A</a></li>
                  <li><a href="/page-b">Page B</a></li>
                  <li><a href="/page-c">Page C</a></li>
                  <li><a href="/page-d">Page D</a></li>
                  <li><a href="/page-e">Page E</a></li>
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
            <li><a href="/">List</a></li>
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
          <img class="full-width-image" src="https://picsum.photos/id/${picsumID}/1000/400">
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
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">
	  ${
      variables.menuPosition == "rightSidebar"
        ? `
        
        <!-- NAVIGATION -->
        <nav>
          <div class="sidebar-title">Navigation</div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/page1">Page 1</a></li>
            <li><a href="/page2">Page 2</a></li>
            <li><a href="/page3">Page 3</a></li>
        	<li>
        	${variables.submenus == "alwaysOpen" ? "<strong>Submenu</strong>" : ""}
              	${variables.submenus == "openByDefault" ? '<details open="open">' : variables.submenus == "toggleOnClick" ? "<details>" : ""}
                ${variables.submenus == "openByDefault" || variables.submenus == "toggleOnClick" ? "<summary>Submenu</summary>" : ""}
                <ul>
                  <li><a href="/page-a">Page A</a></li>
                  <li><a href="/page-b">Page B</a></li>
                  <li><a href="/page-c">Page C</a></li>
                  <li><a href="/page-d">Page D</a></li>
                  <li><a href="/page-e">Page E</a></li>
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
            <li><a href="/">List</a></li>
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
          <img class="full-width-image" src="https://picsum.photos/id/${picsumID}/1000/400">
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
  
      <main id="content"> <!-- Do NOT remove the ID here -->

        ${loadJs ? `<noscript>Please enable JavaScript to view this website!</noscript>` : ""}

        <!-- =============================================== -->
        <!-- MAIN CONTENT -->
        <!-- =============================================== -->


        <section>

          <h1>Page Title (Heading 1)</h1>
          <p>This layout was generated with <a href="https://petrapixel.neocities.org/" target="_blank">petrapixel</a>'s layout generator. You may remove the credit in the footer, but please leave the credit in the code. Thank you!</p>
          <p>
            I will now show you how to use the most common HTML text elements:
            <b>This is bold text.</b> 
            <strong>This is also bold text.</strong> 
            <i>This is italic text.</i> 
            <em>This is also italic text.</em> 
            <strike>This is strikethrough text.</strike> 
            <u>This is underlined text.</u> 
            <a href="https://petrapixel.neocities.org/">This is a link.</a> 
            <a href="https://petrapixel.neocities.org/" target="_blank">This is a link that will open in a new tab.</a> 
            <code>This is code (displayed in a monospace font).</code>
            <abbr title="Example.">This is an abbreviation (Try hovering over it).</abbr>
            <mark>This is highlighted text.</mark>
            This is a line break (The br stands for break.): <br />It's different from a paragraph because it does not add space inbetween the lines of text.
          </p>
          <p>This is a paragraph. As you can see, there's a bit of space between it and the previous paragraph.</p>

          <blockquote>This is a blockquote. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</blockquote>

          <h2>Heading 2</h2>
          <ul>
            <li>Unsorted list</li>
            <li>Unsorted list</li>
            <li>Unsorted list</li>
          </ul>

          <p>Lorem ipsum dolor sit amet.</p>

          <ol>
            <li>Sorted list</li>
            <li>Sorted list</li>
            <li>Sorted list</li>
          </ol>

          <h3>Heading 3</h3>
          <pre>This is preformatted text, which means that     spaces    are preserved:
          :D</pre>

          <p>This is preformatted code:</p>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;body&gt;
   &lt;h1&gt;My First Heading&lt;/h1&gt;
   &lt;p&gt;My first paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

          <p>This is a separator line / divider:</p>
          <hr /> <!-- hr = horizontal rule -->

          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>

          <h4>Heading 4</h4>

          <p>Here are two columns:</p>
          <div class="two-columns">
	          <div>
	          	<p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
	          	<p>At
            vero eos et accusam et justo duo dolores et ea rebum.</p>
	          </div>
	          <div>
	          	<p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
	          	<p>At
            vero eos et accusam et justo duo dolores et ea rebum.</p>
	          </div>
          </div>

          <h5>Heading 5</h5>

          <p>This is an image:</p>
          <img class="image" alt="" src="https://picsum.photos/id/${picsumID}/200/100" />

          <p>This is a full-width image:</p>
          <img class="full-width-image" alt="" src="https://picsum.photos/id/${picsumID}/1000/400" />

          <p>These are multiple images in a row:</p>
          <div class="images">
            <img alt="" src="https://picsum.photos/id/${picsumID}/1000/400" />
            <img alt="" src="https://picsum.photos/id/${picsumID}/1000/400" />
            <img alt="" src="https://picsum.photos/id/${picsumID}/1000/400" />
          </div>

          <h6>Heading 6</h6>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>

        </section>
      </main>`;
}

export function getAfter(variables) {
  if (variables.footer == "none") return "";

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>Footer Text. <a href="/">Link.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</div>
      </footer>`;
}

function getEnd(variables) {
  return `
  
    <!-- Closing .layout: -->
    </div>


    <!-- Add any additional Javascript code (<script></script>) here. -->
  </body>
</html>
`;
}
