import { ColorPicker as ArkColorPicker } from "@ark-ui/react/color-picker";
import { IoMdColorFilter } from "react-icons/io";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import Text from "components/typography/Text/Text";
import { HStack, Stack, styled } from "generated/panda/jsx";
import { colorPicker } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(colorPicker);

export const ColorPickerContext = ArkColorPicker.Context;
export interface ColorPickerContextProps
  extends Assign<JsxStyleProps, ArkColorPicker.ContextProps> {}

export const ColorPickerRoot = withProvider(
  styled(ArkColorPicker.Root),
  "root",
);
export interface ColorPickerRootProps
  extends Assign<JsxStyleProps, ArkColorPicker.RootProps> {}

export const ColorPickerArea = withContext(styled(ArkColorPicker.Area), "area");
export interface ColorPickerAreaProps
  extends Assign<JsxStyleProps, ArkColorPicker.AreaProps> {}

export const ColorPickerAreaBackground = withContext(
  styled(ArkColorPicker.AreaBackground),
  "areaBackground",
);
export interface ColorPickerAreaBackgroundProps
  extends Assign<JsxStyleProps, ArkColorPicker.AreaBackgroundProps> {}

export const ColorPickerAreaThumb = withContext(
  styled(ArkColorPicker.AreaThumb),
  "areaThumb",
);
export interface ColorPickerAreaThumbProps
  extends Assign<JsxStyleProps, ArkColorPicker.AreaThumbProps> {}

export const ColorPickerChannelInput = withContext(
  styled(ArkColorPicker.ChannelInput),
  "channelInput",
);
export interface ColorPickerChannelInputProps
  extends Assign<JsxStyleProps, ArkColorPicker.ChannelInputProps> {}

export const ColorPickerChannelSlider = withContext(
  styled(ArkColorPicker.ChannelSlider),
  "channelSlider",
);
export interface ColorPickerChannelSliderProps
  extends Assign<JsxStyleProps, ArkColorPicker.ChannelSliderProps> {}

export const ColorPickerChannelSliderThumb = withContext(
  styled(ArkColorPicker.ChannelSliderThumb),
  "channelSliderThumb",
);
export interface ColorPickerChannelSliderThumbProps
  extends Assign<JsxStyleProps, ArkColorPicker.ChannelSliderThumbProps> {}

export const ColorPickerChannelSliderTrack = withContext(
  styled(ArkColorPicker.ChannelSliderTrack),
  "channelSliderTrack",
);
export interface ColorPickerChannelSliderTrackProps
  extends Assign<JsxStyleProps, ArkColorPicker.ChannelSliderTrackProps> {}

export const ColorPickerContent = withContext(
  styled(ArkColorPicker.Content),
  "content",
);
export interface ColorPickerContentProps
  extends Assign<JsxStyleProps, ArkColorPicker.ContentProps> {}

export const ColorPickerControl = withContext(
  styled(ArkColorPicker.Control),
  "control",
);
export interface ColorPickerControlProps
  extends Assign<JsxStyleProps, ArkColorPicker.ControlProps> {}

export const ColorPickerEyeDropperTrigger = withContext(
  styled(ArkColorPicker.EyeDropperTrigger),
  "eyeDropperTrigger",
);
export interface ColorPickerEyeDropperTriggerProps
  extends Assign<JsxStyleProps, ArkColorPicker.EyeDropperTriggerProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerFormatSelect = withContext(
  styled(ArkColorPicker.FormatSelect),
  "formatSelect",
);
export interface ColorPickerFormatSelectProps
  extends Assign<JsxStyleProps, ArkColorPicker.FormatSelectProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerFormatTrigger = withContext(
  styled(ArkColorPicker.FormatTrigger),
  "formatTrigger",
);
export interface ColorPickerFormatTriggerProps
  extends Assign<JsxStyleProps, ArkColorPicker.FormatTriggerProps> {}

export const ColorPickerLabel = withContext(
  styled(ArkColorPicker.Label),
  "label",
);
export interface ColorPickerLabelProps
  extends Assign<JsxStyleProps, ArkColorPicker.LabelProps> {}

export const ColorPickerPositioner = withContext(
  styled(ArkColorPicker.Positioner),
  "positioner",
);
export interface ColorPickerPositionerProps
  extends Assign<JsxStyleProps, ArkColorPicker.PositionerProps> {}

export const ColorPickerSwatch = withContext(
  styled(ArkColorPicker.Swatch),
  "swatch",
);
export interface ColorPickerSwatchProps
  extends Assign<JsxStyleProps, ArkColorPicker.SwatchProps> {}

export const ColorPickerSwatchGroup = withContext(
  styled(ArkColorPicker.SwatchGroup),
  "swatchGroup",
);
export interface ColorPickerSwatchGroupProps
  extends Assign<JsxStyleProps, ArkColorPicker.SwatchGroupProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerSwatchIndicator = withContext(
  styled(ArkColorPicker.SwatchIndicator),
  "swatchIndicator",
);
export interface ColorPickerSwatchIndicatorProps
  extends Assign<JsxStyleProps, ArkColorPicker.SwatchIndicatorProps> {}

export const ColorPickerSwatchTrigger = withContext(
  styled(ArkColorPicker.SwatchTrigger),
  "swatchTrigger",
);
export interface ColorPickerSwatchTriggerProps
  extends Assign<JsxStyleProps, ArkColorPicker.SwatchTriggerProps> {}

export const ColorPickerTransparencyGrid = withContext(
  styled(ArkColorPicker.TransparencyGrid),
  "transparencyGrid",
);
export interface ColorPickerTransparencyGridProps
  extends Assign<JsxStyleProps, ArkColorPicker.TransparencyGridProps> {}

