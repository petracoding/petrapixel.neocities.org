// Webringu Webring Script by PetraPixel (https://petrapixel.neocities.org/coding/webringu)

document.addEventListener("DOMContentLoaded", function () {
  const params = getParameters();
  if (params["slug"] && params["action"]) {
    doAction(params);
  }

  const membersListEl = document.querySelector("#webringulist");
  if (membersListEl) createMembersList(membersListEl);

  const membersCountEl = document.querySelector("#webringucount");
  if (membersCountEl) membersCountEl.innerHTML = members.length;
});

function doAction(params) {
  const index = getIndexOfMember(params["slug"]);
  if (index == -1) {
    console.error(params["slug"] + " not found in webring member list.");
    return;
  }

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
    console.error("Webring Error: Wrong action.");
    return;
  }

  window.location.replace(members[indexToRedirectTo].url);
}

function createMembersList(el) {
  const hasDescription = members[0].description ? true : false;

  let output = `<table class="webring-members">
    <thead>
      <tr>
        <th>Member</th>
        <th>Website</th>
        ${hasDescription ? `<th>Description</th>` : ""}
      </tr>
    </thead>
    <tbody>`;

  members.forEach((member) => {
    let prettyUrl = member.url.replace("https://", "");
    prettyUrl = prettyUrl.endsWith("/") ? prettyUrl.slice(0, -1) : prettyUrl;
    output += `<tr>
        <td><abbr title="slug: ${member.slug}">${member.title}</abbr></td>
        <td><a href="${member.url}">${member.buttonUrl ? `<img src="${member.buttonUrl}" width="88" />` : ""}${prettyUrl}</a></td>
		${hasDescription ? `<td>${member.description ? member.description : ""}</td>` : ""}
      </tr>`;
  });

  output += `</tbody>
  </table>`;
  el.innerHTML = output;
}

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
