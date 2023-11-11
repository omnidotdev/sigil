import {
  Slider,
  SliderControl,
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

export const RangeSlider: Story = {
  ...Default,
  render: () => (
    <SliderRoot>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>

        <SliderThumb index={0} />
      </SliderControl>

      {/* <SliderMarkerGroup>
        {markerValues.map((value) => (
          <SliderMarker key={value} value={value}>
            {value}
          </SliderMarker>
        ))}
      </SliderMarkerGroup> */}
    </SliderRoot>
  ),
};

export default meta;
