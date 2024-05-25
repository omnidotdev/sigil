import { Progress as ArkProgress } from "@ark-ui/react/progress";

import { progress, type ProgressVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ReactNode, ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(progress);

export const ProgressRoot = withProvider(ArkProgress.Root, "root");
export interface ProgressRootProps
  extends ComponentProps<typeof ProgressRoot> {}

export const ProgressLabel = withContext(ArkProgress.Label, "label");
export interface ProgressLabelProps
  extends ComponentProps<typeof ProgressLabel> {}

export const ProgressTrack = withContext(ArkProgress.Track, "track");
export interface ProgressTrackProps
  extends ComponentProps<typeof ProgressTrack> {}

export const ProgressRange = withContext(ArkProgress.Range, "range");
export interface ProgressRangeProps
  extends ComponentProps<typeof ProgressRange> {}

export const ProgressCircle = withContext(ArkProgress.Circle, "circle");
export interface ProgressCircleProps
  extends ComponentProps<typeof ProgressCircle> {}

export const ProgressCircleTrack = withContext(
  ArkProgress.CircleTrack,
  "circleTrack",
);
export interface ProgressCircleTrackProps
  extends ComponentProps<typeof ProgressCircleTrack> {}

export const ProgressCircleRange = withContext(
  ArkProgress.CircleRange,
  "circleRange",
);
export interface ProgressCircleRangeProps
  extends ComponentProps<typeof ProgressCircleRange> {}

export const ProgressValueText = withContext(
  ArkProgress.ValueText,
  "valueText",
);
export interface ProgressValueTextProps
  extends ComponentProps<typeof ProgressValueText> {}

export interface ProgressProps
  extends ProgressVariantProps,
    ComponentProps<typeof ProgressRoot> {
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
