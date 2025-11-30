/*

  PLEASE DO NOT SPOIL YOURSELF !!!!
  happy holidays :3

*/

const doors = [
  // Week 1
  {
    day: 1,
    title: "Time for a repaint",
    easy: "Let's start easy: Time for a new lockscreen and wallpaper for all of your devices. Maybe even something seasonal?",
    hard: "(For PC users.) Ever tried to use custom folder icons for your folders? You can find some on deviantart for example. Personally I love <a href='https://www.deviantart.com/arunasok3/art/Windows-11-Coloured-Folder-Icons-V2-0-907743091' href='_blank'>these</a>. It's a really neat way of sprucing up your files! Installation is easy: just right-click the folder and choose a new image for the icon.",
  },
  {
    day: 2,
    title: "YouTube Declutter",
    easy: "Continuing with simple challenges: Today, unsubscribe from all the YouTube channels you're not interested anymore! Your subscription box will thank you.",
    hard: "Sort and declutter your YouTube playlists. And if you have videos of your own, private or delete them if you don't need them anymore.",
  },
  {
    day: 3,
    title: "Browser Declutter",
    easy: "Time to clean up your browser bookmarks and open tabs! Also uninstall any unused browser extensions. Don't forget your phone's browser!",
    hard: "Install <a href='https://tab.gladly.io/' target='_blank'>Tab for a Cause</a> to donate to a charity whenever you open a new tab.",
  },
  {
    day: 4,
    title: "Inbox Organization",
    easy: "We're not done with cleaning up! Your email inbox is looking messy, isn't it? Time to clean that up! You should probably create some folders while you're at it.",
    hard: "Create some rules for incoming emails to help with organisation, like moving all mails from a particular sender into a particular folder.",
  },
  {
    day: 5,
    title: "Uninstalling",
    easy: "Today we're uninstalling EVERYTHING we don't need anymore. This means apps on your phone, games, and software on your PC.",
    hard: "Once you're done uninstalling you can update all your apps/programs/games to make sure you're up-to-date with everything.",
  },
  {
    day: 6,
    title: "Stay Free",
    easy: "Install the <a href='https://stayfreeapps.com/' target='_blank'>StayFree</a> app to limit your time spent using certain apps. We're taking back our free time and ending the doomscrolling.",
    hard: "Install <a href='https://addons.mozilla.org/en-US/firefox/addon/distract-me-not/' href='_blank'>Distract Me Not</a> or a similar browser extension to block certain websites that you don't want to spend time on or want to stop using altogether.",
  },
  {
    day: 7,
    title: "Anti-Stalker",
    easy: "Google your own full name and see what comes up. Then try to remove anything you don't want to be online (including information on your Facebook profile) if you can. Do the same with any usernames you tend to use a lot.",
    hard: "Delete any accounts you come across that you don't need anymore.",
  },
  // Week 2
  {
    day: 8,
    title: "Small Circle",
    easy: "If you're currently following more than 50 people on a social media (e.g. instagram, twitter, ...), reduce it to 50. If you're following less than 50 already, reduce it to 25. Focus on what/who you really care about, and get rid of the rest. You'll love it, I swear.",
    hard: "Reset your instagram explore page/suggestions so that they are not interesting to you anymore. (This can be done in the settings.)",
  },
  {
    day: 9,
    title: "E-Books",
    easy: "If you have e-books, it's now time to sort them - on your PC or e-reader or whatever. I highly recommend the free software <a href='https://calibre-ebook.com/' href='_blank'>Calibri</a> for e-book management.",
    hard: "Download new e-books free & legally from <a href='https://www.gutenberg.org/' href='_blank'>Project Gutenberg</a>. It's a treasure trove.",
  },
  {
    day: 10,
    title: "Passwords",
    easy: "Enter your email address into <a href='https://haveibeenpwned.com/' href='_blank'>Have I Been Pwned</a> to see if your email was ever in a data breach.",
    hard: "Change your passwords. Yes, all of them. Or at least a few.",
  },
  {
    day: 11,
    title: "Privacy",
    easy: "Make your social media accounts private. That means instagram, twitter, etc.",
    hard: "Block people you are jealous of, don't like or for some other reason don't want to see posts of.",
  },
  {
    day: 12,
    title: "Browser Switch",
    easy: "If you're currently using Google Chrome, well... Let's not, okay? Switch to another browser, I recommend Firefox.",
    hard: "Let's try to get away from Google even more: Replace google.com with another search engine like DuckDuckGo or Ecosia.",
  },
  {
    day: 13,
    title: "Phone Declutter",
    easy: "Sort through your phone gallery and other files on your phones, and make sure you delete everything you don't need.",
    hard: "Use your phone's settings or a space-saver app to detect which files/apps use the most space on your phone, and make space accordingly.",
  },
  {
    day: 14,
    title: "Anti-Adobe",
    easy: "Adobe sucks, I think we can all agree. So - whether or not you're actually paying for it - let's get rid of our Adobe software. Replace Photoshop/InDesign/Illustrator with <a href='https://www.affinity.studio/' href='_blank'>Affinity</a>, which is very similar but free!",
    hard: "If you're currently using Adobe Premiere Pro you can replace it with the free software <a href='https://www.blackmagicdesign.com/at/products/davinciresolve' href='_blank'>Davinci Resolve</a>.",
  },
  // Week 3 <a href='LINK' href='_blank'>TEXT</a>
  {
    day: 15,
    title: "TODO",
    easy: "TODO",
    hard: "TODO",
  },
  {
    day: 16,
    title: "TODO",
    easy: "TODO",
    hard: "TODO",
  },
  {
    day: 17,
    title: "TODO",
    easy: "TODO",
    hard: "TODO",
  },
  {
    day: 18,
    title: "TODO",
    easy: "TODO",
    hard: "TODO",
  },
  {
    day: 19,
    title: "TODO",
    easy: "TODO",
    hard: "TODO",
  },
  {
    day: 20,
    title: "TODO",
    easy: "TODO",
    hard: "TODO",
  },
  {
    day: 21,
    title: "TODO",
    easy: "TODO",
    hard: "TODO",
  },
  // Week 4
  {
    day: 22,
    title: "TODO",
    easy: "TODO",
    hard: "TODO",
  },
  {
    day: 23,
    title: "TODO",
    easy: "TODO",
    hard: "TODO",
  },
  {
    day: 24,
    title: "TODO",
    easy: "TODO",
    hard: "TODO",
  },
];

