import * as Ark from "@ark-ui/react/editable";

import Button from "components/core/Button/Button";
import Label from "components/core/Label/Label";
import { styled } from "generated/panda/jsx";
import { editable, type EditableVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

const { withProvider, withContext } = createStyleContext(editable);

export interface EditableProps
  extends Omit<Ark.EditableProps, "children">,
    EditableVariantProps {
  /** Editable field label. */
  label: string;
}

export const EditableRoot = withProvider(styled(Ark.Editable.Root), "root");

export const EditableArea = withContext(styled(Ark.Editable.Area), "area");

export const EditableCancelTrigger = withContext(
  styled(Ark.Editable.CancelTrigger),
  "cancelTrigger",
);

export const EditableControl = withContext(
  styled(Ark.Editable.Control),
  "control",
);

export const EditableEditTrigger = withContext(
  styled(Ark.Editable.EditTrigger),
  "editTrigger",
);

export const EditableInput = withContext(styled(Ark.Editable.Input), "input");

export const EditableLabel = withContext(styled(Ark.Editable.Label), "label");

export const EditablePreview = withContext(
  styled(Ark.Editable.Preview),
  "preview",
);

export const EditableSubmitTrigger = withContext(
  styled(Ark.Editable.SubmitTrigger),
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
