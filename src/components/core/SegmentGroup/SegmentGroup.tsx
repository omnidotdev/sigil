import * as Ark from "@ark-ui/react/segment-group";

import { styled } from "generated/panda/jsx";
import {
  segmentGroup,
  type SegmentGroupVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

const { withProvider, withContext } = createStyleContext(segmentGroup);

export interface SegmentGroupProps
  extends Ark.SegmentGroupProps,
    SegmentGroupVariantProps {
  /** Segment group options. */
  options: {
    /** User-readable label. */
    label: string;
    /** Serializable value. */
    value: string;
  }[];
}

export const SegmentGroupRoot = withProvider(
  styled(Ark.SegmentGroup.Root),
  "root",
);

export const SegmentGroupLabel = withContext(
  styled(Ark.SegmentGroup.Label),
  "label",
);

export const SegmentGroupIndicator = withContext(
  styled(Ark.SegmentGroup.Indicator),
  "indicator",
);

export const Segment = withContext(styled(Ark.SegmentGroup.Segment), "radio");

export const SegmentLabel = withContext(
  styled(Ark.SegmentGroup.SegmentLabel),
  "radioLabel",
);

export const SegmentControl = withContext(
  styled(Ark.SegmentGroup.SegmentControl),
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
    {options.map(({ label, value }) => (
      <Segment key={value} value={value}>
        <SegmentControl />

        <SegmentLabel>{label}</SegmentLabel>
      </Segment>
    ))}
    <SegmentGroupIndicator />
  </SegmentGroupRoot>
);

export default SegmentGroup;
