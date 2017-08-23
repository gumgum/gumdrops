The `<MultiSelect>` component can be used when you need a select component to support multiple options simultaneously.

The state on the multi-select is handed by the parent component, the callback passed into should also take care of updating the dropdown options.

**NOTE**: This is a controlled component, so don't forget to pass the updated props to `MultiSelect` to see the changes.

**Example**:
```
state {
    options: [ { name: 'Some Name', value: 'some_value', selected: false}, ... ]
}
const handleMultiselectChange = (index, value, selected) => {
    // Update your options here
    const newOptions = ...;
    this.setState({ options: newOptions });
};
return(
    <MultiSelect
       placeholder="Select an option"
       options={ this.state.options }
       callback= { this.handleMultiselectChange }
    />
)
```

*Options format*:
```
[
    {
        name: 'Option 1',
        value: 'option_1',
        selected: false
    },
    {
        name: 'Option 2',
        value: 'option_2',
        selected: true
    },
    ...
]
```

The callback receives 3 paramenters:
- `index` {Number} position on the array of the option changed
- `value` {String} of the option change
- `selected`{Boolean} new value of the option. \n


Therefore, your callback should look like this:
```
function callback(index, value, selected){
     ...
}
```

If you want to add an option that "checks" all the other ones. You can create a new option with a value of `SELECT_ALL`, and in your callback handler you can check for that option:
```
if (value === 'SELECT_ALL' && selected) {
    // Checks all the options as true
    return someOptions.map( o => ({ ...o, selected: true }));
}
```
