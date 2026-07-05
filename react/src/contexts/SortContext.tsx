import { createContext, ReactNode, useState } from "react";

export type SortColumn =
  | "label"
  | "keywords"
  | "category"
  | "date"
  | "description"
  | "example"
  | "titleForSort"
  | "buttonColorOrder"
  | "linkForSort";
type SortDirection = "asc" | "desc";

type SortContextType = {
  sortColumn: SortColumn;
  setSortColumn: React.Dispatch<React.SetStateAction<SortColumn>>;
  sortDirection: SortDirection;
  setSortDirection: React.Dispatch<React.SetStateAction<SortDirection>>;
};

export const SortContext = createContext<SortContextType | null>(null);

export function SortContextProvider({ children }: { children: ReactNode }) {
  const [sortColumn, setSortColumn] = useState<SortColumn>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  return (
    <SortContext.Provider
      value={{ sortColumn, setSortColumn, sortDirection, setSortDirection }}
    >
      {children}
    </SortContext.Provider>
  );
}
