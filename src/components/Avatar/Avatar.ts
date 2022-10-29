import "./Avatar.css";

export interface IAvatar {
  src: string;
}

const imgJhonSnow =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJy3u6V69BYrIag7aTXth_D-44lLTj-jX_T8Vg%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=35a2d5540f21a5453753fd2a0096f2c43471db17fc1ad2a2f9415ad913bfffa0&ipo=images";
export const Avatar = ({ src = imgJhonSnow }: IAvatar) => {
  const avatar = document.createElement("img");
  avatar.src = src;
  avatar.className = "avatar";
  return avatar;
};
