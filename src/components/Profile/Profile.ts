import { IconApp } from "../IconApp/Icon";
import { Avatar } from "./../Avatar/Avatar";
import "./Profile.css";

export interface IProfileProps {
  name?: string;
  userName?: string;
  imgSrc?: string;
}

export const Profile = ({
  name = "Zé Biscoito",
  userName = "sabeD_nada",
  imgSrc = "/img/avatar.png",
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
    IconApp({ name: "ellipsis" })
  );

  return profile;
};
