function initUpvoteWidget() {
  const widgets = document.querySelectorAll("[data-upvote-widget]");
  widgets.forEach((widget) => {
    const widgetId = widget.getAttribute("data-upvote-widget");
    loadWidget(widget, widgetId);
  });
}

async function loadWidget(widget, widgetId) {
  try {
    const apiKey = "AIzaSyAkeZN8mT_waQBWUMbCy0F68ixe-fRKaOo";
    const spreadsheetId = "1xwHvDEjGiLLleojov2yJefwjF5JSnJ7fQ5Tbq_aDG5o";
    const sheetName = "Sheet1"; // or default name in other language
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`,
    );
    const data = await response.json();
    const rows = data.values;
    // do something with rows, e.g. rows.forEach(row => ...)
    console.log(rows);
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
  }
}
