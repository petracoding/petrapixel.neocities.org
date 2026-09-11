import { WebsiteProps } from "../components/Website";
import { FilterTag } from "../contexts/FilterContext";
import getTableData, {
  cleanUpStringForSorting,
  fixDateString,
  generateTags,
  turnIntoOrderString,
} from "./fetch";

export async function getWebsites(
  setWebsites: React.Dispatch<React.SetStateAction<WebsiteProps[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setFilterTags?: React.Dispatch<React.SetStateAction<FilterTag[]>>,
) {
  const tableRows = await getTableData(
    "1pq9XhoO9yGPHXPTSKmU6SzH0Et85_6sQ579ZbNtCAKo",
  );
  if (!tableRows) {
    console.error("Error while retrieving table data.");
    return;
  }
  const websites: WebsiteProps[] = [];
  const filterTags: FilterTag[] = [];
  tableRows.forEach((row: string[]) => {
    const tags = generateTags(row);
    const newWebsite: WebsiteProps = {
      date: fixDateString(row[0]),
      link: row[1],
      linkForSort: cleanUpStringForSorting(row[1]),
      buttonUrl: row[2],
      buttonColorOrder: turnIntoOrderString(row[2] ? row[3] : "NO BUTTON"),
      title: row[4],
      titleForSort: cleanUpStringForSorting(row[4]),
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
      tags: tags,
    };
    websites.push(newWebsite);

    if (setFilterTags) {
      // Count tags:
      tags.forEach((tag) => {
        let i = 0;
        let foundTag = false;

        filterTags.forEach((ft) => {
          if (
            ft.tag.label.trim().toLowerCase() == tag.label.trim().toLowerCase()
          ) {
            filterTags[i].number++;
            foundTag = true;
          }
          i++;
        });

        if (!foundTag) {
          const newTag: FilterTag = {
            tag: tag,
            number: 1,
          };
          filterTags.push(newTag);
        }
      });

      setFilterTags(filterTags);
    }
  });

  setWebsites(websites.filter((website) => website.link));
  setLoading(false);
}
