import { NewsDrawer } from "./NewsDrawer";
import { Meta, Story } from "@storybook/html";

export default {
  title: "Components/NewsDrawer",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
} as Meta;

type ExempleProps = {
  name: string;
};
const Template: Story<ExempleProps> = (args: ExempleProps) => {
  //@ts-ignore
  return NewsDrawer(args);
};

export const newsDrawer = Template.bind({});
