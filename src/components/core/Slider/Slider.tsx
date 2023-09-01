import * as Ark from "@ark-ui/react/slider";

import { styled } from "generated/panda/jsx";
import { slider, type SliderVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

const { withProvider, withContext } = createStyleContext(slider);

export interface SliderProps extends Ark.SliderProps, SliderVariantProps {
  /** Track values to mark. */
  markerValues: number[];
}

export const SliderRoot = withProvider(styled(Ark.Slider.Root), "root");

export const SliderControl = withContext(styled(Ark.Slider.Control), "control");

export const SliderLabel = withContext(styled(Ark.Slider.Label), "label");

export const SliderMarker = withContext(styled(Ark.Slider.Marker), "marker");

export const SliderMarkerGroup = withContext(
  styled(Ark.Slider.MarkerGroup),
  "markerGroup",
);

export const SliderOutput = withContext(styled(Ark.Slider.Output), "output");

export const SliderRange = withContext(styled(Ark.Slider.Range), "range");

export const SliderThumb = withContext(styled(Ark.Slider.Thumb), "thumb");

export const SliderTrack = withContext(styled(Ark.Slider.Track), "track");

/**
 * Track slider with a single thumb for selecting a scalar value in a range.
 */
const Slider = ({ markerValues, ...rest }: SliderProps) => (
  <SliderRoot {...rest}>
    <SliderControl>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>

      <SliderThumb />
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
