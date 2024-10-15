import { Slider as ArkSlider } from "@ark-ui/react/slider";

import { styled } from "generated/panda/jsx";
import { slider } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { SliderVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(slider);

export const SliderContext = ArkSlider.Context;
export interface SliderContextProps
  extends AssignJSXStyleProps<ArkSlider.ContextProps> {}

export const SliderRoot = withProvider(styled(ArkSlider.Root), "root");
export interface SliderRootProps
  extends AssignJSXStyleProps<ArkSlider.RootProps>,
    SliderVariantProps {}

export const SliderControl = withContext(styled(ArkSlider.Control), "control");
export interface SliderControlProps
  extends AssignJSXStyleProps<ArkSlider.ControlProps> {}

export const SliderLabel = withContext(styled(ArkSlider.Label), "label");
export interface SliderLabelProps
  extends AssignJSXStyleProps<ArkSlider.LabelProps> {}

export const SliderMarker = withContext(styled(ArkSlider.Marker), "marker");
export interface SliderMarkerProps
  extends AssignJSXStyleProps<ArkSlider.MarkerProps> {}

export const SliderMarkerGroup = withContext(
  styled(ArkSlider.MarkerGroup),
  "markerGroup",
);
export interface SliderMarkerGroupProps
  extends AssignJSXStyleProps<ArkSlider.MarkerGroupProps> {}

export const SliderRange = withContext(styled(ArkSlider.Range), "range");
export interface SliderRangeProps
  extends AssignJSXStyleProps<ArkSlider.RangeProps> {}

export const SliderThumb = withContext(styled(ArkSlider.Thumb), "thumb");
export interface SliderThumbProps
  extends AssignJSXStyleProps<ArkSlider.ThumbProps> {}

export const SliderTrack = withContext(styled(ArkSlider.Track), "track");
export interface SliderTrackProps
  extends AssignJSXStyleProps<ArkSlider.TrackProps> {}

// TODO use in prebuilt `Slider` component
export const SliderValueText = withContext(
  styled(ArkSlider.ValueText),
  "valueText",
);
export interface SliderValueTextProps
  extends AssignJSXStyleProps<ArkSlider.ValueTextProps> {}

export const SliderHiddenInput = ArkSlider.HiddenInput;
export interface SliderHiddenInputProps
  extends AssignJSXStyleProps<ArkSlider.HiddenInputProps> {}

export interface SliderProps extends SliderRootProps {
  /** Track values to mark. */
  markerValues: number[];
  /** Label to represent the slider. */
  label?: ReactNode;
  /** Slider label props. */
  labelProps?: SliderLabelProps;
  /** Slider control props. */
  controlProps?: SliderControlProps;
  /** Slider track props. */
  trackProps?: SliderTrackProps;
  /** Slider range props. */
  rangeProps?: SliderRangeProps;
  /** Slider thumb props. */
  thumbProps?: SliderThumbProps;
  /** Slider marker group props. */
  markerGroupProps?: SliderMarkerGroupProps;
  /** Slider marker props. */
  markerProps?: SliderMarkerProps;
  /** Slider hidden input props. */
  hiddenInputProps?: SliderHiddenInputProps;
}

/**
 * Track slider with a single thumb for selecting a scalar value in a range.
 */
const Slider = ({
  markerValues,
  label,
  labelProps,
  controlProps,
  trackProps,
  rangeProps,
  thumbProps,
  markerGroupProps,
  markerProps,
  hiddenInputProps,
  ...rest
}: SliderProps) => (
  <SliderRoot {...rest}>
    {label && <SliderLabel {...labelProps}>{label}</SliderLabel>}

    <SliderControl {...controlProps}>
      <SliderTrack {...trackProps}>
        <SliderRange {...rangeProps} />
      </SliderTrack>

      <SliderContext>
        {({ value }) =>
          value.map((_val, idx) => (
            <SliderThumb key={idx} index={idx} {...thumbProps}>
              <SliderHiddenInput {...hiddenInputProps} />
            </SliderThumb>
          ))
        }
      </SliderContext>
    </SliderControl>

    <SliderMarkerGroup {...markerGroupProps}>
      {markerValues.map((value) => (
        <SliderMarker key={value} value={value} {...markerProps}>
          {value}
        </SliderMarker>
      ))}
    </SliderMarkerGroup>
  </SliderRoot>
);

export default Slider;
