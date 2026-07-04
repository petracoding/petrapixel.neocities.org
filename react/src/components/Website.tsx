export interface WebsiteProps {
  date: string;
  title: string;
  link: string;
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
  date,
  title,
  link,
  buttonUrl,
  buttonColorOrder,
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
  const noButtonUrl = "/assets/img/links/nobutton.gif";
  const linkCleanedUp = link
    .replace("http://www.", "")
    .replace("http://", "")
    .replace("https://www.", "")
    .replace("https://", "")
    .slice(0, -1);

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
          <a href={link} target="_blank">
            <img src={buttonUrl || noButtonUrl} width="88" height="31" />
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
              <abbr title="">
                {name}
                <span>
                  {pronouns +
                    (pronouns ? " " : "") +
                    (isAdult ? "(adult)" : "(minor)")}
                </span>
              </abbr>
            </div>
          ) : (
            <div className="website__credit"></div>
          )}
          <div className="website__icons">
            {location && (
              <span>
                🗺️<span>{location}</span>
              </span>
            )}
            {language && (
              <span>
                💬<span>{language}</span>
              </span>
            )}
            {isWIP && (
              <span>
                🚧<span>Work in Progress</span>
              </span>
            )}
            {isResponsive && (
              <span>
                📱<span>Mobile Responsive</span>
              </span>
            )}
            {isAccessible && (
              <span>
                ♿<span>Accessible</span>
              </span>
            )}
            {codeLink && (
              <a href={codeLink} target="_blank">
                💻<span>Open-Source</span>
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
    <div className={"tag tag--" + type} data-tag={label}>
      {type == "color" && <div className="tag__color"></div>}
      {label}
    </div>
  );
}
