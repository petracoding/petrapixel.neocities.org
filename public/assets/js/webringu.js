const INDEX_PAGE = "http://localhost:8080/webring/index.html";
const members = [
  {
    url: "https://www.example0.com/",
    title: "Example0",
  },
  {
    url: "https://www.example1.com/",
    title: "Example1",
  },
  {
    url: "http://localhost:8080/",
    title: "Example3Localhost",
  },
];

// Start of Code. Only edit here if you know what you're doing.

document.addEventListener("DOMContentLoaded", function () {
  const index = getIndexOfMember();
  if (!index) window.location.replace(INDEX_PAGE);

  let indexToRedirectTo = 0;
  if (document.getElementById("webringu-next")) {
    indexToRedirectTo = index + 1 == members.length ? 0 : index + 1;
  } else if (document.getElementById("webringu-prev")) {
    indexToRedirectTo = index - 1 == -1 ? members.length - 1 : index - 1;
  } else if (document.getElementById("webringu-random")) {
    indexToRedirectTo = Math.floor(Math.random() * members.length);
    if (indexToRedirectTo == index) indexToRedirectTo = 0;
  } else {
    return;
  }

  console.log(members[indexToRedirectTo].url);
  // window.location.replace(members[indexToRedirectTo].url);
});

function getIndexOfMember() {
  let i = 0;
  let index = -1;
  members.forEach((member) => {
    if (window.location.href.includes(member.url)) {
      index = i;
    }
    i++;
  });
  return index;
}
