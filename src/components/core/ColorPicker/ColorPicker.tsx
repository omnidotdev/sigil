import { ColorPicker as ArkColorPicker } from "@ark-ui/react/color-picker";
import { IoMdColorFilter } from "react-icons/io";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import Text from "components/typography/Text/Text";
import { HStack, Stack } from "generated/panda/jsx";
import { colorPicker } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {} from "@zag-js/color-picker";
import type {} from "@zag-js/color-utils";
import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(colorPicker);

export const ColorPickerRoot = withProvider(ArkColorPicker.Root, "root");
export interface ColorPickerRootProps
  extends ComponentProps<typeof ColorPickerRoot> {}

export const ColorPickerArea = withContext(ArkColorPicker.Area, "area");
export interface ColorPickerAreaProps
  extends ComponentProps<typeof ColorPickerArea> {}

export const ColorPickerAreaBackground = withContext(
  ArkColorPicker.AreaBackground,
  "areaBackground",
);
export interface ColorPickerAreaBackgroundProps
  extends ComponentProps<typeof ColorPickerAreaBackground> {}

export const ColorPickerAreaThumb = withContext(
  ArkColorPicker.AreaThumb,
  "areaThumb",
);
export interface ColorPickerAreaThumbProps
  extends ComponentProps<typeof ColorPickerAreaThumb> {}

export const ColorPickerChannelInput = withContext(
  ArkColorPicker.ChannelInput,
  "channelInput",
);
export interface ColorPickerChannelInputProps
  extends ComponentProps<typeof ColorPickerChannelInput> {}

export const ColorPickerChannelSlider = withContext(
  ArkColorPicker.ChannelSlider,
  "channelSlider",
);
export interface ColorPickerChannelSliderProps
  extends ComponentProps<typeof ColorPickerChannelSlider> {}

export const ColorPickerChannelSliderThumb = withContext(
  ArkColorPicker.ChannelSliderThumb,
  "channelSliderThumb",
);
export interface ColorPickerChannelSliderThumbProps
  extends ComponentProps<typeof ColorPickerChannelSliderThumb> {}

export const ColorPickerChannelSliderTrack = withContext(
  ArkColorPicker.ChannelSliderTrack,
  "channelSliderTrack",
);
export interface ColorPickerChannelSliderTrackProps
  extends ComponentProps<typeof ColorPickerChannelSliderTrack> {}

export const ColorPickerContent = withContext(
  ArkColorPicker.Content,
  "content",
);
export interface ColorPickerContentProps
  extends ComponentProps<typeof ColorPickerContent> {}

export const ColorPickerControl = withContext(
  ArkColorPicker.Control,
  "control",
);
export interface ColorPickerControlProps
  extends ComponentProps<typeof ColorPickerControl> {}

export const ColorPickerEyeDropperTrigger = withContext(
  ArkColorPicker.EyeDropperTrigger,
  "eyeDropperTrigger",
);
export interface ColorPickerEyeDropperTriggerProps
  extends ComponentProps<typeof ColorPickerEyeDropperTrigger> {}

// TODO use in prebuilt `ColorPicker` component
const ColorPickerFormatSelect = withContext(
  ArkColorPicker.FormatSelect,
  "formatSelect",
);
export interface ColorPickerFormatSelectProps
  extends ComponentProps<typeof ColorPickerFormatSelect> {}

// TODO use in prebuilt `ColorPicker` component
const ColorPickerFormatTrigger = withContext(
  ArkColorPicker.FormatTrigger,
  "formatTrigger",
);
export interface ColorPickerFormatTriggerProps
  extends ComponentProps<typeof ColorPickerFormatTrigger> {}

export const ColorPickerLabel = withContext(ArkColorPicker.Label, "label");
export interface ColorPickerLabelProps
  extends ComponentProps<typeof ColorPickerLabel> {}

export const ColorPickerPositioner = withContext(
  ArkColorPicker.Positioner,
  "positioner",
);
export interface ColorPickerPositionerProps
  extends ComponentProps<typeof ColorPickerPositioner> {}

export const ColorPickerSwatch = withContext(ArkColorPicker.Swatch, "swatch");
export interface ColorPickerSwatchProps
  extends ComponentProps<typeof ColorPickerSwatch> {}

export const ColorPickerSwatchGroup = withContext(
  ArkColorPicker.SwatchGroup,
  "swatchGroup",
);
export interface ColorPickerSwatchGroupProps
  extends ComponentProps<typeof ColorPickerSwatchGroup> {}

// TODO use in prebuilt `ColorPicker` component
const ColorPickerSwatchIndicator = withContext(
  ArkColorPicker.SwatchIndicator,
  "swatchIndicator",
);
export interface ColorPickerSwatchIndicatorProps
  extends ComponentProps<typeof ColorPickerSwatchIndicator> {}

export const ColorPickerSwatchTrigger = withContext(
  ArkColorPicker.SwatchTrigger,
  "swatchTrigger",
);
export interface ColorPickerSwatchTriggerProps
  extends ComponentProps<typeof ColorPickerSwatchTrigger> {}

export const ColorPickerTransparencyGrid = withContext(
  ArkColorPicker.TransparencyGrid,
  "transparencyGrid",
);
export interface ColorPickerTransparencyGridProps
  extends ComponentProps<typeof ColorPickerTransparencyGrid> {}

export const ColorPickerTrigger = withContext(
  ArkColorPicker.Trigger,
  "trigger",
);
export interface ColorPickerTriggerProps
  extends ComponentProps<typeof ColorPickerTrigger> {}

// TODO use in prebuilt `ColorPicker` component
const ColorPickerValueText = withContext(ArkColorPicker.ValueText, "valueText");
export interface ColorPickerValueTextProps
  extends ComponentProps<typeof ColorPickerValueText> {}

// TODO use in prebuilt `ColorPicker` component
const ColorPickerView = withContext(ArkColorPicker.View, "view");
export interface ColorPickerViewProps
  extends ComponentProps<typeof ColorPickerView> {}

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
                <Text size="xs" fontWeight="medium" color="foreground.default">
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
