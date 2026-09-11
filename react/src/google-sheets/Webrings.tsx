import { WebringProps } from "../components/WebringTable";
import getTableData, { fixDateString } from "./fetch";

export async function getWebrings(
  setWebrings: React.Dispatch<React.SetStateAction<WebringProps[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const tableRows = await getTableData(
    "1rH-vICefKqHWfdC3Ex_Fj56V-oC22Zk_MQklFHK9vko",
  );
  if (!tableRows) {
    console.error("Error while retrieving table data.");
    return;
  }
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
  setWebrings(
    webrings
      .filter((webring) => webring.label && webring.link)
      .filter(
        (webring) =>
          // fuck the TERFs
          webring.link !== "https://womenoftheinternet.neocities.org/",
      ),
  );
  setLoading(false);
}
