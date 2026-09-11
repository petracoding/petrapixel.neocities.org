import { CliqueProps } from "../components/CliqueTable";
import getTableData, { fixDateString } from "./fetch";

export async function getCliques(
  setCliques: React.Dispatch<React.SetStateAction<CliqueProps[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const tableRows = await getTableData(
    "1MhbWY2j-D2IMuUh2y8jP8wPL4oik9b-riaWOTxJD7Oc",
  );
  if (!tableRows) {
    console.error("Error while retrieving table data.");
    return;
  }
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
    cliques.filter((clique) => clique.label && clique.link && clique.isActive),
  );
  setLoading(false);
}
