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
  args: {
    width: "fit-content",
  },
} satisfies Meta<typeof ToggleGroup>;

/**
 * By default, only one toggle can be selected at a time.
 */
export const Default: Story = {
  args: {
    defaultValue: ["left"],
    children: (
      <>
        <ToggleGroupItem value="left" aria-label="Align left">
          <FiAlignLeft />
        </ToggleGroupItem>

        <ToggleGroupItem value="center" aria-label="Align center">
          <FiAlignCenter />
        </ToggleGroupItem>

        <ToggleGroupItem value="right" aria-label="Align right">
          <FiAlignRight />
        </ToggleGroupItem>

        <ToggleGroupItem value="justify" aria-label="Align justify">
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
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FiBold />
        </ToggleGroupItem>

        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FiItalic />
        </ToggleGroupItem>

        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <FiUnderline />
        </ToggleGroupItem>
      </>
    ),
  },
};

export default meta;
