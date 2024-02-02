import { useState } from "react";

import { Button, Skeleton } from "components";
import { Box, Circle, HStack, Stack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>contents wrapped</div>
        <div>won&apos;t be visible</div>
      </>
    ),
  },
};

/**
 * Multiple skeletons can be rendered together to represent a multi-faceted loading state.
 */
export const Multiple = () => (
  <HStack w="full" gap={4}>
    <Skeleton borderRadius="full">
      <Circle size={20} />
    </Skeleton>

    <Stack gap={3.5} w="full">
      <Skeleton h={4} />
      <Skeleton w="80%" h={4} />
      <Skeleton w="60%" h={4} />
    </Stack>
  </HStack>
);

/**
 * The `Skeleton` render can be skipped by enabling the `isLoaded` prop.
 */
export const Loaded: Story = {
  args: {
    ...Default.args,
    isLoaded: true,
    children: <Box>Is loaded</Box>,
  },
};

export const Controlled = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <Stack gap={2}>
      <Button w="fit-content" onClick={() => setHasLoaded(!hasLoaded)}>
        Toggle
      </Button>

      <Skeleton isLoaded={hasLoaded} h={8}>
        <Box h={8}>Content</Box>
      </Skeleton>
    </Stack>
  );
};

export default meta;
