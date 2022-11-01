// @ts-nocheck
import { ButtonApp } from "./../ButtonApp/Button";
import { Avatar } from "./../Avatar/Avatar";
import { Tweet } from "../Tweet/Tweet";
import { HeaderApp } from "./../HeaderApp/Header";
import "./ScrollFeed.css";
import { IconApp } from "../IconApp/Icon";
import { notFound } from "../../utils/redirect";

export const ScrollFeed = () => {
  const feed = document.createElement("main");
  feed.className = "feed";

  const tweets = [
    Tweet({
      name: "Frajola",
      username: "_saurolino",
      avatarSrc:
        "https://images.pexels.com/photos/5984809/pexels-photo-5984809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      text: "Bad boy 'w'",
      postImg:
        "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }),
    Tweet({
      name: "Faker",
      username: "_papaBrocolis",
      avatarSrc:
        "https://sm.ign.com/t/ign_br/screenshot/default/34722014736-2d241425f9-k_d66m.h960.jpg",

      text: "My secret to being the best in the world is eating broccoli",
      postImg:
        "https://midias.agazeta.com.br/2022/06/15/league-of-legends-781485.jpg",
    }),
    Tweet({
      name: "Ze Biscoito",
      username: "mc_cookie",
      avatarSrc: "img/avatar.png",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      postImg:
        "https://images.pexels.com/photos/8351335/pexels-photo-8351335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }),
    Tweet({
      name: "Ciclano",
      username: "_ciclone",
      avatarSrc: "img/2.png",

      text: "That is a wonderful picture",
      postImg:
        "https://images.pexels.com/photos/14036568/pexels-photo-14036568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }),
  ];

  const createPost = document.createElement("section");
  const textArea = document.createElement("textarea");
  const postContent = document.createElement("section");
  const actionBar = document.createElement("div");
  const actionIcons = document.createElement("div");
  const inputFile = document.createElement("input");
  const inputFileLabel = document.createElement("label");
  const imgPreview = document.createElement("img");

  createPost.classList.add("create-post", "surface");
  postContent.classList.add("post-content", "surface");
  textArea.classList.add("textarea-post", "surface");
  textArea.placeholder = "Whats happening?";
  textArea.rows = 1;

  inputFile.className = "input-file";
  inputFile.type = "file";
  inputFile.id = "inputFile";
  inputFileLabel.setAttribute("for", "inputFile");
  inputFileLabel.append(IconApp({ name: "image", color: "blue", action() {} }));

  imgPreview.className = "img-preview";
  actionBar.classList.add("action-bar", "surface");
  actionIcons.classList.add("action-icons", "surface");

  actionIcons.append(
    inputFileLabel,
    inputFile,
    IconApp({ name: "list", color: "blue", action: notFound }),
    IconApp({ name: "face-smile", color: "blue", action: notFound }),
    IconApp({ name: "calendar-day", color: "blue", action: notFound }),
    IconApp({ name: "location-dot", color: "blue", action: notFound })
  );

  inputFile.addEventListener("change", (event) => {
    const inputTarget = event?.target;

    const file = inputTarget.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      const readerTarget = e.target;

      imgPreview.src = readerTarget?.result;

      sessionStorage.setItem("currentImg", readerTarget?.result);

      postContent.append(imgPreview);
    });
    reader.readAsDataURL(file);
  });

  actionBar.append(
    actionIcons,
    ButtonApp({
      label: "tweet",
      size: "sm",
      action: () => {
        addTweet();
      },
    })
  );

  function addTweet() {
    if (textArea.value) {
      posts.append(
        Tweet({
          profileTweet: { name: "Jão neves", username: "sabeD_nada" },
          text: textArea.value,
          postImg: sessionStorage.getItem("currentImg"),
        })
      );
      sessionStorage.clear();
      textArea.value = "";
      postContent.removeChild(imgPreview);

      return;
    }
    alert("tweet vazio");
  }

  postContent.append(textArea, actionBar);
  createPost.append(Avatar({}), postContent);

  const posts = document.createElement("div");
  posts.classList.add("posts");

  feed.append(HeaderApp({ label: "home" }), createPost);
  tweets.forEach((t) => posts.append(t));
  feed.append(posts);

  return feed;
};
