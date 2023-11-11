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

export const SegmentGroupItem = withContext(
  styled(ArkSegmentGroup.Item),
  "item",
);

export const SegmentGroupItemText = withContext(
  styled(ArkSegmentGroup.ItemText),
  "itemText",
);

export const SegmentGroupItemControl = withContext(
  styled(ArkSegmentGroup.ItemControl),
  "itemControl",
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
      <SegmentGroupItem key={value} value={value} disabled={isDisabled}>
        <SegmentGroupItemControl />

        <SegmentGroupLabel>{label}</SegmentGroupLabel>
      </SegmentGroupItem>
    ))}
    <SegmentGroupIndicator />
  </SegmentGroupRoot>
);

export default SegmentGroup;
