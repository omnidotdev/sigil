import { defineTokens } from "@pandacss/dev";
import { assign } from "radash";

import { hexToRgba } from "../../../util";

import type { Tokens } from "@pandacss/dev";
import type { Recursive, Token } from "@pandacss/types";

/**
 * Generate alpha (transparent) colors from base colors.
 */
export const generateAlphaColors = (
  colors: Tokens["colors"],
): Recursive<Token<string>> => {
  const alphaColors: Tokens["colors"] = {};

  Object.entries(colors as Recursive<Token<string>>).forEach(
    ([key, colorValue]) => {
      Object.entries(colorValue).forEach(([valueKey, { value }]) => {
        // skip default color
        if (valueKey === "DEFAULT") return;

        const alphaValue = `${valueKey}a` as const;

        if (!alphaColors[key]) alphaColors[key] = {};

        // @ts-ignore indexing against Panda `Token`s is safe here
        alphaColors[key][alphaValue] = {
          value: hexToRgba({ hex: value, alpha: +`0.${valueKey}` }),
        };
      });
    },
  );

  return alphaColors;
};

// TODO `25` key for all colors

/**
 * Omni colors, represented by 6 gemstones.
 */
export const omniColors: Tokens["colors"] = {
  amethyst: {
    DEFAULT: { value: "{colors.omni.amethyst.500}" },
    50: { value: "#fdf4ff" },
    100: { value: "#fae9fe" },
    200: { value: "#f5d1fd" },
    300: { value: "#f0adfa" },
    400: { value: "#e77cf6" },
    500: { value: "#d84aeb" },
    600: { value: "#bf2acf" },
    700: { value: "#a11fac" },
    800: { value: "#851c8c" },
    900: { value: "#6f1c73" },
    950: { value: "#49064c" },
  },
  citrine: {
    DEFAULT: { value: "{colors.omni.citrine.500}" },
    50: { value: "#fcf7ee" },
    100: { value: "#f7eace" },
    200: { value: "#eed399" },
    300: { value: "#e6b763" },
    400: { value: "#dfa040" },
    500: { value: "#d78129" },
    600: { value: "#be6221" },
    700: { value: "#9e461f" },
    800: { value: "#81381f" },
    900: { value: "#6b2f1c" },
    950: { value: "#3d170b" },
  },
  emerald: {
    DEFAULT: { value: "{colors.omni.emerald.500}" },
    50: { value: "#effef7" },
    100: { value: "#dafeef" },
    200: { value: "#b8fadd" },
    300: { value: "#81f4c3" },
    400: { value: "#43e5a0" },
    500: { value: "#1acd81" },
    600: { value: "#0fa968" },
    700: { value: "#108554" },
    800: { value: "#126945" },
    900: { value: "#11563a" },
    950: { value: "#03301f" },
  },
  labradorite: {
    DEFAULT: { value: "{colors.omni.labradorite.600}" },
    50: { value: "#effefc" },
    100: { value: "#c7fff9" },
    200: { value: "#8ffff3" },
    300: { value: "#4ff9ed" },
    400: { value: "#1be6de" },
    500: { value: "#02cac5" },
    600: { value: "#00a3a2" },
    700: { value: "#047f81" },
    800: { value: "#096466" },
    900: { value: "#0d5254" },
    950: { value: "#003134" },
  },
  ruby: {
    DEFAULT: { value: "{colors.omni.ruby.500}" },
    50: { value: "#fff1f2" },
    100: { value: "#ffe0e3" },
    200: { value: "#ffc6cb" },
    300: { value: "#ff9fa8" },
    400: { value: "#ff6876" },
    500: { value: "#fb384a" },
    600: { value: "#e9192c" },
    700: { value: "#c41122" },
    800: { value: "#a2121f" },
    900: { value: "#861620" },
    950: { value: "#49060c" },
  },
  sapphire: {
    DEFAULT: { value: "{colors.omni.sapphire.500}" },
    50: { value: "#ebf7ff" },
    100: { value: "#d2ecff" },
    200: { value: "#afdfff" },
    300: { value: "#78cdff" },
    400: { value: "#39b0ff" },
    500: { value: "#0c89ff" },
    600: { value: "#0063ff" },
    700: { value: "#004bff" },
    800: { value: "#003dd3" },
    900: { value: "#0339a5" },
    950: { value: "#082567" },
  },
};

