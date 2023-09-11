import { Code } from "components";
import { Grid, GridItem } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Grid layout container based on [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).
 */
const meta = {
  title: "Components/Layout/Grid",
  component: Grid,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid columns={3} gap={6} bgColor="blue.100">
      <GridItem p={2} colSpan={2} bgColor="green.200">
        <Code bgColor="transparent">GridItem 1</Code>
      </GridItem>

      <GridItem p={2} bgColor="red.200">
        <Code bgColor="transparent">GridItem 2</Code>
      </GridItem>

      <GridItem p={2} colSpan={3} bgColor="purple.200">
        <Code bgColor="transparent">GridItem 3</Code>
      </GridItem>
    </Grid>
  ),
};

export default meta;
