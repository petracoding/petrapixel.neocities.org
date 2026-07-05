import { createContext, ReactNode, useState } from "react";
import { TagProps } from "../components/Website";

type orAnd = "or" | "and";
type layout = "big" | "small" | "table";

export interface FilterTag {
  tag: TagProps;
  number: number;
}

type FilterContextType = {
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
  orAnd: orAnd;
  setOrAnd: React.Dispatch<React.SetStateAction<orAnd>>;
  layout: layout;
  setLayout: React.Dispatch<React.SetStateAction<layout>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  filterTags: FilterTag[];
  setFilterTags: React.Dispatch<React.SetStateAction<FilterTag[]>>;
};

export const FilterContext = createContext<FilterContextType | null>(null);

export function FilterContextProvider({ children }: { children: ReactNode }) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [orAnd, setOrAnd] = useState<orAnd>("or");
  const [layout, setLayout] = useState<layout>("big");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterTags, setFilterTags] = useState<FilterTag[]>([]);

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
        filterTags,
        setFilterTags,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
