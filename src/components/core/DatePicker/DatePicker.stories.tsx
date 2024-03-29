import { DatePicker } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta;

/**
 * Select a single date.
 */
export const Default: Story = {};

/**
 * Select a range of dates.
 */
export const Range: Story = {
  args: {
    selectionMode: "range",
    triggerProps: {
      px: 0,
    },
  },
};

export const CustomStartOfWeek: Story = {
  args: {
    startOfWeek: 1,
  },
};

// TODO support `multiple` mode
/**
 * Select multiple dates.
 */
// export const Multiple: Story = {
//   args: {
//     selectionMode: "multiple",
//   },
// };

export default meta;
