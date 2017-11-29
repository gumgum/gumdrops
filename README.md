# GumGum Common JS

This project contains reusable JavaScript React components that you can import into your project.

### Library Documentation
The docs are hosted at [storybook.gumgum.com](https://storybook.gumgum.com).


### Installing and Using the Library in your project
###### Add library
To use this library in your project, run the following command in your terminal: `yarn add git+ssh://git@bitbucket.org/gumgum/common-js-components.git#THE-VERSION-NUMBER-YOU-WANT`.

For example: `yarn add git+ssh://git@bitbucket.org/gumgum/common-js-components.git#0.2.0`

The current and previous versions can be found in [CHANGELOG.md](CHANGELOG.md)

Update your webpack config to use a loader on node_modules/gumgum-common-js .jsx files so they get parsed correctly.

You also must ask devops to add a key for your project to have permissions to this library when you deploy. Since it is a private library, the server needs permission to download it.

###### Use library
In your project's .jsx files, include the name of the component you want to use and its path. Example:
```
import { Button, Badge, Toggle } from 'gumgum-common-js';

```
Follow the [docs](https://storybook.gumgum.com) to use your component with the correct props.


### Prerequisites for running storybook locally
- [Minimum Required Versions](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=154304684)
- Git and Git Flow [Install and Work Flow Instructions](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=138248293)
- [NodeJS/NPM](http://nodejs.org/download/)
- [Yarn](https://yarnpkg.com/)


### Running storybook locally
```
yarn
npm run storybook
```

Then open `http://localhost:6006` on your browser. For more information visit [React Storybook](https://github.com/kadirahq/react-storybook) repo.


### Contributing to this project
Please see [CONTRIBUTING.md](CONTRIBUTING.md) for information about contributing to this project.
