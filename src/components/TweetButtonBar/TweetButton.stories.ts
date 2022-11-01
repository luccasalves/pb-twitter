import { TweetButtonBar } from "./TweetButtonBar";
import { Meta, Story } from "@storybook/html";

export default {
  title: "Components/TweetButtonBar",
  argTypes: {},
} as Meta;

const Template: Story<any> = (args: any) => {
  //@ts-ignore
  return TweetButtonBar(args);
};

export const tweetButtonBar = Template.bind({});
tweetButtonBar.args = {};
