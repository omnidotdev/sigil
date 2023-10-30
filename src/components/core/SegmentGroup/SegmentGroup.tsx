import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group";

import { styled } from "generated/panda/jsx";
import {
  segmentGroup,
  type SegmentGroupVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { SegmentGroupProps as ArkSegmentGroupProps } from "@ark-ui/react/segment-group";

const { withProvider, withContext } = createStyleContext(segmentGroup);

export interface SegmentGroupProps
  extends ArkSegmentGroupProps,
    SegmentGroupVariantProps {
  /** Segment group options. */
  options: {
    /** User-readable label. */
    label: string;
    /** Serializable value. */
    value: string;
    /** Whether option is disabled. */
    isDisabled?: boolean;
  }[];
}

export const SegmentGroupRoot = withProvider(
  styled(ArkSegmentGroup.Root),
  "root",
);

export const SegmentGroupLabel = withContext(
  styled(ArkSegmentGroup.Label),
  "label",
);

export const SegmentGroupIndicator = withContext(
  styled(ArkSegmentGroup.Indicator),
  "indicator",
);

export const Segment = withContext(styled(ArkSegmentGroup.Segment), "radio");

export const SegmentLabel = withContext(
  styled(ArkSegmentGroup.SegmentLabel),
  "radioLabel",
);

export const SegmentControl = withContext(
  styled(ArkSegmentGroup.SegmentControl),
  "radioControl",
);

/**
 * Segment group.
 */
const SegmentGroup = ({ options, ...rest }: SegmentGroupProps) => (
  <SegmentGroupRoot
    orientation="vertical"
    defaultValue={options[0].value}
    {...rest}
  >
    {options.map(({ label, value, isDisabled }) => (
      <Segment key={value} value={value} disabled={isDisabled}>
        <SegmentControl />

        <SegmentLabel>{label}</SegmentLabel>
      </Segment>
    ))}
    <SegmentGroupIndicator />
  </SegmentGroupRoot>
);

export default SegmentGroup;
