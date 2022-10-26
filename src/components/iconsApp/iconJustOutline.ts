export interface IIconProps {
  mode: "dark" | "light";
  name: "more-circle" | "more" | "chat" | "share" | "like" | "upload";
}

export const IconJustOutline = ({ name = "chat", mode }: IIconProps) => {
  const icon = document.createElement("img");
  icon.src = `/icons/${name}-${mode}.svg`;

  return icon;
};
