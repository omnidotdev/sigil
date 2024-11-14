import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "components";

import type { Meta, StoryObj } from "@storybook/react";
import type { SliderProps } from "components";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta;

const baseArgs: SliderProps = {
  min: 0,
  max: 100,
  defaultValue: [33],
  label: "Slider",
};

export const Default: Story = {
  args: {
    ...baseArgs,
    markerValues: [25, 50, 75],
  },
};

/**
 * Slider with multiple thumbs to represent a range.
 */
// TODO bake into `Slider` component
export const RangeSlider: Story = {
  args: baseArgs,
  render: () => (
    <SliderRoot {...baseArgs} defaultValue={[33, 66]}>
      <SliderLabel>Range Slider Label</SliderLabel>

      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {[33, 66].map((_, idx) => (
          <SliderThumb key={idx} index={idx} />
        ))}
      </SliderControl>
    </SliderRoot>
  ),
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...Default.args,
    colorPalette: "bronze",
  },
};

export default meta;
