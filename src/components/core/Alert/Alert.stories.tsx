import { FiInfo } from "react-icons/fi";

import { Alert, Text } from "components";
import { Box, Stack } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Alert",
  component: Alert,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Alert>;

export const Default: Story = {
  args: {
    children: (
      <Stack gap={4} direction={{ base: "column", sm: "row" }}>
        <Box fontSize="1.25rem" color="foreground.emphasized">
          <FiInfo />
        </Box>

        <Stack gap={1}>
          <Text as="h5" fontWeight="medium">
            Update available
          </Text>

          <Text color="foreground.muted">
            For the best experience, please update to the latest version.
          </Text>
        </Stack>
      </Stack>
    ),
  },
};

export default meta;
