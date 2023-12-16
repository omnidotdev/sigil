import { Button, FileUpload } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
} satisfies Meta<typeof FileUpload>;

/**
 * By default, a single file can be uploaded.
 */
export const Default: Story = {
  args: {
    label: "Drop a file here!",
    dialogTrigger: <Button size="sm">Choose a file...</Button>,
    itemPreviewProps: {
      type: "image/*",
    },
  },
};

/**
 * The label and dialog trigger text are optional. Clicking anywhere in the dropzone will open the file dialog.
 */
export const BlankDropzone: Story = {
  args: {
    ...Default.args,
    label: undefined,
    dialogTrigger: undefined,
  },
};

/**
 * A maximum amount of files can be specified with the `maxFiles` prop.
 */
export const MaxFiles: Story = {
  args: {
    ...Default.args,
    label: "Drop files here! (max 3)",
    maxFiles: 3,
  },
};

export default meta;
