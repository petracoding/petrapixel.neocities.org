import { useContext, useEffect, useState } from "react";
import { PaginationContext } from "../contexts/PaginationContext";
import { SortContext } from "../contexts/SortContext";
import { FilterContext } from "../contexts/FilterContext";
import Widget, { WidgetProps } from "./Widget";
import { getWidgets } from "../google-sheets/Widgets";

export default function Widgets() {
  const [widgets, setWidgets] = useState<WidgetProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { currentPage, totalPages, setTotalPages } =
    useContext(PaginationContext)!;
  const { sortColumn } = useContext(SortContext)!;
  const { selectedFilters, searchQuery } = useContext(FilterContext)!;

  useEffect(() => {
    getWidgets(setWidgets, setLoading);
  }, []);

  if (loading) {
    return <div className="indiedb-loading">Loading...</div>;
  }

  const countEl = document.querySelector("#count");
  if (countEl && widgets.length > 0) countEl.innerHTML = widgets.length + "";

  const filteredWidgets = widgets
    .sort((a, b) => {
      const aAny = (a as any)[sortColumn];
      const bAny = (b as any)[sortColumn];
      return aAny.localeCompare(bAny) * (sortColumn == "date" ? -1 : 1);
    })
    .filter((widget) => {
      if (!searchQuery) return true;
      const fieldsToSearch =
        widget.title +
        widget.description +
        widget.creator +
        widget.tags
          .filter((tag) => tag.type === "default")
          .map((tag) => tag.label)
          .join(" ");
      return fieldsToSearch.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .filter((widget) => {
      console.log(selectedFilters);
      if (selectedFilters.length == 0) return true;

      for (const filter of selectedFilters) {
        if (
          widget.tags.some(
            (tag) => tag.label.toLowerCase() == filter.toLowerCase(),
          )
        ) {
          return true;
        }
      }

      return false;
    });

  const widgetsPerPage = 48;
  setTotalPages(Math.ceil(filteredWidgets.length / widgetsPerPage));
  const startIndex = (currentPage - 1) * widgetsPerPage;
  const isLastPage = totalPages == currentPage || totalPages == 0;

  const widgetsToShow = filteredWidgets.slice(
    startIndex,
    startIndex + widgetsPerPage,
  );

  return (
    <>
      <div className={"widgets"}>
        {widgetsToShow.length ? (
          widgetsToShow.map((widget) => (
            <Widget key={widget.link + widget.title} {...widget} />
          ))
        ) : (
          <div className="nothing-found">
            No widgets match your filters. Try removing some filters!
          </div>
        )}
        {isLastPage && (
          <div className="widget">
            <div className="widget__basics">
              <a href="/indiewebdb/contribute" className="widget__title">
                Add a widget
              </a>
              <div className="widget__description">
                Know of a widget that isn't here yet? Add it!
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
