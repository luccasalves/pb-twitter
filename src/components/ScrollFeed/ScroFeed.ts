import { HeaderApp } from "./../HeaderApp/Header";
import "./ScrollFeed.css";

export const ScrollFeed = () => {
  const feed = document.createElement("main");
  feed.className = "feed";

  feed.append(HeaderApp({ label: "home" }));

  return feed;
};
