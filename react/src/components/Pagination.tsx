import { useContext } from "react";
import { PaginationContext } from "../contexts/PaginationContext";

export default function Pagination() {
  const { totalPages, setTotalPages } = useContext(PaginationContext)!;

  if (totalPages == 1) return;

  return (
    <div className="pagination">
      {[...Array(totalPages)].map((x, i) => (
        <PaginationButton i={i + 1}></PaginationButton>
      ))}
    </div>
  );
}

interface PaginationButtongProps {
  i: number;
}

function PaginationButton({ i }: PaginationButtongProps) {
  const { currentPage, setCurrentPage } = useContext(PaginationContext)!;

  return (
    <button
      className={
        "pagination__button " +
        (currentPage == i ? "pagination__button--active" : "")
      }
      onClick={() => {
        if (currentPage != i) {
          setCurrentPage(i);
          window.scrollTo(0, 0);
        }
      }}
    >
      {i}
    </button>
  );
}
