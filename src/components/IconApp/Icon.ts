import "./Icon.css";

export interface IIconProps {
  color?: "blue" | "red" | "gray" | "black" | "white";
  name:
    | "twitter"
    | "house"
    | "hashtag"
    | "bell"
    | "envelope"
    | "bookmark"
    | "file-lines"
    | "user"
    | "ellipsis"
    | "comment"
    | "retweet"
    | "heart"
    | "arrow-up-from-bracket"
    | "sparkles"
    | "image"
    | "gif"
    | "list"
    | "face-smile"
    | "calendar-day"
    | "magnifying-glass"
    | "arrow-left"
    | "location-dot";
}

export const IconApp = ({ name, color }: IIconProps) => {
  const cdnFontAwesome = document.createElement("script");
  const i = document.createElement("i");

  cdnFontAwesome.setAttribute(
    "src",
    "https://kit.fontawesome.com/e3dde8a434.js"
  );

  i.append(cdnFontAwesome);

  // if (name == "twitter") {
  //   return i.classList.add(`fa-brands`, `fa-${name}`, `icon--${color}`, `icon`);
  // }
  i.classList.add(`fa-solid`, `fa-${name}`, `icon--${color}`, `icon`);
  return i;
};
