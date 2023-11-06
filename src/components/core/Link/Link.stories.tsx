import NextLink from "next/link";
import { FiExternalLink } from "react-icons/fi";

import { Link } from "components";
import { Flex } from "generated/panda/jsx";
import { app } from "lib/config";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

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

/**
 * Adjust the link font size with `textStyle`.
 */
export const FontSizes: Story = {
  render: () => (
    <Flex direction="column">
      <Link textStyle="xs" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link textStyle="sm" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link textStyle="md" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link textStyle="lg" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link textStyle="xl" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link textStyle="2xl" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link textStyle="3xl" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link textStyle="4xl" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link textStyle="5xl" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link textStyle="6xl" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link textStyle="7xl" href={app.organization.url}>
        {app.organization.url}
      </Link>
    </Flex>
  ),
};

/**
 * Adjust the link font weight with `fontWeight`.
 */
export const FontWeights: Story = {
  render: () => (
    <Flex direction="column">
      <Link fontWeight="light" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link fontWeight="normal" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link fontWeight="medium" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link fontWeight="semibold" href={app.organization.url}>
        {app.organization.url}
      </Link>
      <Link fontWeight="bold" href={app.organization.url}>
        {app.organization.url}
      </Link>
    </Flex>
  ),
};

export default meta;
