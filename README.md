## GumGum Common JS Components

This project contains reusable JavaScript components that you can import into your project.

# Prerequisites for running Storybook #

- [Git](http://git-scm.com/)
- [Git Flow install and Work Flow Instructions](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=138248293)
- [NodeJS/NPM - NodeJS and Node Package Manager](http://nodejs.org/download/): [Minimum Required Versions](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=154304684)
- [Yarn](https://yarnpkg.com/)

### Importing Components
In your package.json, include
"gumgum-common-js": "git+ssh://git@bitbucket.org/gumgum/common-js-components.git"

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

3. Add the path to your component in components/index.js.

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

4. Run [storyshot tests](https://getstorybook.io/docs/react-storybook/testing/structural-testing) using ```npm run test```.

Please wait for approvals before merging.

### Future
- Component Testing
- Adding other common JS besides react components
