export function initWebsiteAgeCounter() {
  const el = document.getElementById("countdownthingy");
  if (!el) return;

  const countDownDate = new Date("Feb 16, 2024 09:05:00").getTime();
  const now = new Date().getTime();
  const distance = now - countDownDate;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  days = days - years * 365;
  let output = "";
  if (years > 0) {
    output = "(" + years + " year and " + days + " days ago) ";
  } else {
    output = "(" + days + " days ago) ";
  }
  el.innerHTML = output;
}
