import { IProfileProps, Profile } from "./Profile";
import { Meta, Story } from "@storybook/html";

export default {
  title: "Components/Profile",
  argTypes: {
    name: { control: "text" },
    userName: { control: "text" },
    imgSrc: { control: "text" },
  },
} as Meta;

const Template: Story<IProfileProps> = (args: IProfileProps) => {
  return Profile(args);
};

export const profile = Template.bind({});
profile.args = {};
