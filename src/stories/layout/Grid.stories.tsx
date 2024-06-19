import { Code } from "components";
import { Grid, GridItem } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Grid layout container based on [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).
 */
const meta = {
  title: "Components/Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  render: () => (
    <Grid columns={3} gap={6} bgColor={{ base: "blue.100", _dark: "blue" }}>
      <GridItem
        p={2}
        colSpan={2}
        bgColor={{ base: "green.200", _dark: "green" }}
      >
        <Code bgColor="transparent">GridItem 1</Code>
      </GridItem>

      <GridItem p={2} bgColor={{ base: "red.200", _dark: "red" }}>
        <Code bgColor="transparent">GridItem 2</Code>
      </GridItem>

      <GridItem
        p={2}
        colSpan={3}
        bgColor={{ base: "purple.200", _dark: "purple" }}
      >
        <Code bgColor="transparent">GridItem 3</Code>
      </GridItem>
    </Grid>
  ),
};

export default meta;
