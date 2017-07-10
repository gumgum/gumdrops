import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import FormGroupTextHelp from '../../components/atoms/FormGroupTextHelp';
import TextInput from '../../components/atoms/TextInput';
import FormGroup from '../../components/molecules/FormGroup';

const title = 'FormGroupTextHelp';

const description = `&nbsp;
\n
The \`<FormGroupTextHelp>\` is used to give warning or hints on \`<input>\` elements. They must be wrapped by a \`<FormGroup>\` component.\n
The color of this component is dependent on the \`FormGroup's context\`. Example:

\`\`\`
<FormGroup>
    <FormGroupLabel  ... />
    <TextInput name="password" ... />
    <FormGroupTextHelp text="Your password is incorrect"/>
</FormGroup>
\`\`\`
`;

const component = () => (
    <FormGroup context="danger">
        <TextInput name="password" type="password" defaultValue="badpassword"/>
        <FormGroupTextHelp
            text={ text('Text', 'Your password is incorrect') }
            className={ text('Classname', '') }
            style={ object('Style', {}) }
        />
    </FormGroup>
);

const options = {
    inline: true,
    propTables: [FormGroupTextHelp]
};

export default [title, description, component, options];
