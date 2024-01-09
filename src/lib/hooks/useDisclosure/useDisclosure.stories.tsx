import { Button, Dialog } from "components/core";
import { Text } from "components/typography";
import { useDisclosure } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentType } from "react";

type Story = StoryObj<typeof useDisclosure>;

// TODO add story with controlled state (options passed to hook)

const UseDisclosureDemo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Dialog
        title="Modal Title"
        description="Modal Description"
        open={isOpen}
        onOpenChange={({ open }) => (open ? onOpen() : onClose())}
      >
        <Text mt={2}>{isOpen ? "Open" : "Closed"}</Text>
      </Dialog>
    </>
  );
};

export const Default: Story = {
  render: () => <UseDisclosureDemo />,
};

// NB: type annotation resolves type portability error
const meta: Meta = {
  title: "Hooks/useDisclosure",
  tags: ["autodocs"],
  // NB: type coercion here to allow `useDisclosure` Storybook metadata to render (e.g. JSDoc, hook parameters)
  component: useDisclosure as unknown as ComponentType,
} satisfies Meta<typeof useDisclosure>;

export default meta;
