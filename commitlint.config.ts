import { RuleConfigSeverity } from "@commitlint/types";

import type { UserConfig as CommitlintUserConfig } from "@commitlint/types";

// TODO extract to dedicated repo with unit tests (test different commit message inputs)

/**
 * `commitlint` configuration.
 * @see https://commitlint.js.org/#/reference-configuration
 */
const commitlintConfig: CommitlintUserConfig = {
  extends: ["@commitlint/config-conventional"],
  // whether to use default ignore rules
  defaultIgnores: true,
  // rule overrides
  rules: {
    // specify valid types
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "build", // build system, dependencies, tooling
        "chore", // maintenance
        "ci", // continuous integration
        "docs", // update documentation
        "feature", // add a feature
        "fix", // fix a bug
        "perf", // performance improvement
        "refactor", // change project/code structure
        // "revert", // revert a commit (intentionally omitted)
        "style", // formatting, visual changes
        "test", // update tests (unit, integration, E2E, etc.)
      ],
    ],
  },
};

export default commitlintConfig;
