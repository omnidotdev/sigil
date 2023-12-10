import { Editable as ArkEditable } from "@ark-ui/react/editable";

import Button from "components/core/Button/Button";
import Label from "components/core/Label/Label";
import { styled } from "generated/panda/jsx";
import { editable } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";

const { withProvider, withContext } = createStyleContext(editable);

export const EditableRoot = withProvider(styled(ArkEditable.Root), "root");
export interface EditableRootProps
  extends HTMLStyledProps<typeof EditableRoot> {}

export const EditableArea = withContext(styled(ArkEditable.Area), "area");
export interface EditableAreaProps
  extends HTMLStyledProps<typeof EditableArea> {}

export const EditableCancelTrigger = withContext(
  styled(ArkEditable.CancelTrigger),
  "cancelTrigger",
);
export interface EditableCancelTriggerProps
  extends HTMLStyledProps<typeof EditableCancelTrigger> {}

export const EditableControl = withContext(
  styled(ArkEditable.Control),
  "control",
);
export interface EditableControlProps
  extends HTMLStyledProps<typeof EditableControl> {}

export const EditableEditTrigger = withContext(
  styled(ArkEditable.EditTrigger),
  "editTrigger",
);
export interface EditableEditTriggerProps
  extends HTMLStyledProps<typeof EditableEditTrigger> {}

export const EditableInput = withContext(styled(ArkEditable.Input), "input");
export interface EditableInputProps
  extends HTMLStyledProps<typeof EditableInput> {}

export const EditableLabel = withContext(styled(ArkEditable.Label), "label");
export interface EditableLabelProps
  extends HTMLStyledProps<typeof EditableLabel> {}

export const EditablePreview = withContext(
  styled(ArkEditable.Preview),
  "preview",
);
export interface EditablePreviewProps
  extends HTMLStyledProps<typeof EditablePreview> {}

export const EditableSubmitTrigger = withContext(
  styled(ArkEditable.SubmitTrigger),
  "submitTrigger",
);
export interface EditableSubmitTriggerProps
  extends HTMLStyledProps<typeof EditableSubmitTrigger> {}

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
