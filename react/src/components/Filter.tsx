import { FilterContext } from "../contexts/FilterContext";
import { SortContext } from "../contexts/SortContext";
import { useContext, useState } from "react";

interface FilterProps {
  label: string;
  options: string[];
  selectedOptions?: string[];
  onlyOneSelectable?: boolean;
}

export default function Filter({
  label,
  options,
  selectedOptions,
  onlyOneSelectable,
}: FilterProps) {
  const { selectedFilters, setSelectedFilters } = useContext(FilterContext)!;

  const [currentSelection, setCurrentSelection] = useState(
    selectedOptions || [],
  );

  const { setSortColumn } = useContext(SortContext)!;

  const selectedCount = currentSelection.length;
  const filterIsActive = selectedCount > 0 && !onlyOneSelectable;

  return (
    <>
      <div
        className={
          "filter " +
          (onlyOneSelectable ? "filter--exactly-one-selected " : "") +
          (filterIsActive ? "filter--active " : "")
        }
      >
        <div className="filter__label">
          {label}
          {onlyOneSelectable ? currentSelection[0] : ""}
          {filterIsActive ? " (" + selectedCount + ")" : ""}
        </div>
        <div className="filter__list">
          {options.map((itemLabel) =>
            itemLabel == "-" ? (
              <hr />
            ) : (
              <FilterItem
                key={itemLabel}
                label={itemLabel}
                isSelected={currentSelection.includes(itemLabel)}
                onClick={() => {
                  if (onlyOneSelectable) {
                    // set as selection
                    setCurrentSelection([itemLabel]);
                    switch (itemLabel) {
                      case "recently added":
                        setSortColumn("date");
                        break;
                      case "button color":
                        setSortColumn("title");
                        break;
                      case "alphabetically":
                        setSortColumn("title");
                        break;
                    }
                  } else {
                    if (currentSelection?.includes(itemLabel)) {
                      // remove from selection
                      setCurrentSelection(
                        currentSelection.filter((a) => a !== itemLabel),
                      );
                      setSelectedFilters(
                        selectedFilters.filter((a) => a !== itemLabel),
                      );
                    } else {
                      // add to selection
                      setCurrentSelection([...currentSelection, itemLabel]);
                      setSelectedFilters([...selectedFilters, itemLabel]);
                    }
                  }
                }}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
}

interface FilterItemProps {
  label: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function FilterItem({ label, isSelected, onClick }: FilterItemProps) {
  return (
    <button
      className={"filter__item " + (isSelected ? "filter__item--selected" : "")}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
