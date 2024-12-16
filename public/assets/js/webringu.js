const members = [
  {
    url: "https://www.example0.com/",
    title: "Example0",
    slug: "example0",
  },
  {
    url: "https://www.example1.com/",
    title: "Example1",
    slug: "example1",
  },
  {
    url: "http://localhost:8080/",
    title: "Example3Localhost",
    slug: "YOURSLUGHERE",
  },
];

// Start of Code. Only edit here if you know what you're doing.

document.addEventListener("DOMContentLoaded", function () {
  const params = getParameters();
  if (!params["slug"] || !params["action"]) return;

  const index = getIndexOfMember(params["slug"]);
  if (index == -1) return;

  const action = params["action"].replace(".html", "").toLowerCase();

  let indexToRedirectTo = 0;
  if (action == "next") {
    indexToRedirectTo = index + 1 == members.length ? 0 : index + 1;
  } else if (action == "previous") {
    indexToRedirectTo = index - 1 == -1 ? members.length - 1 : index - 1;
  } else if (action == "random") {
    indexToRedirectTo = index;
    while (indexToRedirectTo == index) {
      indexToRedirectTo = Math.floor(Math.random() * members.length);
    }
  } else {
    console.error("Webring Error. Wrong action.");
    return;
  }

  console.log("Redirecting to " + members[indexToRedirectTo].slug);
  // window.location.replace(members[indexToRedirectTo].url);
});

function getIndexOfMember(slug) {
  let i = 0;
  let index = -1;
  members.forEach((member) => {
    if (member.slug == slug) {
      index = i;
    }
    i++;
  });
  return index;
}

function generateRandomItem(items, excludedItem) {
  let randomItem = items[Math.floor(Math.random() * items.length)];
  while (randomItem == excludedItem) {
    randomItem = items[Math.floor(Math.random() * items.length)];
  }
  return randomItem;
}

function getParameters() {
  let prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
  let params = {};
  let prmarr = prmstr.split("&");
  for (let i = 0; i < prmarr.length; i++) {
    let tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}
