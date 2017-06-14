import React from 'react';
import { action } from '@kadira/storybook';
import { text, boolean, select, object } from '@kadira/storybook-addon-knobs';
import TextInput from '../../components/atoms/TextInput';

const title = 'TextInput';

const description = `&nbsp;
\n
The \`<TextInput>\` component can be user for any single-lined text or password input. It is recommended that you wrap it on the \`<FormGroup>\` component. \n
&nbsp; \n
##### Uncontrolled example:
\`\`\`
_handleSubmit = ({ target }) => console.log(target.username.value);

render() {
    return (
        <form onSubmit={ this._handleSubmit }
            <TextInput
                name="username"
                type="text"
                defaultValue={ 'A default username' }
            />
        </form>
    );
}
\`\`\`
&nbsp; \n
##### Controlled example:
\`\`\`
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
\`\`\`
\`NOTE\`: While \`value\`, \`defaultValue\` and \`onChange\` are not listed as a props. This component accepts any prop that you may want to add, such as onBlur, onClick, etc. The only drawback is that there is not validation for unlisted props.
`;

const component = () => (
    <TextInput
        readOnly={ boolean('readonly', false) }
        className={ text('Classname', '') }
        style={ object('Style', {}) }
        type={ select('Type', ['text', 'password'], 'text') }
        size={ select('Size', ['sm', 'md', 'lg'], 'md') }
        name={ text('Name', 'username') }
        onChange={ action('TextInput changed') }
        value={ text('Value', null) }
        placeholder={ text('Placeholder', 'This is a placeholder') }
    />
);

const options = {
    inline: true,
    propTables: [TextInput]
};

export default [title, description, component, options];
