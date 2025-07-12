export function initRandomGenerator() {
  if (document.querySelector("#gimmerandomfact")) initRandomFactAboutMe();
  if (document.querySelector("#gimmerandomfavorite")) initRandomFavorite();

  const el = document.querySelector(".random-generator");
  if (!el) return;

  const type = el.getAttribute("data-generator");
  const items = type == "bored-button" ? boredButton : listIdeas;

  document.querySelector(".random-generator__number").innerHTML = items.length;

  const buttonEl = el.querySelector(".random-generator__button");
  const outputEl = el.querySelector(".random-generator__output");

  buttonEl.addEventListener("click", () => {
    document.querySelector(".random-generator__label").style.display = "block";
    const currentItem = outputEl.innerHTML ? outputEl.innerHTML : false;
    outputEl.innerHTML = generateRandomItem(items, currentItem);
  });
}

function initRandomFactAboutMe() {
  const btn = document.querySelector("#gimmerandomfact");
  const factEl = document.querySelector("#randomfact");

  btn.addEventListener("click", () => {
    const currentItem = factEl.innerHTML ? factEl.innerHTML : false;
    factEl.innerHTML = generateRandomItem(
      [
        "I started learning how to play the drums when I was a kid (but it never came to fruition).",
        "My dad once built a swingset for me and my sister that we still love to use!",
        "I got my first tattoo right after passing my driving test!",
        "I'm the opposite of a procrastinator. I get stressed out when I don't do everything right away.",
        "I always go to sleep between 10:30 and 11:00pm.",
        "My favorite song as a child was Dragostea Din Tei by O-Zone.",
        "I have the dinosaur (opisthotonic) death pose tattoed on my left shoulder.",
        "Every night I cuddle a stuffed animal. His name is Mr. Sloth.",
        "I watch YouTube while doing my morning/evening routine. (Usually Game Grumps, Danny Gonzalez or Drew Gooden)",
        "I maintain over 500 lists over at listography.com",
        "My chinese zodiac is the rabbit.",
        "I'm scared of spiders, large man-made things (especially submerged), deep water, and calling people on the phone!",
        "I share a birthday with Donald Sutherland, David Hasselhoff, and Angela Merkel.",
        "I know someone who is friends with a rapper I like",
        "I know the blurb of a random old romance novel I've never read and will never read by heart.",
        "I'm really interested in etymology, prehistory, cannibalism, 18th century sailing ships, and dinosaurs.",
        "I'm fluent in German and English, and am currently learning Spanish (level A2). I want to learn Yiddish at some point.",
        "My first phone was the Nokia 6020 in silver.",
        "I've reguarily been writing into my diary since 2011.",
        "When I build something in Sims it's usually a tiny house.",
        "I think the banjo is a cool instrument and I enjoy what it sounds like.",
        "My favorite song that isn't on Spotify is 'Manchmal' by Ben Blümel.",
        "In 2023 I once watched 25 movies in 24 days.",
        "I really enjoy Christian imagery and symbolism in media.",
        "When I was young my biggest fear was the stairway scene from The Exorcist.",
        "When I was really young I used to fall asleep to the sounds of my older brother playing World of Warcraft every night",
        "One of my professors used to be a jungle guide and scuba instructor, and once met Jeff Bezos before he was famous.",
        "I have a sister (2 years older) and a brother (11 years older).",
        "I used to think I was straight because 'every girl thinks about kissing girls sometimes'.",
        "I often think about domesticated dinosaurs.",
        "The first PC game I ever played was Roller Coaster Tycoon 3. I still play it sometimes.",
        "I, somehow, never had a Wii growing up. Nintendo DS all the way!",
        "I want to learn Yiddish",
        "I'm very interested in sign language, and am currently learning it.",
        "I once wrote a seminar paper entitled 'The Gay Awakening', about 'The Awakening' by Kate Chopin.",
        "I used to have short, red hair in my teens.",
        "I've almost always wanted to be a programmer because my older brother is one.",
        "My favorite colors are pastel pink, white, beige and brown.",
        "My favorite book genre is non-fiction.",
        "The best video game ever created - in my opinion - is Portal 2. Closely followed by Minecraft.",
        "I met Dan Howell at a meet-and-greet in 2023.",
        "The first fanfiction I ever wrote (that I remember) was about Kurt and Blaine from Glee.",
        "I still have the Firefox bookmarks from when I was 11. I just always keep them when I switch devices.",
        "I've only broken a phone once. (And I'm still pissed about it.)",
        "I listen to a ton of comedy music, it always cheers me up!",
        "I always wear socks with sandals!",
      ],
      currentItem
    );
  });
}

