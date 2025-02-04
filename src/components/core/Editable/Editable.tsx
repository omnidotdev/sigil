import { Editable as ArkEditable } from "@ark-ui/react/editable";

import { Button } from "components/core/Button/Button";
import { Label } from "components/core/Label/Label";
import { styled } from "generated/panda/jsx";
import { editable } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { EditableVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(editable);

export const EditableContext = ArkEditable.Context;
export interface EditableContextProps
  extends AssignJSXStyleProps<ArkEditable.ContextProps> {}

export const EditableRoot = withProvider(styled(ArkEditable.Root), "root");
export interface EditableRootProps
  extends AssignJSXStyleProps<ArkEditable.RootProps>,
    EditableVariantProps {}

export const EditableArea = withContext(styled(ArkEditable.Area), "area");
export interface EditableAreaProps
  extends AssignJSXStyleProps<ArkEditable.AreaProps> {}

export const EditableCancelTrigger = withContext(
  styled(ArkEditable.CancelTrigger),
  "cancelTrigger",
);
export interface EditableCancelTriggerProps
  extends AssignJSXStyleProps<ArkEditable.CancelTriggerProps> {}

export const EditableControl = withContext(
  styled(ArkEditable.Control),
  "control",
);
export interface EditableControlProps
  extends AssignJSXStyleProps<ArkEditable.ControlProps> {}

export const EditableEditTrigger = withContext(
  styled(ArkEditable.EditTrigger),
  "editTrigger",
);
export interface EditableEditTriggerProps
  extends AssignJSXStyleProps<ArkEditable.EditTriggerProps> {}

export const EditableInput = withContext(styled(ArkEditable.Input), "input");
export interface EditableInputProps
  extends AssignJSXStyleProps<ArkEditable.InputProps> {}

export const EditableLabel = withContext(styled(ArkEditable.Label), "label");
export interface EditableLabelProps
  extends AssignJSXStyleProps<ArkEditable.LabelProps> {}

export const EditablePreview = withContext(
  styled(ArkEditable.Preview),
  "preview",
);
export interface EditablePreviewProps
  extends AssignJSXStyleProps<ArkEditable.PreviewProps> {}

export const EditableSubmitTrigger = withContext(
  styled(ArkEditable.SubmitTrigger),
  "submitTrigger",
);
export interface EditableSubmitTriggerProps
  extends AssignJSXStyleProps<ArkEditable.SubmitTriggerProps> {}

export interface EditableProps extends EditableRootProps {
  /** Editable field label. */
  label?: ReactNode;
}

/**
 * Editable field.
 */
export const Editable = ({ label, ...rest }: EditableProps) => (
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
                <Button variant="ghost">Save</Button>
              </EditableSubmitTrigger>
              <EditableCancelTrigger asChild>
                <Button variant="ghost">Cancel</Button>
              </EditableCancelTrigger>
            </>
          ) : (
            <EditableEditTrigger asChild>
              <Button variant="ghost">Edit</Button>
            </EditableEditTrigger>
          )
        }
      </EditableContext>
    </EditableControl>
  </EditableRoot>
);
