import { Text } from "components/typography";
import { styled } from "generated/panda/jsx";
import { token } from "generated/panda/tokens";
import { useBreakpoint } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";
import type { UseBreakpointOptions } from "lib/hooks";

type Story = StoryObj<typeof useBreakpoint>;

// TODO add viewport-based client stories (can use https://storybook.js.org/docs/react/essentials/viewport)

// TODO add custom fallback story with mocked undefined window to simulate server environment
/**
 * The "base" breakpoint is used as a fallback by default. This can be overridden by setting `fallback`.
 */
// export const CustomFallback: Story = { ... };

const UseBreakpointDemo = ({ fallback }: UseBreakpointOptions) => {
  const breakpoint = useBreakpoint({ fallback });

  return (
    <Text>
      <styled.span fontWeight="bold">Current breakpoint:</styled.span>{" "}
      {breakpoint} ({token(`breakpoints.${breakpoint}`)})
    </Text>
  );
};

export const Default: Story = {
  render: () => <UseBreakpointDemo />,
};

// NB: type annotation resolves type portability error
const meta: Meta = {
  title: "Hooks/useBreakpoint",
  tags: ["autodocs"],
  component: useBreakpoint,
} satisfies Meta;

export default meta;
