import { Editable as ArkEditable } from "@ark-ui/react/editable";

import Button from "components/core/Button/Button";
import Label from "components/core/Label/Label";
import { styled } from "generated/panda/jsx";
import { editable, type EditableVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { EditableProps as ArkEditableProps } from "@ark-ui/react/editable";
import type {} from "@zag-js/editable";

const { withProvider, withContext } = createStyleContext(editable);

export interface EditableProps
  extends Omit<ArkEditableProps, "children">,
    EditableVariantProps {
  /** Editable field label. */
  label: string;
}

export const EditableRoot = withProvider(styled(ArkEditable.Root), "root");

export const EditableArea = withContext(styled(ArkEditable.Area), "area");

export const EditableCancelTrigger = withContext(
  styled(ArkEditable.CancelTrigger),
  "cancelTrigger",
);

export const EditableControl = withContext(
  styled(ArkEditable.Control),
  "control",
);

export const EditableEditTrigger = withContext(
  styled(ArkEditable.EditTrigger),
  "editTrigger",
);

export const EditableInput = withContext(styled(ArkEditable.Input), "input");

export const EditableLabel = withContext(styled(ArkEditable.Label), "label");

export const EditablePreview = withContext(
  styled(ArkEditable.Preview),
  "preview",
);

export const EditableSubmitTrigger = withContext(
  styled(ArkEditable.SubmitTrigger),
  "submitTrigger",
);

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
