import { ColorPicker as ArkColorPicker } from "@ark-ui/react/color-picker";
import { IoMdColorFilter } from "react-icons/io";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import Text from "components/typography/Text/Text";
import { HStack, Stack, styled } from "generated/panda/jsx";
import { colorPicker } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ColorPickerVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(colorPicker);

export const ColorPickerContext = ArkColorPicker.Context;
export interface ColorPickerContextProps
  extends AssignJSXStyleProps<ArkColorPicker.ContextProps> {}

export const ColorPickerRoot = withProvider(
  styled(ArkColorPicker.Root),
  "root",
);
export interface ColorPickerRootProps
  extends AssignJSXStyleProps<ArkColorPicker.RootProps>,
    ColorPickerVariantProps {}

export const ColorPickerArea = withContext(styled(ArkColorPicker.Area), "area");
export interface ColorPickerAreaProps
  extends AssignJSXStyleProps<ArkColorPicker.AreaProps> {}

export const ColorPickerAreaBackground = withContext(
  styled(ArkColorPicker.AreaBackground),
  "areaBackground",
);
export interface ColorPickerAreaBackgroundProps
  extends AssignJSXStyleProps<ArkColorPicker.AreaBackgroundProps> {}

export const ColorPickerAreaThumb = withContext(
  styled(ArkColorPicker.AreaThumb),
  "areaThumb",
);
export interface ColorPickerAreaThumbProps
  extends AssignJSXStyleProps<ArkColorPicker.AreaThumbProps> {}

export const ColorPickerChannelInput = withContext(
  styled(ArkColorPicker.ChannelInput),
  "channelInput",
);
export interface ColorPickerChannelInputProps
  extends AssignJSXStyleProps<ArkColorPicker.ChannelInputProps> {}

export const ColorPickerChannelSlider = withContext(
  styled(ArkColorPicker.ChannelSlider),
  "channelSlider",
);
export interface ColorPickerChannelSliderProps
  extends AssignJSXStyleProps<ArkColorPicker.ChannelSliderProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerChannelSliderLabel = withContext(
  styled(ArkColorPicker.ChannelSliderLabel),
  "channelSliderLabel",
);
export interface ColorPickerSliderLabelProps
  extends AssignJSXStyleProps<ArkColorPicker.ChannelSliderLabelProps> {}

export const ColorPickerChannelSliderThumb = withContext(
  styled(ArkColorPicker.ChannelSliderThumb),
  "channelSliderThumb",
);
export interface ColorPickerChannelSliderThumbProps
  extends AssignJSXStyleProps<ArkColorPicker.ChannelSliderThumbProps> {}

export const ColorPickerChannelSliderTrack = withContext(
  styled(ArkColorPicker.ChannelSliderTrack),
  "channelSliderTrack",
);
export interface ColorPickerChannelSliderTrackProps
  extends AssignJSXStyleProps<ArkColorPicker.ChannelSliderTrackProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerSliderValueText = withContext(
  styled(ArkColorPicker.ChannelSliderValueText),
  "channelSliderValueText",
);
export interface ColorPickerSliderValueTextProps
  extends AssignJSXStyleProps<ArkColorPicker.ChannelSliderValueTextProps> {}

export const ColorPickerContent = withContext(
  styled(ArkColorPicker.Content),
  "content",
);
export interface ColorPickerContentProps
  extends AssignJSXStyleProps<ArkColorPicker.ContentProps> {}

export const ColorPickerControl = withContext(
  styled(ArkColorPicker.Control),
  "control",
);
export interface ColorPickerControlProps
  extends AssignJSXStyleProps<ArkColorPicker.ControlProps> {}

export const ColorPickerEyeDropperTrigger = withContext(
  styled(ArkColorPicker.EyeDropperTrigger),
  "eyeDropperTrigger",
);
export interface ColorPickerEyeDropperTriggerProps
  extends AssignJSXStyleProps<ArkColorPicker.EyeDropperTriggerProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerFormatSelect = withContext(
  styled(ArkColorPicker.FormatSelect),
  "formatSelect",
);
export interface ColorPickerFormatSelectProps
  extends AssignJSXStyleProps<ArkColorPicker.FormatSelectProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerFormatTrigger = withContext(
  styled(ArkColorPicker.FormatTrigger),
  "formatTrigger",
);
export interface ColorPickerFormatTriggerProps
  extends AssignJSXStyleProps<ArkColorPicker.FormatTriggerProps> {}

export const ColorPickerLabel = withContext(
  styled(ArkColorPicker.Label),
  "label",
);
export interface ColorPickerLabelProps
  extends AssignJSXStyleProps<ArkColorPicker.LabelProps> {}

