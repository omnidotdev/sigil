import { FiMapPin } from "react-icons/fi/index.js";

import { Avatar, Button, Text, Tooltip } from "components";
import { HStack, Stack, styled } from "generated/panda/jsx";
import { app } from "lib/config";
import { useDisclosure } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

// TODO placement story

const meta = {
  title: "Components/Core/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export const Default: Story = {
  args: {
    trigger: "Hover over me!",
    children: "I'm a tooltip! 🔨",
  },
};

export const ComplexRender: Story = {
  args: {
    ...Default.args,
    contentProps: {
      ...Default.args!.contentProps,
      p: 4,
    },
    trigger: (
      <styled.span textStyle="sm" fontWeight="semibold" cursor="default">
        {app.organization.x.handle} (hover me)
      </styled.span>
    ),
    children: (
      <Stack gap={4} direction="row">
        <Avatar name="Childish Gambino" imageSrc="/img/donald-glover.jpg" />

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

export const WithoutArrow: Story = {
  args: {
    ...Default.args,
    hasArrow: false,
  },
};

/**
 * Tooltip with no trigger; controlled by decoupled external state.
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
        <Button onClick={onOpen}>Open tooltip (controlled)</Button>

        <Tooltip
          open={isOpen}
          onOpenChange={({ open }) => (open ? onOpen() : onClose())}
        >
          {args.children}
        </Tooltip>
      </>
    );
  },
};

export default meta;
