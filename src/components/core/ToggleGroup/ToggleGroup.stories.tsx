import {
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiBold,
  FiItalic,
  FiUnderline,
} from "react-icons/fi/index.js";

import { ToggleGroupItem, ToggleGroup } from "components";

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
        <ToggleGroupItem value="left" aria-label="Align Left">
          <FiAlignLeft />
        </ToggleGroupItem>

        <ToggleGroupItem value="center" aria-label="Align Center">
          <FiAlignCenter />
        </ToggleGroupItem>

        <ToggleGroupItem value="right" aria-label="Align Right">
          <FiAlignRight />
        </ToggleGroupItem>

        <ToggleGroupItem value="justify" aria-label="Align Justify">
          <FiAlignJustify />
        </ToggleGroupItem>
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
        <ToggleGroupItem value="bold" aria-label="Toggle Bold">
          <FiBold />
        </ToggleGroupItem>

        <ToggleGroupItem value="italic" aria-label="Toggle Italic">
          <FiItalic />
        </ToggleGroupItem>

        <ToggleGroupItem value="underline" aria-label="Toggle Underline">
          <FiUnderline />
        </ToggleGroupItem>
      </>
    ),
  },
};

export default meta;
