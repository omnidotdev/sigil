import { ColorPicker as ArkColorPicker } from "@ark-ui/react/color-picker";
import { IoMdColorFilter } from "react-icons/io/index.js";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import Text from "components/typography/Text/Text";
import { HStack, Stack, styled } from "generated/panda/jsx";
import {
  colorPicker,
  type ColorPickerVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ColorPickerProps as ArkColorPickerProps } from "@ark-ui/react/color-picker";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/color-picker";
import type {} from "@zag-js/color-utils";

const { withProvider, withContext } = createStyleContext(colorPicker);

export interface ColorPickerProps
  extends ArkColorPickerProps,
    ColorPickerVariantProps {
  presets?: string[];
}

export const ColorPickerRoot = withProvider(styled(ArkColorPicker.Root));

export const ColorPickerArea = withContext(styled(ArkColorPicker.Area), "area");

export const ColorPickerAreaGradient = withContext(
  styled(ArkColorPicker.AreaGradient),
  "areaGradient",
);

export const ColorPickerAreaThumb = withContext(
  styled(ArkColorPicker.AreaThumb),
  "areaThumb",
);

export const ColorPickerChannelInput = withContext(
  styled(ArkColorPicker.ChannelInput),
  "channelInput",
);

export const ColorPickerChannelSliderBackground = withContext(
  styled(ArkColorPicker.ChannelSliderBackground),
  "channelSliderTrackBackground",
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

export const ColorPickerEyeDropperTrigger = withContext(
  styled(ArkColorPicker.EyeDropperTrigger),
  "eyeDropperTrigger",
);

export const ColorPickerSwatch = withContext(
  styled(ArkColorPicker.Swatch),
  "swatch",
);

export const ColorPickerSwatchBackground = withContext(
  styled(ArkColorPicker.SwatchBackground),
  "swatchBackground",
);

export const ColorPickerSwatchGroup = withContext(
  styled(ArkColorPicker.SwatchGroup),
  "swatchGroup",
);

/**
 * Color picker.
 */
const ColorPicker = ({ presets, ...rest }: ColorPickerProps) => (
  <ColorPickerRoot defaultValue={presets?.[0]} {...rest}>
    {(ctx) => {
      const [hue, saturation, lightness] = ctx.channels;

      return (
        <ColorPickerContent>
          <Stack gap={4}>
            <ColorPickerArea xChannel={saturation} yChannel={lightness}>
              <ColorPickerAreaGradient />
              <ColorPickerAreaThumb />
            </ColorPickerArea>

            <HStack gap={3}>
              <ColorPickerEyeDropperTrigger asChild>
                <Button size="xs" variant="outline" aria-label="Pick color">
                  <IoMdColorFilter />
                </Button>
              </ColorPickerEyeDropperTrigger>
              <Stack gap={3} width="full">
                <ColorPickerChannelSliderTrack channel={hue}>
                  <ColorPickerChannelSliderBackground />
                  <ColorPickerChannelSliderThumb />
                </ColorPickerChannelSliderTrack>
                <ColorPickerChannelSliderTrack channel="alpha">
                  <ColorPickerChannelSliderBackground />
                  <ColorPickerChannelSliderThumb />
                </ColorPickerChannelSliderTrack>
              </Stack>
            </HStack>

            <HStack gap={2}>
              <ColorPickerChannelInput channel="hex" asChild>
                <Input size="2xs" />
              </ColorPickerChannelInput>

              <ColorPickerChannelInput channel="alpha" asChild>
                <Input size="2xs" />
              </ColorPickerChannelInput>
            </HStack>

            {presets && (
              <>
                <Text textStyle="xs" fontWeight="medium">
                  Saved Colors
                </Text>

                <ColorPickerSwatchGroup>
                  {presets.map((color) => (
                    <ColorPickerSwatch
                      key={color}
                      value={color}
                      aria-label={`Pick color ${color}`}
                    >
                      <ColorPickerSwatchBackground />
                    </ColorPickerSwatch>
                  ))}
                </ColorPickerSwatchGroup>
              </>
            )}
          </Stack>
        </ColorPickerContent>
      );
    }}
  </ColorPickerRoot>
);

export default ColorPicker;
