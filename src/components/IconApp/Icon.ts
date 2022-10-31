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
    | "circle-half-stroke"
    | "image"
    | "gif"
    | "list"
    | "face-smile"
    | "calendar-day"
    | "magnifying-glass"
    | "arrow-left"
    | "location-dot";
  action: () => void;
}

function ghost() {}

export const IconApp = ({ name, color, action = ghost }: IIconProps) => {
  const cdnFontAwesome = document.createElement("script");
  const i = document.createElement("i");
  i.className = "icon";
  i.classList.toggle;

  cdnFontAwesome.setAttribute(
    "src",
    "https://kit.fontawesome.com/e3dde8a434.js"
  );
  name == "heart" &&
    i.addEventListener("click", (event) => {
      const currentIcon = event.target;

      //@ts-ignore
      currentIcon.classList.toggle("heart-on");
    });
  // i.append(cdnFontAwesome);
  i.addEventListener("click", () => {
    action();
  });

  if (name == "twitter") {
    i.classList.add(`fa-brands`, `fa-${name}`, `icon--${color}`, `icon`);
  }
  i.classList.add(`fa-solid`, `fa-${name}`, `icon--${color}`, `icon`);
  return i;
};
