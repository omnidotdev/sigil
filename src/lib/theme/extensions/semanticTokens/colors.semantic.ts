import { defineSemanticTokens } from "@pandacss/dev";

import {
  baseColors,
  brandColors,
  neutralColors,
  omniColors,
} from "../tokens/colors.tokens";

import type { SemanticTokens } from "@pandacss/dev";
import type { Recursive, Token, Tokens } from "@pandacss/types";

// TODO allow dynamic palette (theme picker) to select neutral palette, also for accent/core/base colors, border radii, ...
const NEUTRAL_PALETTE = "silver";

/**
 * Generate semantic tokens from base colors. Useful for virtual color (`colorPalette`) usage.
 */
const generateSemanticColors = (colors: Tokens["colors"]) =>
  Object.keys(colors as Recursive<Token<string>>).reduce(
    (semanticColors, color) => {
      semanticColors![color] = {
        default: {
          value: {
            base: `{colors.${color}}`,
            _dark: `{colors.${color}.500}`,
          },
        },
        emphasized: {
          value: {
            base: `{colors.${color}.700}`,
            _dark: `{colors.${color}.400}`,
          },
        },
        foreground: {
          value: {
            base: "{colors.white}",
            _dark: `{colors.neutral.950}`,
          },
        },
        text: {
          value: {
            base: `{colors.${color}.900}`,
            _dark: `{colors.${color}.100}`,
          },
        },
      };

      return semanticColors;
    },
    {} as SemanticTokens["colors"],
  );

/**
 * Color semantic tokens.
 */
const colors: SemanticTokens["colors"] = defineSemanticTokens.colors({
  ...generateSemanticColors(baseColors),
  ...generateSemanticColors(omniColors),
  ...generateSemanticColors(brandColors),
  ...generateSemanticColors(neutralColors),
  success: { value: "{colors.green}" },
  warning: { value: "{colors.yellow}" },
  danger: { value: "{colors.red}" },
  // TODO condense into function
  neutral: {
    DEFAULT: { value: `{colors.${NEUTRAL_PALETTE}.500}` },
    25: { value: `{colors.${NEUTRAL_PALETTE}.25}` },
    50: { value: `{colors.${NEUTRAL_PALETTE}.50}` },
    100: { value: `{colors.${NEUTRAL_PALETTE}.100}` },
    200: { value: `{colors.${NEUTRAL_PALETTE}.200}` },
    300: { value: `{colors.${NEUTRAL_PALETTE}.300}` },
    400: { value: `{colors.${NEUTRAL_PALETTE}.400}` },
    500: { value: `{colors.${NEUTRAL_PALETTE}.500}` },
    600: { value: `{colors.${NEUTRAL_PALETTE}.600}` },
    700: { value: `{colors.${NEUTRAL_PALETTE}.700}` },
    800: { value: `{colors.${NEUTRAL_PALETTE}.800}` },
    900: { value: `{colors.${NEUTRAL_PALETTE}.900}` },
    950: { value: `{colors.${NEUTRAL_PALETTE}.950}` },
    "25a": { value: `{colors.${NEUTRAL_PALETTE}.25a}` },
    "50a": { value: `{colors.${NEUTRAL_PALETTE}.50a}` },
    "100a": { value: `{colors.${NEUTRAL_PALETTE}.100a}` },
    "200a": { value: `{colors.${NEUTRAL_PALETTE}.200a}` },
    "300a": { value: `{colors.${NEUTRAL_PALETTE}.300a}` },
    "400a": { value: `{colors.${NEUTRAL_PALETTE}.400a}` },
    "500a": { value: `{colors.${NEUTRAL_PALETTE}.500a}` },
    "600a": { value: `{colors.${NEUTRAL_PALETTE}.600a}` },
    "700a": { value: `{colors.${NEUTRAL_PALETTE}.700a}` },
    "800a": { value: `{colors.${NEUTRAL_PALETTE}.800a}` },
    "900a": { value: `{colors.${NEUTRAL_PALETTE}.900a}` },
    "950a": { value: `{colors.${NEUTRAL_PALETTE}.950a}` },
    default: { value: `{colors.${NEUTRAL_PALETTE}.700}` },
    emphasized: { value: `{colors.${NEUTRAL_PALETTE}.800}` },
    foreground: { value: "{colors.white}" },
    text: { value: `{colors.${NEUTRAL_PALETTE}.900a}` },
  },
  background: {
    canvas: {
      value: {
        base: "{colors.neutral.25}",
        _dark: "{colors.neutral.950}",
      },
    },
    default: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.neutral.950}",
      },
    },
    subtle: {
      value: {
        base: "{colors.neutral.50}",
        _dark: "{colors.neutral.800}",
      },
    },
    muted: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.neutral.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.700}",
      },
    },
    disabled: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.neutral.800}",
      },
    },
  },
  foreground: {
    default: {
      value: {
        base: "{colors.neutral.950}",
        _dark: "{colors.white}",
      },
    },
    muted: {
      value: {
        base: "{colors.neutral.600}",
        _dark: "{colors.neutral.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.neutral.500}",
        _dark: "{colors.neutral.400}",
      },
    },
    disabled: {
      value: "{colors.neutral.500a}",
    },
  },
  accent: {
    default: {
      value: {
        base: "{colors.brand.primary}",
        _dark: "{colors.brand.primary.500}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.brand.primary.700}",
        _dark: "{colors.brand.primary.400}",
      },
    },
    foreground: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.neutral.950}",
      },
    },
  },
  border: {
    default: {
      value: {
        base: "{colors.neutral.500}",
      },
    },
    muted: {
      value: {
        base: "{colors.neutral.400}",
        _dark: "{colors.neutral.500}",
      },
    },
    subtle: {
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.700}",
      },
    },
    disabled: {
      value: {
        base: "{colors.neutral.300}",
        _dark: "{colors.neutral.600}",
      },
    },
    outline: {
      value: {
        base: "{colors.neutral.700a}",
        _dark: "{colors.neutral.300a}",
      },
    },
  },
});

export default colors;
