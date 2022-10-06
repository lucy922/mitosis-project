import Button, { IButtonProps } from "../../output/react/src/components/Button";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template: Story<IButtonProps> = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Default.args = {
  variant: "default",
  children: "Default",
};

Primary.args = {
  variant: "primary",
  children: "Primary",
};

Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

Small.args = {
  size: "sm",
  children: "Small",
};

Medium.args = {
  size: "md",
  children: "Medium",
};

Large.args = {
  size: "lg",
  children: "Large",
};

export default meta;
