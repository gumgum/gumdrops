# GumGum Common JS Changelog

## 1.6.2 (11-09-18)

###### Added

* Added surge to travis

## 1.6.1 (11-08-18)

###### Fixed

* Hide pagination ui
* Fixed build script errors
* Fixed pagination next/prev button states
* Only allow initial accordion state to be set open/closed

## 1.6.0 (11-06-18)

###### Added

* Allow logo on login page to be optional
* Added isResponsive prop
* Updated CSS documentation URL
* Added isBlock to Button
* Allow manually setting sort direction in `headingProps`
* Upgrade storybook to v4
* Added prop to set accordion items open/closed

###### Fixed

* Fixed regex issue on SearchMultiSelect
* Improve eslint script and fix existing errors

## 1.5.0 (8-15-18)

###### Added

* Support for groupings in MultiSelect component #27

## 1.4.3 (8-8-18)

###### Added

* Pass a ref to SearchMultiSelect
* Add jest snapshopts

## 1.2.0 (4-13-18)

###### Added

* Breadcrumbs component

## 0.11.31 (3-22-18)

###### Fixed

* Add button type to MultiSelect

## 0.11.24 (3-16-18)

###### Fixed

* Add button type to SearchMultiSelect

## 0.11.0 (3-5-18)

###### Added

* [CJL-50]
  Add individual ES and CommonJS modules to dist directory
  Keeps index.js with whole library for retrocompatibility
  Create UMD build for loading library into browsers
  Update installation instructions

## 0.10.0 (2-23-18)

###### Added

* [CJL-48] - Utility class documentation and examples
* [CJL-43] - Add Prettier to the project

###### Fixed

* Close Button on ModalHeader

## 0.9.3 (1-11-18)

###### Fixed

* Fix styles on MultiSelect

## 0.9.2 (1-4-18)

###### Fixed

* Fix full width layout on layout container (again)
* Remove console.log on AccordionItem

## 0.9.0 (1-3-18)

###### Added

* [CJL-42] - Add textarea component

###### Changed

* Add ...otherProps to Button

###### Fixed

* Fix full width layout on layout container

## 0.8.2 (12-18-17)

###### Changed

* Update README for adding library to project via internal npm hosted files

## 0.8.1 (12-15-17)

###### Fixed

* Add prop for react-modal's latest version that was throwing a warning

## 0.8.0 (12-15-17)

###### Changed

* [CJL-36] - Update libraries
* Add size and additional context options to Select
* Improve Avatar menu to accept a callback for clicking on an option instead of using React Router

## 0.7.6 (12-15-17)

###### Added

* Add searching on keys, multiple terms, and custom filter functions to SearchMultiSelect

## 0.7.5 (12-6-17)

###### Added

* Add onChange to SearchMultiSelect

## 0.7.1-0.7.4 (12-1-17)

###### Fixed

* Various import fixes

## 0.7.0 (11-29-17)

###### Added

* [CJL-35] - CHANGELOG.md and CONTRIBUTING.md
* [CJL-23] - Circular Thumbnail
* [CJL-1] - Tooltip
* [CJL-32] - Accordion

## 0.6.2 (11-10-17)

###### Changed

* [CJL-30] - Add small option to SearchMultiselect

## 0.6.1 (10-25-17)

###### Fixed

* [CJL-21] - Update SearchMultiselect to accomodate options passed in after component is mounted

## 0.6.0 (8-22-17)

###### Added

* [CJL-29] - Login

###### Changed

* [CJL-10] - Prop-types npm package
* [CJL-13] - Migrate Storybook to version 3.x.x
* [CJL-24] - Readme addon

## 0.5.0 (7-7-17)

###### Added

* [CJL-20] - Pagination

## 0.4.0 (6-25-17)

###### Added

* [CJL-3] - SearchMultiSelect

## 0.3.0 (6-22-17)

###### Added

* [CJL-6] - Single Select
* [CJL-8] - Checkbox

## 0.2.0 (6-13-17)

###### Added

* [CJL-7] - Circular Number
* [CJL-5] - Jenkins
* [CJL-12] - Input Group
* [CJL-16] - Trend

###### Fixed

* [CJL-9] - Tag errors

## 0.1.0 (6-15-17)

###### Added

* [CJL-11] - Button Group
* [CJL-18] - Layout
* [CJL-15] - Import/Export
* [CJL-17] - Modal
