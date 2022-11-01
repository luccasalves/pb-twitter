import { IMenuItem, MenuItem } from "./Item";
import { Meta, Story } from "@storybook/html";

export default {
  title: "Components/MenuItem",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    text: { control: "text" },

    icon: {
      control: { type: "object" },
    },
  },
} as Meta;

const Template: Story<IMenuItem> = (args: IMenuItem) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return MenuItem(args.text, args.icon);
};

export const menuItem = Template.bind({});
menuItem.args = {
  text: "sorry",
  icon: { name: "heart", action() {} },
};
