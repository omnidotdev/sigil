import NextLink from "next/link";
import { FiExternalLink } from "react-icons/fi";

import { Link } from "components";
import { Flex } from "generated/panda/jsx";
import { app } from "lib/config";
import { text } from "lib/theme/extensions/recipes";
import { fontWeights } from "lib/theme/extensions/tokens";

import type { Meta, StoryObj } from "@storybook/react";
import type { TextVariant } from "generated/panda/recipes";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    href: app.organization.url,
    children: app.organization.url,
  },
};

/**
 * Open the link in a new tab.
 */
export const External: Story = {
  args: {
    ...Default.args,
    isExternal: true,
  },
};

/**
 * Add an icon to the end of the link. Useful for external links to indicate that they will open in a new tab.
 */
export const ExternalWithIcon: Story = {
  args: {
    ...External.args,
    children: (
      <>
        {app.organization.url} <FiExternalLink />
      </>
    ),
  },
};

/**
 * `asChild` allows you to merge `Link` with child components, such as [Next.js `Link`](https://nextjs.org/docs/pages/api-reference/components/link).
 */
export const AsChildElement: Story = {
  render: () => (
    <Link asChild>
      <NextLink href="/">Next.js link</NextLink>
    </Link>
  ),
};

const sizes = Object.keys(text.variants!["size"]) as TextVariant["size"][];

// TODO table like avatar stories

/**
 * Adjust the link font size with `textStyle`.
 */
export const FontSizes: Story = {
  render: () => (
    <Flex direction="column">
      {sizes.map((size) => (
        <Link key={size} textStyle={size} href={app.organization.url}>
          {app.organization.url}
        </Link>
      ))}
    </Flex>
  ),
};

const weights = Object.keys(
  fontWeights as Record<string, Partial<{ value: number }>>,
);

// TODO table like avatar stories

/**
 * Adjust the link font weight with `fontWeight`.
 */
export const FontWeights: Story = {
  render: () => (
    <Flex direction="column">
      {weights.map((weight) => (
        <Link key={weight} fontWeight={weight} href={app.organization.url}>
          {app.organization.url}
        </Link>
      ))}
    </Flex>
  ),
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...ExternalWithIcon.args,
    colorPalette: "purple",
  },
};

export default meta;
