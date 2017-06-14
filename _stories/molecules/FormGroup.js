import React from 'react';

import { action } from '@kadira/storybook';
import { text, boolean, select, object } from '@kadira/storybook-addon-knobs';

import FormGroup from '../../components/molecules/FormGroup';
import FormGroupTextHelp from '../../components/atoms/FormGroupTextHelp';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import TextInput from '../../components/atoms/TextInput';

const title = 'FormGroup';

const description = `&nbsp;
\n
The \`<FormGroup>\` component is used to wrap your form's inputs. It usually consists on a <FormGroupLabel>, <FormGroupInput>, and <TextHelp>. However this depends on what type of input you are working on. Context is optional, and you probably don't need it unless you want to display a hint. Example:

\`\`\`
<FormGroup context="danger">
    <Label .../>
    <TextInput .../>
    <TextHelp .../>
</FormGroup>
\`\`\`

\`TODO\`: add more examples on other input types.
`;

const component = () => (
    <FormGroup
        isInline={ boolean('isInline', false) }
        isDisabled={ boolean('isDisabled', false) }
        context={ select('Context', ['danger', 'warning', 'success'], 'success') }
        className={ text('Classname', '') }
        style={ object('Style', {}) }
    >
        <FormGroupLabel text="Cool Label" />
        <TextInput name="username" placeholder="Bruce Lee" />
        <FormGroupTextHelp text="You got a cool username right there" />
    </FormGroup>
);

const options = {
    inline: true,
    propTables: [FormGroup]
};

export default [title, description, component, options];
