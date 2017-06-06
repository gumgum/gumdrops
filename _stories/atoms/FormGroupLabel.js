import React from 'react';
import { text, object } from '@kadira/storybook-addon-knobs';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import TextInput from '../../components/atoms/TextInput';
import FormGroup from '../../components/molecules/FormGroup';

const title = 'FormGroupLabel';

const description = `&nbsp;
\n
The \`<FormGroupLabel>\` component is used to add a label to your \`<FormGroup>\`. Example:

\`\`\`
<FormGroup>
    <FormGroupLabel text="Password"/>
    <TextInput  ... />
</FormGroup>
\`\`\`
`;

const component = () => (
    <FormGroup>
         <FormGroupLabel
             text={ text('Text', 'Password') }
             className={ text('Classname', '') }
             style={ object('Style', {}) }
        />
        <TextInput name="password" type="password" defaultValue="Passw00rd"/>
    </FormGroup>
);

const options = {
    inline: true,
    propTables: [FormGroupLabel]
};

export default [title, description, component, options];
