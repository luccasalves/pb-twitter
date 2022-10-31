import "./TweetButtonBar.css";
import { notFound } from "./../../utils/redirect";
import { IconApp } from "./../IconApp/Icon";
export const TweetButtonBar = () => {
  const buttonBar = document.createElement("section");
  buttonBar.classList.add("button-bar");

  buttonBar.append(
    IconApp({ name: "comment", color: "gray", action: notFound }),
    IconApp({ name: "retweet", color: "gray", action: notFound }),
    IconApp({ name: "heart", color: "gray", action() {} }),
    IconApp({ name: "arrow-up-from-bracket", color: "gray", action: notFound })
  );

  return buttonBar;
};
