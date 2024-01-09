import { FiArrowRight } from "react-icons/fi/index.js";

import { Button } from "components";
import { Flex } from "generated/panda/jsx";

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
    "aria-label": "Next page",
    children: <FiArrowRight />,
  },
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  // render all button variants
  render: (_args) => (
    <Flex direction="column" w="fit-content" gap={4}>
      <Button variant="solid" colorPalette="amber" {...Default.args} />
      <Button variant="muted" colorPalette="amber" {...Muted.args} />
      <Button variant="outline" colorPalette="amber" {...Outline.args} />
      <Button variant="ghost" colorPalette="amber" {...Ghost.args} />
      <Button variant="link" colorPalette="amber" {...Link.args} />
      <Button variant="icon" colorPalette="amber" {...IconOnly.args} />
    </Flex>
  ),
};

export default meta;
