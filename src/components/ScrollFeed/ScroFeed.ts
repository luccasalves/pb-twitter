import { ButtonApp } from "./../ButtonApp/Button";
import { Avatar } from "./../Avatar/Avatar";
import { Tweet } from "../Tweet/Tweet";
import { HeaderApp } from "./../HeaderApp/Header";
import "./ScrollFeed.css";
import { IconApp } from "../IconApp/Icon";

export const ScrollFeed = () => {
  const feed = document.createElement("main");
  feed.className = "feed";

  const srcExample =
    "https://midias.agazeta.com.br/2022/06/15/league-of-legends-781485.jpg";

  const avatarExemple =
    "https://sm.ign.com/t/ign_br/screenshot/default/34722014736-2d241425f9-k_d66m.h960.jpg";

  const tweets = [
    Tweet({
      profileTweet: {
        name: "Ciclano",
        username: "_ciclone",
        avatarSrc: "../../../public/img/2.png",
      },
      text: "That is a wonderful picture",
      postImg:
        "https://images.pexels.com/photos/14036568/pexels-photo-14036568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        name: "Frajola",
        username: "_saurolino",
        avatarSrc:
          "https://images.pexels.com/photos/5984809/pexels-photo-5984809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      text: "'w'",
      postImg:
        "https://images.pexels.com/photos/674570/pexels-photo-674570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }),
  ];

  const createPost = document.createElement("section");
  const postContent = document.createElement("section");
  createPost.classList.add("create-post", "surface");
  postContent.classList.add("post-content", "surface");
  const textArea = document.createElement("textarea");
  textArea.classList.add("textarea-post", "surface");
  textArea.placeholder = "Whats happening?";
  textArea.rows = 2;

  const actionBar = document.createElement("div");
  const actionIcons = document.createElement("div");
  actionBar.classList.add("action-bar", "surface");
  actionIcons.classList.add("action-icons", "surface");

  actionIcons.append(
    IconApp({ name: "image", color: "blue", action() {} }),
    IconApp({ name: "list", color: "blue", action() {} }),
    IconApp({ name: "face-smile", color: "blue", action() {} }),
    IconApp({ name: "calendar-day", color: "blue", action() {} }),
    IconApp({ name: "location-dot", color: "blue", action() {} })
  );

  actionBar.append(
    actionIcons,
    ButtonApp({ label: "tweet", size: "sm", action() {} })
  );
  postContent.append(textArea, actionBar);
  createPost.append(Avatar({}), postContent);

  feed.append(HeaderApp({ label: "home" }), createPost);
  tweets.forEach((t) => feed.append(t));

  return feed;
};
