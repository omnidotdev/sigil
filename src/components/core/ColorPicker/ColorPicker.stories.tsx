import { parseColor } from "@ark-ui/react/color-picker";

import { ColorPicker } from "components";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
} satisfies Meta;

export const Default: Story = {
  args: {
    presets: [
      "hsl(10, 81%, 59%)",
      "hsl(60, 81%, 59%)",
      "hsl(100, 81%, 59%)",
      "hsl(175, 81%, 59%)",
      "hsl(190, 81%, 59%)",
      "hsl(205, 81%, 59%)",
      "hsl(220, 81%, 59%)",
      "hsl(250, 81%, 59%)",
      "hsl(280, 81%, 59%)",
      "hsl(350, 81%, 59%)",
    ],
  },
};

/**
 * A default color value can be provided with the `defaultValue` prop.
 */
export const DefaultValue: Story = {
  render: () => (
    <ColorPicker
      {...Default.args}
      // NB: for some reason, passing `defaultValue` as a story arg causes a runtime error, so this story render is a workaround
      defaultValue={parseColor("#eb5e41")}
    />
  ),
};

export default meta;
