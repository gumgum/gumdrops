The `<Checkbox>` component can be wrapped with the `<FormGroup>` component. It can be used as a controlled or uncontrolled component.

**NOTE**: This component can be controlled or uncontrolled. This component accepts any prop that you may want to add, which are applied to the input. The only drawback is that there is not validation for unlisted props. **It is highly recommended that you use controlled components in React.**

*Recommended Props*: `name`, `checked`, `defaultChecked`, `onChange`

**Controlled example - Example with reusable checkbox handler**:
```
state {
    parrots: false
}
_handleCheckboxChange = ({ target }) => {
    const { name, checked } = target;

    this.setState({
        [name]: checked
    });
}
return(
    <FormGroup>
        <Checkbox
            name="parrots"
            label="party parrots"
            checked={ this.state.parrots }
            onChange={ this._handleCheckboxChange }
        />
    </FormGroup>
)
```


**Uncontrolled example**:
```
_handleSubmit = (e) => {
    e.preventDefault();
    const {
        parrots,
        otherName,
        otherName2
    } = e.target.elements;
    console.log(parrots.checked);
};

render() {
    return (
        <form onSubmit={ this._handleSubmit }>
            <FormGroup>
                { /* Pass defaultChecked if you want
                the input to be checked initially */ }
                <Checkbox
                    name="parrots"
                    label="party parrots"
                    defaultChecked
                />
            </FormGroup>
        </form>
    );
}
```
