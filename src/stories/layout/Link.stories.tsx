import { LinkBox, LinkOverlay } from "generated/panda/jsx";
import { app } from "lib/config";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

// ! NB: not documented in Panda, see https://discord.com/channels/1118988919804010566/1120305029056831548/1148028115373789267

/**
 * Hyperlink wrapper.
 */
const meta = {
  title: "Components/Layout/Link",
  component: LinkBox,
  tags: ["autodocs"],
} satisfies Meta<typeof LinkBox>;

export const Default: Story = {
  render: () => (
    <LinkBox>
      <LinkOverlay
        href={app.organization.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {app.organization.url}
      </LinkOverlay>
    </LinkBox>
  ),
};

export default meta;
