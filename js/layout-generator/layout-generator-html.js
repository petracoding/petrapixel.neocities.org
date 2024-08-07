export function getHTML(variables, loadPerJs) {
  if (loadPerJs) {
    return getStart() + getMainContent(variables) + getEnd(variables);
  }
  return getStart() + getBefore(variables) + getMainContent(variables) + getAfter(variables) + getEnd(variables);
}

function getStart(variables) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>TITLE</title>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
    <meta content="utf-8" http-equiv="encoding" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="img/favicon.ico" rel="icon" type="image/x-icon" />
    <!-- Template generated with petrapixel's layout generator. -->
  </head>
  <body>
    <!-- The next line is a skip-to-content link for keyboard users. -->
    <a href="#content" id="skip-to-content-link">Skip to content</a>
    <div id="layout">`;
}

export function getBefore(variables) {
  return `
<header>
        <div>Website Title</div>
      </header>
      <aside>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="/templates/template1.html">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
            <li>
              <details>
                <summary><a href="#">Submenu 1</a></summary>
                <ul>
                  <li><a href="#">Page A</a></li>
                  <li><a href="#">Page B</a></li>
                  <li><a href="#">Page C</a></li>
                  <li><a href="#">Page D</a></li>
                  <li><a href="#">Page E</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Submenu 2</summary>
                <ul>
                  <li><a href="#">Page A</a></li>
                  <li><a href="#">Page B</a></li>
                  <li><a href="#">Page C</a></li>
                  <li><a href="#">Page D</a></li>
                  <li><a href="#">Page E</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
        <p>Blah blah.</p>
      </aside>`;
}

function getMainContent(variables) {
  return `
<main id="content">
        <section>
          <h1>Page Title</h1>
          <p>This is the preview of template 1 ("Square One") by <a href="https://petrapixel.neocities.org/" target="_blank">petrapixel</a>.</p>
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
          <p>This is an image:</p>
          <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />
          <img class="image" src="http://localhost:52330/public/img/layout/divider3.gif" />
          <p>This is a full-width image:</p>
          <img class="image full-width-image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />
          <p>These are two images:</p>
          <div class="images">
            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />
            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />
          </div>
          <p>These are three images:</p>
          <div class="images">
            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />
            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />
            <img class="image" src="https://64.media.tumblr.com/b9a87ed1d1e3a75d448822a1ca97c9cb/a6cf10c8fbb960f8-6a/s2048x3072/3fffcf33470fb11362056a47da91cc4999bd176e.pnj" />
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
  return `
<footer>Footer Text. <a href="#">Link.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</footer>`;
}

function getEnd(variables) {
  return `
</div>
    <!-- Add any additional Javascript code (<script></script>) here. -->
  </body>
</html>`;
}
