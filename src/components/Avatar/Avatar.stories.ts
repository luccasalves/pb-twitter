import { Meta, Story } from "@storybook/html";
import { Avatar, IAvatar } from "./Avatar";
export default {
  title: "Components/Avatar",
  argTypes: {
    src: { control: "text" },
  },
} as Meta;

const Template: Story<IAvatar> = (args: IAvatar) => {
  return Avatar(args);
};

export const avatar = Template.bind({});
avatar.args = {};
