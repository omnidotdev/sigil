import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group";

import { styled } from "generated/panda/jsx";
import { segmentGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { SegmentGroupVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";

const { withProvider, withContext } = createStyleContext(segmentGroup);

// TODO deprecate in favor of tabs

export const SegmentGroupRoot = withProvider(
  styled(ArkSegmentGroup.Root),
  "root",
);
export interface SegmentGroupRootProps
  extends AssignJSXStyleProps<ArkSegmentGroup.RootProps>,
    SegmentGroupVariantProps {}

// TODO use in prebuilt `SegmentGroup` component
export const SegmentGroupLabel = withContext(
  styled(ArkSegmentGroup.Label),
  "label",
);
export interface SegmentGroupLabelProps
  extends AssignJSXStyleProps<ArkSegmentGroup.LabelProps> {}

export const SegmentGroupIndicator = withContext(
  styled(ArkSegmentGroup.Indicator),
  "indicator",
);
export interface SegmentGroupIndicatorProps
  extends AssignJSXStyleProps<ArkSegmentGroup.IndicatorProps> {}

export const SegmentGroupItem = withContext(
  styled(ArkSegmentGroup.Item),
  "item",
);
export interface SegmentGroupItemProps
  extends AssignJSXStyleProps<ArkSegmentGroup.ItemProps> {}

export const SegmentGroupItemText = withContext(
  styled(ArkSegmentGroup.ItemText),
  "itemText",
);
export interface SegmentGroupItemTextProps
  extends AssignJSXStyleProps<ArkSegmentGroup.ItemTextProps> {}

export const SegmentGroupItemControl = withContext(
  styled(ArkSegmentGroup.ItemControl),
  "itemControl",
);
export interface SegmentGroupItemControlProps
  extends AssignJSXStyleProps<ArkSegmentGroup.ItemControlProps> {}

export const SegmentGroupItemHiddenInput = ArkSegmentGroup.ItemHiddenInput;
export interface SegmentGroupItemHiddenInputProps
  extends AssignJSXStyleProps<ArkSegmentGroup.ItemHiddenInputProps> {}

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
  /** Item props. */
  itemProps?: SegmentGroupItemProps;
  /** Item control props. */
  itemControlProps?: SegmentGroupItemControlProps;
  /** Item text props. */
  itemTextProps?: SegmentGroupItemTextProps;
  /** Item hidden input props. */
  itemHiddenInputProps?: SegmentGroupItemHiddenInputProps;
  /** Indicator props. */
  indicatorProps?: SegmentGroupIndicatorProps;
}

/**
 * Segment group.
 */
export const SegmentGroup = ({
  options,
  itemProps,
  itemControlProps,
  itemTextProps,
  itemHiddenInputProps,
  indicatorProps,
  ...rest
}: SegmentGroupProps) => (
  <SegmentGroupRoot
    orientation="vertical"
    defaultValue={options[0].value}
    {...rest}
  >
    {options.map(({ label, value, isDisabled }) => (
      <SegmentGroupItem
        key={value}
        value={value}
        disabled={isDisabled}
        {...itemProps}
      >
        <SegmentGroupItemControl {...itemControlProps} />

        <SegmentGroupItemText {...itemTextProps}>{label}</SegmentGroupItemText>

        <SegmentGroupItemHiddenInput {...itemHiddenInputProps} />
      </SegmentGroupItem>
    ))}

    <SegmentGroupIndicator {...indicatorProps} />
  </SegmentGroupRoot>
);
