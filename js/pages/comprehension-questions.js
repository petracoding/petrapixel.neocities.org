// Usage: <div data-comprehension="example-0"></div>

const LETTERS = ["A", "B", "C", "D"];
const COMPREHENSION_QUESTIONS = {
  howtowebsite: [
    {
      question: "test?",
      answers: [
        "test !",
        "test X",
        "TML is very easy to learn, you won't have many problems. There is only a very limited number of elements (e.g. bold text, images, links, tables, ...), and I believe you could theoretically learn them all in one sitting. There's no need for that though: Just learn the most basic ones and as you continue to learn to code you can learn the res",
      ],
    },
    {
      question: "test2?",
      answers: [
        "test !",
        "TML is very easy to learn, you won't have many problems. There is only a very limited number of elements (e.g. bold text, images, links, tables, ...), and I believe you could theoretically learn them all in one sitting. There's no need for that though: Just learn the most basic ones and as you continue to learn to code you can learn the res",
        "test X",
        "test X",
      ],
      hint: "This is some text.",
    },
  ],
};

export function initComprehensionQuestions() {
  const els = document.querySelectorAll("[data-comprehension]");
  if (!els) return;
  [...els].forEach((el) => {
    const dataAttr = el.getAttribute("data-comprehension").split("-");
    const category = dataAttr[0];
    const no = parseInt(dataAttr[1]);
    const questionData = COMPREHENSION_QUESTIONS[category][no];
    initComprehensionQuestion(el, questionData);
  });
}

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}

function initComprehensionQuestion(el, questionData) {
  let output = "<div class='comprehension'>";
  output += `<div class="comprehension__question"><b>Comprehension Question: </b>${questionData.question}</div>`;
  const correctAnswer = questionData.answers[0];
  let answers = questionData.answers;
  shuffle(answers);
  if (answers.length > 3) {
    output += "<div class='comprehension__answers comprehension__answers--half'>";
  } else {
    output += "<div class='comprehension__answers'>";
  }

  let i = 0;
  answers.forEach((answer) => {
    if (answer == correctAnswer) {
      output += `<button type="button" class="comprehension__answer" data-correct="Hey! This is cheating! Stop reading this!" data-answer="${answer}"><b>${LETTERS[i]}:</b> ${answer}</button>`;
    } else {
      output += `<button type="button" class="comprehension__answer" data-answer="${answer}"><b>${LETTERS[i]}:</b> ${answer}</button>`;
    }
    i++;
  });
  output += "</div>";
  if (questionData.hint) {
    output += `<div class="comprehension__hint" aria-hidden="true">Correct! ${questionData.hint}</div>`;
  } else {
    output += `<div class="comprehension__hint" aria-hidden="true">Correct!</div>`;
  }
  output += `<div class="comprehension__hint comprehension__hint--oops" aria-hidden="true">Nope, try again!</div>`;
  output += "</div>";
  el.innerHTML = output;
  const answerEls = el.querySelectorAll(".comprehension__answer");
  [...answerEls].forEach((answerEl) => {
    answerEl.addEventListener("click", () => {
      checkAnswer(answerEl, correctAnswer);
    });
  });
}

function checkAnswer(el, correctAnswer) {
  const selectedAnswer = el.getAttribute("data-answer");
  if (selectedAnswer == correctAnswer) {
    el.closest(".comprehension").classList.add("comprehension--correct");

    const hintEl = el.closest(".comprehension").querySelector(".comprehension__hint");
    hintEl.removeAttribute("aria-hidden");

    const oopsEl = el.closest(".comprehension").querySelector(".comprehension__hint--oops");
    oopsEl.setAttribute("aria-hidden", "true");

    [...el.closest(".comprehension").querySelectorAll(".comprehension__answer")].forEach((answerEl) => {
      answerEl.setAttribute("disabled", "disabled");
    });
  } else {
    el.classList.add("comprehension__answer--incorrect");
    el.setAttribute("disabled", "disabled");

    const oopsEl = el.closest(".comprehension").querySelector(".comprehension__hint--oops");
    oopsEl.removeAttribute("aria-hidden");
  }
}
