Textarea inputs are used for inputting large blocks of text into a form. It is recommended that you wrap it with the `<FormGroup>` component.

**NOTE**: This component accepts any prop that you may want to add. The only drawback is that there is not validation for unlisted props.
*Recommended props*: `value` and `onChange`.*

**Controlled example:**
```
state = {
    textAreaContent: ''
}

_handleInputChange = ({ target }) => this.setState({ textAreaContent: target.value });

render() {
    return (
        <FormGroup>
            <TextArea
                placeholder="Enter your content"
                onChange={ this._handleInputChange }
                value={ this.state.textAreaContent }
            />
        </FormGroup>
    );
}
```
