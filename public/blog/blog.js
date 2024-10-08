const isLocalhost = window.location.href.includes("http://localhost");
const noCache = "?nocache=" + new Date().getTime();
const domParser = new DOMParser();
let isReadMore = false;
let filter;
let limit;
let i = 1;

const articleFileNames = ["neocities-external-widgets", "neocities-automatic-deployment", "why-i-stopped-using-social-media"];
// add at the end

document.addEventListener("DOMContentLoaded", function () {
  initBlog();
});

function initBlog() {
  const blogEl = document.querySelector("#blog");
  if (!blogEl) return;
  if (blogEl.classList.contains("blog-read-more__articles")) {
    isReadMore = true;
  }

  // Options:
  filter = findGetParameter("tag") || blogEl.getAttribute("data-filter") || "";
  limit = blogEl.getAttribute("data-limit") || 50;

  // Title:
  if (filter && !isReadMore) {
    const originalTitle = document.querySelector("main h1").innerHTML;
    document.querySelector("main h1").innerHTML = originalTitle + ": posts about <i>" + filter + "</i>";
    const blogEl = document.querySelector("#blog");
    if (!blogEl) return;
    blogEl.innerHTML = "";
  } else {
    // NOT MAIN BLOG SITE
    return;
  }

  // Load all articles:
  articleFileNames.reverse().forEach((articleFileName) => {
    if (isReadMore && window.location.href.includes(articleFileName + ".html")) {
      // do not output this article, because we are on the page of this article.
    } else {
      loadArticle(articleFileName);
    }
  });
}

function loadArticle(fileName) {
  const theFileName = fileName.replace(".html", "");
  const file = isLocalhost ? `http://localhost:8080/blog/${theFileName}.html` : `https://petrapixel.neocities.org/blog/${theFileName}.html`;
  fetch(file + noCache)
    .then(function (response) {
      switch (response.status) {
        case 200:
          return response.text();
        case 404:
          throw response;
      }
    })
    .then(function (template) {
      // Get DOM from article
      const blogEl = document.querySelector("#blog");
      if (!blogEl) return;
      const doc = domParser.parseFromString(template, "text/html");
      const articleTags = doc.querySelector("article").getAttribute("data-tags").replaceAll(", ", ",").split(",");

      // Add article to current DOM (if it fits filters)
      if (i <= limit && (filter == "" || articleTags.includes(filter))) {
        addArticleToDOM(blogEl, doc, articleTags, file);
        i++;
      }
    })
    .catch(function (response) {
      console.error("Loading Blog Article failed: " + response.statusText);
    });
}

function addArticleToDOM(blogEl, doc, articleTags, file) {
  const articleTitle = doc.querySelector(".blog-article__title").innerHTML;
  const articleDescription = doc.querySelector(".blog-article__description").innerHTML;
  const articlePreview = doc.querySelector(".blog-article__content").textContent.trim();
  const previewLength = 200;
  const articlePreviewTrimmed = articlePreview.length > previewLength ? articlePreview.substring(0, previewLength - 3) + "..." : articlePreview;
  const articleDate = doc.querySelector("article").getAttribute("data-date");

  // Image
  let imageHtml = "";
  const image = doc.querySelector(".blog-article__image img");
  if (image) {
    const imageUrl = image.getAttribute("src").substring(3);
    const imageAltText = image.getAttribute("alt");
    imageHtml = `<div class="blog-article__image"><img src="${imageUrl}" alt="${imageAltText}" /></div>`;
  }

  // Tags
  let articleTagsHtml = "";
  if (articleTags.length > 1) {
    articleTagsHtml += `<div class="blog-article__tags"><b>Topics: </b>`;
    let j = 1;
    [...articleTags].forEach((tag) => {
      const tagLink = (isLocalhost ? "/public" : "") + "/blog/index.html?tag=" + tag.toLowerCase();
      articleTagsHtml += `<a href="${tagLink}" class="blog-article__tag">${tag}</a>`;
      if (j < articleTags.length) {
        articleTagsHtml += ", ";
      }
      j++;
    });
    articleTagsHtml += `</div>`;
  }

  let articleHTML = `<article class="blog-article">
  		${imageHtml}
  		<h2 class="blog-article__title"><a href="${file}">${articleTitle}</a></h2>
	   	<div class="blog-article__info">
		  <div class="blog-article__date">${articleDate}</div>
		  ${articleTagsHtml}
	  	</div> 
	  	<div class="blog-article__description">${articleDescription ? articleDescription : articlePreviewTrimmed}</div>
	  	<a href="${file}" class="blog-article__read" aria-label="Read '${articleTitle}'">Read...</a>
  </article>`;

  //   if (isReadMore) {
  //     articleHTML = `<article class="blog-article">
  // 	  		${imageHtml}
  // 	  		<div class="blog-article__title"><a href="${file}">${articleTitle}</a></div>
  // 		   	<div class="blog-article__info">
  // 			  <div class="blog-article__date">${articleDate}</div>
  // 			  ${articleTagsHtml}
  // 		  	</div>
  // 		  	<div class="blog-article__description">${articleDescription ? articleDescription : articlePreviewTrimmed}</div>
  // 		  	<a href="${file}" class="blog-article__read" aria-label="Read '${articleTitle}'">Read...</a>
  // 	  </article>`;
  //   }

  blogEl.insertAdjacentHTML("beforeend", articleHTML);
}

// HELPERS:

// https://stackoverflow.com/a/5448595/3187492
function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}
