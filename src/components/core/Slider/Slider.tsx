import { Slider as ArkSlider } from "@ark-ui/react/slider";

import { slider } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(slider);

export const SliderRoot = withProvider(ArkSlider.Root, "root");
export interface SliderRootProps extends ComponentProps<typeof SliderRoot> {}

export const SliderControl = withContext(ArkSlider.Control, "control");
export interface SliderControlProps
  extends ComponentProps<typeof SliderControl> {}

export const SliderLabel = withContext(ArkSlider.Label, "label");
export interface SliderLabelProps extends ComponentProps<typeof SliderLabel> {}

export const SliderMarker = withContext(ArkSlider.Marker, "marker");
export interface SliderMarkerProps
  extends ComponentProps<typeof SliderMarker> {}

export const SliderMarkerGroup = withContext(
  ArkSlider.MarkerGroup,
  "markerGroup",
);
export interface SliderMarkerGroupProps
  extends ComponentProps<typeof SliderMarkerGroup> {}

export const SliderRange = withContext(ArkSlider.Range, "range");
export interface SliderRangeProps extends ComponentProps<typeof SliderRange> {}

export const SliderThumb = withContext(ArkSlider.Thumb, "thumb");
export interface SliderThumbProps extends ComponentProps<typeof SliderThumb> {}

export const SliderTrack = withContext(ArkSlider.Track, "track");
export interface SliderTrackProps extends ComponentProps<typeof SliderTrack> {}

// TODO use in prebuilt `Slider` component
export const SliderValueText = withContext(ArkSlider.ValueText, "valueText");
export interface SliderValueTextProps
  extends ComponentProps<typeof SliderValueText> {}

export interface SliderProps extends SliderRootProps {
  /** Track values to mark. */
  markerValues: number[];
  /** Label to represent the slider. */
  label?: string;
}

/**
 * Track slider with a single thumb for selecting a scalar value in a range.
 */
const Slider = ({ markerValues, label, ...rest }: SliderProps) => (
  <SliderRoot {...rest}>
    {label && <SliderLabel>{label}</SliderLabel>}

    <SliderControl>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>

      <SliderThumb index={0} />
    </SliderControl>

    <SliderMarkerGroup>
      {markerValues.map((value) => (
        <SliderMarker key={value} value={value}>
          {value}
        </SliderMarker>
      ))}
    </SliderMarkerGroup>
  </SliderRoot>
);

export default Slider;
