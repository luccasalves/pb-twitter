//@ts-ignore
import { Meta, Story } from "@storybook/html";
import { ButtonApp, IButtonProps } from "./Button";

export default {
  title: "Components/Button",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: "text" },
    outline: { control: "boolean" },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    onClick: { action: "onClick" },
  },
} as Meta;

const Template: Story<IButtonProps> = (args: IButtonProps) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return ButtonApp(args);
};

export const Flat = Template.bind({});
Flat.args = {
  label: "Button flat ",
  outline: false,
  size: "md",
  color: "primary",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Button outline",
  outline: true,
  size: "md",
  color: "primary",
};
