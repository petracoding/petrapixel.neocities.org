/*

  PLEASE DO NOT SPOIL YOURSELF !!!!
  happy holidays :3

*/

const doors = [
  {
    day: 1,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    day: 2,
    text: "TODO",
  },
  {
    day: 3,
    text: "TODO",
  },
  {
    day: 4,
    text: "TODO",
  },
  {
    day: 15,
    text: "TODO",
  },
  {
    day: 6,
    text: "TODO",
  },
  {
    day: 7,
    text: "TODO",
  },
  {
    day: 8,
    text: "TODO",
  },
  {
    day: 9,
    text: "TODO",
  },
  {
    day: 10,
    text: "TODO",
  },
  {
    day: 11,
    text: "TODO",
  },
  {
    day: 12,
    text: "TODO",
  },
  {
    day: 13,
    text: "TODO",
  },
  {
    day: 14,
    text: "TODO",
  },
  {
    day: 15,
    text: "TODO",
  },
  {
    day: 16,
    text: "TODO",
  },
  {
    day: 17,
    text: "TODO",
  },
  {
    day: 18,
    text: "TODO",
  },
  {
    day: 19,
    text: "TODO",
  },
  {
    day: 20,
    text: "TODO",
  },
  {
    day: 21,
    text: "TODO",
  },
  {
    day: 22,
    text: "TODO",
  },
  {
    day: 23,
    text: "TODO",
  },
  {
    day: 24,
    text: "TODO",
  },
];

export function initAdventCalendar() {
  const calEl = document.querySelector("#advent-calendar");
  if (!calEl) return;

  console.log("%c Please no cheating! Happy holidays!", "font-size: 12pt");

  const d = new Date(); // current date
  const day = d.getDate(); // day of month (1–31)
  const month = d.getMonth() + 1;

  // create calendar:

  let html = "";
  const isDecember = month != 11 || false; // <- TESTING

  shuffleArray(doors);

  doors.forEach((door) => {
    const addContentToHtml = isDecember && door.day <= day;
    const doorIsOpen = isDecember && door.day < day;
    const doorIsOpenable = isDecember && door.day == day;

    html += `
      <div class='${doorIsOpen ? "advent-calendar__door advent-calendar__door--open" : doorIsOpenable ? "advent-calendar__door advent-calendar__door--openable" : "advent-calendar__door"}' data-day="${
      door.day
    }" role="button"><strong>${door.day}</strong></div>
    `;

    if (addContentToHtml) {
      html += `
      <div class="advent-calendar__content-wrapper">
        <div class="advent-calendar__content">
          <strong>${door.day}</strong>
          <p>${door.text}</p>
        </div>
      </div>
    `;
    }
  });

  calEl.innerHTML = html;

  // initiate event listeners:

  [...document.querySelectorAll(".advent-calendar__door--openable, .advent-calendar__door--open")].forEach((door) => {
    door.addEventListener("click", () => {
      const alreadyClicked = door.classList.contains("advent-calendar__door--clicked");
      if (!alreadyClicked) {
        const doorNumber = door.getAttribute("data-day");
        const alreadyOpen = door.classList.contains("advent-calendar__door--open");

        // open this door
        door.classList.add("advent-calendar__door--open");
        setTimeout(
          function () {
            // show content
            door.classList.add("advent-calendar__door--clicked");

            // hide content of others
            [...document.querySelectorAll(".advent-calendar__door--clicked")].forEach((d) => {
              if (d.getAttribute("data-day") !== doorNumber) {
                d.classList.remove("advent-calendar__door--clicked");
              }
            });
          },
          doorNumber == day && !alreadyOpen ? 500 : 0
        );
      }
    });
  });

  [...document.querySelectorAll(".advent-calendar__content-wrapper")].forEach((wrapper) => {
    wrapper.addEventListener("click", (ev) => {
      const doorToClose = document.querySelector(".advent-calendar__door--clicked");
      if (doorToClose) doorToClose.classList.remove("advent-calendar__door--clicked");
      ev.stopPropagation();
    });
  });
}

function shuffleArray(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}
