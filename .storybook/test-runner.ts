import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  /* Hook to execute before a story is initially visited before being rendered in the browser.
   * The page argument is Playwright's page object for the story.
   * The context argument is a Storybook object containing the story's ID, title, and name.
   */
  async preVisit(page, _context) {
    await page.content();
  },
};

export default config;
