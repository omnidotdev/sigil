import type { PlopTypes } from "@turbo/gen";

// TODO automated tests for generator UX
// TODO change startup turbo gen message
// TODO bypass for DX (https://plopjs.com/documentation/#bypassing-prompts)

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
        // TODO dynamic default from array
        default: "core",
        // TODO dynamic list of categories from filesystem
        choices: ["core", "typography"],
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
        // TODO dynamic default from array
        // default: "config (`defineRecipe`)",
        choices: [
          { name: "config (`defineRecipe`)", value: "recipe" },
          { name: "slot (`defineSlotRecipe`)", value: "slotRecipe" },
        ],
      },
    ],
    // TODO update index files (recipe & component)
    actions: (data) => {
      const camelName = config.getHelper("camelCase")(data?.["name"]),
        pascalName = config.getHelper("pascalCase")(data?.["name"]);

      return [
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
      ].map((action) => ({
        ...action,
        // inject custom data into each action
        data: { camelName, pascalName },
      }));
    },
  });
};

export default turboGeneratorConfig;
