import { useEffect, useState } from "react";
import { CliqueProps } from "./CliqueTable";
import { WebringProps } from "./WebringTable";
import { WebsiteProps } from "./Website";
import { WidgetProps } from "./Widget";
import { getWidgets } from "../google-sheets/Widgets";
import { getWebsites } from "../google-sheets/Websites";
import { getCliques } from "../google-sheets/Cliques";
import { getWebrings } from "../google-sheets/Webrings";

export default function Stats({}) {
  const [websites, setWebsites] = useState<WebsiteProps[]>([]);
  const [webrings, setWebrings] = useState<WebringProps[]>([]);
  const [cliques, setCliques] = useState<CliqueProps[]>([]);
  const [widgets, setWidgets] = useState<WidgetProps[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWebsites(setWebsites, setLoading);
    getWebrings(setWebrings, setLoading);
    getCliques(setCliques, setLoading);
    getWidgets(setWidgets, setLoading);
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
