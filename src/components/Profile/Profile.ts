import { notFound } from "./../../utils/redirect";
import { ButtonApp } from "../ButtonApp/Button";
import { IconApp } from "../IconApp/Icon";
import { Avatar } from "./../Avatar/Avatar";
import "./Profile.css";

export interface IProfileProps {
  name?: string;
  userName?: string;
  imgSrc?: string;
  showOption?: boolean;
  showBtnFollow?: boolean;
}

export const Profile = ({
  name = "Zé Biscoito",
  userName = "sabeD_nada",
  imgSrc = "/img/avatar.png",
  showOption = true,
  showBtnFollow = false,
}: IProfileProps) => {
  const profile = document.createElement("div");
  const nameText = document.createElement("p");
  const userNameText = document.createElement("p");
  const nameBox = document.createElement("div");

  profile.className = "profile";

  nameText.textContent = name;
  nameText.className = "name";
  userNameText.textContent = `@${userName}`;
  userNameText.className = "user-name";

  nameBox.append(nameText, userNameText);

  profile.append(
    Avatar({ src: imgSrc }),
    nameBox,
    showOption ? IconApp({ name: "ellipsis", action: notFound }) : "",
    showBtnFollow
      ? ButtonApp({
          label: "Follow",
          outline: true,
          action: notFound,
          size: "sm",
        })
      : ""
  );

  return profile;
};
