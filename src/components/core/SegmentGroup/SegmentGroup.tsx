import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group";

import { segmentGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(segmentGroup);

// TODO deprecate in favor of tabs

export const SegmentGroupRoot = withProvider(ArkSegmentGroup.Root, "root");
export interface SegmentGroupRootProps
  extends ComponentProps<typeof SegmentGroupRoot> {}

// TODO use in prebuilt `SegmentGroup` component
export const SegmentGroupLabel = withContext(ArkSegmentGroup.Label, "label");
export interface SegmentGroupLabelProps
  extends ComponentProps<typeof SegmentGroupLabel> {}

export const SegmentGroupIndicator = withContext(
  ArkSegmentGroup.Indicator,
  "indicator",
);
export interface SegmentGroupIndicatorProps
  extends ComponentProps<typeof SegmentGroupIndicator> {}

export const SegmentGroupItem = withContext(ArkSegmentGroup.Item, "item");
export interface SegmentGroupItemProps
  extends ComponentProps<typeof SegmentGroupItem> {}

export const SegmentGroupItemText = withContext(
  ArkSegmentGroup.ItemText,
  "itemText",
);
export interface SegmentGroupItemTextProps
  extends ComponentProps<typeof SegmentGroupItemText> {}

export const SegmentGroupItemControl = withContext(
  ArkSegmentGroup.ItemControl,
  "itemControl",
);
export interface SegmentGroupItemControlProps
  extends ComponentProps<typeof SegmentGroupItemControl> {}

export interface SegmentGroupProps extends SegmentGroupRootProps {
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

        <SegmentGroupItemText>{label}</SegmentGroupItemText>
      </SegmentGroupItem>
    ))}
    <SegmentGroupIndicator />
  </SegmentGroupRoot>
);

export default SegmentGroup;
