import { Story, Meta } from "@storybook/react";
import InputField, {
  IinputFieldProps,
} from "../../output/react/src/components/InputField";

const meta: Meta = {
  title: "InputField",
  component: InputField,
};

const Template: Story<IinputFieldProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});

export default meta;
