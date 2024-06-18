import { RadioGroup } from "components";
import { Stack } from "generated/panda/jsx";
import { radioGroup } from "lib/theme/extensions/slotRecipes";

import type { Meta, StoryObj } from "@storybook/react";
import type { RadioGroupVariant } from "generated/panda/recipes";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  name: "Horizontal (Default)",
  args: {
    options: [
      { value: "react", label: "React" },
      { value: "solid", label: "Solid" },
      { value: "vue", label: "Vue" },
    ],
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: "vertical",
  },
};

export const RoundedRectangleSolid: Story = {
  args: {
    ...Default.args,
    variant: "solid",
    options: [
      { value: "xsmall", label: "XS" },
      { value: "small", label: "S" },
      { value: "medium", label: "M" },
      {
        value: "large",
        label: "L",
        isDisabled: true,
      },
      { value: "xlarge", label: "XL" },
    ],
    defaultValue: "medium",
  },
};

export const RoundedRectangleOutline: Story = {
  args: {
    ...RoundedRectangleSolid.args,
    variant: "outline",
  },
};

// TODO table like Avatar stories

const sizes = Object.keys(
  radioGroup.variants!.size,
) as RadioGroupVariant["size"][];

export const Sizes: Story = {
  ...Default,
  render: () => (
    <Stack>
      {sizes.map((size) => (
        <RadioGroup key={size} options={Default.args.options} size={size} />
      ))}

      {sizes.map((size) => (
        <RadioGroup
          key={size}
          options={RoundedRectangleSolid.args.options}
          defaultValue={RoundedRectangleSolid.args.defaultValue}
          size={size}
          variant="outline"
        />
      ))}

      {sizes.map((size) => (
        <RadioGroup
          key={size}
          options={RoundedRectangleSolid.args.options}
          defaultValue={RoundedRectangleSolid.args.defaultValue}
          size={size}
          variant="solid"
        />
      ))}

      {sizes.map((size) => (
        <RadioGroup
          key={size}
          options={Default.args.options}
          size={size}
          orientation="vertical"
        />
      ))}

      {sizes.map((size) => (
        <RadioGroup
          key={size}
          options={RoundedRectangleSolid.args.options}
          defaultValue={RoundedRectangleSolid.args.defaultValue}
          size={size}
          variant="outline"
          orientation="vertical"
        />
      ))}

      {sizes.map((size) => (
        <RadioGroup
          key={size}
          options={RoundedRectangleSolid.args.options}
          defaultValue={RoundedRectangleSolid.args.defaultValue}
          size={size}
          variant="solid"
          orientation="vertical"
        />
      ))}
    </Stack>
  ),
};

/**
 * A custom color palette can be applied to atomically modify the base color.
 */
export const CustomColorPalette: Story = {
  args: {
    ...Default.args,
    colorPalette: "red",
  },
};

export default meta;
