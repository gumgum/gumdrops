# Contributing to Gumdrops

#### General Notes

* When adding a component, think about how you can make the component flexible and usable in multiple situations. Some ways we do this are to pass in `...otherProps` and `className`.
* Consult the [Design System Docs](https://ds.gumgum.com/stable/css) and [Design System Prototypes Page](https://ds.gumgum.com/stable) for information about your component, including all of the various options you can use to customize a component.
* Documentation is really important. The first line of the README should contain a description of the component (the DS docs can be a good starting place). If your component is more complex, we encourage writing out real world examples of how to use your component in the component's README file. Think about how you are using it and what you would need to do to make it work within your React project if you are viewing it for the first time with no knowledge of how it is built.

#### Prerequisites

The following instructions assume you have followed the section on [README.md](README.md) to get the project and install the prereqs.

#### Contributing Guide

##### Creating a component

1. Follow our [GITWORKFLOW.md](GITWORKFLOW.md) to create a new branch.
2. Add your component `.jsx` file in the correct folder in `/components`. It should be in the same category as found on Design System Docs.
3. Write your component. Follow the format of other components, including adding `...otherProps`. You should also include `displayName` (storybook needs this), `defaultProps` and `propTypes`. In `propTypes`, please include comments when the prop only accepts specific options (as dictated by the Design System). These will render in the description column.

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

##### Writing documentation (story)

1. Go to the correct category in `/_stories`, create a new folder, and create an `index.js` and `README.md` following the format of the other stories. Be sure to `.add()` and import it into the parent `index.js` file.
2. We use a few addon packages to enhance our stories. Please add knobs to your stories to show what options each of the component's props accepts. This also makes it interactive so a user can change and see the result of each different option.

**IMPORTANT**: Please wait for approvals, and when your PR has been approved, **please continue to follow the guidelines on [GITWORKFLOW.md](GITWORKFLOW.md) when rebasing and merging**.

#### Local testing

This library can be installed into a different project for local testing/development:

1. Run `yarn run build`, this will create a tarball of the project (the filename will have the format `gumdrops-*.*.*.tgz`), that can be imported into other local projects.

2. Run `yarn add file:/path/to/this/project/gumdrops-*.*.*tgz` in the root directory of project the that will use this library.

3. You will need to rebuild and reinstall this library in the target project to see further updates.

**To uninstall**, run `yarn remove gumdrops`
