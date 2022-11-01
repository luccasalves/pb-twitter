import { notFound } from "./../../utils/redirect";
import { IconApp, IIconProps } from "./../IconApp/Icon";
import "./Item.css";

export interface IMenuItem {
  text: string;
  icon: IIconProps;
}

export const MenuItem = (text: string, icon: IIconProps) => {
  const item = document.createElement("div");
  const txt = document.createElement("p");
  item.classList.add("menu-item");

  txt.textContent = text;
  item.append(IconApp({ name: icon.name, action() {} }), txt);

  return item;
};
