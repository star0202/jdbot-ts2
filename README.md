# Command.TS V5 QuickStart Template

This is a template of discord bot made with [@pikokr/command.ts](https://github.com/pikokr/command.ts) v5 with slash commands.

## Creating an App

You’ll need to have Node 16.9.0 or later version on your local development machine (but it’s not required on the server). We recommend using the latest LTS version. You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.
To create a new app, you should use [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

```shell
npx degit pikokr/command.ts-v5-template my-app
cd my-app

corepack enable

pnpm i
pnpm dev
```

Runs the app in development mode.

### Install Dependencies

You can install dependencies with `pnpm install`(this template is configured to use only pnpm for package manager). This must be done the first time you create the app.

### Run the bot in development mode.

You can run your bot in development mode with `pnpm dev`

### Build the bot and run for production

If you use `pnpm build` without errors in your code, the build file will appear in `dist` folder.
You can execute this file with `pnpm start` for your production.
