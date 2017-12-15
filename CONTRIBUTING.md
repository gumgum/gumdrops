# Contributing to GumGum Common JS

Please add new components as you need/create them for your project!


#### General Notes
- This is a library, so when adding a component, think about how you can make the component flexible and usable in multiple situations. Some ways we do this are to pass in `...otherProps` and `className`.
- Consult the [Design System Docs](https://ds.gumgum.com/stable/css) and [Design System Prototypes Page](https://ds.gumgum.com/stable) for information about your component, including all of the various options you can use to customize a component.
- Documentation is really important. The first line of the README should contain a description of the component (the DS docs can be a good starting place). It's appreciated if you take the time to write out real world examples of how to use your component in the README if it's more complex. Think about how you are using it and what you would need to do to make it work within your React project if you are viewing it for the first time with no knowledge of how it is built.


#### Prerequisites
The following instructions assume you have followed the section on [README.md](README.md) to get the project and install the prereqs.


#### Contributing Guide
###### Creating a component
1. Create a JIRA ticket in the [Common JS Jira Project](https://gumgum.jira.com/projects/CJL?selectedItem=com.atlassian.jira.jira-projects-plugin%3Arelease-page&status=all).
2. Follow our [git flow guide](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=138248293) to create a new branch.
3. Add your component `.jsx` file in the correct folder in `/components`. It should be in the same category as found on Design System Docs.
4. Write your component. Follow the format of other components, including adding `...otherProps`. You should also include `displayName` (storybook needs this), `defaultProps` and `propTypes`. In `propTypes`, please include comments when the prop only accepts specific options (as dictated by the Design System). These will render in the description column.

For example:
```
ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.defaultProps = {
    size: '',
    responsive: false,
    className: '',
    style: {}
};

ButtonGroup.propTypes = {
    /** xs, sm, lg */
    size: PropTypes.string,
    responsive: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};
```
5. Add the path to the new component to `components/index.js` so it can be exported when building.

###### Writing documentation (story)
1. Go to the correct category in `/_stories`, create a new folder, and create an `index.js` and `README.md` following the format of the other stories. Be sure to `.add()` and import it into the parent `index.js` file.
2. We use a few addon packages to enhance our stories. Please add knobs to your stories to show what options each of the component's props accepts. This also makes it interactive so a user can change and see the result of each different option.

**IMPORTANT**: Please wait for approvals, and when your PR has been approved, **please continue to follow the guidelines on [git flow guide](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=138248293) when rebasing and merging**. If you're new to rebasing, ask a friendly JS dev and we'll help walk you through it!


#### Release Guide
1. Update all JIRA tickets with the version number, and update the [release page on JIRA](https://gumgum.jira.com/projects/CJL).
2. Follow the [git flow guide](https://gumgum.jira.com/wiki/pages/viewpage.action?pageId=138248293) to start a new release. Use the new version # for the tag.
3. Update `package.json` and `CHANGELOG.md` with the new release version and information.
4. Push the new tag `git push --tags`
4. Send out a release notes email.


#### Local testing
This library can be installed into a different project for local testing/development:

1. Run `rm -rf node_modules` in the root directory of this project, otherwise, `devDependencies` will be installed into the target project, which results in duplicated dependencies and the [Refs Must Have Owner Warning](https://facebook.github.io/react/warnings/refs-must-have-owner.html).
2. Run `yarn add file:/path/to/this/project` in the root directory of the project that will use this library.
3. You will need to reinstall this library in the target project to see any updates.

**To uninstall**, run `yarn remove gumgum-common-js`

If `yarn add file:/path/to/this/project` fails, you may need to upgrade yarn.
