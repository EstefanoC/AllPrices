// React
import React from "react";

// Storybook
import type { Meta } from "@storybook/react";

// Dependencies
import { MemoryRouter } from "react-router-dom";

// Component
import { About } from "./About";

export default {
  title: "Pages/About",
  component: About,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof About>;

export const Pages = {};
