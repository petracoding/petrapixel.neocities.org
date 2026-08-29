export type TagType = "default" | "color" | "warning" | "invisble";

export interface TagProps {
  label: string;
  type?: TagType;
}

export function Tag({ label, type }: TagProps) {
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
