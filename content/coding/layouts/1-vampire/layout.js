document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">
  // It is NOT necessary to use this for links.

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
	        <!-- NAVIGATION -->
	        <nav>
	          <ul>
	            <li><a href="/">Home</a></li>
	            <li><a href="/example">Page 1</a></li>
	            <li><a href="/example">Page 2</a></li>
	            <li><a href="/example">Page 3</a></li>
	            <li>
	                <strong>Submenu (hover to show)</strong>
	                <ul>
	                  <li><a href="/example">Page A</a></li>
	                  <li><a href="/example">Page B</a></li>
	                  <li><a href="/example">Page C</a></li>
	                  <li><a href="/example">Page D</a></li>
	                  <li><a href="/example">Page E</a></li>
	                </ul>
	            </li>
	          </ul>
	        </nav>
        	
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="box1">
        <div class="blinkies">
          <img src="https://64.media.tumblr.com/f0c7e7cb0cde9f5e2b00213a0d88c3c9/92406fd7357a47b5-a0/s250x400/75a7e1b5cef01c957e0f7983b89fb7c5201b894e.gifv" alt="" />
          <img src="https://64.media.tumblr.com/6931464179b8f5d45e8b80a399759d00/92406fd7357a47b5-09/s250x400/57585fce2247f64d2d99c81aee8375799da8d768.gifv" alt="" />
          <img src="https://64.media.tumblr.com/ad8ca07bda70a1b3a20024f23c6f6530/92406fd7357a47b5-ef/s250x400/2b7ea598f61bce318ba945fa2dd7f251b305189c.gifv" alt="" />
          <img src="https://64.media.tumblr.com/44126a0cfb969ddce954f629b7066521/0d79be5f8e37bdca-2e/s250x400/23fc66bc6132e4310c01eb45596588cea6a54b44.gif" alt="" />
          <img src="https://64.media.tumblr.com/a8d5083abc0615d2bda74045053cde45/e10473b4f89888d3-fe/s250x400/ba7edf1fc0481d139d516e7ef1cd94d9e44bef1f.gif" alt="" />
          <img src="https://64.media.tumblr.com/e9dfe128ab01321cb2a0f5e6b2d76a4e/17664607f4ffb203-fd/s250x400/153ad04936a3ce75c315abdc7974816f753dd7bc.gif" alt="" />
        </div>
      </aside>

      <aside class="box2">
        <div class="sidebar-image">
          <!-- image credit: https://www.tumblr.com/vampirerelics/805353797242191872 -->
          <img src="https://64.media.tumblr.com/a29e3bfefe02aee739c3ecafc53a113b/35e50c78647065ae-00/s1280x1920/87f99a03b744c792ce7b6a1bb50b9b0a4bd312dd.gif" alt="add image description here" />
  	    </div>
      </aside>

      <aside class="box3">
        <div class="secondary-navigation">
          <ul>
            <li><a href="/example">Example Link</a></li>
            <li><a href="/example">Example Link</a></li>
            <li><a href="/example">Example Link</a></li>
            <li><a href="/example">Example Link</a></li>
            <li><a href="/example">Example Link</a></li>
            <li><a href="/example">Example Link</a></li>
          </ul>
        </div>
      </aside>

      <aside class="box4">

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
            <li><a href="/example">List</a></li>
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
          <div class="site-button">
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        	<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
          </div>
        </div>
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>Footer Text. <a href="/example">Link.</a> Layout by <a href="https://petrapixel.neocities.org/coding/layouts">petrapixel</a>. <!-- You may move this credit somewhere else, e.g. a "credits" page, but please do not remove it altogether. ---> </div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

    /* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */

        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
            el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
