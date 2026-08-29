import Filter from "./Filter";
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { PaginationContext } from "../contexts/PaginationContext";

export default function WidgetFilters() {
  const { orAnd, setOrAnd } = useContext(FilterContext)!;
  const { layout, setLayout } = useContext(FilterContext)!;
  const { searchQuery, setSearchQuery } = useContext(FilterContext)!;
  const { setCurrentPage } = useContext(PaginationContext)!;

  return (
    <div className="filters">
      <div className="filters__row">
        <Filter
          label="Sort by "
          options={["recently added", "widget name", "creator"]}
          selectedOptions={["recently added"]}
          onlyOneSelectable={true}
        />

        <div className="filters__divider"></div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            className={
              "search-bar__input " +
              (searchQuery ? "search-bar__input--active" : "")
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filters__divider"></div>

        <Filter
          label="External Scripts"
          options={["doesn't use external scripts", "uses external scripts"]}
          onlyOneSelectable={true}
        />

        <Filter
          label="Type"
          onlyOneSelectable={true}
          options={[
            "counter",
            "guestbook",
            "interactive",
            "linking",
            "media",
            "status",
            "other",
          ]}
        />
      </div>
    </div>
  );
}
