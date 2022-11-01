import "./TweetButtonBar.css";
import { notFound } from "./../../utils/redirect";
import { IconApp } from "./../IconApp/Icon";
export const TweetButtonBar = () => {
  const buttonBar = document.createElement("section");
  buttonBar.classList.add("button-bar");
  const text = document.createElement("p");
  text.className = "status-text";
  const commentStatus = document.createElement("span");
  const retweetStatus = document.createElement("span");
  const likedStatus = document.createElement("span");
  const saveStatus = document.createElement("span");

  let like = 210;

  commentStatus.append(
    IconApp({ name: "comment", color: "gray", action: notFound }),
    (text.textContent = "6")
  );
  retweetStatus.append(
    IconApp({ name: "retweet", color: "gray", action: notFound }),
    (text.textContent = "11")
  );
  likedStatus.append(
    IconApp({ name: "heart", color: "gray", action() {} }),
    (text.textContent = like.toString())
  );
  saveStatus.append(
    IconApp({ name: "arrow-up-from-bracket", color: "gray", action: notFound }),
    (text.textContent = "2")
  );

  buttonBar.append(commentStatus, retweetStatus, likedStatus, saveStatus);

  return buttonBar;
};
