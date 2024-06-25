import type { PlopTypes } from "@turbo/gen";

// TODO automated tests for generator UX

/**
 * Turbo generator configuration, internally based on Plop.
 * @see https://turbo.build/repo/docs/guides/generating-code
 */
const turboGeneratorConfig = (plop: PlopTypes.NodePlopAPI): void => {
  plop.setGenerator("component", {
    description: "Create files for a new Sigil component",
    prompts: [
      // TODO validation
      {
        type: "input",
        name: "category",
        message:
          // TODO list of categories
          "What category should the component be in (e.g. core, typography, layout)?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the new component?",
      },
    ],
    // TODO recipes, update index files
    actions: (data) => {
      const pascalName = plop.getHelper("pascalCase")(data?.["name"]);

      return [
        {
          type: "addMany",
          base: "templates/component",
          templateFiles: "templates/component/**",
          destination: `src/components/{{ camelCase category }}/${pascalName}`,
          data: { pascalName },
        },
      ];
    },
  });
};

export default turboGeneratorConfig;
