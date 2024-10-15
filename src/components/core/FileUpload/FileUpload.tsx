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
import type { FileUploadVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(fileUpload);

export const FileUploadContext = ArkFileUpload.Context;
export interface FileUploadContextProps
  extends AssignJSXStyleProps<ArkFileUpload.ContextProps> {}

export const FileUploadRoot = withProvider(styled(ArkFileUpload.Root), "root");
export interface FileUploadRootProps
  extends AssignJSXStyleProps<ArkFileUpload.RootProps>,
    FileUploadVariantProps {}

export const FileUploadTrigger = withContext(
  styled(ArkFileUpload.Trigger),
  "trigger",
);
export interface FileUploadTriggerProps
  extends AssignJSXStyleProps<ArkFileUpload.TriggerProps> {}

// TODO use in prebuilt `FileUpload` component
export const FileUploadClearTrigger = withContext(
  styled(ArkFileUpload.ClearTrigger),
  "clearTrigger",
);
export interface FileUploadClearTriggerProps
  extends AssignJSXStyleProps<ArkFileUpload.ClearTriggerProps> {}

export const FileUploadDropzone = withContext(
  styled(ArkFileUpload.Dropzone),
  "dropzone",
);
export interface FileUploadDropzoneProps
  extends AssignJSXStyleProps<ArkFileUpload.DropzoneProps> {}

export const FileUploadItem = withContext(styled(ArkFileUpload.Item), "item");
export interface FileUploadItemProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemProps> {}

export const FileUploadItemDeleteTrigger = withContext(
  styled(ArkFileUpload.ItemDeleteTrigger),
  "itemDeleteTrigger",
);
export interface FileUploadItemDeleteTriggerProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemDeleteTriggerProps> {}

export const FileUploadItemGroup = withContext(
  styled(ArkFileUpload.ItemGroup),
  "itemGroup",
);
export interface FileUploadItemGroupProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemGroupProps> {}

export const FileUploadItemName = withContext(
  styled(ArkFileUpload.ItemName),
  "itemName",
);
export interface FileUploadItemNameProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemNameProps> {}

export const FileUploadItemPreview = withContext(
  styled(ArkFileUpload.ItemPreview),
  "itemPreview",
);
export interface FileUploadItemPreviewProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemPreviewProps> {}

export const FileUploadItemPreviewImage = withContext(
  styled(ArkFileUpload.ItemPreviewImage),
  "itemPreviewImage",
);
export interface FileUploadItemPreviewImageProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemPreviewImageProps> {}

export const FileUploadItemSizeText = withContext(
  styled(ArkFileUpload.ItemSizeText),
  "itemSizeText",
);
export interface FileUploadItemSizeTextProps
  extends AssignJSXStyleProps<ArkFileUpload.ItemSizeTextProps> {}

export const FileUploadLabel = withContext(
  styled(ArkFileUpload.Label),
  "label",
);
export interface FileUploadLabelProps
  extends AssignJSXStyleProps<ArkFileUpload.LabelProps> {}

export const FileUploadHiddenInput = ArkFileUpload.HiddenInput;
export interface FileUploadHiddenInputProps
  extends AssignJSXStyleProps<ArkFileUpload.HiddenInputProps> {}

export interface FileUploadProps extends FileUploadRootProps {
  /** Label for the file upload dropzone. */
  label?: ReactNode;
  /** Dialog trigger. */
  dialogTrigger?: ReactNode;
  /** Dropzone props. */
  dropzoneProps?: ArkFileUploadDropzoneProps;
  /** Item group props. */
  itemGroupProps?: ArkFileUploadItemGroupProps;
  /** Item props. */
  itemProps?: ArkFileUploadItemProps;
  /** Item preview props. */
  itemPreviewProps?: ArkFileUploadItemPreviewProps;
  /** Item preview image props. */
  itemPreviewImageProps?: ArkFileUploadItemPreviewImageProps;
  /** Item name props. */
  itemNameProps?: ArkFileUploadItemNameProps;
  /** Item size text props. */
  itemSizeTextProps?: ArkFileUploadItemSizeTextProps;
  /** Item delete trigger props. */
  itemDeleteTriggerProps?: ArkFileUploadItemDeleteTriggerProps;
  /** Hidden input props. */
  hiddenInputProps?: FileUploadHiddenInputProps;
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
  hiddenInputProps,
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
                <Button variant="ghost" size="sm">
                  <FaRegTrashAlt />
                </Button>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>

    <FileUploadHiddenInput {...hiddenInputProps} />
  </FileUploadRoot>
);

export default FileUpload;
