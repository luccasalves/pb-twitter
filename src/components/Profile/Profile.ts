import { notFound } from "./../../utils/redirect";
import { ButtonApp } from "../ButtonApp/Button";
import { IconApp } from "../IconApp/Icon";
import { Avatar } from "./../Avatar/Avatar";
import "./Profile.css";

export interface IProfileProps {
  name: string;
  userName: string;
  imgSrc?: string;
  showOption?: boolean;
  showBtnFollow?: boolean;
}
const imgJhonSnow =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJy3u6V69BYrIag7aTXth_D-44lLTj-jX_T8Vg%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=35a2d5540f21a5453753fd2a0096f2c43471db17fc1ad2a2f9415ad913bfffa0&ipo=images";

export const Profile = ({
  name = "Jão neves",
  userName = "sabeD_nada",
  imgSrc = imgJhonSnow,
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
