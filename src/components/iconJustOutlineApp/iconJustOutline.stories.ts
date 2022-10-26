//@ts-ignore
import { Meta, Story } from "@storybook/html";
import { IconJustOutline, IIconProps } from "./iconJustOutline";

export default {
  title: "Components/IconJustOutline",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
    name: {
      control: { type: "select" },
      options: [
        "more-circle",
        "more",
        "chat",
        "share",
        "like",
        "upload",
        "star",
        "img",
        "gif",
        "emoji",
        "calendar",
        "calender-time ",
        "search",
        "back",
      ],
    },
  } as Meta,
};

const Template: Story<IIconProps> = (args: IIconProps) => {
  return IconJustOutline(args);
};

export const base = Template.bind({});
base.args = {
  mode: "dark",
  name: "chat",
};
