//@ts-ignore
import { Meta, Story } from "@storybook/html";
import { IconGray, IIconProps } from "./iconGray";

export default {
  title: "Components/IconGray",
  argTypes: {
    name: {
      control: { type: "select" },
      options: ["search", "calendar", "location"],
    },
  } as Meta,
};

const Template: Story<IIconProps> = (args: IIconProps) => {
  return IconGray(args);
};

export const base = Template.bind({});
base.args = {
  name: "search",
};
