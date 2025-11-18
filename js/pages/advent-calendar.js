export function initAdventCalendar() {
  if (!document.querySelector("#advent-calendar")) return;

  const month = new Date().getMonth() + 1;

  // if (month !== 12) return;

  const day = new Date().getDate(); // day of month (1–31)
  const doors = document.querySelectorAll(".advent-calendar__door");

  doors.forEach((door) => {
    const doorDay = door.getAttribute("data-day");
    if (day >= doorDay) door.classList.add("advent-calendar__door--open");
  });
}
