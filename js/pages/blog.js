import { findGetParameter } from "../helpers";

const isLocalhost = window.location.href.includes("http://localhost");
const noCache = "?nocache=" + new Date().getTime();
const domParser = new DOMParser();
let isReadMore = false;
let filter;
let limit;
let i = 1;

export function initBlog() {
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
  }

  // Load JSON
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
      // Load all articles
      const articlesJson = data["blog"];
      [...articlesJson].forEach((articleJson) => {
        if (isReadMore) {
          if (window.location.href.includes(articleJson["fileName"] + ".html")) {
            // do not output this article, because we are on the page of this article.
          } else {
            loadArticle(articleJson["fileName"]);
          }
        } else {
          loadArticle(articleJson["fileName"]);
        }
      });
    })
    .catch(function (response) {
      console.error("Loading Blog Json: " + response.statusText);
    });
}

function loadArticle(fileName) {
  const theFileName = fileName.replace(".html", "");
  const file = isLocalhost ? `http://localhost:52330/public/blog/${theFileName}.html` : `https://petrapixel.neocities.org/blog/${theFileName}.html`;
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
        i++;
        addArticleToDOM(blogEl, doc, articleTags, file);
      }
    })
    .catch(function (response) {
      console.error("Loading Blog Article: " + response.statusText);
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
      const tagLink = (isLocalhost ? "/public" : "") + "/blog.html?tag=" + tag.toLowerCase();
      articleTagsHtml += `<a href="${tagLink}" class="blog-article__tag">${tag}</a>`;
      if (j < articleTags.length) {
        articleTagsHtml += ", ";
      }
      j++;
    });
    articleTagsHtml += `</div>`;
  }

  const titleTag = isReadMore ? "div" : "h2";

  const articleHTML = `
	  <article class="blog-article">
	  ${imageHtml}
	  <${titleTag} class="blog-article__title"><a href="${file}">${articleTitle}</a></${titleTag}>
		  <!-- <div class="blog-article__info">
			  <div class="blog-article__date">${articleDate}</div>
			  ${articleTagsHtml}
		  </div> 
		  <div class="blog-article__description"><small>${articleDescription}</small></div> -->
		  <div class="blog-article__description">${articlePreviewTrimmed}</div>
		  <a href="${file}" class="blog-article__read" aria-label="Read '${articleTitle}'">Read...</a>
	  </article>
  	`;

  blogEl.insertAdjacentHTML("beforeend", articleHTML);
}
