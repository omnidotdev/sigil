import { RangeSlider as ArkRangeSlider } from "@ark-ui/react/range-slider";

import { styled } from "generated/panda/jsx";
import {
  rangeSlider,
  type RangeSliderVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { RangeSliderProps as ArkRangeSliderProps } from "@ark-ui/react/range-slider";

const { withProvider, withContext } = createStyleContext(rangeSlider);

export interface RangeSliderProps
  extends ArkRangeSliderProps,
    RangeSliderVariantProps {
  /** Track values to mark. */
  markerValues: number[];
}

export const RangeSliderRoot = withProvider(
  styled(ArkRangeSlider.Root),
  "root",
);

export const RangeSliderControl = withContext(
  styled(ArkRangeSlider.Control),
  "control",
);

export const RangeSliderLabel = withContext(
  styled(ArkRangeSlider.Label),
  "label",
);

export const RangeSliderMarker = withContext(
  styled(ArkRangeSlider.Marker),
  "marker",
);

export const RangeSliderMarkerGroup = withContext(
  styled(ArkRangeSlider.MarkerGroup),
  "markerGroup",
);

export const RangeSliderOutput = withContext(
  styled(ArkRangeSlider.Output),
  "output",
);

export const RangeSliderRange = withContext(
  styled(ArkRangeSlider.Range),
  "range",
);

export const RangeSliderThumb = withContext(
  styled(ArkRangeSlider.Thumb),
  "thumb",
);

export const RangeSliderTrack = withContext(
  styled(ArkRangeSlider.Track),
  "track",
);

/**
 * Range track slider with two thumbs forming a constrained range between two scalars.
 */
const RangeSlider = ({ markerValues, ...rest }: RangeSliderProps) => (
  <RangeSliderRoot {...rest}>
    <RangeSliderControl>
      <RangeSliderTrack>
        <RangeSliderRange />
      </RangeSliderTrack>
      {[0, 1].map((i) => (
        <RangeSliderThumb key={i} index={i} />
      ))}
    </RangeSliderControl>

    <RangeSliderMarkerGroup>
      {markerValues.map((value) => (
        <RangeSliderMarker key={value} value={value}>
          {value}
        </RangeSliderMarker>
      ))}
    </RangeSliderMarkerGroup>
  </RangeSliderRoot>
);

export default RangeSlider;
