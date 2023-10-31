import { FiArrowRight } from "react-icons/fi/index.js";

import { Button } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

/**
 * Colorful variant for forefront actions.
 */
export const Default: Story = {
  name: "Solid (Default)",
  args: {
    children: (
      <>
        Click me <FiArrowRight />
      </>
    ),
  },
};

export const Muted: Story = {
  args: {
    ...Default.args,
    variant: "muted",
  },
};

/**
 * Outlined button for secondary actions.
 */
export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

/**
 * A subtle variant for gentle CTAs.
 */
export const Ghost: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        👻 Click me <FiArrowRight />
      </>
    ),
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    ...Default.args,
    variant: "link",
  },
};

export const IconOnly: Story = {
  args: {
    ...Default.args,
    variant: "icon",
    "aria-label": "Next Page",
    children: <FiArrowRight />,
  },
};

export default meta;
