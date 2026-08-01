const items = [
  {
    id: 1,
    text: "Text.",
    question: "First question?",
    answers: [
      {
        text: "Answer 1",
        to: 2,
      },
      {
        text: "Answer 2",
        to: 3,
      },
    ],
  },
  {
    id: 2,
    text: "twext",
  },
];

export function initSupportTool() {
  const el = document.querySelector("#support-tool");
  if (!el) return;
  loadItem(1);
}

function loadItem(id) {
  const el = document.querySelector("#support-tool");
  const item = getItem(id);
  if (!item) {
    el.innerHTML = "Could not find item " + id;
    return;
  }
  el.innerHTML = `<p>${item.text}</p><p>${item.question}</p>`;
}

function getItem(id) {
  let item;
  items.forEach((i) => {
    if (i.id == id) item = i;
  });
  return item;
}
