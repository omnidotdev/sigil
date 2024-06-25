import type { PlopTypes } from "@turbo/gen";

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
    // TODO data callback to reduce duplication of data transformation (e.g. pascal case transforms)
    actions: [
      {
        type: "addMany",
        base: "templates/component",
        templateFiles: "templates/component/**",
        destination:
          "src/components/{{ camelCase category }}/{{ pascalCase name }}",
        // data: ... (see TODO above)
      },
    ],
  });
};

export default turboGeneratorConfig;
