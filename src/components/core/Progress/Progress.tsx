import { Progress as ArkProgress } from "@ark-ui/react/progress";

import { styled } from "generated/panda/jsx";
import { progress, type ProgressVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(progress);

export const ProgressRoot = withProvider(styled(ArkProgress.Root), "root");
export interface ProgressRootProps
  extends Assign<JsxStyleProps, ArkProgress.RootProps> {}

export const ProgressLabel = withContext(styled(ArkProgress.Label), "label");
export interface ProgressLabelProps
  extends Assign<JsxStyleProps, ArkProgress.LabelProps> {}

export const ProgressTrack = withContext(styled(ArkProgress.Track), "track");
export interface ProgressTrackProps
  extends Assign<JsxStyleProps, ArkProgress.TrackProps> {}

export const ProgressRange = withContext(styled(ArkProgress.Range), "range");
export interface ProgressRangeProps
  extends Assign<JsxStyleProps, ArkProgress.RangeProps> {}

export const ProgressCircle = withContext(styled(ArkProgress.Circle), "circle");
export interface ProgressCircleProps
  extends Assign<JsxStyleProps, ArkProgress.CircleProps> {}

export const ProgressCircleTrack = withContext(
  styled(ArkProgress.CircleTrack),
  "circleTrack",
);
export interface ProgressCircleTrackProps
  extends Assign<JsxStyleProps, ArkProgress.CircleTrackProps> {}

export const ProgressCircleRange = withContext(
  styled(ArkProgress.CircleRange),
  "circleRange",
);
export interface ProgressCircleRangeProps
  extends Assign<JsxStyleProps, ArkProgress.CircleRangeProps> {}

export const ProgressValueText = withContext(
  styled(ArkProgress.ValueText),
  "valueText",
);
export interface ProgressValueTextProps
  extends Assign<JsxStyleProps, ArkProgress.ValueTextProps> {}

export interface ProgressProps extends ProgressVariantProps, ProgressRootProps {
  /** Label to display alongside the progress indicator. */
  label?: ReactNode;
  /**
   * Type of indicator to render.
   * @default linear
   */
  type?: "linear" | "circular";
  progressText?: ReactNode;
}

/**
 * Progress indicator. Useful for displaying determinate or indeterminate progress, such as loading or processing states.
 */
const Progress = ({
  label,
  value,
  defaultValue,
  progressText,
  type = "linear",
  ...rest
}: ProgressProps) => (
  <ProgressRoot defaultValue={defaultValue} value={value} {...rest}>
    {label && <ProgressLabel>{label}</ProgressLabel>}

    {type === "linear" && (
      <ProgressTrack>
        <ProgressRange />
      </ProgressTrack>
    )}

    {type === "circular" && (
      <ProgressCircle>
        <ProgressCircleTrack />
        <ProgressCircleRange />
        <ProgressValueText />
      </ProgressCircle>
    )}

    <ProgressValueText>
      {progressText || `${defaultValue || value}%`}
    </ProgressValueText>
  </ProgressRoot>
);

export default Progress;