export function initAdventCalendar() {
  const calEl = document.querySelector("#advent-calendar");
  if (!calEl) return;

  const TESTING = false; // TURN OFF!!!!!!

  console.log("%c Please no cheating! Happy holidays!", "font-size: 12pt");

  const d = new Date(); // current date
  const day = TESTING ? 23 : d.getDate(); // day of month (1–31)
  const month = d.getMonth() + 1;

  // create calendar:

  let html = "";
  const isDecember = month == 12 || TESTING;

  if (!TESTING) shuffleArray(doors);

  doors.forEach((door) => {
    const addContentToHtml = (isDecember && door.day <= day) || month < 11;
    const doorIsOpen = (isDecember && door.day < day) || month < 11;
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
          <hr>
          <h3>${door.title}</h3>
          <p>${door.easy}</p>
          <br/>
          <p><b>Bonus challenge for tryhards & go-getters:</b></p>
          <p>${door.hard}</p>
          <hr>
          <p><i>How did you do? Share in the comments!</i></p>
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
      if (ev.target.getAttribute("class") != "advent-calendar__content-wrapper") return;

      const doorToClose = document.querySelector(".advent-calendar__door--clicked");
      if (doorToClose) doorToClose.classList.remove("advent-calendar__door--clicked");
    });
  });
}

function shuffleArray(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}
