import { FileUpload as ArkFileUpload } from "@ark-ui/react/file-upload";
import { FaRegTrashAlt } from "react-icons/fa";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { fileUpload } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  FileUploadDropzoneProps as ArkFileUploadDropzoneProps,
  FileUploadItemDeleteTriggerProps as ArkFileUploadItemDeleteTriggerProps,
  FileUploadItemGroupProps as ArkFileUploadItemGroupProps,
  FileUploadItemNameProps as ArkFileUploadItemNameProps,
  FileUploadItemPreviewImageProps as ArkFileUploadItemPreviewImageProps,
  FileUploadItemPreviewProps as ArkFileUploadItemPreviewProps,
  FileUploadItemProps as ArkFileUploadItemProps,
  FileUploadItemSizeTextProps as ArkFileUploadItemSizeTextProps,
} from "@ark-ui/react/file-upload";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(fileUpload);

export const FileUploadContext = ArkFileUpload.Context;
export interface FileUploadContextProps
  extends AssignJSXStyleProps<ArkFileUpload.ContextProps> {}

const FileUploadRoot = withProvider(styled(ArkFileUpload.Root), "root");
export interface FileUploadRootProps
  extends AssignJSXStyleProps<ArkFileUpload.RootProps> {}

const FileUploadTrigger = withContext(styled(ArkFileUpload.Trigger), "trigger");
export interface FileUploadTriggerProps
  extends AssignJSXStyleProps<ArkFileUpload.TriggerProps> {}

const FileUploadDropzone = withContext(
  styled(ArkFileUpload.Dropzone),
  "dropzone",
);
export interface FileUploadDropzoneProps
  extends AssignJSXStyleProps<ArkFileUpload.DropzoneProps> {}

const FileUploadItem = withContext(styled(ArkFileUpload.Item), "item");
export interface FileUploadItemProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemProps> {}

const FileUploadItemDeleteTrigger = withContext(
  styled(ArkFileUpload.ItemDeleteTrigger),
  "itemDeleteTrigger",
);
export interface FileUploadItemDeleteTriggerProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemDeleteTriggerProps> {}

const FileUploadItemGroup = withContext(
  styled(ArkFileUpload.ItemGroup),
  "itemGroup",
);
export interface FileUploadItemGroupProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemGroupProps> {}

const FileUploadItemName = withContext(
  styled(ArkFileUpload.ItemName),
  "itemName",
);
export interface FileUploadItemNameProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemNameProps> {}

const FileUploadItemPreview = withContext(
  styled(ArkFileUpload.ItemPreview),
  "itemPreview",
);
export interface FileUploadItemPreviewProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemPreviewProps> {}

const FileUploadItemPreviewImage = withContext(
  styled(ArkFileUpload.ItemPreviewImage),
  "itemPreviewImage",
);
export interface FileUploadItemPreviewImageProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemPreviewImageProps> {}

const FileUploadItemSizeText = withContext(
  styled(ArkFileUpload.ItemSizeText),
  "itemSizeText",
);
export interface FileUploadItemSizeTextProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemSizeTextProps> {}

const FileUploadLabel = withContext(styled(ArkFileUpload.Label), "label");
export interface FileUploadLabelProps
  extends AssignJSXStyleProps<ArkFileUpload.LabelProps> {}

const FileUploadHiddenInput = ArkFileUpload.HiddenInput;
export interface FileUploadHiddenInputProps
  extends AssignJSXStyleProps<ArkFileUpload.HiddenInputProps> {}

export interface FileUploadProps extends FileUploadRootProps {
  /** Label for the file upload dropzone. */
  label?: ReactNode;
  /** File upload dialog trigger. */
  dialogTrigger?: ReactNode;
  /** File upload dropzone props. */
  dropzoneProps?: ArkFileUploadDropzoneProps;
  /** File upload item group props. */
  itemGroupProps?: ArkFileUploadItemGroupProps;
  /** File upload item props. */
  itemProps?: ArkFileUploadItemProps;
  /** File upload item preview props. */
  itemPreviewProps?: ArkFileUploadItemPreviewProps;
  /** File upload item preview image props. */
  itemPreviewImageProps?: ArkFileUploadItemPreviewImageProps;
  /** File upload item name props. */
  itemNameProps?: ArkFileUploadItemNameProps;
  /** File upload item size text props. */
  itemSizeTextProps?: ArkFileUploadItemSizeTextProps;
  /** File upload item delete trigger props. */
  itemDeleteTriggerProps?: ArkFileUploadItemDeleteTriggerProps;
}

/**
 * File upload dropzone.
 */
const FileUpload = ({
  label,
  dialogTrigger,
  dropzoneProps,
  itemGroupProps,
  itemProps,
  itemPreviewProps,
  itemPreviewImageProps,
  itemNameProps,
  itemSizeTextProps,
  itemDeleteTriggerProps,
  ...rest
}: FileUploadProps) => (
  <FileUploadRoot {...rest}>
    <FileUploadDropzone {...dropzoneProps}>
      {label && <FileUploadLabel>{label}</FileUploadLabel>}

      {dialogTrigger && (
        <FileUploadTrigger asChild>{dialogTrigger}</FileUploadTrigger>
      )}
    </FileUploadDropzone>

    <FileUploadItemGroup {...itemGroupProps}>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file, id) => (
            <FileUploadItem key={id} file={file} {...itemProps}>
              <FileUploadItemPreview {...itemPreviewProps}>
                <FileUploadItemPreviewImage {...itemPreviewImageProps} />
              </FileUploadItemPreview>

              <FileUploadItemName {...itemNameProps} />

              <FileUploadItemSizeText {...itemSizeTextProps} />

              <FileUploadItemDeleteTrigger asChild {...itemDeleteTriggerProps}>
                <Button variant="link" size="sm">
                  <FaRegTrashAlt />
                </Button>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>

    <FileUploadHiddenInput />
  </FileUploadRoot>
);

export default FileUpload;
