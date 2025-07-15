// Webringu Webring Script by PetraPixel (https://petrapixel.neocities.org/coding/webringu)
// Version: 1.0.1 (2025-07-12)
// Press Ctrl+S to download this file.

document.addEventListener("DOMContentLoaded", function () {
  const action = window.location.search.substr(1).replace("action=", "").replace(".html", "").toLowerCase();
  if (action && document.referrer) doAction(action);

  const membersListEl = document.querySelector("#webringulist");
  if (membersListEl) createMembersList(membersListEl);

  const membersCountEl = document.querySelector("#webringucount");
  if (membersCountEl) membersCountEl.innerHTML = members.length;
});

function doAction(action) {
  const index = members.findIndex((member) => document.referrer.replace("http://", "https://").includes(member.url.replace("http://", "https://")));
  if (index == -1) {
    console.error(document.referrer + " not found in webring member list.");
    return;
  }

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

function generateRandomItem(items, excludedItem) {
  let randomItem = items[Math.floor(Math.random() * items.length)];
  while (randomItem == excludedItem) {
    randomItem = items[Math.floor(Math.random() * items.length)];
  }
  return randomItem;
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
    let prettyUrl = member.url.replace("https://", "").replace("http://", "");
    prettyUrl = prettyUrl.endsWith("/") ? prettyUrl.slice(0, -1) : prettyUrl;
    output += `<tr>
        <td>${member.title}</td>
        <td><a href="${member.url}">${member.buttonUrl ? `<img src="${member.buttonUrl}" width="88" />` : ""}<div>${prettyUrl}</div></a></td>
		${hasDescription ? `<td>${member.description ? member.description : ""}</td>` : ""}
      </tr>`;
  });

  output += `</tbody>
  </table>`;
  el.innerHTML = output;
}
