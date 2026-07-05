import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

export interface WebsiteProps {
  date: string;
  title: string;
  titleForSort: string;
  link: string;
  linkForSort: string;
  buttonUrl?: string;
  buttonColorOrder: string;
  name?: string;
  pronouns?: string;
  tags: TagProps[];
  continent?: string;
  country?: string;
  language?: string;
  isWIP: boolean;
  isResponsive: boolean;
  isAccessible: boolean;
  creationYear?: string;
  isAdult: boolean;
  codeLink?: string;
}

export default function Website({
  title,
  link,
  buttonUrl,
  name,
  pronouns,
  tags,
  continent,
  country,
  language,
  isWIP,
  isResponsive,
  isAccessible,
  isAdult,
  codeLink,
  creationYear,
}: WebsiteProps) {
  const { layout } = useContext(FilterContext)!;

  const noButtonUrl = "/assets/img/links/nobutton.gif";
  let linkCleanedUp = link
    .replace("http://www.", "")
    .replace("http://", "")
    .replace("https://www.", "")
    .replace("https://", "");
  if (linkCleanedUp.endsWith("/")) {
    linkCleanedUp = linkCleanedUp.slice(0, -1);
  }

  let buttonUrlCleanedUp = buttonUrl?.replaceAll("http://", "https://");
  if (buttonUrl && !buttonUrlCleanedUp?.startsWith("https://")) {
    buttonUrlCleanedUp = "https://" + buttonUrl;
  }

  let location;

  if (country) {
    location = country;
  } else if (continent) {
    location = continent;
  }

  return (
    <div className="website">
      <div className="website__basics">
        <div
          className={
            "website__button " + (buttonUrl ? "" : "website__button--none")
          }
        >
          <a href={link} target="_blank" className="tooltip-wrapper">
            <img
              src={buttonUrlCleanedUp || noButtonUrl}
              width="88"
              height="31"
            />
            {layout == "small" && (
              <span className="tooltip">
                {title} ({linkCleanedUp})
              </span>
            )}
          </a>
        </div>
        <div className="website__title">{title}</div>
        <div className="website__url">
          <a href={link} target="_blank">
            {linkCleanedUp}
          </a>
        </div>
        <div className="website__info">
          {name ? (
            <div className="website__credit">
              © {creationYear ? creationYear + " " : ""}
              <abbr title="" className="tooltip-wrapper">
                {name}
                <span className="tooltip">
                  {pronouns +
                    (pronouns ? " " : "") +
                    (isAdult ? "(adult)" : "(minor)")}
                </span>
              </abbr>
            </div>
          ) : (
            <div className="website__credit">
              © {creationYear ? creationYear + " " : ""}
            </div>
          )}
          <div className="website__icons">
            {location && (
              <span className="tooltip-wrapper">
                🗺️<span className="tooltip">{location}</span>
              </span>
            )}
            {language && (
              <span className="tooltip-wrapper">
                💬<span className="tooltip">{language}</span>
              </span>
            )}
            {isWIP && (
              <span className="tooltip-wrapper">
                🚧<span className="tooltip">Work in Progress</span>
              </span>
            )}
            {isResponsive && (
              <span className="tooltip-wrapper">
                📱<span className="tooltip">Mobile Responsive</span>
              </span>
            )}
            {isAccessible && (
              <span className="tooltip-wrapper">
                ♿<span className="tooltip">Accessible</span>
              </span>
            )}
            {codeLink && (
              <a href={codeLink} target="_blank" className="tooltip-wrapper">
                💻<span className="tooltip">Open-Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="website__tags">
        {tags
          // .sort((a, b) => (a.type && b.type ? a.type.localeCompare(b.type) : 1))
          .filter((tag) => tag.type != "invisble")
          .map((tag) => (
            <Tag key={tag.label} {...tag} />
          ))}
      </div>
    </div>
  );
}

export type TagType = "default" | "color" | "warning" | "invisble";

export interface TagProps {
  label: string;
  type?: TagType;
}

function Tag({ label, type }: TagProps) {
  return (
    <div
      className={"tag tag--" + type}
      data-tag={label}
      title={type == "color" ? label : ""}
    >
      {type == "color" && <div className="tag__color"></div>}
      {type !== "color" && label}
    </div>
  );
}
