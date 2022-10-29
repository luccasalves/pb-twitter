import { Profile } from "./../Profile/Profile";
import { ButtonApp } from "./../ButtonApp/Button";
import { MenuItem } from "../MenuItem/Item";
import { changeTheme } from "../../theme/dark";
import "./Menu.css";
import { IconApp } from "../IconApp/Icon";
export const MenuDrawer = () => {
  const menu = document.createElement("aside");
  const drawerItens = document.createElement("div");
  drawerItens.className = "drawer-itens";

  menu.classList.add("menu-drawer", "surface");

  drawerItens.append(
    IconApp({ name: "twitter", color: "blue" }),
    MenuItem("Home", { name: "house", color: "black" }),
    MenuItem("Explore", { name: "hashtag", color: "black" }),
    MenuItem("Notifications", { name: "bell", color: "black" }),
    MenuItem("Messages", { name: "envelope", color: "black" }),
    MenuItem("Bookmarks", { name: "bookmark", color: "black" }),
    MenuItem("Lists", { name: "file-lines", color: "black" }),
    MenuItem("Profile", { name: "user", color: "black" }),
    MenuItem("More", { name: "ellipsis", color: "black" }),
    ButtonApp({ label: "tweet", action: changeTheme })
  );

  menu.append(drawerItens, Profile({}));

  return menu;
};