/**
 * Brand colors.
 */
export const brandColors: Tokens["colors"] = {
  primary: omniColors["labradorite"],
  secondary: omniColors["amethyst"],
  tertiary: omniColors["emerald"],
  quaternary: omniColors["citrine"],
  quinary: omniColors["ruby"],
  senary: omniColors["sapphire"],
};

/**
 * Utility colors.
 */
export const utilityColors: Tokens["colors"] = {
  current: { value: "currentColor" },
  transparent: { value: "rgb(0 0 0 / 0)" },
  black: {
    DEFAULT: { value: "#000000" },
    "50a": { value: "rgba(0, 0, 0, 0.05)" },
    "100a": { value: "rgba(0, 0, 0, 0.1)" },
    "150a": { value: "rgba(0, 0, 0, 0.15)" },
    "200a": { value: "rgba(0, 0, 0, 0.2)" },
    "300a": { value: "rgba(0, 0, 0, 0.3)" },
    "400a": { value: "rgba(0, 0, 0, 0.4)" },
    "500a": { value: "rgba(0, 0, 0, 0.5)" },
    "600a": { value: "rgba(0, 0, 0, 0.6)" },
    "700a": { value: "rgba(0, 0, 0, 0.7)" },
    "800a": { value: "rgba(0, 0, 0, 0.8)" },
    "900a": { value: "rgba(0, 0, 0, 0.9)" },
    "950a": { value: "rgba(0, 0, 0, 0.95)" },
  },
  white: {
    DEFAULT: { value: "#ffffff" },
    "50a": { value: "rgba(255, 255, 255, 0.05)" },
    "100a": { value: "rgba(255, 255, 255, 0.1)" },
    "150a": { value: "rgba(255, 255, 255, 0.15)" },
    "200a": { value: "rgba(255, 255, 255, 0.2)" },
    "300a": { value: "rgba(255, 255, 255, 0.3)" },
    "400a": { value: "rgba(255, 255, 255, 0.4)" },
    "500a": { value: "rgba(255, 255, 255, 0.5)" },
    "600a": { value: "rgba(255, 255, 255, 0.6)" },
    "700a": { value: "rgba(255, 255, 255, 0.7)" },
    "800a": { value: "rgba(255, 255, 255, 0.8)" },
    "900a": { value: "rgba(255, 255, 255, 0.9)" },
    "950a": { value: "rgba(255, 255, 255, 0.95)" },
  },
};

/**
 * Base colors.
 */
