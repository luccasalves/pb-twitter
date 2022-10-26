export interface IIconProps {
  outline: boolean;
  mode: "dark" | "light";
  name: "home" | "hashtag" | "bell" | "mail" | "pinned" | "doc" | "person";
}

export const IconApp = ({ name = "home", mode, outline }: IIconProps) => {
  const icon = document.createElement("img");
  icon.src = outline
    ? `/icons/${name}-outline-${mode}.svg`
    : `/icons/${name}-${mode}.svg`;
  return icon;
};
