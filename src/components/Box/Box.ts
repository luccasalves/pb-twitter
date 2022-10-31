import "./Box.css";

export interface IBoxProps {
  title: string;
  childEl: Array<any>;
}

export const Box = ({ title, childEl }: IBoxProps) => {
  const box = document.createElement("section");
  box.classList.add("box", "bg-news");
  const heading = document.createElement("p");
  heading.className = "heading";
  heading.textContent = title;

  const seeMoreLink = document.createElement("a");
  const seeMore = document.createElement("div");
  seeMoreLink.textContent = "See more";
  seeMoreLink.href = "src/pages/Error404.html";
  seeMore.className = "see-more";

  box.append(heading);
  childEl.forEach((el) => box.append(el));
  seeMore.append(seeMoreLink);
  box.append(seeMore);

  return box;
};