// TODO extract a semantic alias palette to easily toggle between base color ranges
export const baseColors: Tokens["colors"] = {
  rose: {
    DEFAULT: { value: "{colors.rose.500}" },
    50: { value: "#fff1f2" },
    100: { value: "#ffe4e6" },
    200: { value: "#fecdd3" },
    300: { value: "#fda4af" },
    400: { value: "#fb7185" },
    500: { value: "#f43f5e" },
    600: { value: "#e11d48" },
    700: { value: "#be123c" },
    800: { value: "#9f1239" },
    900: { value: "#881337" },
    950: { value: "#4c0519" },
  },
  "dusty-rose": {
    DEFAULT: { value: "{colors.dusty-rose.500}" },
    50: { value: "#faf5f8" },
    100: { value: "#f6edf2" },
    200: { value: "#eedce7" },
    300: { value: "#e1c0d3" },
    400: { value: "#cd99b6" },
    500: { value: "#ba7a9c" },
    600: { value: "#aa6787" },
    700: { value: "#8c4a67" },
    800: { value: "#753f57" },
    900: { value: "#63384a" },
    950: { value: "#3a1d2a" },
  },
  pink: {
    DEFAULT: { value: "{colors.pink.500}" },
    50: { value: "#fdf2f8" },
    100: { value: "#fce7f3" },
    200: { value: "#fbcfe8" },
    300: { value: "#f9a8d4" },
    400: { value: "#f472b6" },
    500: { value: "#ec4899" },
    600: { value: "#db2777" },
    700: { value: "#be185d" },
    800: { value: "#9d174d" },
    900: { value: "#831843" },
    950: { value: "#500724" },
  },
  fuchsia: {
    DEFAULT: { value: "{colors.fuchsia.500}" },
    50: { value: "#fdf4ff" },
    100: { value: "#fae8ff" },
    200: { value: "#f5d0fe" },
    300: { value: "#f0abfc" },
    400: { value: "#e879f9" },
    500: { value: "#d946ef" },
    600: { value: "#c026d3" },
    700: { value: "#a21caf" },
    800: { value: "#86198f" },
    900: { value: "#701a75" },
    950: { value: "#4a044e" },
  },
  purple: {
    DEFAULT: { value: "{colors.purple.500}" },
    50: { value: "#faf5ff" },
    100: { value: "#f3e8ff" },
    200: { value: "#e9d5ff" },
    300: { value: "#d8b4fe" },
    400: { value: "#c084fc" },
    500: { value: "#a855f7" },
    600: { value: "#9333ea" },
    700: { value: "#7e22ce" },
    800: { value: "#6b21a8" },
    900: { value: "#581c87" },
    950: { value: "#3b0764" },
  },
  violet: {
    DEFAULT: { value: "{colors.violet.500}" },
    50: { value: "#f5f3ff" },
    100: { value: "#ede9fe" },
    200: { value: "#ddd6fe" },
    300: { value: "#c4b5fd" },
    400: { value: "#a78bfa" },
    500: { value: "#8b5cf6" },
    600: { value: "#7c3aed" },
    700: { value: "#6d28d9" },
    800: { value: "#5b21b6" },
    900: { value: "#4c1d95" },
    950: { value: "#2e1065" },
  },
  indigo: {
    DEFAULT: { value: "{colors.indigo.500}" },
    50: { value: "#eef2ff" },
    100: { value: "#e0e7ff" },
    200: { value: "#c7d2fe" },
    300: { value: "#a5b4fc" },
    400: { value: "#818cf8" },
    500: { value: "#6366f1" },
    600: { value: "#4f46e5" },
    700: { value: "#4338ca" },
    800: { value: "#3730a3" },
    900: { value: "#312e81" },
    950: { value: "#1e1b4b" },
  },
  blue: {
    DEFAULT: { value: "{colors.blue.500}" },
    50: { value: "#eff6ff" },
    100: { value: "#dbeafe" },
    200: { value: "#bfdbfe" },
    300: { value: "#93c5fd" },
    400: { value: "#60a5fa" },
    500: { value: "#3b82f6" },
    600: { value: "#2563eb" },
    700: { value: "#1d4ed8" },
    800: { value: "#1e40af" },
    900: { value: "#1e3a8a" },
    950: { value: "#172554" },
  },
  sky: {
    DEFAULT: { value: "{colors.sky.500}" },
    50: { value: "#f0f9ff" },
    100: { value: "#e0f2fe" },
    200: { value: "#bae6fd" },
    300: { value: "#7dd3fc" },
    400: { value: "#38bdf8" },
    500: { value: "#0ea5e9" },
    600: { value: "#0284c7" },
    700: { value: "#0369a1" },
    800: { value: "#075985" },
    900: { value: "#0c4a6e" },
    950: { value: "#082f49" },
  },
  cyan: {
    DEFAULT: { value: "{colors.cyan.500}" },
    50: { value: "#ecfeff" },
    100: { value: "#cffafe" },
    200: { value: "#a5f3fc" },
    300: { value: "#67e8f9" },
    400: { value: "#22d3ee" },
    500: { value: "#06b6d4" },
    600: { value: "#0891b2" },
    700: { value: "#0e7490" },
    800: { value: "#155e75" },
    900: { value: "#164e63" },
    950: { value: "#083344" },
  },
  teal: {
    DEFAULT: { value: "{colors.teal.500}" },
    50: { value: "#f0fdfa" },
    100: { value: "#ccfbf1" },
    200: { value: "#99f6e4" },
    300: { value: "#5eead4" },
    400: { value: "#2dd4bf" },
    500: { value: "#14b8a6" },
    600: { value: "#0d9488" },
    700: { value: "#0f766e" },
    800: { value: "#115e59" },
    900: { value: "#134e4a" },
    950: { value: "#042f2e" },
  },
  emerald: {
    DEFAULT: { value: "{colors.emerald.500}" },
    50: { value: "#ecfdf5" },
    100: { value: "#d1fae5" },
    200: { value: "#a7f3d0" },
    300: { value: "#6ee7b7" },
    400: { value: "#34d399" },
    500: { value: "#10b981" },
    600: { value: "#059669" },
    700: { value: "#047857" },
    800: { value: "#065f46" },
    900: { value: "#064e3b" },
    950: { value: "#022c22" },
  },
  green: {
    DEFAULT: { value: "{colors.green.500}" },
    50: { value: "#f0fdf4" },
    100: { value: "#dcfce7" },
    200: { value: "#bbf7d0" },
    300: { value: "#86efac" },
    400: { value: "#4ade80" },
    500: { value: "#22c55e" },
    600: { value: "#16a34a" },
    700: { value: "#15803d" },
    800: { value: "#166534" },
    900: { value: "#14532d" },
    950: { value: "#052e16" },
  },
  lime: {
    DEFAULT: { value: "{colors.lime.500}" },
    50: { value: "#f7fee7" },
    100: { value: "#ecfccb" },
    200: { value: "#d9f99d" },
    300: { value: "#bef264" },
    400: { value: "#a3e635" },
    500: { value: "#84cc16" },
    600: { value: "#65a30d" },
    700: { value: "#4d7c0f" },
    800: { value: "#3f6212" },
    900: { value: "#365314" },
    950: { value: "#1a2e05" },
  },
  yellow: {
    DEFAULT: { value: "{colors.yellow.500}" },
    50: { value: "#fefce8" },
    100: { value: "#fef9c3" },
    200: { value: "#fef08a" },
    300: { value: "#fde047" },
    400: { value: "#facc15" },
    500: { value: "#eab308" },
    600: { value: "#ca8a04" },
    700: { value: "#a16207" },
    800: { value: "#854d0e" },
    900: { value: "#713f12" },
    950: { value: "#422006" },
  },
  amber: {
    DEFAULT: { value: "{colors.amber.500}" },
    50: { value: "#fffbeb" },
    100: { value: "#fef3c7" },
    200: { value: "#fde68a" },
    300: { value: "#fcd34d" },
    400: { value: "#fbbf24" },
    500: { value: "#f59e0b" },
    600: { value: "#d97706" },
    700: { value: "#b45309" },
    800: { value: "#92400e" },
    900: { value: "#78350f" },
    950: { value: "#451a03" },
  },
  orange: {
    DEFAULT: { value: "{colors.orange.500}" },
    50: { value: "#fff7ed" },
    100: { value: "#ffedd5" },
    200: { value: "#fed7aa" },
    300: { value: "#fdba74" },
    400: { value: "#fb923c" },
    500: { value: "#f97316" },
    600: { value: "#ea580c" },
    700: { value: "#c2410c" },
    800: { value: "#9a3412" },
    900: { value: "#7c2d12" },
    950: { value: "#431407" },
  },
  red: {
    DEFAULT: { value: "{colors.red.500}" },
    50: { value: "#fef2f2" },
    100: { value: "#fee2e2" },
    200: { value: "#fecaca" },
    300: { value: "#fca5a5" },
    400: { value: "#f87171" },
    500: { value: "#ef4444" },
    600: { value: "#dc2626" },
    700: { value: "#b91c1c" },
    800: { value: "#991b1b" },
    900: { value: "#7f1d1d" },
    950: { value: "#450a0a" },
  },
  // TODO extract to `metallics`
  bronze: {
    DEFAULT: { value: "{colors.bronze.500}" },
    50: { value: "#f7f6ef" },
    100: { value: "#ece8d5" },
    200: { value: "#dbd1ad" },
    300: { value: "#c6b37e" },
    400: { value: "#b49a5b" },
    500: { value: "#a5884d" },
    600: { value: "#967444" },
    700: { value: "#725436" },
    800: { value: "#614732" },
    900: { value: "#543e2f" },
    950: { value: "#302018" },
  },
  gold: {
    DEFAULT: { value: "{colors.gold.500}" },
    50: { value: "#ffffe7" },
    100: { value: "#feffc1" },
    200: { value: "#fffd86" },
    300: { value: "#fff441" },
    400: { value: "#ffe60d" },
    500: { value: "#ffd700" },
    600: { value: "#d19e00" },
    700: { value: "#a67102" },
    800: { value: "#89580a" },
    900: { value: "#74480f" },
    950: { value: "#442604" },
  },
  // TODO extract to `nature`
  // moss: {},
  // sage: {},
  // seafoam: {},
  // ocean: {},
  // dandelion: {},
};

