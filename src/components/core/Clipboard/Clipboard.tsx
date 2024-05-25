import { Clipboard as ArkClipboard } from "@ark-ui/react";
import {
  FaClipboardCheck as CopiedIcon,
  FaClipboardList as ClipboardIcon,
} from "react-icons/fa";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { clipboard } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(clipboard);

export const ClipboardRoot = withProvider(ArkClipboard.Root, "root");
export interface ClipboardRootProps
  extends ComponentProps<typeof ClipboardRoot> {}

export const ClipboardControl = withContext(ArkClipboard.Control, "control");
export interface ClipboardControlProps
  extends ComponentProps<typeof ClipboardControl> {}

export const ClipboardIndicator = withContext(
  ArkClipboard.Indicator,
  "indicator",
);
export interface ClipboardIndicatorProps
  extends ComponentProps<typeof ClipboardIndicator> {}

export const ClipboardInput = withContext(ArkClipboard.Input, "input");
export interface ClipboardInputProps
  extends ComponentProps<typeof ClipboardInput> {}

export const ClipboardLabel = withContext(ArkClipboard.Label, "label");
export interface ClipboardLabelProps
  extends ComponentProps<typeof ClipboardLabel> {}

export const ClipboardTrigger = withContext(ArkClipboard.Trigger, "trigger");
export interface ClipboardTriggerProps
  extends ComponentProps<typeof ClipboardTrigger> {}

export interface ClipboardProps extends ClipboardRootProps {
  /** Label for the clipboard content. */
  label?: ReactNode;
  /** Control props. */
  controlProps?: ClipboardControlProps;
  /** Input props. */
  inputProps?: ClipboardInputProps;
  /** Trigger props. */
  triggerProps?: ClipboardTriggerProps;
  /** Indicator props. */
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
