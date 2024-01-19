import { Table, TableCell, TableHeader, TableRow } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

interface Product {
  id: string;
  name: string;
  category: string;
  price: {
    usd: number;
  };
  stock: number;
}

const productData: Product[] = [
  {
    id: "clmu5q0wm000008mq6ixi5fxa",
    name: "Backpack",
    category: "Hiking",
    stock: 56,
    price: {
      usd: 79.99,
    },
  },
  {
    id: "clmu5q8r9000108mq2ce1flls",
    name: "Tent",
    category: "Camping",
    stock: 22,
    price: {
      usd: 289.0,
    },
  },
  {
    id: "clmu5qdwa000208mq640xhiuv",
    name: "Trail Mix",
    category: "Food",
    stock: 87,
    price: {
      usd: 6.49,
    },
  },
];

const meta = {
  title: "Components/Core/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    caption: "Product Inventory",
    headerContent: (
      <TableRow>
        <TableHeader>ID</TableHeader>
        <TableHeader>Name</TableHeader>
        <TableHeader>Category</TableHeader>
        <TableHeader>Stock</TableHeader>
        <TableHeader textAlign="right">Price</TableHeader>
      </TableRow>
    ),
    children: productData.map(({ id, name, category, stock, price }) => (
      <TableRow key={id}>
        <TableCell fontWeight="medium">{id}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{category}</TableCell>
        <TableCell>{stock}</TableCell>
        <TableCell textAlign="right">{price.usd}</TableCell>
      </TableRow>
    )),
    footerContent: (
      <TableRow fontWeight="bold" bgColor="blue.100">
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell>
          {productData
            .map(({ stock }) => stock)
            .reduce((total, productStock) => total + productStock)}
        </TableCell>
        <TableCell textAlign="right">
          $
          {productData
            .map(({ price: { usd } }) => usd)
            .reduce((total, productPrice) => total + productPrice)}
        </TableCell>
      </TableRow>
    ),
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

export default meta;
