import "./App.scss";

import Websites from "./components/Websites";
import Filters from "./components/Filters";
import WebringTable from "./components/WebringTable";
import CliqueTable from "./components/CliqueTable";
import Pagination from "./components/Pagination";
import Stats from "./components/Stats";

import { FilterContextProvider } from "./contexts/FilterContext";
import { SortContextProvider } from "./contexts/SortContext";
import { PaginationContextProvider } from "./contexts/PaginationContext";

export default function App() {
  const page = document.body.getAttribute("data-page");

  return (
    <>
      {page == "home" && <Stats />}
      <PaginationContextProvider>
        <SortContextProvider>
          <FilterContextProvider>
            {page == "websites" && <Filters />}
            {page == "websites" && <Websites />}
          </FilterContextProvider>
          {page == "webrings" && <WebringTable />}
          {page == "cliques" && <CliqueTable />}
          <Pagination />
        </SortContextProvider>
      </PaginationContextProvider>
    </>
  );
}

/*
  TODO: 
  - Dev mode for full errors
  - Linter
*/
