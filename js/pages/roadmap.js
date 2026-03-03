const roadmap = [
  {
    title: "How to make a website",
    link: "/coding/how-to-make-a-website",
  },
  {
    title: "Common questions",
    link: "/coding/common-questions",
  },
  {
    title: "Common mistakes",
    link: "/coding/common-mistakes",
  },
  {
    title: "Code Quality Guide",
    link: "/coding/code-quality",
  },
  {
    title: "Troubleshooting Guide",
    link: "/coding/need-help",
  },
  {
    title: "How to load the same layout on every page",
    link: "/coding/layout-base-code",
  },
  {
    title: "CSS Positioning/Layout Tutorial",
    link: "/coding/positioning-tutorial",
  },
  {
    title: "Cachebusting",
    link: "/coding/cachebusting",
  },
  {
    title: "My VSCode Setup",
    link: "/coding/my-setup",
  },

  {
    title: "Self-study Checklist",
    link: "/coding/checklist",
  },
  {
    title: "I know HTML, CSS, and JS. Now what?",
    link: "/coding/now-what",
  },
];

export function initRoadmap() {
  const el = document.querySelector(".roadmap");
  if (!el) return;

  const currentPage = window.location.pathname.replace("/public", "");
  let html = `
<div class='roadmap__info'>
  <strong>Roadmap</strong>
  <p>This is my little roadmap on how to create your first website. Go through these pages in order to get all the info you need!</p>
  <br /> 
  <!-- <p><i>You can also watch this video tutorial of mine:</i></p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/62NJbICVWkQ?si=0JjaMF8tZml83BG9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
 </div>
  <ol class='roadmap__list'>`;

  roadmap.forEach((item) => {
    if (item.link == currentPage) {
      html += `
			<li class="roadmap__current"><span>${item.title}</span></li>
		`;
    } else {
      html += `
			<li class="roadmap__item"><a href="${item.link}">${item.title}</a></li>
		`;
    }
  });

  html += `</ol>`;
  el.innerHTML = html;
}
