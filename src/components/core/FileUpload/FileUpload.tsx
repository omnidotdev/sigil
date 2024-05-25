import { FileUpload as ArkFileUpload } from "@ark-ui/react/file-upload";
import { FaRegTrashAlt } from "react-icons/fa";

import Button from "components/core/Button/Button";
import { fileUpload } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  FileUploadDropzoneProps as ArkFileUploadDropzoneProps,
  FileUploadItemGroupProps as ArkFileUploadItemGroupProps,
  FileUploadItemProps as ArkFileUploadItemProps,
  FileUploadItemPreviewProps as ArkFileUploadItemPreviewProps,
  FileUploadItemPreviewImageProps as ArkFileUploadItemPreviewImageProps,
  FileUploadItemNameProps as ArkFileUploadItemNameProps,
  FileUploadItemSizeTextProps as ArkFileUploadItemSizeTextProps,
  FileUploadItemDeleteTriggerProps as ArkFileUploadItemDeleteTriggerProps,
} from "@ark-ui/react/file-upload";
import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(fileUpload);

const FileUploadRoot = withProvider(ArkFileUpload.Root, "root");
export interface FileUploadRootProps
  extends ComponentProps<typeof FileUploadRoot> {}

const FileUploadTrigger = withContext(ArkFileUpload.Trigger, "trigger");
export interface FileUploadTriggerProps
  extends ComponentProps<typeof FileUploadTrigger> {}

const FileUploadDropzone = withContext(ArkFileUpload.Dropzone, "dropzone");
export interface FileUploadDropzoneProps
  extends ComponentProps<typeof FileUploadDropzone> {}

const FileUploadItem = withContext(ArkFileUpload.Item, "item");
export interface FileUploadItemProps
  extends ComponentProps<typeof FileUploadItem> {}

const FileUploadItemDeleteTrigger = withContext(
  ArkFileUpload.ItemDeleteTrigger,
  "itemDeleteTrigger",
);
export interface FileUploadItemDeleteTriggerProps
  extends ComponentProps<typeof FileUploadItemDeleteTrigger> {}

const FileUploadItemGroup = withContext(ArkFileUpload.ItemGroup, "itemGroup");
export interface FileUploadItemGroupProps
  extends ComponentProps<typeof FileUploadItemGroup> {}

const FileUploadItemName = withContext(ArkFileUpload.ItemName, "itemName");
export interface FileUploadItemNameProps
  extends ComponentProps<typeof FileUploadItemName> {}

const FileUploadItemPreview = withContext(
  ArkFileUpload.ItemPreview,
  "itemPreview",
);
export interface FileUploadItemPreviewProps
  extends ComponentProps<typeof FileUploadItemPreview> {}

const FileUploadItemPreviewImage = withContext(
  ArkFileUpload.ItemPreviewImage,
  "itemPreviewImage",
);
export interface FileUploadItemPreviewImageProps
  extends ComponentProps<typeof FileUploadItemPreviewImage> {}

const FileUploadItemSizeText = withContext(
  ArkFileUpload.ItemSizeText,
  "itemSizeText",
);
export interface FileUploadItemSizeTextProps
  extends ComponentProps<typeof FileUploadItemSizeText> {}

const FileUploadLabel = withContext(ArkFileUpload.Label, "label");
export interface FileUploadLabelProps
  extends ComponentProps<typeof FileUploadLabel> {}

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
      {(files) =>
        files.map((file, id) => (
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
    </FileUploadItemGroup>
  </FileUploadRoot>
);

export default FileUpload;
