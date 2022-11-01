import { IProfileProps } from "../Profile/Profile";
import { TweetButtonBar } from "./../TweetButtonBar/TweetButtonBar";
import { Avatar } from "../Avatar/Avatar";
import "./Tweet.css";

export interface ITweetProps {
  name: string;
  username: string;
  avatarSrc: string;
  text: string;
  postImg: string | any;
}

export const Tweet = ({
  name,
  username,
  avatarSrc,
  text,
  postImg,
}: ITweetProps) => {
  const tweet = document.createElement("div");
  tweet.classList.add("tweet", "surface");

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "imgWrapper";
  const img = document.createElement("img");
  img.src = postImg;
  postImg ? imgWrapper.append(img) : (postImg = "");

  const tweetHeader = document.createElement("div");
  const profile = document.createElement("div");
  const textHeader = document.createElement("div");
  const nameText = document.createElement("p");
  const userNameText = document.createElement("p");
  const tweetText = document.createElement("p");
  const postTime = document.createElement("p");

  let counter = 0;
  let time = 60000;

  tweetHeader.className = "tweet-header";
  profile.className = "tweet-profile";
  nameText.className = "name";
  userNameText.className = "user-name";
  postTime.className = "user-name";

  nameText.textContent = name;
  userNameText.textContent = "@" + username + " . ";
  tweetText.textContent = text;
  postTime.textContent = " right now";

  profile.append(nameText, userNameText, postTime);

  setInterval(() => {
    counter++;

    postTime.textContent = counter.toString() + "m ago";

    if (counter >= 60) {
      counter = 1;
      postTime.textContent = counter.toString() + "h ago";
      time = 36000000;
    }
  }, time);

  textHeader.className = "text-header";
  textHeader.append(profile, tweetText);

  tweetHeader.append(
    Avatar({
      src: avatarSrc,
    }),
    textHeader
  );

  tweet.append(tweetHeader, imgWrapper, TweetButtonBar());

  return tweet;
};
