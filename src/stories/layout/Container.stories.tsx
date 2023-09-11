import { Container } from "generated/panda/jsx";
import { Tags } from "lib/types/storybook";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

/**
 * Max-width, centered container designed for page content.
 */
const meta = {
  title: "Components/Layout/Container",
  component: Container,
  tags: [Tags.AUTODOCS],
} satisfies Meta<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veritatis
      ullam tenetur? Ipsam aut nulla eius eaque molestiae doloribus, dolor
      repudiandae consectetur harum quibusdam fuga doloremque corporis nisi odio
      earum!
    </Container>
  ),
};

export default meta;
