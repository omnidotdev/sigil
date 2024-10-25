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
 @param colors - The base colors to generate semantic tokens from.
 @param prefix - An optional prefix to prepend to the semantic token keys. Some color tokens are nested for organization, e.g. brand colors might be nested under `brand` prefix.
 */
const generateSemanticColors = (
  colors: Tokens["colors"],
  { prefix }: { prefix?: string } = {},
) => {
  /***
   * Calculate the token path for a given color.
   * @param color - The color to calculate the token path for.
   * @param prefix - The optional prefix to prepend to the token path.
   * @returns The token path for the given color.
   */
  const calculateTokenPath = ({
    color,
    prefix,
  }: {
    color: string;
    prefix?: string;
  }) => (prefix ? `{colors.${prefix}.${color}}` : `{colors.${color}}`);

  return Object.keys(colors as Recursive<Token<string>>).reduce(
    (semanticColors, color) => {
      semanticColors![color] = {
        default: {
          value: {
            base: calculateTokenPath({ color, prefix }),
            _dark: calculateTokenPath({ color: `${color}.500`, prefix }),
          },
        },
        emphasized: {
          value: {
            base: calculateTokenPath({ color: `${color}.700`, prefix }),
            _dark: calculateTokenPath({ color: `${color}.400`, prefix }),
          },
        },
        foreground: {
          value: {
            base: "{colors.white}",
            _dark: "{colors.neutral.950}",
          },
        },
        text: {
          value: {
            base: calculateTokenPath({ color: `${color}.900`, prefix }),
            _dark: calculateTokenPath({ color: `${color}.100`, prefix }),
          },
        },
      };

      return semanticColors;
    },
    {} as SemanticTokens["colors"],
  );
};

/**
 * Color semantic tokens.
 */
const colors: SemanticTokens["colors"] = defineSemanticTokens.colors({
  ...generateSemanticColors(baseColors),
  ...generateSemanticColors(omniColors, { prefix: "omni" }),
  ...generateSemanticColors(brandColors, { prefix: "brand" }),
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
