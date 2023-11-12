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

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: [33],
    markerValues: [25, 50, 75],
    label: "Slider",
  },
};

/**
 * Slider with multiple thumbs to represent a range.
 */
// TODO bake into `Slider` component
export const RangeSlider: Story = {
  args: {
    ...Default.args,
  },
  render: () => (
    <SliderRoot {...Default.args} defaultValue={[33, 66]}>
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

export default meta;
