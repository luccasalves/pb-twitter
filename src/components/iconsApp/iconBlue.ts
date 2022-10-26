export interface IIconProps {
  name: "star" | "img" | "gif" | "emoji" | "back";
}

export const IconBlue = ({ name = "star" }: IIconProps) => {
  const icon = document.createElement("img");
  icon.src = `/icons/blue-${name}.svg`;

  return icon;
};