export const ColorPickerTrigger = withContext(
  styled(ArkColorPicker.Trigger),
  "trigger",
);
export interface ColorPickerTriggerProps
  extends Assign<JsxStyleProps, ArkColorPicker.TriggerProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerValueText = withContext(
  styled(ArkColorPicker.ValueText),
  "valueText",
);
export interface ColorPickerValueTextProps
  extends Assign<JsxStyleProps, ArkColorPicker.ValueTextProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerView = withContext(styled(ArkColorPicker.View), "view");
export interface ColorPickerViewProps
  extends Assign<JsxStyleProps, ArkColorPicker.ViewProps> {}

export interface ColorPickerProps extends ColorPickerRootProps {
  /** Label for the color picker. Defaults to "Color Picker". */
  label?: ReactNode;
  /** Color swatch presets. */
  presets?: string[];
  labelProps?: ColorPickerLabelProps;
  controlProps?: ColorPickerControlProps;
  channelInputProps?: ColorPickerChannelInputProps;
  triggerProps?: ColorPickerTriggerProps;
  swatchGroupProps?: ColorPickerSwatchGroupProps;
  swatchTriggerProps?: ColorPickerSwatchTriggerProps;
  swatchProps?: ColorPickerSwatchProps;
  positionerProps?: ColorPickerPositionerProps;
  contentProps?: ColorPickerContentProps;
  areaProps?: ColorPickerAreaProps;
  areaBackgroundProps?: ColorPickerAreaBackgroundProps;
  areaThumbProps?: ColorPickerAreaThumbProps;
  eyeDropperTriggerProps?: ColorPickerEyeDropperTriggerProps;
  channelSliderProps?: ColorPickerChannelSliderProps;
  channelSliderThumbProps?: ColorPickerChannelSliderThumbProps;
  channelSliderTrackProps?: ColorPickerChannelSliderTrackProps;
  transparencyGridProps?: ColorPickerTransparencyGridProps;
}

/**
 * Color picker.
 */
const ColorPicker = ({
  label = "Color Picker",
  presets,
  labelProps,
  controlProps,
  channelInputProps,
  triggerProps,
  swatchGroupProps,
  swatchTriggerProps,
  swatchProps,
  positionerProps,
  contentProps,
  areaProps,
  areaBackgroundProps,
  areaThumbProps,
  eyeDropperTriggerProps,
  channelSliderProps,
  channelSliderThumbProps,
  channelSliderTrackProps,
  transparencyGridProps,
  ...rest
}: ColorPickerProps) => (
  <ColorPickerRoot {...rest}>
    {label && <ColorPickerLabel {...labelProps}>{label}</ColorPickerLabel>}

    <ColorPickerControl {...controlProps}>
      <ColorPickerChannelInput asChild channel="hex" {...channelInputProps}>
        <Input />
      </ColorPickerChannelInput>

      <ColorPickerTrigger asChild {...triggerProps}>
        <Button variant="outline">
          <ColorPickerContext>
            {(colorPicker) => (
              <ColorPickerSwatch value={colorPicker.value} {...swatchProps} />
            )}
          </ColorPickerContext>
        </Button>
      </ColorPickerTrigger>
    </ColorPickerControl>

    <ColorPickerPositioner {...positionerProps}>
      <ColorPickerContent {...contentProps}>
        <Stack gap={3}>
          <ColorPickerArea {...areaProps}>
            <ColorPickerAreaBackground {...areaBackgroundProps} />

            <ColorPickerAreaThumb {...areaThumbProps} />
          </ColorPickerArea>

          <HStack gap={3}>
            <ColorPickerEyeDropperTrigger asChild {...eyeDropperTriggerProps}>
              <Button size="xs" variant="outline" aria-label="Pick color">
                <IoMdColorFilter />
              </Button>
            </ColorPickerEyeDropperTrigger>

            <Stack gap={2} flex={1}>
              <ColorPickerChannelSlider channel="hue" {...channelSliderProps}>
                <ColorPickerChannelSliderTrack {...channelSliderTrackProps} />

                <ColorPickerChannelSliderThumb {...channelSliderThumbProps} />
              </ColorPickerChannelSlider>

              <ColorPickerChannelSlider channel="alpha" {...channelSliderProps}>
                <ColorPickerTransparencyGrid
                  size="8px"
                  {...transparencyGridProps}
                />

                <ColorPickerChannelSliderTrack {...channelSliderTrackProps} />

                <ColorPickerChannelSliderThumb {...channelSliderThumbProps} />
              </ColorPickerChannelSlider>
            </Stack>
          </HStack>

          <HStack>
            <ColorPickerChannelInput
              asChild
              channel="hex"
              {...channelInputProps}
            >
              <Input size="2xs" />
            </ColorPickerChannelInput>

            <ColorPickerChannelInput
              asChild
              channel="alpha"
              {...channelInputProps}
            >
              <Input size="2xs" />
            </ColorPickerChannelInput>
          </HStack>

          <Stack gap={1.5}>
            <Text size="xs" fontWeight="medium" color="foreground.default">
              Saved Colors
            </Text>

            <ColorPickerSwatchGroup {...swatchGroupProps}>
              {presets?.map((color, id) => (
                <ColorPickerSwatchTrigger
                  key={id}
                  value={color}
                  {...swatchTriggerProps}
                >
                  <ColorPickerSwatch value={color} {...swatchProps} />
                </ColorPickerSwatchTrigger>
              ))}
            </ColorPickerSwatchGroup>
          </Stack>
        </Stack>
      </ColorPickerContent>
    </ColorPickerPositioner>
  </ColorPickerRoot>
);

export default ColorPicker;
