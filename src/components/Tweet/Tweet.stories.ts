import { Tweet, ITweetProps } from "./Tweet";
import { Meta, Story } from "@storybook/html";

export default {
  title: "Components/Tweet",
  argTypes: {
    name: { control: "text" },
    username: { control: "text" },
    avatarSrc: { control: "text" },
    text: { control: "text" },
    postImg: { control: "text" },
  },
} as Meta;

const Template: Story<ITweetProps> = (args: ITweetProps) => {
  return Tweet(args);
};

export const tweet = Template.bind({});
tweet.args = {
  name: "lucas",
  username: "lucas",
  text: "tweet test tweet test testette",
  postImg:
    "https://images.pexels.com/photos/4084979/pexels-photo-4084979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
