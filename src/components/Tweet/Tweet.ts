import { IProfileProps } from "../Profile/Profile";
import { TweetButtonBar } from "./../TweetButtonBar/TweetButtonBar";
import { Avatar } from "../Avatar/Avatar";
import "./Tweet.css";

type ProfileTweet = {
  name: string;
  username: string;
  avatarSrc?: string;
};

export interface ITweetProps {
  profileTweet: ProfileTweet;
  text: string;
  postImg: string;
}

export const Tweet = (props: ITweetProps) => {
  const tweet = document.createElement("div");
  tweet.classList.add("tweet", "surface");

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "imgWrapper";
  const img = document.createElement("img");
  img.src = props.postImg;
  props.postImg ? imgWrapper.append(img) : (props.postImg = "");

  const tweetHeader = document.createElement("div");
  const profile = document.createElement("div");
  const textHeader = document.createElement("div");
  const nameText = document.createElement("p");
  const userNameText = document.createElement("p");
  const tweetText = document.createElement("p");

  tweetHeader.className = "tweet-header";
  profile.className = "tweet-profile";
  nameText.className = "name";
  userNameText.className = "user-name";

  nameText.textContent = props.profileTweet.name;
  userNameText.textContent = "@" + props.profileTweet.username;
  tweetText.textContent = props.text;

  profile.append(nameText, userNameText);

  textHeader.append(profile, tweetText);

  tweetHeader.append(
    Avatar({
      src: props.profileTweet.avatarSrc,
    }),
    textHeader
  );

  tweet.append(tweetHeader, imgWrapper, TweetButtonBar());

  return tweet;
};