/**
 * Neutral colors.
 */
export const neutralColors: Tokens["colors"] = {
  silver: {
    DEFAULT: { value: "{colors.silver.500}" },
    25: { value: "#fdfdfd" },
    50: { value: "#fafafa" },
    100: { value: "#f5f5f5" },
    200: { value: "#e5e5e5" },
    300: { value: "#d4d4d4" },
    400: { value: "#a3a3a3" },
    500: { value: "#737373" },
    600: { value: "#525252" },
    700: { value: "#404040" },
    800: { value: "#262626" },
    900: { value: "#171717" },
    950: { value: "#0a0a0a" },
  },
  stone: {
    DEFAULT: { value: "{colors.stone.500}" },
    25: { value: "#fcfcfc" },
    50: { value: "#fafaf9" },
    100: { value: "#f5f5f4" },
    200: { value: "#e7e5e4" },
    300: { value: "#d6d3d1" },
    400: { value: "#a8a29e" },
    500: { value: "#78716c" },
    600: { value: "#57534e" },
    700: { value: "#44403c" },
    800: { value: "#292524" },
    900: { value: "#1c1917" },
    950: { value: "#0c0a09" },
  },
  zinc: {
    DEFAULT: { value: "{colors.zinc.500}" },
    25: { value: "#fcfcfc" },
    50: { value: "#fafafa" },
    100: { value: "#f4f4f5" },
    200: { value: "#e4e4e7" },
    300: { value: "#d4d4d8" },
    400: { value: "#a1a1aa" },
    500: { value: "#71717a" },
    600: { value: "#52525b" },
    700: { value: "#3f3f46" },
    800: { value: "#27272a" },
    900: { value: "#18181b" },
    950: { value: "#09090b" },
  },
  gray: {
    DEFAULT: { value: "{colors.gray.500}" },
    25: { value: "#fcfcfd" },
    50: { value: "#f9fafb" },
    100: { value: "#f3f4f6" },
    200: { value: "#e5e7eb" },
    300: { value: "#d1d5db" },
    400: { value: "#9ca3af" },
    500: { value: "#6b7280" },
    600: { value: "#4b5563" },
    700: { value: "#374151" },
    800: { value: "#1f2937" },
    900: { value: "#111827" },
    950: { value: "#030712" },
  },
  slate: {
    DEFAULT: { value: "{colors.slate.500}" },
    25: { value: "#fcfcfd" },
    50: { value: "#f8fafc" },
    100: { value: "#f1f5f9" },
    200: { value: "#e2e8f0" },
    300: { value: "#cbd5e1" },
    400: { value: "#94a3b8" },
    500: { value: "#64748b" },
    600: { value: "#475569" },
    700: { value: "#334155" },
    800: { value: "#1e293b" },
    900: { value: "#0f172a" },
    950: { value: "#020617" },
  },
};

export const neutrals = assign(
  neutralColors,
  generateAlphaColors(neutralColors),
);

const bases = assign(baseColors, generateAlphaColors(baseColors));

/**
 * Color tokens. Default Panda colors: https://panda-css.com/docs/customization/theme#colors
 */
const colors: Tokens["colors"] = defineTokens.colors({
  omni: assign(omniColors, generateAlphaColors(omniColors)),
  brand: assign(brandColors, generateAlphaColors(brandColors)),
  ...utilityColors,
  ...bases,
  ...neutrals,
});

export default colors;
