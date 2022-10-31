import { Tweet } from "../Tweet/Tweet";
import { HeaderApp } from "./../HeaderApp/Header";
import "./ScrollFeed.css";

export const ScrollFeed = () => {
  const feed = document.createElement("main");
  feed.className = "feed";

  const srcExample =
    "https://midias.agazeta.com.br/2022/06/15/league-of-legends-781485.jpg";

  const avatarExemple =
    "https://sm.ign.com/t/ign_br/screenshot/default/34722014736-2d241425f9-k_d66m.h960.jpg";
  feed.append(
    HeaderApp({ label: "home" }),
    Tweet({
      profileTweet: {
        name: "Faker",
        username: "_papaBrocolis",
        avatarSrc: avatarExemple,
      },
      text: "My secret to being the best in the world is eating broccoli",
      postImg: srcExample,
    }),
    Tweet({
      profileTweet: {
        name: "Faker",
        username: "_papaBrocolis",
        avatarSrc: avatarExemple,
      },
      text: "My secret to being the best in the world is eating broccoli",
      postImg: srcExample,
    }),
    Tweet({
      profileTweet: {
        name: "Faker",
        username: "_papaBrocolis",
        avatarSrc: avatarExemple,
      },
      text: "My secret to being the best in the world is eating broccoli",
      postImg: srcExample,
    }),
    Tweet({
      profileTweet: {
        name: "Faker",
        username: "_papaBrocolis",
        avatarSrc: avatarExemple,
      },
      text: "My secret to being the best in the world is eating broccoli",
      postImg: srcExample,
    })
  );

  return feed;
};
