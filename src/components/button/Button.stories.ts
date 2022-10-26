import { Meta, Story } from "@storybook/html";
import { ButtonApp, IButtonProps } from "./Button";

export default {
  title: "Componentes/Button",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: "text" },
    color: { control: "color" },
    primary: { control: "boolean" },
    mode: ["flat", "outline-primary", "outline-secondary"],
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    onClick: { action: "onClick" },
  },
} as Meta;

const Template: Story<IButtonProps> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return ButtonApp(args);
};
