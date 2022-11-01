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
  const imgPicachu =
    "https://conteudo.imguol.com.br/c/entretenimento/58/2017/05/30/pikachu-nervoso-1496159464346_v2_450x450.png";

  const thanos =
    "https://i.pinimg.com/564x/9f/7c/b7/9f7cb79579c2282c6c8daf83f8149a18.jpg";
  const profiles = [
    Profile({
      name: "TuTanos",
      userName: "xtala_dedos",
      imgSrc: thanos,
      showOption: false,
      showBtnFollow: true,
    }),
    Profile({
      name: "Pikachu",
      userName: "pk_boladao",
      imgSrc: imgPicachu,
      showOption: false,
      showBtnFollow: true,
    }),
  ];

  newsAside.append(
    SearchBar(),
    Box({ title: "What`s happening", childEl: news }),
    Box({ title: "Who to follow", childEl: profiles })
  );
  return newsAside;
};