export const ColorPickerPositioner = withContext(
  styled(ArkColorPicker.Positioner),
  "positioner",
);
export interface ColorPickerPositionerProps
  extends AssignJSXStyleProps<ArkColorPicker.PositionerProps> {}

export const ColorPickerSwatch = withContext(
  styled(ArkColorPicker.Swatch),
  "swatch",
);
export interface ColorPickerSwatchProps
  extends AssignJSXStyleProps<ArkColorPicker.SwatchProps> {}

export const ColorPickerSwatchGroup = withContext(
  styled(ArkColorPicker.SwatchGroup),
  "swatchGroup",
);
export interface ColorPickerSwatchGroupProps
  extends AssignJSXStyleProps<ArkColorPicker.SwatchGroupProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerSwatchIndicator = withContext(
  styled(ArkColorPicker.SwatchIndicator),
  "swatchIndicator",
);
export interface ColorPickerSwatchIndicatorProps
  extends AssignJSXStyleProps<ArkColorPicker.SwatchIndicatorProps> {}

export const ColorPickerSwatchTrigger = withContext(
  styled(ArkColorPicker.SwatchTrigger),
  "swatchTrigger",
);
export interface ColorPickerSwatchTriggerProps
  extends AssignJSXStyleProps<ArkColorPicker.SwatchTriggerProps> {}

export const ColorPickerTransparencyGrid = withContext(
  styled(ArkColorPicker.TransparencyGrid),
  "transparencyGrid",
);
export interface ColorPickerTransparencyGridProps
  extends AssignJSXStyleProps<ArkColorPicker.TransparencyGridProps> {}

export const ColorPickerTrigger = withContext(
  styled(ArkColorPicker.Trigger),
  "trigger",
);
export interface ColorPickerTriggerProps
  extends AssignJSXStyleProps<ArkColorPicker.TriggerProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerValueSwatch = withContext(
  styled(ArkColorPicker.ValueSwatch),
  "valueSwatch",
);
export interface ColorPickerValueSwatchProps
  extends AssignJSXStyleProps<ArkColorPicker.ValueSwatchProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerValueText = withContext(
  styled(ArkColorPicker.ValueText),
  "valueText",
);
export interface ColorPickerValueTextProps
  extends AssignJSXStyleProps<ArkColorPicker.ValueTextProps> {}

// TODO use in prebuilt `ColorPicker` component
export const ColorPickerView = withContext(styled(ArkColorPicker.View), "view");
export interface ColorPickerViewProps
  extends AssignJSXStyleProps<ArkColorPicker.ViewProps> {}

export const ColorPickerHiddenInput = ArkColorPicker.HiddenInput;
export interface ColorPickerHiddenInputProps
  extends AssignJSXStyleProps<ArkColorPicker.HiddenInputProps> {}

export interface ColorPickerProps extends ColorPickerRootProps {
  /** Label for the color picker. Defaults to "Color Picker". */
  label?: ReactNode;
  /** Color swatch presets. */
  presets?: string[];
  /** Label props. */
  labelProps?: ColorPickerLabelProps;
  /** Control props. */
  controlProps?: ColorPickerControlProps;
  /** Channel input props. */
  channelInputProps?: ColorPickerChannelInputProps;
  /** Trigger props. */
  triggerProps?: ColorPickerTriggerProps;
  /** Swatch group props. */
  swatchGroupProps?: ColorPickerSwatchGroupProps;
  /** Swatch trigger props. */
  swatchTriggerProps?: ColorPickerSwatchTriggerProps;
  /** Swatch props. */
  swatchProps?: ColorPickerSwatchProps;
  /** Positioner props. */
  positionerProps?: ColorPickerPositionerProps;
  /** Content props. */
  contentProps?: ColorPickerContentProps;
  /** Area props. */
  areaProps?: ColorPickerAreaProps;
  /** Area background props. */
  areaBackgroundProps?: ColorPickerAreaBackgroundProps;
  /** Area thumb props. */
  areaThumbProps?: ColorPickerAreaThumbProps;
  /** Eye dropper trigger props. */
  eyeDropperTriggerProps?: ColorPickerEyeDropperTriggerProps;
  /** Channel slider props. */
  channelSliderProps?: ColorPickerChannelSliderProps;
  /** Channel slider thumb props. */
  channelSliderThumbProps?: ColorPickerChannelSliderThumbProps;
  /** Channel slider track props. */
  channelSliderTrackProps?: ColorPickerChannelSliderTrackProps;
  /** Transparency grid props. */
  transparencyGridProps?: ColorPickerTransparencyGridProps;
  /** Hidden input props. */
  hiddenInputProps?: ColorPickerHiddenInputProps;
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
  hiddenInputProps,
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

    <ColorPickerHiddenInput {...hiddenInputProps} />
  </ColorPickerRoot>
);

export default ColorPicker;
