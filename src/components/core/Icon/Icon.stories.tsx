import { BiAperture } from "react-icons/bi";

import { Icon, Table, TableCell, TableHeader, TableRow } from "components";
import { icon } from "lib/theme/extensions/recipes";

import type { Meta, StoryObj } from "@storybook/react";
import type { IconVariant } from "generated/panda/recipes";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    src: BiAperture,
  },
};

export const Colored: Story = {
  args: {
    src: BiAperture,
    color: "blue",
  },
};

export const AsChild: Story = {
  args: {
    children: <BiAperture />,
  },
};

const sizes = Object.keys(icon.variants!["size"]) as IconVariant["size"][];

export const Sizes = () => (
  <Table
    headerContent={
      <TableRow css={{ "& *": { fontWeight: "bold" } }}>
        {sizes.map((size) => (
          <TableHeader key={size}>{size}</TableHeader>
        ))}
      </TableRow>
    }
  >
    <TableRow>
      {sizes.map((size) => (
        <TableCell key={size}>
          <Icon src={BiAperture} size={size} />
        </TableCell>
      ))}
    </TableRow>
  </Table>
);

export default meta;
