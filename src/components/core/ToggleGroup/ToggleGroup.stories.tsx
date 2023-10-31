import {
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiBold,
  FiItalic,
  FiUnderline,
} from "react-icons/fi/index.js";

import { Toggle, ToggleGroup } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleGroup>;

/**
 * By default, only one toggle can be selected at a time.
 */
export const Default: Story = {
  args: {
    defaultValue: ["left"],
    children: (
      <>
        <Toggle value="left" aria-label="Align Left">
          <FiAlignLeft />
        </Toggle>

        <Toggle value="center" aria-label="Align Center">
          <FiAlignCenter />
        </Toggle>

        <Toggle value="right" aria-label="Align Right">
          <FiAlignRight />
        </Toggle>

        <Toggle value="justify" aria-label="Align Justify">
          <FiAlignJustify />
        </Toggle>
      </>
    ),
  },
};

/**
 * Multiple toggles can be selected at a time by enabling the `multiple` prop.
 */
export const MultipleSelectable: Story = {
  args: {
    multiple: true,
    children: (
      <>
        <Toggle value="bold" aria-label="Toggle Bold">
          <FiBold />
        </Toggle>

        <Toggle value="italic" aria-label="Toggle Italic">
          <FiItalic />
        </Toggle>

        <Toggle value="underline" aria-label="Toggle Underline">
          <FiUnderline />
        </Toggle>
      </>
    ),
  },
};

export default meta;
