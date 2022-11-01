import { MenuDrawer } from "./Menu";
import { Meta, Story } from "@storybook/html";

export default {
  title: "Components/MenuDrawer",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
} as Meta;

const Template: Story = () => {
  return MenuDrawer();
};

export const menuDrawer = Template.bind({});
