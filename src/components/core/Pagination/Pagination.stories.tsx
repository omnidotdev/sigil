import { Pagination } from "components";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Pagination",
  component: Pagination,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Pagination>;

export const Default: Story = {};

export default meta;
