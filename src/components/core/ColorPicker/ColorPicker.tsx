import { ColorPicker as ArkColorPicker } from "@ark-ui/react/color-picker";
import { IoMdColorFilter } from "react-icons/io";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import Text from "components/typography/Text/Text";
import { HStack, Stack, styled } from "generated/panda/jsx";
import { colorPicker } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

// https://github.com/microsoft/TypeScript/issues/47663
import type { HTMLStyledProps } from "generated/panda/jsx";
import type {} from "@zag-js/color-picker";
import type {} from "@zag-js/color-utils";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(colorPicker);

export const ColorPickerRoot = withProvider(
  styled(ArkColorPicker.Root),
  "root",
);
export interface ColorPickerRootProps
  extends HTMLStyledProps<typeof ColorPickerRoot> {}

export const ColorPickerArea = withContext(styled(ArkColorPicker.Area), "area");
export interface ColorPickerAreaProps
  extends HTMLStyledProps<typeof ColorPickerArea> {}

export const ColorPickerAreaBackground = withContext(
  styled(ArkColorPicker.AreaBackground),
  "areaBackground",
);
export interface ColorPickerAreaBackgroundProps
  extends HTMLStyledProps<typeof ColorPickerAreaBackground> {}

export const ColorPickerAreaThumb = withContext(
  styled(ArkColorPicker.AreaThumb),
  "areaThumb",
);
export interface ColorPickerAreaThumbProps
  extends HTMLStyledProps<typeof ColorPickerAreaThumb> {}

export const ColorPickerChannelInput = withContext(
  styled(ArkColorPicker.ChannelInput),
  "channelInput",
);
export interface ColorPickerChannelInputProps
  extends HTMLStyledProps<typeof ColorPickerChannelInput> {}

export const ColorPickerChannelSlider = withContext(
  styled(ArkColorPicker.ChannelSlider),
  "channelSlider",
);
export interface ColorPickerChannelSliderProps
  extends HTMLStyledProps<typeof ColorPickerChannelSlider> {}

export const ColorPickerChannelSliderThumb = withContext(
  styled(ArkColorPicker.ChannelSliderThumb),
  "channelSliderThumb",
);
export interface ColorPickerChannelSliderThumbProps
  extends HTMLStyledProps<typeof ColorPickerChannelSliderThumb> {}

export const ColorPickerChannelSliderTrack = withContext(
  styled(ArkColorPicker.ChannelSliderTrack),
  "channelSliderTrack",
);
export interface ColorPickerChannelSliderTrackProps
  extends HTMLStyledProps<typeof ColorPickerChannelSliderTrack> {}

export const ColorPickerContent = withContext(
  styled(ArkColorPicker.Content),
  "content",
);
export interface ColorPickerContentProps
  extends HTMLStyledProps<typeof ColorPickerContent> {}

export const ColorPickerControl = withContext(
  styled(ArkColorPicker.Control),
  "control",
);
export interface ColorPickerControlProps
  extends HTMLStyledProps<typeof ColorPickerControl> {}

export const ColorPickerEyeDropperTrigger = withContext(
  styled(ArkColorPicker.EyeDropperTrigger),
  "eyeDropperTrigger",
);
export interface ColorPickerEyeDropperTriggerProps
  extends HTMLStyledProps<typeof ColorPickerEyeDropperTrigger> {}

// TODO use in prebuilt `ColorPicker` component
const ColorPickerFormatSelect = withContext(
  styled(ArkColorPicker.FormatSelect),
  "formatSelect",
);
export interface ColorPickerFormatSelectProps
  extends HTMLStyledProps<typeof ColorPickerFormatSelect> {}

// TODO use in prebuilt `ColorPicker` component
const ColorPickerFormatTrigger = withContext(
  styled(ArkColorPicker.FormatTrigger),
  "formatTrigger",
);
export interface ColorPickerFormatTriggerProps
  extends HTMLStyledProps<typeof ColorPickerFormatTrigger> {}

export const ColorPickerLabel = withContext(
  styled(ArkColorPicker.Label),
  "label",
);
export interface ColorPickerLabelProps
  extends HTMLStyledProps<typeof ColorPickerLabel> {}

export const ColorPickerPositioner = withContext(
  styled(ArkColorPicker.Positioner),
  "positioner",
);
export interface ColorPickerPositionerProps
  extends HTMLStyledProps<typeof ColorPickerPositioner> {}

export const ColorPickerSwatch = withContext(
  styled(ArkColorPicker.Swatch),
  "swatch",
);
export interface ColorPickerSwatchProps
  extends HTMLStyledProps<typeof ColorPickerSwatch> {}

export const ColorPickerSwatchGroup = withContext(
  styled(ArkColorPicker.SwatchGroup),
  "swatchGroup",
);
export interface ColorPickerSwatchGroupProps
  extends HTMLStyledProps<typeof ColorPickerSwatchGroup> {}

// TODO use in prebuilt `ColorPicker` component
const ColorPickerSwatchIndicator = withContext(
  styled(ArkColorPicker.SwatchIndicator),
  "swatchIndicator",
);
export interface ColorPickerSwatchIndicatorProps
  extends HTMLStyledProps<typeof ColorPickerSwatchIndicator> {}

export const ColorPickerSwatchTrigger = withContext(
  styled(ArkColorPicker.SwatchTrigger),
  "swatchTrigger",
);
export interface ColorPickerSwatchTriggerProps
  extends HTMLStyledProps<typeof ColorPickerSwatchTrigger> {}

export const ColorPickerTransparencyGrid = withContext(
  styled(ArkColorPicker.TransparencyGrid),
  "transparencyGrid",
);
export interface ColorPickerTransparencyGridProps
  extends HTMLStyledProps<typeof ColorPickerTransparencyGrid> {}

export const ColorPickerTrigger = withContext(
  styled(ArkColorPicker.Trigger),
  "trigger",
);
export interface ColorPickerTriggerProps
  extends HTMLStyledProps<typeof ColorPickerTrigger> {}

// TODO use in prebuilt `ColorPicker` component
const ColorPickerValueText = withContext(
  styled(ArkColorPicker.ValueText),
  "valueText",
);
export interface ColorPickerValueTextProps
  extends HTMLStyledProps<typeof ColorPickerValueText> {}

// TODO use in prebuilt `ColorPicker` component
const ColorPickerView = withContext(styled(ArkColorPicker.View), "view");
export interface ColorPickerViewProps
  extends HTMLStyledProps<typeof ColorPickerView> {}

export interface ColorPickerProps extends ColorPickerRootProps {
  /** Label for the color picker. Defaults to "Color Picker". */
  label?: ReactNode;
  /** Color swatch presets. */
  presets?: string[];
}

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
