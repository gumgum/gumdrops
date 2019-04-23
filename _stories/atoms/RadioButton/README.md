## Props

The following props may be passed to configure the Radio Button. All additional props will be applied to the `<input>`

| name      | type       | required | description                                                                          |
| --------- | ---------- | -------- | ------------------------------------------------------------------------------------ |
| className | `String`   |          | Additional class to be added to the outermost element.                               |
| context   | `String`   |          | Indicate the context of the button. Example `success`, `warning`, `danger` etc.      |
| label     | `String`   |          | The label text to apply to the radio button.                                         |
| value     | `String`   |          | The value to apply to the radio button.                                              |
| name      | `String`   | true     | Identifier that will be set on individual radio inputs.                              |
| onBlur    | `Function` |          | Blur handler that will be called when a blur event happens on a `<RadioButton>`.     |
| onChange  | `Function` |          | Change handler that will be called when a change event happens on a `<RadioButton>`. |
