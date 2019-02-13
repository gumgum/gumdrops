## Snackbar

The `<Snackbar>` component is a style wrapper for the `<SnackbarNotification>` components.

## Snackbar Notification

The `<SnackbarNotification>` component displays a notification inside the `<Snackbar>` component wrapper.
The notification can be hidden by clicking a button or after waiting for a timeout to complete.
A callback function can be executed after hiding a notification,
the first parameter of the callback will be the id of the notification if it is passed as a prop.

### Props

The following props may be passed to configure the `<SnackbarNotification>` component:

| name            | type              | description                                                                                                           | default |
| --------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| id              | `String` `Number` | Unique key for identification, Required                                                                                         |         |
| text            | `String`          | Content of the notification, can be passed as children. If no text or children is passed, the component won't render. |         |
| context         | `String`          | Context of notification (success, info, warning, danger, hidden)                                                      | ``      |
| msToClose       | `Number`          | Time in ms to hide notification, if value is 0 the notification will remain open                                      | `3000`  |
| hideCloseButton | `Boolean`         | Hides the close button, if true auto enables timeout to hide notification                                             | `false` |
| callback        | `Function`        | Function to be called after hiding notification, passes notification id as first parameter when called                |         |
| className       | `String`          | Additional class to be added to the outermost element                                                                 |         |
| style           | `Object`          | Additional styles to be added to the outermost element                                                                | `false` |
