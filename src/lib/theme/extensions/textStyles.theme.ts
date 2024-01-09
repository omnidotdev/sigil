import { defineTextStyles } from "@pandacss/dev";

/**
 * Text styles.
 */
const textStyles = defineTextStyles({
  "2xs": { value: { fontSize: "2xs", lineHeight: "0.75rem" } },
  xs: { value: { fontSize: "xs", lineHeight: "1.125rem" } },
  sm: { value: { fontSize: "sm", lineHeight: "1.25rem" } },
  md: { value: { fontSize: "md", lineHeight: "1.5rem" } },
  lg: { value: { fontSize: "lg", lineHeight: "1.75rem" } },
  xl: { value: { fontSize: "xl", lineHeight: "1.875rem" } },
  "2xl": { value: { fontSize: "2xl", lineHeight: "2rem" } },
  "3xl": { value: { fontSize: "3xl", lineHeight: "2.375rem" } },
  "4xl": {
    value: { fontSize: "4xl", lineHeight: "2.75rem", letterSpacing: "-0.02em" },
  },
  "5xl": {
    value: { fontSize: "5xl", lineHeight: "3.75rem", letterSpacing: "-0.02em" },
  },
  "6xl": {
    value: { fontSize: "6xl", lineHeight: "4.5rem", letterSpacing: "-0.02em" },
  },
  "7xl": {
    value: { fontSize: "7xl", lineHeight: "5.75rem", letterSpacing: "-0.02em" },
  },
  "8xl": {
    value: { fontSize: "8xl", lineHeight: "6.5rem", letterSpacing: "-0.02em" },
  },
  "9xl": {
    value: { fontSize: "9xl", lineHeight: "7.5rem", letterSpacing: "-0.02em" },
  },
});

export default textStyles;
