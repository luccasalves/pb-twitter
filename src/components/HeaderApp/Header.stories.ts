import { Meta, Story } from "@storybook/html";
import { HeaderApp, IHeaderApp } from "./Header";

export default {
  title: "Components/Header",
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: Story<IHeaderApp> = (args: IHeaderApp) => {
  return HeaderApp(args);
};

export const header = Template.bind({});

header.args = {
  label: "home",
};
