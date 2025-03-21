import path from "node:path";
import { fileURLToPath } from "node:url";

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import _import from "eslint-plugin-import";
import jest from "eslint-plugin-jest";
import jestDom from "eslint-plugin-jest-dom";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import testingLibrary from "eslint-plugin-testing-library";
import typescriptSortKeys from "eslint-plugin-typescript-sort-keys";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// TODO migrate to dprint/Biome: https://linear.app/omnidev/issue/OMNI-244/migrate-to-dprintbiome

const eslintConfig = defineConfig([
  globalIgnores([
    // ignored by default: `**/node_modules/`, `.git/`
    "**/build",
    "**/coverage",
    "**/generated",
    "**/examples",
    "**/storybook-static",
    "**/*.hbs",
    // see https://github.com/storybookjs/eslint-plugin-storybook#installation
    "!**/.storybook",
  ]),
  {
    extends: fixupConfigRules(
      compat.extends(
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "plugin:testing-library/react",
        "prettier",
      ),
    ),
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      react: fixupPluginRules(react),
      import: fixupPluginRules(_import),
      "typescript-sort-keys": typescriptSortKeys,
      "unused-imports": unusedImports,
      "prefer-arrow-functions": preferArrowFunctions,
      "react-hooks": fixupPluginRules(reactHooks),
      jest: fixupPluginRules(jest),
      "jest-dom": fixupPluginRules(jestDom),
      "testing-library": fixupPluginRules(testingLibrary),
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {},
      },
    },
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
          "ts-nocheck": "allow-with-description",
        },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      // TODO enable, extremely slow right now (see https://github.com/import-js/eslint-plugin-import/issues/3047)
      // "import/no-cycle": "error",
      "import/no-duplicates": "error",
      "unused-imports/no-unused-imports": "warn",
      "import/order": [
        "error",
        {
          alphabetize: {
            caseInsensitive: true,
            order: "asc",
          },
          groups: [
            "builtin",
            "external",
            ["internal", "unknown", "parent", "sibling", "index", "object"],
            "type",
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
]);

export default eslintConfig;