function initRandomFavorite() {
  const btn = document.querySelector("#gimmerandomfavorite");
  const factEl = document.querySelector("#randomfavorite");

  btn.addEventListener("click", () => {
    const currentItem = factEl.innerHTML ? factEl.innerHTML : false;
    const rando = generateRandomItem(
      [
        ["artwork", "campbell's soup cans, by andy warhol"],
        ["pterosaur", "quetzalcoatlus"],
        ["food", "breakfast"],
        ["season", "summer"],
        ["pokémon", "mew, oddish"],
        ["audio book narrator", "stephen fry"],
        ["animal", "cats, dogs, sloths, snakes, small bird"],
        ["card games", "black stories, dixit, koi-koi"],
        ["board game", "concept"],
        ["snack", "potato chips with rosemary"],
        ["scent", "wooden furniture"],
        ["holiday", "new year's eve"],
        ["language", "english"],
        ["music genre", "comedy"],
        ["music video", "ninja sex party - take on me"],
        ["poem", "der berg - heinz erhardt"],
        ["oil painting", "the lament for icarus, by frederic leighton"],
        ["newsletter", "game grumps newsletter"],
        ["podcast", "coldmirror's harry podcast"],
        ["female name", "campbell"],
        ["aesthetic", "midwest gothic"],
        ["playground choice", "swingset"],
        ["dog breed", "pitbull"],
        ["gore", "blood, bruises, cannibalism"],
        ["superhero", "wolverine"],
        ["marvel character", "loki"],
        ["programming language", "javascript (i'm serious)"],
        ["wikipedia article", "sailing ship"],
        ["perfume", "darling by brut parfums / fabergé "],
        ["winx club girl", "tecna"],
      ],
      currentItem
    );
    factEl.innerHTML = `<b>my favorite <u>${rando[0]}:</u></b><br>${rando[1]}`;
  });
}

function generateRandomItem(items, lastItem) {
  let randomItem = items[Math.floor(Math.random() * items.length)];
  if (!lastItem) return randomItem;

  while (randomItem == lastItem) {
    randomItem = items[Math.floor(Math.random() * items.length)];
  }
  return randomItem;
}

const boredButton = [
  "do items on your to-do list",
  "study",
  "do homework",
  "eat",
  "do your nails",
  "put on makeup",
  "shave",
  "take a shower",
  "dance",
  "learn a choreography",
  "do home exercises",
  "go jogging",
  "do yoga",
  "do your chores",
  "clean your room",
  "dust surfaces you rarely dust",
  "organize your closet/wardrobe",
  "throw away broken/empty/dried-out pens",
  "throw away old/expired make-up",
  "make a backup of your files",
  "organize the files on your pc",
  "organize your phone's gallery",
  "uninstall programs/apps you don't need anymore",
  "change your wallpaper/lockscreen",
  "draw",
  "make up (or write) a story",
  "write poetry",
  "read poetry",
  "start a new book",
  "listen to new music",
  "make a playlist of songs",
  "play browser games (e.g. flash games, agar.io, ...)",
  "watch a movie you've always wanted to see",
  "watch an old movie",
  "watch a movie that was recently released",
  "start a new tv show",
  "watch your 'watch later' videos on youtube",
  "learn how to cut your own hair",
  "write a diary entry",
  "<a href='/fun/list-idea-generator.html'>write a list</a>",
  "write your new year's resolutions",
  "learn/practice a language",
  "sit outside",
  "go to the park",
  "read a non-fiction book",
  "watch a movie you would ordinarily never watch",
  "code (or learn to code)",
  "plan your week",
  "start a dream diary",
  "play video games",
  "play a game you loved as a child",
  "watch a movie you loved as a child",
  "read a book you loved as a child",
  "watch a tv show you loved as a child",
  "learn to do an accent",
  "read today's featured Wikipedia article",
  "listen to an audio book",
  "listen to a podcast",
  "play (or learn to play) an instrument",
  "do that thing you've been putting off - you know the one",
  "read the Wikipedia article about your favorite animal",
  "research something you've always been curious about",
  "learn all the states of the U.S. and their capitals",
  "learn all the countries in the world",
  "declutter your home/room",
  "dye your hair",
  "make up a fictional world and draw a map of it",
  "make a meme",
  "rewatch a movie you've forgotten",
  "learn to say Hello in many different languages",
  "watch colorized footage on YouTube",
  "learn the basics of a language you've never thought about learning",
  "learn how to read/write runes",
  "draw your houseplants",
  "scan in all physical documents you have",
];

