## Props

The following props may be passed to configure the progress bar. All additional props are passed through to the root `<div>` element:

| name              | type      | description                                                          | default |
| ----------------- | --------- | -------------------------------------------------------------------- | ------- |
| className         | `String`  | Additional class to be added to the outermost element                |         |
| isSecondary       | `Boolean` | Indicate if bar color is secondary                                   | `false` |
| isStriped         | `Boolean` | Indicate if bar is striped                                           | `false` |
| size              | `String`  | Indicate the size of the bar. One of `xs`, `sm` or `lg`              |         |
| useProgressColors | `Boolean` | Indicate if the bar should change from red to green when progressing |         |
| value             | `number`  | A number (`0` to `100`) representing progress percent                |         |
