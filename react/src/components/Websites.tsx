import { useContext, useEffect, useState } from "react";
import Website, { WebsiteProps } from "./Website";
import Pagination from "./Pagination";
import { PaginationContext } from "../contexts/PaginationContext";
import fetchGoogleSheetData from "../google-sheets/fetch";
import { SortContext } from "../contexts/SortContext";
import { FilterContext } from "../contexts/FilterContext";

export default function Websites() {
  const { selectedFilters, setSelectedFilters } = useContext(FilterContext)!;
  const [websites, setWebsites] = useState<WebsiteProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { currentPage } = useContext(PaginationContext)!;
  const { setTotalPages } = useContext(PaginationContext)!;
  const { sortColumn } = useContext(SortContext)!;
  const { layout } = useContext(FilterContext)!;
  const { orAnd } = useContext(FilterContext)!;
  const { searchQuery } = useContext(FilterContext)!;

  const websitesPerPage = layout == "small" ? 100 : 5;
  setTotalPages(Math.floor(websites.length / websitesPerPage));
  const startIndex = (currentPage - 1) * websitesPerPage;

  useEffect(() => {
    fetchGoogleSheetData(
      "1pq9XhoO9yGPHXPTSKmU6SzH0Et85_6sQ579ZbNtCAKo",
      "Form responses 1",
      setLoading,
      undefined,
      undefined,
      setWebsites,
    );
  }, []);

  return (
    <center className="wip-message">
      This page is still under construction, but you can already{" "}
      <a href="https://forms.gle/WqjqAjETNsUnXycV9" target="_blank">
        add your website
      </a>
      !
    </center>
  );

  if (loading) {
    return <div className="indiedb-loading">Loading...</div>;
  }

  const websitesToShow = websites
    .sort((a, b) => {
      const aAny = (a as any)[sortColumn];
      const bAny = (b as any)[sortColumn];
      return aAny.localeCompare(bAny) * (sortColumn == "date" ? -1 : 1);
    })
    .filter((website) => {
      if (!searchQuery) return true;
      const fieldsToSearch =
        website.title +
        website.link +
        website.name +
        website.tags
          .filter((tag) => tag.type === "default")
          .map((tag) => tag.label)
          .join(" ");
      return fieldsToSearch.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .filter((website) => {
      if (selectedFilters.length == 0) return true;

      // Exclusion Filters

      let allIncludedByStandard =
        selectedFilters.includes("not 18+") ||
        selectedFilters.includes("not NSFW") ||
        selectedFilters.includes("no flashing") ||
        selectedFilters.includes("no triggers");

      for (const filter of selectedFilters) {
        if (
          (filter == "not NSFW" &&
            website.tags.some((tag) => tag.label == "NSFW")) ||
          (filter == "not 18+" &&
            website.tags.some((tag) => tag.label == "18+ / Mature content")) ||
          (filter == "no flashing" &&
            website.tags.some((tag) => tag.label == "Epilepsy warning")) ||
          (filter == "no triggers" &&
            website.tags.some((tag) => tag.label == "Triggering Content"))
        ) {
          return false;
        }
      }

      // Normal Filters

      let matchesAllFilters = true;

      for (const filter of selectedFilters) {
        if (
          filter !== "not 18+" &&
          filter !== "not NSFW" &&
          filter !== "no flashing" &&
          filter !== "no triggers"
        ) {
          allIncludedByStandard = false;

          if (
            website.tags.some(
              (tag) => tag.label.toLowerCase() == filter.toLowerCase(),
            )
          ) {
            if (orAnd == "or") return true;
          } else {
            matchesAllFilters = false;
          }
        }
      }
      if (orAnd == "or") return allIncludedByStandard;
      if (orAnd == "and") return matchesAllFilters;
    })
    .slice(startIndex, startIndex + websitesPerPage);

  return (
    <>
      {selectedFilters.length > 0 && (
        <div className="filters__selected">
          <b>Active filters: </b>
          {selectedFilters.join(", ")}
          <br />(<a href="/indiewebdb/websites">Reset Filters</a>)
        </div>
      )}
      <div className={"websites websites--" + layout}>
        {websitesToShow.length ? (
          websitesToShow.map((website) => (
            <Website key={website.link + website.name} {...website} />
          ))
        ) : (
          <div className="nothing-found">
            No websites match your filters. Try removing some filters!
          </div>
        )}
        <div className="website website--add-your-website">
          <div className="website__basics">
            <div className="website__button website__button--none"></div>
            <div className="website__title">... and you?</div>
            <div className="website__info">
              <div className="website__credit">
                <a href="/indiewebdb/contribute">
                  Click here to add your website!
                </a>
              </div>
              <div className="website__icons"></div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
}
