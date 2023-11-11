import { Slider as ArkSlider } from "@ark-ui/react/slider";

import { styled } from "generated/panda/jsx";
import { slider, type SliderVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { SliderProps as ArkSliderProps } from "@ark-ui/react/slider";

const { withProvider, withContext } = createStyleContext(slider);

export interface SliderProps extends ArkSliderProps, SliderVariantProps {
  /** Track values to mark. */
  markerValues: number[];
  /** Label to represent the slider. */
  label?: string;
}

export const SliderRoot = withProvider(styled(ArkSlider.Root), "root");

export const SliderControl = withContext(styled(ArkSlider.Control), "control");

export const SliderLabel = withContext(styled(ArkSlider.Label), "label");

export const SliderMarker = withContext(styled(ArkSlider.Marker), "marker");

export const SliderMarkerGroup = withContext(
  styled(ArkSlider.MarkerGroup),
  "markerGroup",
);

export const SliderRange = withContext(styled(ArkSlider.Range), "range");

export const SliderThumb = withContext(styled(ArkSlider.Thumb), "thumb");

export const SliderTrack = withContext(styled(ArkSlider.Track), "track");

// TODO use
export const SliderValueText = withContext(
  styled(ArkSlider.ValueText),
  "valueText",
);

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
