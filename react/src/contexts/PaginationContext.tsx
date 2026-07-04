import { createContext, ReactNode, useState } from "react";

type PaginationContextType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
};

export const PaginationContext = createContext<PaginationContextType | null>(
  null,
);

export function PaginationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  return (
    <PaginationContext.Provider
      value={{ currentPage, setCurrentPage, totalPages, setTotalPages }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
