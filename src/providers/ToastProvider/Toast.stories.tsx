import { useToast } from "@ark-ui/react";
import { FiX } from "react-icons/fi";

import { Button } from "components";
import { Box, Stack } from "generated/panda/jsx";
import {
  SigilProvider,
  ToastCloseTrigger,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from "providers";

import type { Meta, StoryObj } from "@storybook/react";
import type { ToastOptions } from "@zag-js/toast";

type Story = StoryObj<typeof meta>;

interface ToastDemoProps {
  toastOptions?: Partial<ToastOptions>;
}

const ToastDemo = ({ toastOptions }: ToastDemoProps) => {
  const toast = useToast();

  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.create({
          title: "Breakfast is ready!",
          description: "Here's your toast 🍞",
          ...toastOptions,
        })
      }
    >
      Add toast
    </Button>
  );
};

/**
 * Toasts require the application to be wrapped in `ToastProvider` to work, either directly or implicitly via `SigilProvider`.
 */
const meta = {
  title: "Components/Core/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
} satisfies Meta<typeof ToastProvider>;

export const Default: Story = {
  render: () => <ToastDemo />,
};

/**
 * Specify custom render for the toast content.
 */
export const WithCustomRender: Story = {
  render: () => (
    <ToastDemo
      toastOptions={{
        render: () => (
          <>
            <Stack gap={1}>
              <ToastTitle />
              <ToastDescription />
              <ToastDescription />
              <ToastDescription />

              <Stack direction="row" gap={3}>
                <ToastCloseTrigger asChild>
                  <Button variant="link" size="sm">
                    Dismiss
                  </Button>
                </ToastCloseTrigger>
              </Stack>
            </Stack>

            <Box position="absolute" top="3" right="3">
              <ToastCloseTrigger asChild>
                <Button size="sm" variant="ghost" aria-label="Close Toast">
                  <FiX />
                </Button>
              </ToastCloseTrigger>
            </Box>
          </>
        ),
      }}
    />
  ),
};

/**
 * Default toast options can be specified at the provider level.
 */
export const WithCustomDefaults: Story = {
  tags: ["disable:globaldecorators"],
  render: () => <ToastDemo />,
  decorators: [
    (Story) => (
      <SigilProvider
        toastProviderProps={{
          defaultOptions: {
            placement: "top",
            duration: 6000,
            removeDelay: 500,
          },
        }}
      >
        <Story />
      </SigilProvider>
    ),
  ],
};

export default meta;
