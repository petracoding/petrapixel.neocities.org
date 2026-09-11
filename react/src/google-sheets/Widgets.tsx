import { WidgetProps } from "../components/Widget";
import getTableData, { addTagType, fixDateString } from "./fetch";

export async function getWidgets(
  setWidgets: React.Dispatch<React.SetStateAction<WidgetProps[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const tableRows = await getTableData(
    "14dhqAaG6qaSZ2O8xYnsZ1sRl_rpQOcD52zyn6nJBbHg",
  );
  if (!tableRows) {
    console.error("Error while retrieving table data.");
    return;
  }
  const widgets: WidgetProps[] = [];
  tableRows.forEach((row: string[]) => {
    const usesExternalScripts = row[5];
    const newWidget: WidgetProps = {
      date: fixDateString(row[0]),
      title: row[1],
      creator: row[2],
      description: row[3],
      link: row[4],
      usesExternalScripts: row[5],
      screenshotUrl: row[6],
      tags: addTagType(row[7], "default").concat(
        addTagType(
          usesExternalScripts == "yes"
            ? "uses external scripts"
            : usesExternalScripts == "no"
              ? "doesn't use external scripts"
              : "",
          usesExternalScripts == "yes" ? "warning" : "default",
        ),
      ),
    };
    widgets.push(newWidget);
  });
  setWidgets(widgets.filter((widget) => widget.title && widget.link));
  setLoading(false);
}
