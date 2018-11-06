# SearchSelect

`<SearchSelect>` allows for external options to be provided and selected through a dropdown.

| Name         | Default           | Description                                                                                      | type     |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------ | -------- |
| debounceTime | 300               | Time to wait before the `onChange` handler is called                                             | Number   |
| isFocused    | false             | Sets the `autoFocus` input attribute to `true`, so the element will be focused on mount          | Bool     |
| isLoading    | false             | Indicate if the the loading component should render                                              | Bool     |
| onChange     |                   | Debounced change event handler that will be called with the current value in the input           | Function |
| onSelect     |                   | Select even handler which will be called with the selected option, e.g. `{ id: 1, title: 'foo'}` | Function |
| options      | []                | Array of options with the following shape `[{ id: 1, title: 'foo'}, { id: 2, title: 'bar'}]`     | Array    |
| placeholder  | 'Start Typing...' | Placeholder value to display on an empty input                                                   | String   |
| renderLoader |                   | Function to render a loading component such as `() => <LoadingDots size="sm" />`                 | Function |
| size         | 'sm'              | Size of the input, one of `xs`, `sm`, or `md`                                                    | String   |
