import { WebringProps } from "../components/WebringTable";
import { CliqueProps } from "../components/CliqueTable";
import { TagProps, TagType, WebsiteProps } from "../components/Website";

export default async function fetchGoogleSheetData(
  spreadsheetID: string,
  spreadsheetName: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setWebrings?: React.Dispatch<React.SetStateAction<WebringProps[]>>,
  setCliques?: React.Dispatch<React.SetStateAction<CliqueProps[]>>,
  setWebsites?: React.Dispatch<React.SetStateAction<WebsiteProps[]>>,
) {
  try {
    const apiKey = "AIzaSyAkeZN8mT_waQBWUMbCy0F68ixe-fRKaOo";
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${spreadsheetName}?key=${apiKey}`,
    );
    const data = await response.json();
    const tableRows = data.values.slice(1); // remove table headings

    if (setWebsites) {
      const websites: WebsiteProps[] = [];
      tableRows.forEach((row: string[]) => {
        const newWebsite: WebsiteProps = {
          date: fixDateString(row[0]),
          link: row[1],
          buttonUrl: row[2],
          buttonColorOrder: turnIntoOrderString(row[2] ? row[3] : "white"),
          title: row[4],
          name: row[5],
          pronouns: row[6],
          continent: row[7],
          country: row[8],
          isAdult: row[9] == "yes",
          language: row[11],
          isWIP: row[12] == "yes",
          isResponsive: row[13] == "yes",
          isAccessible: row[14] == "yes",
          creationYear: row[15],
          codeLink: row[17],
          tags: generateTags(row),
        };
        websites.push(newWebsite);
      });
      setWebsites(websites.filter((website) => website.link));
    } else if (setWebrings) {
      const webrings: WebringProps[] = [];
      tableRows.forEach((row: string[]) => {
        const newWebring: WebringProps = {
          date: fixDateString(row[0]),
          link: row[1],
          label: row[2],
          keywords: row[3],
          isAcceptingMembers: row[4] == "yes",
          category: row[5]
            ? row[5].includes(" (e.g.")
              ? row[5].split(" (e.g.")[0]
              : row[5]
            : "Other",
        };
        webrings.push(newWebring);
      });
      setWebrings(webrings.filter((webring) => webring.label && webring.link));
    } else if (setCliques) {
      const cliques: CliqueProps[] = [];
      tableRows.forEach((row: string[]) => {
        const newClique: CliqueProps = {
          date: fixDateString(row[0]),
          label: row[1],
          link: row[2],
          description: row[3],
          example: row[4],
          category: row[6],
          isActive: row[7] ? false : true,
          image: row[8],
        };
        cliques.push(newClique);
      });
      setCliques(
        cliques.filter(
          (clique) => clique.label && clique.link && clique.isActive,
        ),
      );
    }

    setLoading(false);
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
  }
}

function turnIntoOrderString(buttonColor: string) {
  switch (buttonColor) {
    case "pink":
      return "1";
    case "white":
      return "2";
  }
  return "0";
}

function fixDateString(str: string) {
  // turn 17/07/1999 into 1999/07/17
  if (!str) return "";
  const day = str.substring(0, 2);
  const month = str.substring(3, 5);
  const year = str.substring(6, 10);
  return year + "/" + month + "/" + day;
}

function generateTags(row: string[]) {
  const tags: TagProps[] = [];
  return (
    tags
      .concat(addTagType(row[10], "warning"))
      .concat(addTagType(row[19], "color"))
      .concat(addTagType(row[20], "default"))
      .concat(addTagType(row[21], "default"))
      .concat(addTagType(row[22], "default"))
      .concat(addTagType(row[16], "default"))
      .concat(addTagType(row[23], "default"))
      // just for filtering:
      .concat(addTagType(row[7], "invisble"))
      .concat(addTagType(row[8], "invisble"))
      .concat(addTagType(row[11], "invisble"))
      .concat(row[9] == "yes" ? addTagType("adult", "invisble") : [])
      .concat(
        row[12] == "yes" ? addTagType("work in progress", "invisble") : [],
      )
      .concat(row[13] == "yes" ? addTagType("responsive", "invisble") : [])
      .concat(row[14] == "yes" ? addTagType("accessible", "invisble") : [])
      // custom tags:
      .concat(addTagType(row[24], "default"))
  );
}

function addTagType(tagsStr: string, type: TagType) {
  if (!tagsStr) return [];
  const tagsStrArray = tagsStr.split(", ");
  const tags: TagProps[] = tagsStrArray.map((str) => {
    return {
      label: str.split(" (")[0],
      type: type,
    };
  });
  return tags;
}
