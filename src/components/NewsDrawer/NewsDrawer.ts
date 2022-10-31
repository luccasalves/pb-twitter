import { Profile } from "./../Profile/Profile";
import "./News.css";
import { SearchBar } from "./../SearchBar/Search";
import { Box } from "../Box/Box";
import { NewsItem } from "../NewsItem/Newsitem";
export const NewsDrawer = () => {
  const newsAside = document.createElement("aside");
  newsAside.classList.add("news-drawer", "surface");

  const news = [
    NewsItem({
      label: "COVID19 - last night",
      text: "England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
      hashtag: "covid",
      imgSrc:
        "https://www.coladaweb.com/wp-content/uploads/2014/12/Inglaterra.png",
    }),
    NewsItem({
      label: "US news - 4h ago",
      text: "Parler may go offline following suspensions by Amazon, Apple and Google",
      hashtag: "trump",
      imgSrc: "https://www.witeradvogados.com/imagens/geral/1322.jpg",
    }),
    NewsItem({
      label: "Flamengo - 6h ago",
      text: "Flamengo wins Athletico-PR in Ecuador and wins the Libertadores tri",
      hashtag: "sport",
      imgSrc:
        "https://ac24horas.com/wp-content/uploads/2022/10/FLAMENGO-GANHA.jpg",
    }),
  ];

  const profiles = [
    Profile({ showOption: false, showBtnFollow: true }),
    Profile({ showOption: false, showBtnFollow: true }),
  ];

  newsAside.append(
    SearchBar(),
    Box({ title: "What`s happening", childEl: news }),
    Box({ title: "Who to follow", childEl: profiles })
  );
  return newsAside;
};
