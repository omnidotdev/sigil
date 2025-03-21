import { FiMapPin } from "react-icons/fi";

import {
  Avatar,
  Button,
  Link,
  Text,
  Tooltip,
  type TooltipProps,
} from "components";
import { Grid, HStack, Stack } from "generated/panda/jsx";
import { app } from "lib/config";
import { useDisclosure } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta;

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
    triggerProps: {
      variant: "ghost",
      _hover: { bgColor: "transparent" },
      cursor: "default",
    },
    trigger: (
      <Text as="span" size="sm" fontWeight="semibold">
        {app.organization.x.handle} (hover me)
      </Text>
    ),
    children: (
      <Stack gap={4} direction="row">
        <Avatar name="Childish Gambino" imageSrc="/img/donald-glover.jpg" />

        <Stack gap={3}>
          <Stack gap={1}>
            <Link isExternal href={app.organization.x.url}>
              {app.organization.x.handle}
            </Link>

            <Text size="sm" color="foreground.muted">
              Stone Mountain
            </Text>
          </Stack>

          <HStack gap={1} color="foreground.subtle">
            <FiMapPin />

            <Text size="xs">Joined January 3005</Text>
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

const placements = [
  "top",
  "top-start",
  "top-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
  "right",
  "right-start",
  "right-end",
] as NonNullable<TooltipProps["positioning"]>["placement"][];

export const Placements: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <Grid columns={{ base: 2, sm: 3 }}>
      {placements.map((placement) => (
        <Tooltip
          key={placement}
          trigger={<Text fontWeight="bold">{placement}</Text>}
          positioning={{ placement }}
        >
          {placement}
        </Tooltip>
      ))}
    </Grid>
  ),
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
