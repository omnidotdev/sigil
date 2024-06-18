import { Button, Toaster } from "components";
import { HStack } from "generated/panda/jsx";
import { createToaster } from "index";

import type { Meta, StoryObj } from "@storybook/react";
import type { CreateToasterProps } from "index";

type Story = StoryObj<typeof meta>;

const defaultToasterConfig: CreateToasterProps = {
  placement: "bottom-end",
  gap: 16,
};

const toaster = createToaster(defaultToasterConfig);

const overlappingToaster = createToaster({
  ...defaultToasterConfig,
  overlap: true,
});

// TODO only display one story on docs page
// TODO placements story

/**
 * Popup toast. Toasts require the application to have `Toaster` rendered somewhere in the desired toast usage scope, where `toast` can then be used to initiate, control, and maintain the lifecycle of toasts.
 */
const meta = {
  title: "Components/Core/Toaster",
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  name: "Info (Default)",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toaster.create({
          title: "Breakfast is ready!",
          description: "Here's your toast 🍞",
        })
      }
    >
      Create Toast
    </Button>
  ),
  decorators: [
    (Story) => (
      <>
        <Story />

        <Toaster toaster={toaster} />
      </>
    ),
  ],
};

export const HideCloseTrigger: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toaster.create({
          title: "Changes saved",
          type: "success",
        })
      }
    >
      Create Toast
    </Button>
  ),
  decorators: [
    (Story) => (
      <>
        <Story />

        <Toaster toaster={toaster} closeTrigger={null} />
      </>
    ),
  ],
};

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toaster.create({
          title: "Changes saved",
          type: "success",
        })
      }
    >
      Create Toast
    </Button>
  ),
  decorators: [
    (Story) => (
      <>
        <Story />

        <Toaster
          toaster={toaster}
          actionTrigger={
            <Button variant="link" size="sm">
              Undo
            </Button>
          }
        />
      </>
    ),
  ],
};

export const Overlapping: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        overlappingToaster.create({
          title: "Breakfast is ready!",
          description: "Here's your toast 🍞",
          type: "info",
        })
      }
    >
      Create Toast
    </Button>
  ),
  decorators: [
    (Story) => (
      <>
        <Story />

        <Toaster toaster={overlappingToaster} />
      </>
    ),
  ],
};

export const Types: Story = {
  render: () => (
    <HStack>
      {/* base */}
      <Button
        bgColor="gray"
        onClick={() =>
          toaster.create({
            title: "Base",
            description: "This is a base toast",
            type: "base",
          })
        }
      >
        Base
      </Button>

      <Button
        bgColor="blue"
        onClick={() =>
          toaster.create({
            title: "Breakfast is ready!",
            description: "Here's your toast 🍞",
            type: "info",
          })
        }
      >
        Info (Default)
      </Button>

      <Button
        bgColor="cyan.400"
        onClick={() =>
          toaster.create({
            title: "Loading...",
            description: "Please wait a moment",
            type: "loading",
          })
        }
      >
        Loading
      </Button>

      <Button
        bgColor="green"
        onClick={() =>
          toaster.create({
            title: "Changes saved",
            description: "Your changes have been saved",
            type: "success",
          })
        }
      >
        Success
      </Button>

      <Button
        bgColor="yellow"
        onClick={() =>
          toaster.create({
            title: "Warning",
            description: "Please be careful",
            type: "warning",
          })
        }
      >
        Warning
      </Button>

      <Button
        bgColor="red"
        onClick={() =>
          toaster.create({
            title: "Something went wrong",
            description: "Please try again later",
            type: "error",
          })
        }
      >
        Error
      </Button>
    </HStack>
  ),
  decorators: [
    (Story) => (
      <>
        <Story />

        <Toaster toaster={toaster} />
      </>
    ),
  ],
};

/**
 * Specify custom render for the toast content.
 */
// TODO custom render example
// export const CustomRender: Story = {};

// TODO custom defaults example
// export const CustomDefaults: Story = {};

export default meta;
