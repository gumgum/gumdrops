## GumGum Common JS Components

This project contains reusable JavaScript components that you can import into your project.

# Prerequisites for running Storybook #

- [Git](http://git-scm.com/)
- [Git Flow install and Work Flow Instructions](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=138248293)
- [NodeJS/NPM - NodeJS and Node Package Manager](http://nodejs.org/download/): [Minimum Required Versions](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=154304684)
- [Yarn](https://yarnpkg.com/)

### Installation
To install in a different project, run: `yarn add git+ssh://git@bitbucket.org/gumgum/common-js-components.git`

In a .jsx file, just include the name of the component you want and its path. Example:
```
import { Button, Badge, Toggle } from 'gumgum-common-js';

```
Follow the docs to use your component with the correct props. Make sure you update your webpack config to use a loader on node_modules/gumgum-common-js .jsx files so they get parsed correctly.

### Running storybook locally
```
yarn
npm run storybook
```

Then open `http://localhost:6006` on your browser. For more information visit [React Storybook](https://github.com/kadirahq/react-storybook) repo.

### Contributing to this project
Please add new components as you need/create them for your project!

1. Follow our [git flow guide](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=138248293) to create a new branch.

2. Add your component in the correct folder in /components. Follow the format of other components, including defaultProps and propTypes.

3. Add the path to the new component to `components/index.js` to make it accesible from outside.

4. Hook up storybook - go to the correct file in /_stories, import your new component at the top of the file, and add a new ".addWithInfo". Store any options in /constants/options.js

```
.addWithInfo(
    'YourComponent',
    `Component description and notes (you can copy from the DS)
        \n
        propsRequiringSpecificOptions: xs, sm, lg
        option: default, primary, secondary, success, warning, info, danger`,
    () => (
        <YourComponent
            text={ text('Label', 'Default Value') }
            size={ select('Sample Select Options', options.sizeOptions, '') }
            block={ boolean('Boolean option', false) }
            callback={ options.callbackFunc }
        />
    ),
    { inline: true, propTables: [YourComponent]}
)
```

Please wait for approvals before merging.

#### Development

This library can be installed into a different project for local testing/development:

1. run `rm -rf node_modules` in the root directory of this project, otherwise, `devDependencies` will be installed into the target project, which results in duplicated dependencies and the [Refs Must Have Owner Warning](https://facebook.github.io/react/warnings/refs-must-have-owner.html).
2. run `yarn add file:/path/to/this/project` in the root directory of the project that will use this library.
3. you will need to reinstall this library in the target project to see any updates.
**To uninstall**, run `yarn remove gumgum-common-js`

If `yarn add file:/path/to/this/project` fails, you may need to upgrade yarn.

****

### Future
- Component Testing
- Adding other common JS besides react components
