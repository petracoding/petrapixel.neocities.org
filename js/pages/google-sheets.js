// API key:
// Google Cloud Console
// https://console.cloud.google.com/apis/credentials

class GoogleSpreadSheet {
  constructor(spreadsheetId, sheetName, apiKey) {
    this.spreadsheetId = spreadsheetId;
    this.sheetName = sheetName;
    this.apiKey = apiKey;
  }
}

export function initGoogleSheets() {
  const apiKey = "AIzaSyAkeZN8mT_waQBWUMbCy0F68ixe-fRKaOo";
  const gss = new GoogleSpreadSheet(
    "1MhbWY2j-D2IMuUh2y8jP8wPL4oik9b-riaWOTxJD7Oc",
    "Form responses 1",
    apiKey,
  );
  if (document.querySelector("#cliquelist")) {
    fetchGoogleSheetData(gss, buildCliqueTable);
  }
}

function buildCliqueTable(tableHeadings, tableData) {
  const tableBody = document.querySelector("#cliquelist tbody");
  const cliques = [];
  const keysAlreadyIn = [];

  tableData
    // only get first 300 entries, in case of spam
    .slice(0, 300)
    .filter((d) => d[1] && d[2])
    .sort(function (a, b) {
      // sort by clique name
      return a[1] && b[1] ? a[1].localeCompare(b[1]) : 0;
    })
    .forEach((td) => {
      // make sure cliques with same name AND link are not added twice
      const key = (td[1] + "|" + td[2]).toLowerCase();
      if (!keysAlreadyIn.includes(key) && !(td[7] == "fanlisting")) {
        const clique = {
          nameAndLink: `<a href="${td[2]}" target="_blank">${escapeHtml(cleanUpInput(td[1]))}</a>`,
          description: escapeHtml(cleanUpInput(td[3])),
          example:
            td[6] == "Pixel clique"
              ? "[IMAGE]"
              : escapeHtml(cleanUpInput(td[4])),
          hasMembersList: td[5],
          inactive: td[7],
          category: td[6],
        };

        const hasImage = isValidHttpUrl(td[8]);
        if (hasImage) {
          clique.example = clique.example
            .trim()
            .replace("[IMAGE]", `<img src="${td[8]}" />`)
            .replaceAll("[IMAGE]", "");
        }

        cliques.push(clique);
        keysAlreadyIn.push(key);
      }
    });

  cliques.forEach((clique) => {
    const row = document.createElement("tr");
    if (clique.inactive) row.classList.add("inactive");

    row.innerHTML = `
	  <td>${clique.nameAndLink || ""}</td>
	  <td>${clique.description || ""}<small>${clique.example || ""}</small></td>
	  <td>${clique.category || ""}</td>
	  <td>${clique.hasMembersList || ""}</td>
	  `;

    tableBody.appendChild(row);
  });

  document.querySelector("#cliquelistnumber").innerHTML = cliques.length;
  document.querySelector("#cliquelist-loading").style.display = "none";
}

function cleanUpInput(string) {
  if (!string) return string;
  let cleanedString = string;
  const badWords = ["Fuck"];
  // TODO: add more bad words

  badWords.forEach((badWord) => {
    cleanedString = cleanedString
      .replaceAll(badWord, "***")
      .replaceAll(badWord.toUpperCase(), "***")
      .replaceAll(badWord.toLowerCase(), "***");
  });
  return cleanedString.replaceAll("http://", "").replaceAll("https://", "");
}

// ----------

function isValidHttpUrl(string) {
  // https://stackoverflow.com/a/43467144/3187492
  if (!string) return false;
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function escapeHtml(unsafe) {
  if (!unsafe) return "";
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ----------

async function fetchGoogleSheetData(getoogleSpreadSheet, functionToExecute) {
  try {
    // Fetch data with Google Sheets API
    // https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${getoogleSpreadSheet.spreadsheetId}/values/${getoogleSpreadSheet.sheetName}?key=${getoogleSpreadSheet.apiKey}`,
    );
    const data = await response.json();
    const tableHeadings = data.values[0];
    const tableData = data.values.slice(1);
    try {
      functionToExecute(tableHeadings, tableData);
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
  }
}

// UNUSED
function constructTableFromData(parentEl, tableHeadings, tableData) {
  if (!parentEl) {
    console.error("Parent element for Google Sheets data table not found.");
    return;
  }
  if (!tableData || !tableHeadings) {
    console.error("Data for Google Sheets data table not found.");
    return;
  }

  const tableEl = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  // Table Headers
  const row = document.createElement("tr");
  tableHeadings.forEach((cell) => {
    const cellElement = document.createElement("th");
    cellElement.textContent = cell; // do NOT use .innerHTML if displaying unmoderated content
    row.appendChild(cellElement);
  });
  tableHead.appendChild(row);

  // Table Rows
  for (let i = 0; i < tableData.length; i++) {
    const row = document.createElement("tr");
    tableData[i].forEach((cell) => {
      const cellElement = document.createElement("td");
      cellElement.textContent = cell;
      row.appendChild(cellElement); // do NOT use .innerHTML if displaying unmoderated content
    });
    tableBody.appendChild(row);
  }

  tableEl.appendChild(tableHead);
  tableEl.appendChild(tableBody);
  parentEl.appendChild(tableEl);
}

// TODO

const commentWidgetSettings = {
  formId: "1FAIpQLSeLNKzEA9LYmTl-3Vz1-O_AQi0N_nZ6sJlX1ccqt1WZI0PEhA",
  submitLabel: "Comment",
  inputs: [
    {
      id: "1481026605",
      label: "Name",
      placeholder: "",
      type: "input",
    },
    {
      id: "528195876",
      label: "Website URL",
      placeholder: "",
      type: "url",
    },
    {
      id: "197515224",
      label: "Text",
      placeholder: "",
      type: "textarea",
    },
    {
      id: "TODO",
      label: "Checkbox",
      placeholder: "",
      type: "checkbox",
    },
    {
      id: "TODO",
      label: "Radio Button",
      placeholder: "",
      type: "radio",
      options: ["option1", "option2", "option3"],
    },
    {
      id: "TODO",
      label: "Select Box",
      placeholder: "",
      type: "select",
      options: ["option1", "option2", "option3"],
    },
  ],
};

function buildCommentWidgetForm(settings) {
  const wrapper = document.querySelector("#commentWidget");
  if (!wrapper) return;

  let inputs = ``;

  settings.inputs.forEach((i) => {
    inputs += ``;
  });

  wrapper.innerHTML = `
  `;
}
