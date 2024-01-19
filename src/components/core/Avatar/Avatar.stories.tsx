import { FaLinux } from "react-icons/fa";

import {
  Avatar,
  Icon,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "components";
import { avatar } from "lib/theme/extensions/slotRecipes";

import type { Meta, StoryObj } from "@storybook/react";
import type { AvatarVariant } from "generated/panda/recipes";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    name: "Elon Musk",
    imageSrc: "/img/elon-musk.jpg",
  },
};

/**
 * When a name is supplied without an image source, the initials are displayed.
 */
export const NameOnly: Story = {
  args: {
    name: Default.args!.name,
  },
};

/**
 * In the absence of a name or image source, a default fallback icon is displayed.
 */
export const NoData: Story = {};

/**
 * A custom fallback can be supplied instead of the default icon.
 */
export const CustomFallback: Story = {
  args: {
    fallback: <Icon src={FaLinux} color="yellow.400" />,
  },
};

const sizes = Object.keys(avatar.variants!.size) as AvatarVariant["size"][];

export const Sizes = () => (
  <Table
    headerContent={
      <TableRow css={{ "& *": { fontWeight: "bold" } }}>
        <TableHeader>Type</TableHeader>
        {sizes.map((size) => (
          <TableHeader key={size}>{size}</TableHeader>
        ))}
      </TableRow>
    }
  >
    <TableRow>
      <TableCell fontWeight="semibold">Name & Image</TableCell>
      {sizes.map((size) => (
        <TableCell key={size}>
          <Avatar
            name={Default.args!.name}
            imageSrc={Default.args!.imageSrc}
            size={size}
          />
        </TableCell>
      ))}
    </TableRow>

    <TableRow>
      <TableCell fontWeight="semibold">Name</TableCell>
      {sizes.map((size) => (
        <TableCell key={size}>
          <Avatar name={Default.args!.name} size={size} />
        </TableCell>
      ))}
    </TableRow>

    <TableRow>
      <TableCell fontWeight="semibold">Fallback</TableCell>
      {sizes.map((size) => (
        <TableCell key={size}>
          <Avatar size={size} />
        </TableCell>
      ))}
    </TableRow>
  </Table>
);

export default meta;
