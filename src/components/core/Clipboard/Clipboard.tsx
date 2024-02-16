import { Clipboard as ArkClipboard } from "@ark-ui/react";
import {
  FaClipboardCheck as CopiedIcon,
  FaClipboardList as ClipboardIcon,
} from "react-icons/fa";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { styled } from "generated/panda/jsx";
import { clipboard } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(clipboard);

export const ClipboardRoot = withProvider(styled(ArkClipboard.Root), "root");
export interface ClipboardRootProps
  extends ComponentProps<typeof ClipboardRoot> {}

export const ClipboardControl = withContext(
  styled(ArkClipboard.Control),
  "control",
);
export interface ClipboardControlProps
  extends ComponentProps<typeof ClipboardControl> {}

export const ClipboardIndicator = withContext(
  styled(ArkClipboard.Indicator),
  "indicator",
);
export interface ClipboardIndicatorProps
  extends ComponentProps<typeof ClipboardIndicator> {}

export const ClipboardInput = withContext(styled(ArkClipboard.Input), "input");
export interface ClipboardInputProps
  extends ComponentProps<typeof ClipboardInput> {}

export const ClipboardLabel = withContext(styled(ArkClipboard.Label), "label");
export interface ClipboardLabelProps
  extends ComponentProps<typeof ClipboardLabel> {}

export const ClipboardTrigger = withContext(
  styled(ArkClipboard.Trigger),
  "trigger",
);
export interface ClipboardTriggerProps
  extends ComponentProps<typeof ClipboardTrigger> {}

export interface ClipboardProps extends ClipboardRootProps {
  /** Label for the clipboard content. */
  label?: ReactNode;
  controlProps?: ClipboardControlProps;
  inputProps?: ClipboardInputProps;
  triggerProps?: ClipboardTriggerProps;
  indicatorProps?: ClipboardIndicatorProps;
}

/**
 * Copy text to clipboard.
 */
const Clipboard = ({
  label,
  controlProps,
  inputProps,
  triggerProps,
  indicatorProps,
  ...rest
}: ClipboardProps) => (
  <ClipboardRoot {...rest}>
    {label && (
      <ClipboardLabel asChild>
        <Label>{label}</Label>
      </ClipboardLabel>
    )}

    <ClipboardControl {...controlProps}>
      <ClipboardInput asChild {...inputProps}>
        <Input />
      </ClipboardInput>

      <ClipboardTrigger asChild {...triggerProps}>
        <Button variant="outline">
          <ClipboardIndicator copied={<CopiedIcon />} {...indicatorProps}>
            <Icon src={ClipboardIcon} />
          </ClipboardIndicator>
        </Button>
      </ClipboardTrigger>
    </ClipboardControl>
  </ClipboardRoot>
);

export default Clipboard;
