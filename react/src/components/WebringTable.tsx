import { useContext, useEffect, useMemo, useState } from "react";
import fetchGoogleSheetData from "../google-sheets/fetch";
import { SortColumn, SortContext } from "../contexts/SortContext";
import { PaginationContext } from "../contexts/PaginationContext";

export default function WebringTable() {
  const [webrings, setWebrings] = useState<WebringProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { sortColumn } = useContext(SortContext)!;
  const { sortDirection } = useContext(SortContext)!;

  const { currentPage } = useContext(PaginationContext)!;
  const { setTotalPages } = useContext(PaginationContext)!;

  useEffect(() => {
    fetchGoogleSheetData(
      "1rH-vICefKqHWfdC3Ex_Fj56V-oC22Zk_MQklFHK9vko",
      "Form responses 1",
      setLoading,
      setWebrings,
    );
  }, []);

  const webringsPerPage = 500;
  const startIndex = (currentPage - 1) * webringsPerPage;

  useEffect(() => {
    setTotalPages(Math.ceil(webrings.length / webringsPerPage));
  }, [webrings.length]);

  const countEl = document.querySelector("#count");
  if (countEl && webrings.length > 0) countEl.innerHTML = webrings.length + "";

  const webringsToShow = useMemo(() => {
    return [...webrings]
      .sort((a, b) => {
        const aAny = (a as any)[sortColumn];
        const bAny = (b as any)[sortColumn];
        return aAny.localeCompare(bAny) * (sortDirection === "asc" ? 1 : -1);
      })
      .slice(startIndex, startIndex + webringsPerPage);
  }, [webrings, sortColumn, sortDirection]);

  if (loading) {
    return <div className="indiedb-loading">Loading...</div>;
  }

  return (
    <table id="webringlist" className="table">
      <thead>
        <tr>
          <TableHeading label="Webring" id="label" />
          <TableHeading label="Keywords" id="keywords" />
          <TableHeading label="Category" id="category" />
          <TableHeading label="Added on" id="date" />
        </tr>
      </thead>
      <tbody>
        {webringsToShow.map((webring) => (
          <Webring key={webring.link + webring.label} {...webring} />
        ))}
      </tbody>
    </table>
  );
}

interface TableHeadingProps {
  id: SortColumn;
  label: string;
}

function TableHeading({ id, label }: TableHeadingProps) {
  const { sortColumn, setSortColumn } = useContext(SortContext)!;
  const { sortDirection, setSortDirection } = useContext(SortContext)!;

  const isSorted = sortColumn == id;

  function onClick() {
    if (isSorted) {
      sortDirection == "asc"
        ? setSortDirection("desc")
        : setSortDirection("asc");
    } else {
      setSortColumn(id);
      setSortDirection("asc");
    }
  }

  return (
    <th onClick={onClick}>
      {label}{" "}
      {isSorted ? (
        <span id="sorttable_sortfwdind">
          &nbsp;{sortDirection == "asc" ? "▴" : "▾"}
        </span>
      ) : (
        ""
      )}
    </th>
  );
}

export interface WebringProps {
  label: string;
  link: string;
  keywords: string;
  category: string;
  date: string;
  isAcceptingMembers: boolean;
}

function Webring({
  label,
  link,
  keywords,
  category,
  date,
  isAcceptingMembers,
}: WebringProps) {
  return (
    <tr className={isAcceptingMembers ? "" : "inactive"}>
      <td>
        <a href={link} target="_blank">
          {label}
        </a>
        {isAcceptingMembers ? "" : <small> (not accepting new members)</small>}
      </td>
      <td>{keywords}</td>
      <td>{category}</td>
      <td title="YYYY/MM/DD">{date}</td>
    </tr>
  );
}
