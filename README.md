# React Component Packages

A repository that allows components to be built quickly and in isolation, and then exported so they can be consumed as part of a large front-end application.

## The problem

Enterprise level front-end applications can be large, complex, split across many teams, repositories, and evolve at varying paces.

This experimental repository is to understand if, and how, application components can be broken out into their own independent NPM packages that use a standard Webpack configuration.

## Why this approach?

There were multiple considerations

- Components should be able to live in their own independent repository, should be versioned, distributed via NPM
- Each component should be able to be developed entirely isolated from the rest of the application (should be able to build dev/prod and run a local dev server with hot module reloading)
- Each component should be built in a way that it can be exported and consumed in the main application
- There are potentially many third-party dependencies, which may or may not be marked as external. Dependencies should be included or excluded from the bundle when appropriate and properly treeshaken to reduce bundle size as much as possible.

## How to use

It is highly recommend that you use Yarn, so that you can take advantage of [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). Using Yarn Workspaces will remove the need to run `yarn install` for each individual package, as running `yarn install` for the root level `package.json` will be sufficient.

This repository makes heavy use of `yarn link` to remove the need to publish packages to a central registry. In a real-world environment, it would be desirable to publish packages to a central registry and manage versions using a tool such as `yarn publish` or [Lerna](https://github.com/lerna/lerna).

1. Clone or download the repository. Note that this project requires Node v8.11.3+.
2. At the project root, run `yarn install` or simply `yarn`
3. Before starting the development server, each component must be built. You can do this buy running `yarn build:components:dev`.
4. To start the development server, run `yarn start`
5. Optionally, `cd` into each package and run using `yarn start`. Note, all packages are configured to run on the same port so its not advisable to run more than one component at once.

### jp-scripts

Contains the logic needed to execute the given webpack configuration file. Supported flags are as follows;

| Short | Long                    | Description                                                                                |
| ----- | ----------------------- | ------------------------------------------------------------------------------------------ |
| -a    | --all                   | Builds all components that live in `src/packages`                                          |
| -wc   | --webpack-config [path] | Webpack configuration file path                                                            |
| -b    | --build                 | Builds the app or component using Webpack config file                                      |
| -r    | --root                  | States this is the App and not an individual component                                     |
| -s    | --start                 | Builds using the given Webpack config file and then starts Webpack Dev Server on port 9955 |

Example usage as shown in `package.json`;

```json
  "scripts": {
    "build:components:dev": "jp-scripts --all --webpack-config ./src/configuration/webpack/webpack.client.config.js",
    "build:dev": "cross-env NODE_ENV=development jp-scripts --build --root --webpack-config ./src/configuration/webpack/webpack.client.config.js",
    "build:prod": "cross-env NODE_ENV=production jp-scripts --build --root --webpack-config ./src/configuration/webpack/webpack.prod.config.js",
    "start": "cross-env NODE_ENV=development jp-scripts --start --root --webpack-config ./src/configuration/webpack/webpack.client.config.js",
    "lint": "eslint --fix ./src"
  },
```
