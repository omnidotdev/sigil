import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import { FaCheck, FaMinus } from "react-icons/fa6";

import Icon from "../Icon/Icon";
import { styled } from "generated/panda/jsx";
import { checkbox } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { IconProps } from "components/core";
import type { Assign, JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(checkbox);

export const CheckboxRoot = withProvider(styled(ArkCheckbox.Root), "root");
export interface CheckboxRootProps
  extends Assign<JsxStyleProps, ArkCheckbox.RootProps> {}

export const CheckboxControl = withContext(
  styled(ArkCheckbox.Control),
  "control",
);
export interface CheckboxControlProps
  extends Assign<JsxStyleProps, ArkCheckbox.ControlProps> {}

const CheckboxIndicator = withContext(
  styled(ArkCheckbox.Indicator),
  "indicator",
);
export interface CheckboxIndicatorProps
  extends Assign<JsxStyleProps, ArkCheckbox.IndicatorProps> {}

export const CheckboxLabel = withContext(styled(ArkCheckbox.Label), "label");
export interface CheckboxLabelProps
  extends Assign<JsxStyleProps, ArkCheckbox.LabelProps> {}

export const CheckboxHiddenInput = ArkCheckbox.HiddenInput;
export interface CheckboxHiddenInputProps
  extends Assign<JsxStyleProps, ArkCheckbox.HiddenInputProps> {}

export interface CheckboxProps extends CheckboxRootProps {
  /** Checkbox label. */
  label?: ReactNode;
  controlProps?: CheckboxControlProps;
  indicatorProps?: CheckboxIndicatorProps;
  iconProps?: IconProps;
  labelProps?: CheckboxLabelProps;
  hiddenInputProps?: CheckboxHiddenInputProps;
}

const baseIconProps: Partial<IconProps> = {
  size: "sm",
  // allow clicking through icon
  pointerEvents: "none!",
};

/**
 * Interactive checkbox.
 */
const Checkbox = ({
  label,
  controlProps,
  indicatorProps,
  iconProps,
  labelProps,
  hiddenInputProps,
  ...rest
}: CheckboxProps) => (
  <CheckboxRoot {...rest}>
    <CheckboxControl {...controlProps}>
      <CheckboxIndicator asChild {...indicatorProps}>
        <Icon src={FaCheck} {...baseIconProps} {...iconProps} />
      </CheckboxIndicator>

      <CheckboxIndicator asChild indeterminate {...indicatorProps}>
        <Icon src={FaMinus} {...baseIconProps} {...iconProps} />
      </CheckboxIndicator>
    </CheckboxControl>

    {label && <CheckboxLabel {...labelProps}>{label}</CheckboxLabel>}

    <CheckboxHiddenInput {...hiddenInputProps} />
  </CheckboxRoot>
);

export default Checkbox;
