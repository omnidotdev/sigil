import { useEffect, useState } from "react";
import { match } from "ts-pattern";

import { Progress } from "components";
import { Stack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";
import type { ProgressProps } from "components";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Progress",
  component: Progress,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  name: "Linear (Default)",
  args: {
    defaultValue: 20,
  },
};

export const Circular: Story = {
  args: {
    ...Default.args,
    type: "circular",
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Loading...",
  },
};

export const Dynamic = (props: ProgressProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value === 100 ? 0 : value + 1));
    }, Math.random() * 500);

    return () => clearInterval(interval);
  });

  return (
    <Stack gap={8}>
      <Progress {...props} value={value} min={0} max={100} />
      <Progress {...props} type="circular" value={value} min={0} max={100} />
    </Stack>
  );
};

export const CustomValueText = (props: ProgressProps) => {
  const [value, setValue] = useState(0);
  const [progressText, setProgressText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value === 100 ? 0 : value + 1));
    }, Math.random() * 500);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    match(value)
      .when(
        (val) => val < 20,
        () => setProgressText("Warming up..."),
      )
      .when(
        (val) => val >= 20 && val < 50,
        () => setProgressText("Getting there..."),
      )
      .when(
        (val) => val >= 50 && val < 80,
        () => setProgressText("Halfway there!"),
      )
      .when(
        (val) => val >= 80 && val < 100,
        () => setProgressText("So close!"),
      )
      .when(
        (val) => val === 100,
        () => setProgressText("Done!"),
      );
  }, [value]);

  return (
    <Stack gap={8}>
      <Progress
        {...props}
        value={value}
        min={0}
        max={100}
        progressText={progressText}
      />
      <Progress
        {...props}
        type="circular"
        value={value}
        min={0}
        max={100}
        progressText={progressText}
      />
    </Stack>
  );
};

export const Sizes = () => (
  <>
    <Stack gap={4}>
      <Progress {...Default.args} size="sm" label="Small linear" />
      <Progress {...Default.args} size="md" label="Medium linear" />
      <Progress {...Default.args} size="lg" label="Large linear" />
    </Stack>

    <Stack mt={8} gap={4}>
      <Progress
        {...Default.args}
        type="circular"
        size="sm"
        label="Small circular"
      />
      <Progress
        {...Default.args}
        type="circular"
        size="md"
        label="Medium circular"
      />
      <Progress
        {...Default.args}
        type="circular"
        size="lg"
        label="Large circular"
      />
    </Stack>
  </>
);

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...Default.args,
    colorPalette: "orange",
  },
};

export default meta;
