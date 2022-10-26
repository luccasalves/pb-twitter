export interface IIconProps {
  name: "search" | "calendar" | "location";
}

export const IconGray = ({ name = "search" }: IIconProps) => {
  const icon = document.createElement("img");
  icon.src = `/icons/gray-${name}.svg`;

  return icon;
};
