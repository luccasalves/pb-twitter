//@ts-ignore
import { Meta, Story } from "@storybook/html";
import { IconBase, IIconProps } from "./iconBase";

export default {
  title: "Components/Icon",
  argTypes: {
    outline: { control: "boolean" },
    mode: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
    name: {
      control: { type: "select" },
      options: ["home", "hashtag", "bell", "mail", "pinned", "doc", "person"],
    },
  } as Meta,
};

const Template: Story<IIconProps> = (args: IIconProps) => {
  return IconBase(args);
};

export const flat = Template.bind({});
flat.args = {
  mode: "dark",
  outline: false,
  name: "home",
};

export const outline = Template.bind({});
outline.args = {
  mode: "dark",
  outline: true,
  name: "home",
};
