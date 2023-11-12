// ! not in use due to CSF failing to process, track https://github.com/storybookjs/storybook/discussions/24192.

/**
 * Story tags. Note that [CSF](https://storybook.js.org/docs/react/api/csf) requires that tags be statically-analyzable string literals, however this enum cannot be used directly as a value in a tag nor as a narrowing type annotation. See warning above.
 */
enum Tags {
  /** Enable [autodocs](https://storybook.js.org/docs/react/writing-docs/autodocs). */
  AUTODOCS = "autodocs",
}

export default Tags;
