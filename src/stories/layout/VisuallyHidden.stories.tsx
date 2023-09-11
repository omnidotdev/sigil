import { VisuallyHidden } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Visually hide content, but keep it accessible to screen readers. Useful for a11y and SEO.
 */
const meta = {
  title: "Components/Layout/VisuallyHidden",
  component: VisuallyHidden,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof VisuallyHidden>;

export const Default: Story = {
  render: () => (
    <>
      Below is a visually-hidden title.
      <VisuallyHidden>
        <title>Hidden title</title>
      </VisuallyHidden>
    </>
  ),
};

export default meta;
