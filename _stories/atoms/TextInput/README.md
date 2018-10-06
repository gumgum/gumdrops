The `<TextInput>` component can be user for any single-lined text or password input. It is recommended that you wrap it with the `<FormGroup>` component.

**NOTE**: This component accepts any prop that you may want to add, such as onBlur, onClick, etc. The only drawback is that there is not validation for unlisted props.
*Recommended props*: `value`, `defaultValue` and `onChange`.*

**Uncontrolled example:**

```
_handleSubmit = ({ target }) => console.log(target.username.value);

render() {
    return (
        <form onSubmit={ this._handleSubmit }>
            <TextInput
                name="username"
                type="text"
                defaultValue={ 'A default username' }
            />
        </form>
    );
}
```

**Controlled example:**
```
state = {
    username: ''
}

_handleInputChange = ({ target }) => this.setState({ username: target.value });

render() {
    return (
        <TextInput
            name="username"
            type="text"
            onChange={ this._handleInputChange }
            value={ this.state.username }
        />
    );
}
```
