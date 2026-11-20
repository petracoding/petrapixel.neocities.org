/* Upvote Widget by Petrapixel (https://petrapixel.neocities.org) */
/* v1.1.1 */

const API_URL = "https://pjmgstqqbgghdhbbrans.supabase.co/rest/v1/votes";
const API_KEY = "sb_publishable__KjN0_d_NpEDWsoGHHaEfA_aIpIjBrC";

let url = window.location.host;

document.addEventListener("DOMContentLoaded", function () {
  const widgets = document.querySelectorAll("[data-upvote-widget]");
  widgets.forEach(async (widget) => {
    await initWidget(widget);
  });
});

async function initWidget(widget) {
  const widgetId = widget.getAttribute("data-upvote-widget");
  const fullId = url + "-" + widgetId;

  const btn = widget.querySelector("button");
  const count = (await getCount(fullId)) || 0;
  const countElement = widget.querySelector("span");
  if (countElement) countElement.innerHTML = count;

  const hasUpvoted = localStorage.getItem("upvote-widget-" + fullId) === "true";
  if (hasUpvoted) {
    widget.setAttribute("data-upvoted", "true");
  }

  if (btn) {
    btn.addEventListener("click", () =>
      btnClicked(widget, fullId, countElement),
    );
  }
}

async function btnClicked(widget, fullId, countElement) {
  const hasUpvoted = localStorage.getItem("upvote-widget-" + fullId) === "true";
  const newCount = await changeCount(fullId, hasUpvoted);
  if (countElement) countElement.innerHTML = newCount;
  if (hasUpvoted) {
    widget.removeAttribute("data-upvoted");
    localStorage.setItem("upvote-widget-" + fullId, "false");
  } else {
    widget.setAttribute("data-upvoted", "true");
    localStorage.setItem("upvote-widget-" + fullId, "true");
  }
}

async function getCount(fullId) {
  const response = await fetch(
    `${API_URL}?id=eq.${encodeURIComponent(fullId)}&select=count`,
    {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    },
  );

  if (!response.ok) throw new Error("Could not load vote count");

  const data = await response.json();
  return data[0]?.count ?? null;
  // returns null if there is no row
}

async function changeCount(fullId, removeLike) {
  const count = await getCount(fullId);

  if (count === null) {
    // Create row
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: fullId,
        count: 1,
      }),
    });
    if (!response.ok) throw new Error("Could not create vote row");
    return 1;
  }

  // Update row
  const response = await fetch(
    `${API_URL}?id=eq.${encodeURIComponent(fullId)}`,
    {
      method: "PATCH",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        count: removeLike ? count - 1 : count + 1,
      }),
    },
  );
  if (!response.ok) throw new Error("Could not update vote count");
  return removeLike ? count - 1 : count + 1;
}
