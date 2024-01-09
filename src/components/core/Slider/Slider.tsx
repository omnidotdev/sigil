import { Slider as ArkSlider } from "@ark-ui/react/slider";

import { styled } from "generated/panda/jsx";
import { slider } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";

const { withProvider, withContext } = createStyleContext(slider);

export const SliderRoot = withProvider(styled(ArkSlider.Root), "root");
export interface SliderRootProps extends HTMLStyledProps<typeof SliderRoot> {}

export const SliderControl = withContext(styled(ArkSlider.Control), "control");
export interface SliderControlProps
  extends HTMLStyledProps<typeof SliderControl> {}

export const SliderLabel = withContext(styled(ArkSlider.Label), "label");
export interface SliderLabelProps extends HTMLStyledProps<typeof SliderLabel> {}

export const SliderMarker = withContext(styled(ArkSlider.Marker), "marker");
export interface SliderMarkerProps
  extends HTMLStyledProps<typeof SliderMarker> {}

export const SliderMarkerGroup = withContext(
  styled(ArkSlider.MarkerGroup),
  "markerGroup",
);
export interface SliderMarkerGroupProps
  extends HTMLStyledProps<typeof SliderMarkerGroup> {}

export const SliderRange = withContext(styled(ArkSlider.Range), "range");
export interface SliderRangeProps extends HTMLStyledProps<typeof SliderRange> {}

export const SliderThumb = withContext(styled(ArkSlider.Thumb), "thumb");
export interface SliderThumbProps extends HTMLStyledProps<typeof SliderThumb> {}

export const SliderTrack = withContext(styled(ArkSlider.Track), "track");
export interface SliderTrackProps extends HTMLStyledProps<typeof SliderTrack> {}

// TODO use in prebuilt `Slider` component
export const SliderValueText = withContext(
  styled(ArkSlider.ValueText),
  "valueText",
);
export interface SliderValueTextProps
  extends HTMLStyledProps<typeof SliderValueText> {}

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
