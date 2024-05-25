import { Editable as ArkEditable } from "@ark-ui/react/editable";

import Button from "components/core/Button/Button";
import Label from "components/core/Label/Label";
import { editable } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(editable);

export const EditableRoot = withProvider(ArkEditable.Root, "root");
export interface EditableRootProps
  extends ComponentProps<typeof EditableRoot> {}

export const EditableArea = withContext(ArkEditable.Area, "area");
export interface EditableAreaProps
  extends ComponentProps<typeof EditableArea> {}

export const EditableCancelTrigger = withContext(
  ArkEditable.CancelTrigger,
  "cancelTrigger",
);
export interface EditableCancelTriggerProps
  extends ComponentProps<typeof EditableCancelTrigger> {}

export const EditableControl = withContext(ArkEditable.Control, "control");
export interface EditableControlProps
  extends ComponentProps<typeof EditableControl> {}

export const EditableEditTrigger = withContext(
  ArkEditable.EditTrigger,
  "editTrigger",
);
export interface EditableEditTriggerProps
  extends ComponentProps<typeof EditableEditTrigger> {}

export const EditableInput = withContext(ArkEditable.Input, "input");
export interface EditableInputProps
  extends ComponentProps<typeof EditableInput> {}

export const EditableLabel = withContext(ArkEditable.Label, "label");
export interface EditableLabelProps
  extends ComponentProps<typeof EditableLabel> {}

export const EditablePreview = withContext(ArkEditable.Preview, "preview");
export interface EditablePreviewProps
  extends ComponentProps<typeof EditablePreview> {}

export const EditableSubmitTrigger = withContext(
  ArkEditable.SubmitTrigger,
  "submitTrigger",
);
export interface EditableSubmitTriggerProps
  extends ComponentProps<typeof EditableSubmitTrigger> {}

export interface EditableProps extends EditableRootProps {
  /** Editable field label. */
  label: string;
}

/**
 * Editable field.
 */
const Editable = ({ label, ...rest }: EditableProps) => (
  <EditableRoot {...rest}>
    {(ctx) => (
      <>
        <EditableLabel asChild>
          <Label>{label}</Label>
        </EditableLabel>

        <EditableArea>
          <EditableInput />
          <EditablePreview />
        </EditableArea>

        <EditableControl>
          {ctx.isEditing ? (
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
          )}
        </EditableControl>
      </>
    )}
  </EditableRoot>
);

export default Editable;
