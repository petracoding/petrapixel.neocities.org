import { createContext, ReactNode, useState } from "react";

type orAnd = "or" | "and";
type layout = "big" | "small" | "table";

type FilterContextType = {
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
  orAnd: orAnd;
  setOrAnd: React.Dispatch<React.SetStateAction<orAnd>>;
  layout: layout;
  setLayout: React.Dispatch<React.SetStateAction<layout>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const FilterContext = createContext<FilterContextType | null>(null);

export function FilterContextProvider({ children }: { children: ReactNode }) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [orAnd, setOrAnd] = useState<orAnd>("or");
  const [layout, setLayout] = useState<layout>("big");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <FilterContext.Provider
      value={{
        selectedFilters,
        setSelectedFilters,
        orAnd,
        setOrAnd,
        layout,
        setLayout,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
