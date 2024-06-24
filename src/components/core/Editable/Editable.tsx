import { Editable as ArkEditable } from "@ark-ui/react/editable";

import Button from "components/core/Button/Button";
import Label from "components/core/Label/Label";
import { styled } from "generated/panda/jsx";
import { editable } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(editable);

export const EditableContext = ArkEditable.Context;
export interface EditableContextProps
  extends Assign<JsxStyleProps, ArkEditable.ContextProps> {}

export const EditableRoot = withProvider(styled(ArkEditable.Root), "root");
export interface EditableRootProps
  extends Assign<JsxStyleProps, ArkEditable.RootProps> {}

export const EditableArea = withContext(styled(ArkEditable.Area), "area");
export interface EditableAreaProps
  extends Assign<JsxStyleProps, ArkEditable.AreaProps> {}

export const EditableCancelTrigger = withContext(
  styled(ArkEditable.CancelTrigger),
  "cancelTrigger",
);
export interface EditableCancelTriggerProps
  extends Assign<JsxStyleProps, ArkEditable.CancelTriggerProps> {}

export const EditableControl = withContext(
  styled(ArkEditable.Control),
  "control",
);
export interface EditableControlProps
  extends Assign<JsxStyleProps, ArkEditable.ControlProps> {}

export const EditableEditTrigger = withContext(
  styled(ArkEditable.EditTrigger),
  "editTrigger",
);
export interface EditableEditTriggerProps
  extends Assign<JsxStyleProps, ArkEditable.EditTriggerProps> {}

export const EditableInput = withContext(styled(ArkEditable.Input), "input");
export interface EditableInputProps
  extends Assign<JsxStyleProps, ArkEditable.InputProps> {}

export const EditableLabel = withContext(styled(ArkEditable.Label), "label");
export interface EditableLabelProps
  extends Assign<JsxStyleProps, ArkEditable.LabelProps> {}

export const EditablePreview = withContext(
  styled(ArkEditable.Preview),
  "preview",
);
export interface EditablePreviewProps
  extends Assign<JsxStyleProps, ArkEditable.PreviewProps> {}

export const EditableSubmitTrigger = withContext(
  styled(ArkEditable.SubmitTrigger),
  "submitTrigger",
);
export interface EditableSubmitTriggerProps
  extends Assign<JsxStyleProps, ArkEditable.SubmitTriggerProps> {}

export interface EditableProps extends EditableRootProps {
  /** Editable field label. */
  label?: ReactNode;
}

/**
 * Editable field.
 */
const Editable = ({ label, ...rest }: EditableProps) => (
  <EditableRoot {...rest}>
    {label && (
      <EditableLabel asChild>
        <Label>{label}</Label>
      </EditableLabel>
    )}

    <EditableArea>
      <EditableInput />
      <EditablePreview />
    </EditableArea>

    <EditableControl>
      <EditableContext>
        {({ editing }) =>
          editing ? (
            <>
              <EditableSubmitTrigger asChild>
                <Button variant="link">Save</Button>
              </EditableSubmitTrigger>
              <EditableCancelTrigger asChild>
                <Button variant="link">Cancel</Button>
              </EditableCancelTrigger>
            </>
          ) : (
            <EditableEditTrigger asChild>
              <Button variant="link">Edit</Button>
            </EditableEditTrigger>
          )
        }
      </EditableContext>
    </EditableControl>
  </EditableRoot>
);

export default Editable;
