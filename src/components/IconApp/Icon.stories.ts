import { Meta, Story } from "@storybook/html";
import { IIconProps, IconApp } from "./Icon";

export default {
  title: "Components/Icon",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    name: {
      control: { type: "select" },
      options: [
        "twitter",
        "house",
        "hashtag",
        "bell",
        "envelope",
        "bookmark",
        "file-lines",
        "user",
        "ellipsis",
        "comment",
        "retweet",
        "heart",
        "arrow-up-from-bracket",
        "sparkles",
        "image",
        "gif",
        "list",
        "face-smile",
        "calendar-day",
        "magnifying-glass",
        "arrow-left",
        "location-dot",
      ],
    },
    color: {
      control: { type: "select" },
      options: ["blue", "red", "gray", "black", "white"],
    },
  } as Meta,
};

const Template: Story<IIconProps> = (args: IIconProps) => {
  return IconApp(args);
};

export const Solid = Template.bind({});
Solid.args = {
  name: "bell",
  color: "blue",
};
