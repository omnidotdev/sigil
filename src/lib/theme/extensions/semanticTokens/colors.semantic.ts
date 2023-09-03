import { defineSemanticTokens } from "@pandacss/dev";

/**
 * Color semantic tokens.
 */
const colors = defineSemanticTokens.colors({
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
        base: "{colors.neutral.100}",
        _dark: "{colors.neutral.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.neutral.300}",
        _dark: "{colors.neutral.600}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.neutral.300}",
        _dark: "{colors.neutral.600}",
      },
    },
    disabled: {
      value: {
        base: "{colors.neutral.300}",
        _dark: "{colors.neutral.700}",
      },
    },
  },
  foreground: {
    default: {
      value: { base: "{colors.neutral.950}", _dark: "{colors.white}" },
    },
    emphasized: {
      value: {
        base: "{colors.neutral.700}",
        _dark: "{colors.neutral.200}",
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
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.800}",
      },
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
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.neutral.300}",
        _dark: "{colors.neutral.700}",
      },
    },
    outline: {
      value: {
        base: "{colors.neutral.600}",
        _dark: "{colors.neutral.400}",
      },
    },
    accent: {
      value: "{colors.accent.default}",
    },
    disabled: {
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.800}",
      },
    },
  },
});

export default colors;
