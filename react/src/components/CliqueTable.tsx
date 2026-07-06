import { useContext, useEffect, useMemo, useState } from "react";
import fetchGoogleSheetData from "../google-sheets/fetch";
import { SortColumn, SortContext } from "../contexts/SortContext";
import { PaginationContext } from "../contexts/PaginationContext";

export default function CliqueTable() {
  const [cliques, setCliques] = useState<CliqueProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { sortColumn } = useContext(SortContext)!;
  const { sortDirection } = useContext(SortContext)!;

  const { currentPage } = useContext(PaginationContext)!;
  const { setTotalPages } = useContext(PaginationContext)!;

  useEffect(() => {
    fetchGoogleSheetData(
      "1MhbWY2j-D2IMuUh2y8jP8wPL4oik9b-riaWOTxJD7Oc",
      "Form responses 1",
      setLoading,
      undefined,
      setCliques,
    );
  }, []);

  const cliquesPerPage = 500;
  const startIndex = (currentPage - 1) * cliquesPerPage;

  useEffect(() => {
    setTotalPages(Math.max(1, Math.ceil(cliques.length / cliquesPerPage)));
  }, [cliques.length]);

  const countEl = document.querySelector("#count");
  if (countEl && cliques.length > 0) countEl.innerHTML = cliques.length + "";

  const cliquesToShow = useMemo(() => {
    return [...cliques]
      .sort((a, b) => {
        const aAny = (a as any)[sortColumn];
        const bAny = (b as any)[sortColumn];
        return aAny.localeCompare(bAny) * (sortDirection === "asc" ? 1 : -1);
      })
      .slice(startIndex, startIndex + cliquesPerPage);
  }, [cliques, sortColumn, sortDirection]);

  if (loading) {
    return <div className="indiedb-loading">Loading...</div>;
  }

  /*
    Note to self:
    I had issues with the component updating itself when it should.
    (At first I thought it's an issue with sorting, but the sorting did work.)
    The solution was to make sure that the key of row is actually unique.
    Previously I used the URL to the clique page as key, but since some pages
    have multiple cliques, this was not actually unique, so the re-render did
    not work correctly.
  */

  return (
    <table id="cliquelist" className="table">
      <thead>
        <tr>
          <TableHeading label="Clique" id="label" />
          <TableHeading label="Description" id="description" />
          <TableHeading label="Example" id="example" />
          <TableHeading label="Category" id="category" />
          <TableHeading label="Added on" id="date" />
        </tr>
      </thead>
      <tbody>
        {cliquesToShow.map((clique) => (
          <Clique key={clique.link + clique.label} {...clique} />
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

export interface CliqueProps {
  label: string;
  link: string;
  description: string;
  example: string;
  category: string;
  date: string;
  isActive: boolean;
  image: string;
}

function Clique({
  label,
  link,
  description,
  example,
  category,
  date,
  isActive,
  image,
}: CliqueProps) {
  /* Possible "example"s: */
  // image.png
  // [IMAGE]
  // text [IMAGE] text
  // [IMAGE] text
  // text [IMAGE]
  // text

  let exampleText = example;
  let exampleTextAfter = "";

  if (category == "Pixel clique") {
    exampleText = "";
  } else if (example.toUpperCase() == "[IMAGE]") {
    exampleText = "";
  } else if (example.toUpperCase().includes("[IMAGE]")) {
    const [before, after] = example
      .replace("[image]", "[IMAGE]")
      .split("[IMAGE]");
    exampleText = before;
    exampleTextAfter = after;
  }
  return (
    <tr className={isActive ? "" : "inactive"}>
      <td>
        <a href={link} target="_blank">
          {label}
        </a>
        {isActive ? "" : <small> (inactive)</small>}
      </td>
      <td>{description}</td>
      <td className="example">
        {exampleText}
        {image ? <img src={image} alt="" /> : ""}
        {exampleTextAfter}
      </td>
      <td>{category}</td>
      <td title="YYYY/MM/DD">{date.substring(0, 10)}</td>
    </tr>
  );
}
