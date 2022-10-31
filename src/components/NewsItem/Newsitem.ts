import { notFound } from "./../../utils/redirect";
import "./NewsItem.css";

export interface INewsItem {
  label: string;
  text: string;
  hashtag: string;
  imgSrc?: string;
}

const imgPicachu =
  "https://conteudo.imguol.com.br/c/entretenimento/58/2017/05/30/pikachu-nervoso-1496159464346_v2_450x450.png";

export const NewsItem = ({
  label,
  text,
  hashtag,
  imgSrc = imgPicachu,
}: INewsItem) => {
  const item = document.createElement("div");
  item.classList.add("item");
  const labelHeader = document.createElement("p");
  labelHeader.className = "label";
  labelHeader.textContent = label;

  const content = document.createElement("p");
  content.className = "content";

  const contentNews = document.createElement("p");
  contentNews.className = "content-news";
  contentNews.textContent = text;

  const footer = document.createElement("div");
  footer.className = "footer-news";

  const labelFooter = document.createElement("p");
  labelFooter.className = "labelFooter";
  labelFooter.textContent = "Trending with ";

  const hashtagFooter = document.createElement("p");
  hashtagFooter.className = "hashtag";
  hashtagFooter.textContent = "#" + hashtag;

  footer.append(labelFooter, hashtagFooter);

  const imgNews = document.createElement("img");
  imgNews.className = "img";
  imgNews.src = imgSrc;

  content.append(labelHeader, contentNews, footer);

  item.append(content, imgNews);

  item.addEventListener("click", () => {
    notFound();
  });

  return item;
};
