import { ColorPicker as ArkColorPicker } from "@ark-ui/react/color-picker";
import { IoMdColorFilter } from "react-icons/io";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import Text from "components/typography/Text/Text";
import { HStack, Stack, styled } from "generated/panda/jsx";
import {
  colorPicker,
  type ColorPickerVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

// https://github.com/microsoft/TypeScript/issues/47663
import type { ColorPickerProps as ArkColorPickerProps } from "@ark-ui/react/color-picker";
import type {} from "@zag-js/color-picker";
import type {} from "@zag-js/color-utils";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(colorPicker);

export interface ColorPickerProps
  extends ArkColorPickerProps,
    ColorPickerVariantProps {
  /** Label for the color picker. Defaults to "Color Picker". */
  label?: ReactNode;
  /** Color swatch presets. */
  presets?: string[];
}

export const ColorPickerRoot = withProvider(
  styled(ArkColorPicker.Root),
  "root",
);

export const ColorPickerArea = withContext(styled(ArkColorPicker.Area), "area");

export const ColorPickerAreaBackground = withContext(
  styled(ArkColorPicker.AreaBackground),
  "areaBackground",
);

export const ColorPickerAreaThumb = withContext(
  styled(ArkColorPicker.AreaThumb),
  "areaThumb",
);

export const ColorPickerChannelInput = withContext(
  styled(ArkColorPicker.ChannelInput),
  "channelInput",
);

export const ColorPickerChannelSlider = withContext(
  styled(ArkColorPicker.ChannelSlider),
  "channelSlider",
);

export const ColorPickerChannelSliderThumb = withContext(
  styled(ArkColorPicker.ChannelSliderThumb),
  "channelSliderThumb",
);

export const ColorPickerChannelSliderTrack = withContext(
  styled(ArkColorPicker.ChannelSliderTrack),
  "channelSliderTrack",
);

export const ColorPickerContent = withContext(
  styled(ArkColorPicker.Content),
  "content",
);

export const ColorPickerControl = withContext(
  styled(ArkColorPicker.Control),
  "control",
);

export const ColorPickerEyeDropperTrigger = withContext(
  styled(ArkColorPicker.EyeDropperTrigger),
  "eyeDropperTrigger",
);

export const ColorPickerLabel = withContext(
  styled(ArkColorPicker.Label),
  "label",
);

export const ColorPickerPositioner = withContext(
  styled(ArkColorPicker.Positioner),
  "positioner",
);

export const ColorPickerSwatch = withContext(
  styled(ArkColorPicker.Swatch),
  "swatch",
);

export const ColorPickerSwatchGroup = withContext(
  styled(ArkColorPicker.SwatchGroup),
  "swatchGroup",
);

export const ColorPickerSwatchTrigger = withContext(
  styled(ArkColorPicker.SwatchTrigger),
  "swatchTrigger",
);

export const ColorPickerTransparencyGrid = withContext(
  styled(ArkColorPicker.TransparencyGrid),
  "transparencyGrid",
);

export const ColorPickerTrigger = withContext(
  styled(ArkColorPicker.Trigger),
  "trigger",
);

/**
 * Color picker.
 */
const ColorPicker = ({
  label = "Color Picker",
  presets,
  ...rest
}: ColorPickerProps) => (
  <ColorPickerRoot {...rest}>
    {(ctx) => (
      <>
        <ColorPickerLabel>{label}</ColorPickerLabel>

        <ColorPickerControl>
          <ColorPickerChannelInput channel="hex" asChild>
            <Input />
          </ColorPickerChannelInput>

          <ColorPickerTrigger asChild>
            <Button variant="outline">
              <ColorPickerSwatch value={ctx.value} />
            </Button>
          </ColorPickerTrigger>
        </ColorPickerControl>

        <ColorPickerPositioner>
          <ColorPickerContent>
            <Stack gap={3}>
              <ColorPickerArea>
                <ColorPickerAreaBackground />
                <ColorPickerAreaThumb />
              </ColorPickerArea>

              <HStack gap={3}>
                <ColorPickerEyeDropperTrigger asChild>
                  <Button size="xs" variant="outline" aria-label="Pick color">
                    <IoMdColorFilter />
                  </Button>
                </ColorPickerEyeDropperTrigger>

                <Stack gap={2} flex={1}>
                  <ColorPickerChannelSlider channel="hue">
                    <ColorPickerChannelSliderTrack />
                    <ColorPickerChannelSliderThumb />
                  </ColorPickerChannelSlider>

                  <ColorPickerChannelSlider channel="alpha">
                    <ColorPickerTransparencyGrid size="8px" />
                    <ColorPickerChannelSliderTrack />
                    <ColorPickerChannelSliderThumb />
                  </ColorPickerChannelSlider>
                </Stack>
              </HStack>

              <HStack>
                <ColorPickerChannelInput channel="hex" asChild>
                  <Input size="2xs" />
                </ColorPickerChannelInput>
                <ColorPickerChannelInput channel="alpha" asChild>
                  <Input size="2xs" />
                </ColorPickerChannelInput>
              </HStack>

              <Stack gap={1.5}>
                <Text
                  textStyle="xs"
                  fontWeight="medium"
                  color="foreground.default"
                >
                  Saved Colors
                </Text>

                <ColorPickerSwatchGroup>
                  {presets?.map((color, id) => (
                    <ColorPickerSwatchTrigger key={id} value={color}>
                      <ColorPickerSwatch value={color} />
                    </ColorPickerSwatchTrigger>
                  ))}
                </ColorPickerSwatchGroup>
              </Stack>
            </Stack>
          </ColorPickerContent>
        </ColorPickerPositioner>
      </>
    )}
  </ColorPickerRoot>
);

export default ColorPicker;
