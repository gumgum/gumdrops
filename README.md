# GumGum Common JS

This project contains reusable JavaScript React components that you can import into your project.

### Library Documentation

The docs are hosted at [storybook.gumgum.com](https://storybook.gumgum.com).

### Installing and Using the Library in your project

###### Add private npm registry

To have npm check GumGum's private registry by default, run this on the root directory of your project:

```
npm set registry https://npm.va.ggops.com
```

###### Add library

To add a specific version, you can use
`yarn add gumgum-common-js@0.11.0` (replace 0.11.0 with whatever version you want, at least 0.11.0 to use this format)

The current and previous versions can be found in [CHANGELOG.md](CHANGELOG.md)

You may need to update your webpack config to use a loader on node_modules/gumgum-common-js .jsx files so they get parsed correctly.

###### Use library

In your project's .jsx files, include the name of the component you want to use and its path. Example:

```
// Recommended way: load each module individually:

import Button from 'gumgum-common-js/Button';
import Badge from 'gumgum-common-js/Badge';
import Toggle from 'gumgum-common-js/Toggle';

// Not recommended: Load the whole library, compatibility for older versions
import { Button, Badge, Toggle } from 'gumgum-common-js';
```

Follow the [docs](https://storybook.gumgum.com) to use your component with the correct props.

### Prerequisites for running storybook locally

* [Minimum Required Versions](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=154304684)
* Git and Git Flow [Install and Work Flow Instructions](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=138248293)
* [NodeJS/NPM](http://nodejs.org/download/)
* [Yarn](https://yarnpkg.com/)
* Install the ESLint validators and [Prettier](https://prettier.io/docs/en/editors.html) on your editor of choice. We have the configuration files on the root of the project, `.eslinrc` and `.prettierrc`. There is a precommit hook to run the Prettier scripts on the files.

### Running storybook locally

```
yarn
npm run storybook
```

Then open `http://localhost:6006` on your browser. For more information visit [React Storybook](https://github.com/kadirahq/react-storybook) repo.

### Contributing to this project

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for information about contributing to this project.
