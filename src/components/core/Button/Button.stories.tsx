import { FiArrowRight } from "react-icons/fi";

import { Button } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Button",
  component: Button,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Button>;

/**
 * Colorful variant for forefront actions.
 */
export const Default: Story = {
  name: "Primary (Default)",
  args: {
    children: (
      <>
        Click me <FiArrowRight />
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
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

export const Icon: Story = {
  args: {
    ...Default.args,
    variant: "icon",
    "aria-label": "Next Page",
    children: <FiArrowRight />,
  },
};

export default meta;
