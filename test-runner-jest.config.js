import { getJestConfig } from "@storybook/test-runner";

/**
 * Storybook test runner Jest configuration.
 * @see https://github.com/storybookjs/test-runner#jest-options
 * @type {import('@jest/types').Config.InitialOptions}
 */
export default {
  // default configuration from `@storybook/test-runner`
  ...getJestConfig(),
  // set test timeout (default is 15s)
  testTimeout: 30000,
};
