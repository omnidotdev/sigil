# Omni Sigil Design System & UI Kit

> [!WARNING]
> This project is in early development. Use at your own risk, and expect turbulence in the codebase.

Universal design system and component library for Omni, powered by [Panda](https://panda-css.com/) and [Ark](https://ark-ui.com/).

## Quick Start

Follow the [prerequisities](docs/usage.md#prerequisites) to install Panda in your project, then follow the [package install instructions](docs/usage.md#from-published-package).

## Local Development

1. Set up local environment variables: `cp .env.local.template .env.local`
2. Install dependencies: `bun i`
3. Start development stack: `bun dev`
   - This will launch the following:
     - [Panda CSS](https://panda-css.com/) in watch mode
     - [tsup](https://tsup.egoist.dev/) in watch mode
     - [Storybook](https://storybook.js.org/) in development mode (default port: `6006`, e.g. http://localhost:6006)

If you'd like to develop outside of Storybook, as in a dedicated app, follow the [prerequisities](docs/usage.md#prerequisites), then follow the [local usage instructions](docs/usage.md#local).

### Component Generation

To generate a new component, run `bun generate` and follow the prompts. This will create a new component file, story, and recipe in the appropriate directories.

This generator is powered by [Turbo's `generate` subcommand](https://turbo.build/repo/docs/reference/generate).

## License

The code in this repository is licensed under MIT, &copy; Omni LLC. See <a href="LICENSE.md">LICENSE.md</a> for more information.
