import { useEffect, useState } from "react";
import { CliqueProps } from "./CliqueTable";
import fetchGoogleSheetData from "../google-sheets/fetch";
import { WebringProps } from "./WebringTable";
import { WebsiteProps } from "./Website";
import { WidgetProps } from "./Widget";

export default function Stats({}) {
  const [websites, setWebsites] = useState<WebsiteProps[]>([]);
  const [webrings, setWebrings] = useState<WebringProps[]>([]);
  const [cliques, setCliques] = useState<CliqueProps[]>([]);
  const [widgets, setWidgets] = useState<WidgetProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGoogleSheetData(
      "1pq9XhoO9yGPHXPTSKmU6SzH0Et85_6sQ579ZbNtCAKo",
      "Form responses 1",
      setLoading,
      undefined,
      undefined,
      setWebsites,
    );

    fetchGoogleSheetData(
      "1rH-vICefKqHWfdC3Ex_Fj56V-oC22Zk_MQklFHK9vko",
      "Form responses 1",
      setLoading,
      setWebrings,
    );

    fetchGoogleSheetData(
      "1MhbWY2j-D2IMuUh2y8jP8wPL4oik9b-riaWOTxJD7Oc",
      "Form responses 1",
      setLoading,
      undefined,
      setCliques,
    );

    fetchGoogleSheetData(
      "14dhqAaG6qaSZ2O8xYnsZ1sRl_rpQOcD52zyn6nJBbHg",
      "Form responses 1",
      setLoading,
      undefined,
      undefined,
      undefined,
      undefined,
      setWidgets,
    );
  }, []);

  if (loading) {
    return <div className="text">Stats loading...</div>;
  }

  return (
    <div className="text">
      <p>
        <b>The Indie Web DB currently lists...</b>
        <br />
        {websites.length > 0 ? websites.length : "?"} websites
        <br />
        {webrings.length > 0 ? webrings.length : "?"} webrings
        <br />
        {cliques.length > 0 ? cliques.length : "?"} cliques
        <br />
        {widgets.length > 0 ? widgets.length : "?"} widgets
      </p>
      <p>Thanks to all contributors!</p>
    </div>
  );
}
