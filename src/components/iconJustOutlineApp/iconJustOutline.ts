export interface IIconProps {
  mode: "dark" | "light";
  name:
    | "more-circle"
    | "more"
    | "chat"
    | "share"
    | "like"
    | "upload"
    | "star"
    | "img"
    | "gif"
    | "emoji"
    | "calendar"
    | "calender-time "
    | "search"
    | "back";
}

export const IconJustOutline = ({ name = "chat", mode }: IIconProps) => {
  const icon = document.createElement("img");
  icon.src = `/icons/${name}-outline-${mode}.svg`;

  return icon;
};
