**NOTE:** The minimum DS version required for this component to render properly is: **1.3.5**

The `<LoginForm>`, as the name implies, renders a formthat can be customized to look like any of [these prototypes](http://ds.gumgum.com/stable/#gds-account-modal).
This component can display the Product logo (underneath GumGum's logo), a Cap with text above the form fields and a link for password recovery. The form inputs and submit buttons must be provided.

All of its atoms (except GumGum's logo) are optional.

Form values can be accessed on submission with the `onSubmit` callback.

**Props**:

prop name   | description
------------|------------
capText         | Text to display in the cap between the logo and form.
logoText        | Product name, shown right below GumGum's logo
onSubmit        | (Required) function called on form submition
recoveryFn      | Callback used to redirect to a password recovery page
recoveryText    | Text to show for password recovery, defauts to "Forgot your password?"

**Example**:
```
state {
    username: null,
    password: null,
    staySignedIn: false,
}

_login = (event) => {
    event.preventDefault();
    const elts = event.target.elements;
    this.setState({
        username: elts['username'].value,
        password: elts['password'].value,
        staySignedIn: elts['password'].checked
    });
}

_recovery = (event) => {
    event.preventDefault();
    window.location.pathname = '/recovery';
}

return(
    <LayoutContainer>
        <Row>
            <LoginForm
                auth="username"
                capText="Dashboard"
                logoText="Sports"
                onSubmit={ this._login }
                recoveryFn={ this._goToRecovery }
                recoveryText="Trouble signing in?"
            >
                <FormGroup className="-m-b-1" >
                    <FormGroupLabel text="username" />
                    <TextInput name="username" type="text" placeholder="username" />
                </FormGroup>
                <FormGroup className="-m-b-2" >
                    <FormGroupLabel text="Password" />
                    <TextInput name="password" type="password" placeholder="password123" />
                </FormGroup>
                <FormGroup className="-m-b-2" >
                    <Checkbox name="staySignedIn" label="Stay signed in" />
                </FormGroup>
                <Button type="submit" className="gds-button--block" context="primary" >
                    Login
                </Button>
            </LoginForm>
        </Row>
    </LayoutContainer>
)
```
