import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group";

import { styled } from "generated/panda/jsx";
import { segmentGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";

const { withProvider, withContext } = createStyleContext(segmentGroup);

export const SegmentGroupRoot = withProvider(
  styled(ArkSegmentGroup.Root),
  "root",
);
export interface SegmentGroupRootProps
  extends HTMLStyledProps<typeof SegmentGroupRoot> {}

// TODO use in prebuilt `SegmentGroup` component
export const SegmentGroupLabel = withContext(
  styled(ArkSegmentGroup.Label),
  "label",
);
export interface SegmentGroupLabelProps
  extends HTMLStyledProps<typeof SegmentGroupLabel> {}

export const SegmentGroupIndicator = withContext(
  styled(ArkSegmentGroup.Indicator),
  "indicator",
);
export interface SegmentGroupIndicatorProps
  extends HTMLStyledProps<typeof SegmentGroupIndicator> {}

export const SegmentGroupItem = withContext(
  styled(ArkSegmentGroup.Item),
  "item",
);
export interface SegmentGroupItemProps
  extends HTMLStyledProps<typeof SegmentGroupItem> {}

export const SegmentGroupItemText = withContext(
  styled(ArkSegmentGroup.ItemText),
  "itemText",
);
export interface SegmentGroupItemTextProps
  extends HTMLStyledProps<typeof SegmentGroupItemText> {}

export const SegmentGroupItemControl = withContext(
  styled(ArkSegmentGroup.ItemControl),
  "itemControl",
);
export interface SegmentGroupItemControlProps
  extends HTMLStyledProps<typeof SegmentGroupItemControl> {}

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
