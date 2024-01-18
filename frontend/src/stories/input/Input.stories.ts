import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Primary/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    placeholder: "Input",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    placeholder: "Input",
  },
};

export const Large: Story = {
  args: {
    type: "number",
    placeholder: "Input",
  },
};

export const Small: Story = {
  args: {
    type: "search",
    placeholder: "Input",
  },
};
