import { FileUpload as ArkFileUpload } from "@ark-ui/react/file-upload";
import { FaRegTrashAlt } from "react-icons/fa";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import {
  fileUpload,
  type FileUploadVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  FileUploadProps as ArkFileUploadProps,
  FileUploadDropzoneProps as ArkFileUploadDropzoneProps,
  FileUploadItemGroupProps as ArkFileUploadItemGroupProps,
  FileUploadItemProps as ArkFileUploadItemProps,
  FileUploadItemPreviewProps as ArkFileUploadItemPreviewProps,
  FileUploadItemNameProps as ArkFileUploadItemNameProps,
  FileUploadItemSizeTextProps as ArkFileUploadItemSizeTextProps,
  FileUploadItemDeleteTriggerProps as ArkFileUploadItemDeleteTriggerProps,
} from "@ark-ui/react/file-upload";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(fileUpload);

export interface FileUploadProps
  extends ArkFileUploadProps,
    FileUploadVariantProps {
  /** Label for the file upload dropzone. */
  label?: ReactNode;
  /** File upload dialog trigger. */
  dialogTrigger?: ReactNode;
  /** Props for the file upload dropzone. */
  dropzoneProps?: ArkFileUploadDropzoneProps;
  /** Props for the file upload item group. */
  itemGroupProps?: ArkFileUploadItemGroupProps;
  /** Props for the file upload item. */
  itemProps?: ArkFileUploadItemProps;
  /** Props for the file upload item preview. */
  itemPreviewProps?: ArkFileUploadItemPreviewProps;
  /** Props for the file upload item name. */
  itemNameProps?: ArkFileUploadItemNameProps;
  /** Props for the file upload item size text. */
  itemSizeTextProps?: ArkFileUploadItemSizeTextProps;
  /** Props for the file upload item delete trigger. */
  itemDeleteTriggerProps?: ArkFileUploadItemDeleteTriggerProps;
}

const FileUploadRoot = withProvider(styled(ArkFileUpload.Root), "root");

const FileUploadTrigger = withContext(styled(ArkFileUpload.Trigger), "trigger");

const FileUploadDropzone = withContext(
  styled(ArkFileUpload.Dropzone),
  "dropzone",
);

const FileUploadItem = withContext(styled(ArkFileUpload.Item), "item");

const FileUploadItemDeleteTrigger = withContext(
  styled(ArkFileUpload.ItemDeleteTrigger),
  "itemDeleteTrigger",
);

const FileUploadItemGroup = withContext(
  styled(ArkFileUpload.ItemGroup),
  "itemGroup",
);

const FileUploadItemName = withContext(
  styled(ArkFileUpload.ItemName),
  "itemName",
);

const FileUploadItemPreview = withContext(
  styled(ArkFileUpload.ItemPreview),
  "itemPreview",
);

const FileUploadItemSizeText = withContext(
  styled(ArkFileUpload.ItemSizeText),
  "itemSizeText",
);

const FileUploadLabel = withContext(styled(ArkFileUpload.Label), "label");

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
      {(files) =>
        files.map((file, id) => (
          <FileUploadItem key={id} file={file} {...itemProps}>
            <FileUploadItemPreview {...itemPreviewProps} />

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
    </FileUploadItemGroup>
  </FileUploadRoot>
);

export default FileUpload;
