// React
import React from "react";

// Storybook
import type { Meta } from "@storybook/react";

// Dependencies
import { MemoryRouter } from "react-router-dom";

// Component
import { Error404 } from "./Error404";

export default {
  title: "Pages/Error404",
  component: Error404,
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
} satisfies Meta<typeof Error404>;

export const Pages = {};
