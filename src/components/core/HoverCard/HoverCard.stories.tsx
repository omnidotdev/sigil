import { FiMapPin } from "react-icons/fi/index.js";

import { Avatar, HoverCard, Text } from "components";
import { HStack, Stack, styled } from "generated/panda/jsx";
import { app } from "lib/config";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export const Default: Story = {
  args: {
    trigger: (
      <styled.span textStyle="sm" fontWeight="semibold" cursor="default">
        {app.organization.twitter.handle} (hover me)
      </styled.span>
    ),
    children: (
      <Stack gap={4} direction="row">
        <Avatar name="Childish Gambino" imageSource="/img/donald-glover.jpg" />

        <Stack gap={3}>
          <Stack gap={1}>
            <styled.a
              href={app.organization.twitter.url}
              target="_blank"
              textStyle="sm"
              fontWeight="semibold"
            >
              {app.organization.twitter.handle}
            </styled.a>

            <Text textStyle="sm" color="foreground.muted">
              Stone Mountain
            </Text>
          </Stack>

          <HStack gap={1} color="foreground.subtle" textStyle="xs">
            <FiMapPin />

            <Text>Joined January 3005</Text>
          </HStack>
        </Stack>
      </Stack>
    ),
  },
};

export default meta;
