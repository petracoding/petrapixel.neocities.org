const nesting = getNesting();

document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByPetraPixel();
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToLinks();
}

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}assets/img/logo.png"> might output <img src="../assets/img/logo.png">

  return `
<header>

        <div class="header-content">
			<div class="header-title">Website Title</div>
	        <nav>
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
	  
      <aside class="left-sidebar">
	  
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
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
		  </marquee>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/40/1000/400">
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
			<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a></textarea>
		  </div>
        </div>
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}assets/img/logo.png"> might output <img src="../assets/img/logo.png">

  return `
<header>

        <div class="header-content">
			<div class="header-title">Website Title</div>
	        <nav>
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
	  
      <aside class="left-sidebar">
	  
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
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
		  </marquee>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/40/1000/400">
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
		  	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a>
			<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif" alt="petrapixel"></a></textarea>
		  </div>
        </div>
      </aside>
	
      `;
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}

function giveActiveClassToLinks() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");

    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");

        if (el.closest("summary")) {
          el.closest("details").addAttribute("open");
          el.closest("summary").classList.add("active");
        }
      }
    }
  });
}
