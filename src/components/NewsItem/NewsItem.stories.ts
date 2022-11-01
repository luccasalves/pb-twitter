import { INewsItem, NewsItem } from "./Newsitem";
import { Meta, Story } from "@storybook/html";

export default {
  title: "Components/NewsItem",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: "text" },
    text: { control: "text" },
    hashtag: { control: "text" },
    imgSrc: { control: "text" },
  },
} as Meta;

const Template: Story<INewsItem> = (args: INewsItem) => {
  return NewsItem(args);
};

export const newsItem = Template.bind({});
newsItem.args = {
  label: "Pokemon - 2h ago",
  text: "Pikachu is putasso",
  hashtag: "pikachu",
};
