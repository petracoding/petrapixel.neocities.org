import { TagProps, TagType } from "../components/Tag";

export default async function getTableData(spreadsheetID: string) {
  try {
    const spreadsheetName = "Form responses 1";
    const apiKey = "AIzaSyAkeZN8mT_waQBWUMbCy0F68ixe-fRKaOo";
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${spreadsheetName}?key=${apiKey}`,
    );
    const data = await response.json();
    const tableRows: string[][] = data.values.slice(1); // remove table headings
    return tableRows;
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
  }
}

export function cleanUpStringForSorting(title: string) {
  if (!title) return title;
  const cleanedTitle = title
    .replaceAll("http://", "https://")
    .replaceAll("https://www.", "https://")
    .replaceAll("https://", "")
    .replaceAll("₱", "P")
    // todo - add more special characters here
    .replace(/[^a-zA-Z ]/g, "")
    .trim();
  if (cleanedTitle) return cleanedTitle;
  return title;
}

export function turnIntoOrderString(buttonColor: string) {
  switch (buttonColor) {
    case "red":
      return "01";
    case "orange":
      return "02";
    case "yellow":
      return "03";
    case "green":
      return "04";
    case "blue":
      return "05";
    case "purple":
      return "06";
    case "pink":
      return "07";
    case "white":
      return "08";
    case "gray":
      return "09";
    case "black":
      return "10";
  }
  return "999";
}

export function fixDateString(str: string) {
  // turn DD/MM/YYYY hh:mm into YYYY/MM/DD hh:mm
  // (importent for sorting)
  if (!str) return "";
  const day = str.substring(0, 2);
  const month = str.substring(3, 5);
  const year = str.substring(6, 10);
  const time = str.substring(10);
  return year + "/" + month + "/" + day + time;
}

export function generateTags(row: string[]) {
  let tags: TagProps[] = [];
  tags = tags
    .concat(addTagType(row[10], "warning"))
    .concat(addTagType(row[19], "color"))
    .concat(addTagType(row[20], "default"))
    .concat(addTagType(row[21], "default"))
    .concat(addTagType(row[22], "default"))
    .concat(addTagType(row[16], "default"))
    .concat(addTagType(row[23], "default"))
    .concat(addTagType(row[18], "default"))
    // just for filtering:
    .concat(addTagType(row[7], "invisble"))
    .concat(addTagType(row[8], "invisble"))
    .concat(addTagType(row[11], "invisble"))
    .concat(row[9] == "yes" ? addTagType("adult", "invisble") : [])
    .concat(row[12] == "yes" ? addTagType("work in progress", "invisble") : [])
    .concat(row[13] == "yes" ? addTagType("responsive", "invisble") : [])
    .concat(row[14] == "yes" ? addTagType("accessible", "invisble") : [])
    // custom tags:
    .concat(addTagType(row[24], "default"));

  // remove duplicates
  const uniqueTags = Array.from(
    new Map(tags.map((tag) => [tag.label, tag])).values(),
  );
  return uniqueTags;
}

export function addTagType(tagsStr: string, type: TagType) {
  if (!tagsStr) return [];
  const tagsStrArray = tagsStr.split(",");
  const tags: TagProps[] = tagsStrArray.map((str) => {
    return {
      label: str.split(" (")[0].trim(),
      type: type,
    };
  });
  return tags.filter((tag) => tag.label);
}
