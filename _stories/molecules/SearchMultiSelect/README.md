The `<SearchMultiSelect>` is similar to the `<MultiSelect>` component, but it is tailored for situations where there are way too many options that the `<MultiSelect>` becomes impractical.

As the name suggests, the `<SearchMultiSelect>` comes with a case insensitive term matching, and a small tag indicator to show you how many options were selected, as well a small balloon where you can quickly see what options you have selected so far.

**Example**:
```
state = {
    names: namesList
};

_updateNames = (names) => this.setState({ names });

render() {
    return (
        <FormGroup>
           <FormGroupLabel text="names" />
           <SearchMultiSelect
               placeholder="some placeholder text"
               options={ this.state.names }
               update={ this._updateNames }
               context="primary"
           />
        </FormGroup>
    );
}
```

**Options**:
The format of the options must be an array of objects that contains at least three properties: `name`, `isSelected`, and `key`.

property   | description
-----------|------------
name       | the text displayed on the dropdown
isSelected | boolean that determines if the option is selected or not
key        | uniquely identifies each options (key must be \`unique\`)

```
[
    {
        name: 'Jose Santos',
        isSelected: true,
        key: 0
    },
    ...
]
```


**Props**:

prop name   | description
------------|------------
options     | list of options {array of objects}
update      | callback that returns the latest change on options {function}
context     | for now, this only affects the color of the Tag elements. (For not it only affects the tags, but it will support the input itself soon).
placeholder | placeholder text {String}

**Context list**:
'primary', 'secondary', 'success', 'warning', 'info', 'danger', 'white'

**Keybindings**:

key   | description
------|------------
enter | toggles the currently highlighted option
up    | highlights the previous options
down  | highlights the next option
esc   | closes the dropdown
