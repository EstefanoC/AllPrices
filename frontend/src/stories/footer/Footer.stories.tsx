// React
import React from "react";

// Storybook
import type { Meta } from "@storybook/react";

// Dependencies
import { MemoryRouter } from "react-router-dom";

// Component
import { Footer } from "./Footer";

export default {
  title: "Primary/Footer",
  component: Footer,
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
} satisfies Meta<typeof Footer>;

export const Primary = {};
