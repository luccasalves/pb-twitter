import { notFound } from "./../../utils/redirect";
import { Profile } from "./../Profile/Profile";
import { ButtonApp } from "./../ButtonApp/Button";
import { MenuItem } from "../MenuItem/Item";
import "./Menu.css";
import { IconApp } from "../IconApp/Icon";
export const MenuDrawer = () => {
  const menu = document.createElement("aside");
  const drawerItens = document.createElement("div");
  drawerItens.className = "drawer-itens";

  menu.classList.add("menu-drawer", "surface");

  drawerItens.append(
    IconApp({ name: "twitter", color: "blue", action() {} }),
    MenuItem("Home", { name: "house", color: "black", action() {} }),
    MenuItem("Explore", { name: "hashtag", color: "black", action() {} }),
    MenuItem("Notifications", { name: "bell", color: "black", action() {} }),
    MenuItem("Messages", { name: "envelope", color: "black", action() {} }),
    MenuItem("Bookmarks", { name: "bookmark", color: "black", action() {} }),
    MenuItem("Lists", { name: "file-lines", color: "black", action() {} }),
    MenuItem("Profile", { name: "user", color: "black", action() {} }),
    MenuItem("More", { name: "ellipsis", color: "black", action() {} }),
    ButtonApp({ label: "tweet", action: notFound })
  );

  //@ts-ignore
  menu.append(drawerItens, Profile({}));

  return menu;
};
