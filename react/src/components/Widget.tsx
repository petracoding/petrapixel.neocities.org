import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { Tag, TagProps } from "./Tag";

export interface WidgetProps {
  date: string;
  title: string;
  creator: string;
  description: string;
  link: string;
  screenshotUrl?: string;
  usesExternalScripts?: string;
  tags: TagProps[];
}

export default function Widget({
  title,
  link,
  creator,
  description,
  screenshotUrl,
  usesExternalScripts,
  tags,
}: WidgetProps) {
  return (
    <div className="widget">
      <div className="widget__basics">
        <a href={link} target="_blank" className="widget__title">
          {title}
        </a>
        {creator && <div className="widget__creator">by {creator}</div>}
        <div className="widget__description">{description}</div>
      </div>
      {screenshotUrl && (
        <div className="widget__image">
          <img src={screenshotUrl} alt={title} />
        </div>
      )}
      <div className="widget__tags">
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
