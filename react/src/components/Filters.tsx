import Filter from "./Filter";
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

export default function Filters() {
  const { orAnd, setOrAnd } = useContext(FilterContext)!;
  const { layout, setLayout } = useContext(FilterContext)!;
  const { searchQuery, setSearchQuery } = useContext(FilterContext)!;

  return (
    <div className="filters">
      <div className="filters__row">
        <Filter
          label="Sort by "
          options={["recently added", "button color", "alphabetically"]}
          selectedOptions={["recently added"]}
          onlyOneSelectable={true}
        />

        <div className="filters__divider"></div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            className={
              "search-bar__input " +
              (searchQuery ? "search-bar__input--active" : "")
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filters__divider"></div>

        <div className="orand">
          <button
            className={
              "orand__item " + (orAnd == "or" ? "orand__item--selected" : "")
            }
            onClick={() => {
              setOrAnd("or");
            }}
          >
            OR
          </button>
          <button
            className={
              "orand__item " + (orAnd == "and" ? "orand__item--selected" : "")
            }
            onClick={() => {
              setOrAnd("and");
            }}
          >
            AND
          </button>
        </div>

        <div className="filters__divider"></div>

        <div className="orand">
          <button
            className={
              "orand__item orand__item--big-layout " +
              (layout == "big" ? "orand__item--selected" : "")
            }
            aria-label="big grid layout"
            onClick={() => {
              setLayout("big");
            }}
          >
            <i></i>
          </button>
          <button
            className={
              "orand__item orand__item--small-layout " +
              (layout == "small" ? "orand__item--selected" : "")
            }
            aria-label="small grid layout"
            onClick={() => {
              setLayout("small");
            }}
          >
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </button>
        </div>
      </div>

      <div className="filters__row">
        <Filter
          label="Warnings"
          options={["not 18+", "not NSFW", "no flashing", "no triggers"]}
        />

        <div className="filters__divider"></div>

        <Filter
          label="Creator"
          options={[
            "adult",
            "artist",
            "BIPOC",
            "disabled",
            "female",
            "lgbtqia+ / queer",
            "neurodivergent",
          ]}
        />

        <Filter
          label="Location"
          options={[
            "Europe",
            "North America",
            "South America",
            "Asia",
            "Africa",
            "Oceania",
            "-",
            "United States",
            "United Kingdom",
          ]}
        />

        <div className="filters__divider"></div>

        <Filter
          label="Colors"
          options={[
            "white",
            "gray",
            "black",
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple",
            "pink",
          ]}
        />

        <Filter
          label="Appearance"
          options={[
            "colorful",
            "black-and-white",
            "pastel",
            "kawaii",
            "retro",
            "light mode",
            "dark mode",
            "multiple themes",
            "minimalist",
            "maximalist",
            "pixel",
            "y2k",
            "frutiger aero",
            "OS-like",
          ]}
        />

        <div className="filters__divider"></div>

        <Filter
          label="Language"
          options={[
            "English",
            "Chinese",
            "Dutch",
            "French",
            "German",
            "Italian",
            "Japanese",
            "Korean",
            "Portuguese",
            "Russian",
            "Spanish",
          ]}
        />

        <Filter
          label="Content"
          options={[
            "art",
            "blog",
            "fandom",
            "lgbtqia+",
            "manifesto",
            "music",
            "photography",
            "programming",
            "shrines",
            "video games",
            "writing",
          ]}
        />

        <Filter
          label="Resources"
          options={["tutorials", "layouts", "graphics", "widgets", "support"]}
        />

        <div className="filters__divider"></div>

        <Filter
          label="Host"
          options={[
            "Neocities",
            "Nekoweb",
            "Netlify",
            "Github Pages",
            "Self-hosted",
          ]}
        />

        <Filter
          label="Misc."
          options={["work in progress", "responsive", "accessible"]}
        />
      </div>
    </div>
  );
}
