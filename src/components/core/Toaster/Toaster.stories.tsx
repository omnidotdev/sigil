import { Button, Toaster, toast } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Popup toast. Toasts require the application to have `Toaster` rendered somewhere in the desired toast usage scope, where `toast` can then be used to initiate, control, and maintain the lifecycle of toasts.
 */
const meta = {
  title: "Components/Core/Toaster",
  decorators: [
    (Story) => (
      <>
        <Story />

        <Toaster />
      </>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

// TODO variant styles (success, error, warning, ...)
// TODO animations

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.create({
          title: "Breakfast is ready!",
          description: "Here's your toast 🍞",
          // TODO fix overriding placement not working
          // placement: "bottom-end",
          type: "error",
        })
      }
    >
      Create Toast
    </Button>
  ),
};

/**
 * Specify custom render for the toast content.
 */
// TODO custom render example
// export const WithCustomRender: Story = {};

// TODO custom defaults example
// export const WithCustomDefaults: Story = {};

export default meta;
