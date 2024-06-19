import {
  FiUser,
  FiCreditCard,
  FiSettings,
  FiUserPlus,
  FiChevronRight,
  FiMail,
  FiMessageSquare,
  FiPlusCircle,
  FiLogOut,
} from "react-icons/fi";

import {
  Button,
  Keyboard,
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTriggerItem,
  Text,
} from "components";
import { HStack } from "generated/panda/jsx";
import { useDisclosure } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Menu",
  component: Menu,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Open Menu</Button>,
    children: (
      <MenuItemGroup>
        <MenuItemGroupLabel>My Account</MenuItemGroupLabel>

        <MenuSeparator />

        <MenuItem value="profile">
          <HStack gap={6} justify="space-between" flex="1">
            <HStack gap={2}>
              <FiUser />
              Profile
            </HStack>
            <Text as="span" color="foreground.subtle" size="sm">
              <Keyboard size="sm">CTRL P</Keyboard>
            </Text>
          </HStack>
        </MenuItem>

        <MenuItem value="billing">
          <HStack gap={2}>
            <FiCreditCard /> Billing
          </HStack>
        </MenuItem>

        <MenuItem value="settings">
          <HStack gap={6} justify="space-between" flex="1">
            <HStack gap={2}>
              <FiSettings /> Settings
            </HStack>

            <Text as="span" color="foreground.subtle" size="sm">
              <Keyboard size="sm">CTRL ,</Keyboard>
            </Text>
          </HStack>
        </MenuItem>

        <MenuRoot positioning={{ placement: "right-start", gutter: -2 }}>
          <MenuTriggerItem justifyContent="space-between">
            <HStack gap={2}>
              <FiUserPlus />
              Invite member
            </HStack>

            <FiChevronRight />
          </MenuTriggerItem>

          <MenuPositioner>
            <MenuContent>
              <MenuItem value="email">
                <HStack gap={2}>
                  <FiMail /> Email
                </HStack>
              </MenuItem>

              <MenuItem value="message">
                <HStack gap={2}>
                  <FiMessageSquare /> Message
                </HStack>
              </MenuItem>

              <MenuSeparator />

              <MenuItem value="other">
                <HStack gap={2}>
                  <FiPlusCircle /> More Options...
                </HStack>
              </MenuItem>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>

        <MenuSeparator />

        <MenuItem value="logout">
          <HStack gap={2}>
            <FiLogOut />
            Logout
          </HStack>
        </MenuItem>
      </MenuItemGroup>
    ),
  },
};

/**
 * Menu with no trigger; controlled by decoupled external state.
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
        <Button onClick={onOpen}>Open Menu (Controlled)</Button>

        <Menu
          open={isOpen}
          onOpenChange={({ open }) => (open ? onOpen() : onClose())}
        >
          {args.children}
        </Menu>
      </>
    );
  },
};

export default meta;
