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

###### Testing using these components

Unfortunately, ESM is not yet widely available for some current tools, and running tests using components from this library could throw errors because of the ES module syntax. To prevent this, try the following:

* **For Jest**:
  Jest uses its own implementation of require and will attempt to parse files with it and babel-jest, by default, it ignores node_modules which will result in syntax errors from the import statements. Add the next line to your jest config so that it ignores everything in node_modules, except for this library:
  `"transformIgnorePatterns": ["/node_modules/(?!gumgum-common-js)"]`

* **For Mocha + Webpack**:
  It is very likely that your mocha and webpack configurations also ignore the node_modules directory, to prevent any syntax errors, load babel through a configuration file instead of calling `--compilers js:babel-register` or `--require babel-register`:

    ```
    require('babel-register')({
        ignore: /node_modules\/(?!gumgum-common-js)/
    });
    ```

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
