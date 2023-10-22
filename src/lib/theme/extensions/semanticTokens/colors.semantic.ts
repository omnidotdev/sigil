import { defineSemanticTokens } from "@pandacss/dev";

import type { SemanticTokens } from "@pandacss/dev";

/**
 * Color semantic tokens.
 */
const colors: SemanticTokens["colors"] = defineSemanticTokens.colors({
  // TODO success, warning, danger, ...
  background: {
    canvas: {
      value: {
        base: "{colors.neutral.25}",
        _dark: "{colors.neutral.950}",
      },
    },
    default: {
      value: { base: "{colors.white}", _dark: "{colors.neutral.950}" },
    },
    subtle: {
      value: {
        base: "{colors.neutral.50}",
        _dark: "{colors.neutral.100}",
      },
    },
    muted: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.neutral.200}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.300}",
      },
    },
    disabled: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.neutral.200}",
      },
    },
  },
  foreground: {
    default: {
      value: { base: "{colors.neutral.950}", _dark: "{colors.white}" },
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
      value: "{colors.neutral.500}",
    },
  },
  accent: {
    default: {
      value: {
        base: "{colors.brand.primary.500}",
        _dark: "{colors.brand.primary.300}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.brand.primary.600}",
        _dark: "{colors.brand.primary.400}",
      },
    },
    foreground: {
      value: { base: "{colors.white}", _dark: "{colors.neutral.950}" },
    },
  },
  border: {
    default: {
      value: "{colors.neutral.500}",
    },
    muted: {
      value: "{colors.neutral.400}",
    },
    subtle: {
      value: "{colors.neutral.200}",
    },
    disabled: {
      value: "{colors.neutral.300}",
    },
    outline: {
      value: "{colors.neutral.700}",
    },
    accent: {
      value: "{colors.accent.default}",
    },
  },
});

export default colors;
