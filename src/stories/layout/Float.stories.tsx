import { Code } from "components";
import { Box, Float, type FloatProps } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

// NB: most placements are commented out to minimize noise in the stories.
const placements = [
  "top-start",
  // "top",
  "top-end",
  // "bottom-start",
  // "bottom",
  // "bottom-end",
  // "left-start",
  // "left",
  // "left-end",
  // "right-start",
  // "right",
  // "right-end",
] as FloatProps["placement"][];

const containerProps = {
  w: "512px",
  h: "128px",
  bgColor: "green",
  pos: "relative",
};

/**
 * Float (anchor) an element to a particular location within a container.
 *
 * ⚠️ **Requires parent with `position: relative`.**
 */
const meta = {
  title: "Components/Layout/Float",
  component: Float,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  render: () => (
    <Box {...containerProps}>
      {placements.map((placement) => (
        <Float key={placement as string} placement={placement} pos="absolute">
          <Code>{placement as string}</Code>
        </Float>
      ))}
    </Box>
  ),
};

/**
 * `offset` can be specified to offset the element from the anchor. `offsetX` and `offsetY` are also available for the x- and y-axis respectively.
 */
export const WithOffset: Story = {
  render: () => (
    <Box {...containerProps}>
      {placements.map((placement) => (
        <Float key={placement as string} placement={placement} offset="40px">
          <Code>{placement as string}</Code>
        </Float>
      ))}
    </Box>
  ),
};

export default meta;
