The `<Tag>` component is used to indicate active or selected items, filters or options. Refer to [this](http://design-prototypes.gumgum.com/black-tie/documentation/#icons-btl) page for icon names.

**Example**:

```jsx
<Tag
    context="primary"
    hasOption
    onOptionClick={() => {}}
    optionIcon="bt-times"
    size="sm"
    text="Sample Tag"
/>
```

| **prop name** | **description**                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| className     | Class to add to the root element {string} {required}                                                                    |
| context       | Any of \`normal, primary, success, warning, danger\` or leave unset to get default appearance {string} {defaults to ''} |
| hasOption     | Indicate if the tag has an option button {boolean} {defaults to false}                                                  |
| onClick       | Click handler for the root element {function}                                                                           |
| onOptionClick | Click handler for the option button element {function}                                                                  |
| optionIcon    | Icon name for the option button {string} {defaults to 'bt-times'}                                                       |
| optionLabel   | Aria label for the option button {string} {defaults to 'Remove tag'}                                                    |
| size          | Any of \`sm, xs\` {string}                                                                                              |
| style         | Styles to add to the root element {object}                                                                              |
| text          | Tag display text {string}                                                                                               |
