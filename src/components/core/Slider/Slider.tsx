import { Slider as ArkSlider } from "@ark-ui/react/slider";

import { styled } from "generated/panda/jsx";
import { slider } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(slider);

export const SliderContext = ArkSlider.Context;
export interface SliderContextProps
  extends Assign<JsxStyleProps, ArkSlider.ContextProps> {}

export const SliderRoot = withProvider(styled(ArkSlider.Root), "root");
export interface SliderRootProps
  extends Assign<JsxStyleProps, ArkSlider.RootProps> {}

export const SliderControl = withContext(styled(ArkSlider.Control), "control");
export interface SliderControlProps
  extends Assign<JsxStyleProps, ArkSlider.ControlProps> {}

export const SliderLabel = withContext(styled(ArkSlider.Label), "label");
export interface SliderLabelProps
  extends Assign<JsxStyleProps, ArkSlider.LabelProps> {}

export const SliderMarker = withContext(styled(ArkSlider.Marker), "marker");
export interface SliderMarkerProps
  extends Assign<JsxStyleProps, ArkSlider.MarkerProps> {}

export const SliderMarkerGroup = withContext(
  styled(ArkSlider.MarkerGroup),
  "markerGroup",
);
export interface SliderMarkerGroupProps
  extends Assign<JsxStyleProps, ArkSlider.MarkerGroupProps> {}

export const SliderRange = withContext(styled(ArkSlider.Range), "range");
export interface SliderRangeProps
  extends Assign<JsxStyleProps, ArkSlider.RangeProps> {}

export const SliderThumb = withContext(styled(ArkSlider.Thumb), "thumb");
export interface SliderThumbProps
  extends Assign<JsxStyleProps, ArkSlider.ThumbProps> {}

export const SliderTrack = withContext(styled(ArkSlider.Track), "track");
export interface SliderTrackProps
  extends Assign<JsxStyleProps, ArkSlider.TrackProps> {}

// TODO use in prebuilt `Slider` component
export const SliderValueText = withContext(
  styled(ArkSlider.ValueText),
  "valueText",
);
export interface SliderValueTextProps
  extends Assign<JsxStyleProps, ArkSlider.ValueTextProps> {}

export interface SliderProps extends SliderRootProps {
  /** Track values to mark. */
  markerValues: number[];
  /** Label to represent the slider. */
  label?: ReactNode;
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

      <SliderContext>
        {({ value }) =>
          value.map((_val, idx) => <SliderThumb key={idx} index={idx} />)
        }
      </SliderContext>
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
