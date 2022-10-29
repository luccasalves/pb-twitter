import { changeTheme } from "../../theme/dark";
import { IconApp } from "../IconApp/Icon";
import "./Header.css";

export interface IHeaderApp {
  label: string;
}

export const HeaderApp = ({ label }: IHeaderApp) => {
  const header = document.createElement("header");
  header.classList.add("header", "surface");

  const labelText = document.createElement("p");
  labelText.className = "label";
  labelText.textContent = label;

  header.append(
    labelText,
    IconApp({ name: "circle-half-stroke", color: "blue", action: changeTheme })
  );

  return header;
};
