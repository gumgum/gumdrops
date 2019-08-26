## Props

The following props may be passed to configure the Radio Group. All additional props will be applied to each `<RadioButton>`

| name      | type       | required | description                                                                          |
| --------- | ---------- | -------- | ------------------------------------------------------------------------------------ |
| className | `String`   |          | Additional class to be added to the outermost element.                               |
| context   | `String`   |          | Indicate the context of the button. Example `default`, `warning`, `danger` etc.      |
| name      | `String`   | true     | Identifier that will be set on individual radio inputs.                              |
| onBlur    | `Function` |          | Blur handler that will be called when a blur event happens on a `<RadioButton>`.     |
| onChange  | `Function` |          | Change handler that will be called when a change event happens on a `<RadioButton>`. |
| options   | `Array`    | true     | Radio button options list. An array of objects with `label` and `value` properties.  |
| size      | `String`   |          | Indicate the size of the button. One of `xs` or `sm`.                                |
| defaultValue | `String or Boolean or Number`|| Select a value by default from the options                                  |

## Example

```javascript
const options = [
    {
        label: 'Foo',
        value: 'foo'
    },
    {
        label: 'Bar',
        value: 'bar'
    }
];

<RadioGroup size="sm" onChange={handleChange} name="my-radio-group" options={options} />;
```
