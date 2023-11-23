import { FiMapPin } from "react-icons/fi/index.js";

import { Avatar, Button, HoverCard, Text } from "components";
import { HStack, Stack, styled } from "generated/panda/jsx";
import { app } from "lib/config";
import { useDisclosure } from "lib/hooks";

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
        {app.organization.x.handle} (hover me)
      </styled.span>
    ),
    children: (
      <Stack gap={4} direction="row">
        <Avatar name="Childish Gambino" imageSource="/img/donald-glover.jpg" />

        <Stack gap={3}>
          <Stack gap={1}>
            <styled.a
              href={app.organization.x.url}
              target="_blank"
              textStyle="sm"
              fontWeight="semibold"
            >
              {app.organization.x.handle}
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

/**
 * Hover card with no trigger; controlled by decoupled external state.
 */
export const Controlled: Story = {
  args: {
    ...Default.args,
    trigger: undefined,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>Open Hover card (Controlled)</Button>

        <HoverCard
          open={isOpen}
          onOpenChange={({ open }) => (open ? onOpen() : onClose())}
        >
          {args.children}
        </HoverCard>
      </>
    );
  },
};

export default meta;
