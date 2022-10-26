//@ts-ignore
import { Meta, Story } from "@storybook/html";
import { IconBlue, IIconProps } from "./iconBlue";

export default {
  title: "Components/IconBlue",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    name: {
      control: { type: "select" },
      options: ["star", "img", "gif", "emoji", "back"],
    },
  } as Meta,
};

const Template: Story<IIconProps> = (args: IIconProps) => {
  return IconBlue(args);
};

export const base = Template.bind({});
base.args = {
  name: "star",
};
