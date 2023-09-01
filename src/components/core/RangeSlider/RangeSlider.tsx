import * as Ark from "@ark-ui/react/range-slider";

import { styled } from "generated/panda/jsx";
import {
  rangeSlider,
  type RangeSliderVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

const { withProvider, withContext } = createStyleContext(rangeSlider);

export interface RangeSliderProps
  extends Ark.RangeSliderProps,
    RangeSliderVariantProps {
  /** Track values to mark. */
  markerValues: number[];
}

export const RangeSliderRoot = withProvider(
  styled(Ark.RangeSlider.Root),
  "root",
);

export const RangeSliderControl = withContext(
  styled(Ark.RangeSlider.Control),
  "control",
);

export const RangeSliderLabel = withContext(
  styled(Ark.RangeSlider.Label),
  "label",
);

export const RangeSliderMarker = withContext(
  styled(Ark.RangeSlider.Marker),
  "marker",
);

export const RangeSliderMarkerGroup = withContext(
  styled(Ark.RangeSlider.MarkerGroup),
  "markerGroup",
);

export const RangeSliderOutput = withContext(
  styled(Ark.RangeSlider.Output),
  "output",
);

export const RangeSliderRange = withContext(
  styled(Ark.RangeSlider.Range),
  "range",
);

export const RangeSliderThumb = withContext(
  styled(Ark.RangeSlider.Thumb),
  "thumb",
);

export const RangeSliderTrack = withContext(
  styled(Ark.RangeSlider.Track),
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
