import fs from "fs";

import type { PlopTypes } from "@turbo/gen";

// TODO automated tests for generator UX
// TODO set up bypass for DX (https://plopjs.com/documentation/#bypassing-prompts)

const componentCategories = fs
  .readdirSync("src/components")
  .filter((file) => file !== "index.ts");

const recipeOptions = [
  { name: "config (`defineRecipe`)", value: "recipe" },
  { name: "slot (`defineSlotRecipe`)", value: "slotRecipe" },
];

/**
 * Turbo generator configuration, internally based on Plop.
 * @see https://turbo.build/repo/docs/guides/generating-code
 */
const turboGeneratorConfig = (config: PlopTypes.NodePlopAPI): void => {
  config.setGenerator("component", {
    description: "Create files for a new Sigil component",
    prompts: [
      {
        type: "list",
        name: "category",
        message: "What category should the component be in?",
        default: componentCategories.find((category) => category === "core"),
        choices: componentCategories,
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the new component?",
        validate: (input) =>
          // only allow alphabetic characters
          /^[a-zA-Z]+$/.test(input) ||
          // TODO fix process not exiting on validation error
          "Invalid component name, only alphabetic characters are allowed",
      },
      {
        type: "list",
        name: "recipeType",
        message: "What type of Panda style recipe will this component use?",
        choices: recipeOptions,
      },
    ],
    actions: (data) => {
      const camelName = config.getHelper("camelCase")(data?.["name"]),
        pascalName = config.getHelper("pascalCase")(data?.["name"]);

      return [
        // create new files
        {
          type: "addMany",
          base: "templates/component",
          templateFiles: "templates/component/**",
          destination: `src/components/{{ camelCase category }}/${pascalName}`,
        },
        {
          type: "add",
          path: `src/lib/theme/extensions/{{ recipeType }}s/{{ camelName }}.{{ recipeType }}.ts`,
          templateFile: "templates/recipe/{{ recipeType }}.ts.hbs",
        },
        // update index files
        {
          type: "append",
          path: "src/components/{{ camelCase category }}/index.ts",
          // inject at end of file
          // TODO sort once injected, either here or via linter (currently no export sorting rules in place)
          pattern: /$/,
          template: `export { default as ${pascalName} } from "./${pascalName}/${pascalName}";\nexport * from "./${pascalName}/${pascalName}";\n`,
        },
        {
          type: "append",
          path: "src/lib/theme/extensions/{{ recipeType }}s/index.ts",
          // inject at end of file (position before last newline)
          // TODO sort once injected, either here or via linter (currently no export sorting rules in place)
          pattern: /.*(?=\n$)/,
          template: `export { default as ${camelName} } from "./${camelName}.{{ recipeType }}";`,
        },
      ].map((action) => ({
        ...action,
        // inject custom data into each action
        data: { camelName, pascalName },
      }));
    },
  });
};

export default turboGeneratorConfig;