const listIdeas = [
  "all books you have read",
  "all books you want to read",
  "all hair cuts/styles you've had",
  "all movies you have seen",
  "all movies you want to see",
  "all phones you've had",
  "all tv shows you have seen",
  "all tv shows you want to see",
  "books from your childhood",
  "concerts you have attended",
  "countries you have been to",
  "countries you want to see before you die",
  "famous people with your birthday",
  "famous people you have met/seen",
  "fictional characters you relate to",
  "flash games you played as a child",
  "fun fact about you",
  "games from your childhood",
  "hobbies you would like to try someday",
  "languages you speak",
  "lyrics you often hear wrong",
  "movies from your childhood",
  "movies you've seen in the cinema",
  "musician collabs that you particularly enjoy",
  "names you would like to use for a pet someday",
  "online games you like",
  "personality test results",
  "plushies you own",
  "songs that give you nostalgia",
  "songs that used to be your favorite song",
  "things that make you happy",
  "things to declutter",
  "things to do when you're bored",
  "things you collect",
  "things you know by heart",
  "things you used to dislike but now like",
  "things you want to do before you die (bucketlist)",
  "things you would buy if you had more money",
  "things you're proud of",
  "tv shows from your childhood",
  "unethical brands you want to avoid",
  "vaccinations you have and need to get",
  "your (past) celebrity crushes",
  "beauty/make-up products you use",
  "your daily habits",
  "your dream jobs",
  "your favorite actors and actresses",
  "your favorite aesthetics",
  "your favorite albums",
  "your favorite animals",
  "your favorite board/card games",
  "your favorite books",
  "your favorite childhood memories",
  "your favorite dog breeds",
  "your favorite emojis",
  "your favorite fictional characters",
  "your favorite instruments",
  "your favorite jokes",
  "your favorite lines of lyrics",
  "your favorite movie posters",
  "your favorite movie scenes",
  "your favorite movies",
  "your favorite music genres",
  "your favorite musicians",
  "your favorite names",
  "your favorite paintings",
  "your favorite poems",
  "your favorite pokémon",
  "your favorite quotes",
  "your favorite scents/smells",
  "your favorite songs",
  "your favorite tropes",
  "your favorite tv show intros",
  "your favorite tv shows",
  "your favorite video games",
  "your favorite websites",
  "your favorite wikipedia articles",
  "your favorite words",
  "your favorite youtube channels",
  "your favorite youtube videos",
  "your favorites, A-Z (for example Apples, Bees, Computer, ...)",
  "your fears",
  "your go-to karaoke songs",
  "your guilty pleasures",
  "your hobbies",
  "your hobbies",
  "your pets",
  "your recurring dreams",
  "your recurring nightmares",
  "your spotify wrapped results",
  "your unpopular opinions",
  "movies you want to watch in the cinema this year",
  "ways you can connect to your inner child",
  "your favorite videos of your favorite youtube channel",
  "first times (e.g. first movie seen in the cinema, first time on a plane, ...)",
  "wishlist (of things)",
  "wishlist (of experiences)",
  "artists you want to see live someday",
  "great female characters in media",
  "great queer characters in media",
  "great POC characters in media",
  "great neurodivergent characters in media",
  "great disabled characters in media",
];
