import { Button, Collapsible } from "components";
import { Box } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Toggle</Button>,
    children: (
      <Box
        bgColor="accent.default"
        color="accent.foreground"
        mt={3}
        p={4}
        borderRadius="md"
      >
        Hey there!
      </Box>
    ),
  },
};

export const DefaultOpen: Story = {
  args: {
    ...Default.args,
    defaultOpen: true,
  },
};

export default meta;
