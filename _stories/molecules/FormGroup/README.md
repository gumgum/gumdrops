The `<FormGroup>` component is used to wrap your form's inputs.

For a simple text input, it can consist of `<FormGroupLabel>`, `<TextInput>`, and `<FormGroupTextHelp>` components.

However, this depends on what type of input you are working on. Context is optional, and you probably don't need it unless you want to display a hint, warning, or error.

*TextInput example*:

```
<FormGroup context="danger">
    <FormGroupLabel .../>
    <TextInput .../>
    <FormGroupTextHelp .../>
</FormGroup>
```

**Select example**:
```
<FormGroup>
    <FormGroupLabel .../>
    <Select .../>
</FormGroup>
```
