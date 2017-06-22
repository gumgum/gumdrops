import React from 'react';

import { action } from '@kadira/storybook';
import { text, boolean, select, object } from '@kadira/storybook-addon-knobs';

import FormGroup from '../../components/molecules/FormGroup';
import FormGroupTextHelp from '../../components/atoms/FormGroupTextHelp';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import TextInput from '../../components/atoms/TextInput';
import Select from '../../components/atoms/Select';

import selectOptions from '../../constants/atoms/select';

const title = 'FormGroup';

const description = `&nbsp;
\n
The \`<FormGroup>\` component is used to wrap your form's inputs. For a simple text input, it can consist of \`<FormGroupLabel>\`, \`<TextInput>\`, and \`<FormGroupTextHelp>\` components. However, this depends on what type of input you are working on. Context is optional, and you probably don't need it unless you want to display a hint, warning, or error.

\n
##### TextInput example:

\`\`\`
<FormGroup context="danger">
    <FormGroupLabel .../>
    <TextInput .../>
    <FormGroupTextHelp .../>
</FormGroup>
\`\`\`

##### Select example:
\`\`\`
<FormGroup>
    <FormGroupLabel .../>
    <Select .../>
</FormGroup>
\`\`\`
`;

const component = () => (
    <div>
        <FormGroup
            isInline={ boolean('isInline', false) }
            isDisabled={ boolean('isDisabled', false) }
            context={ select('Context', ['danger', 'warning', 'success', ''], 'success') }
            className={ text('Classname', '') }
            style={ object('Style', {}) }
        >
            <FormGroupLabel text="Cool Label" />
            <TextInput name="username" placeholder="Bruce Lee" />
            <FormGroupTextHelp text="You got a cool username right there" />
        </FormGroup>
        <FormGroup
            isInline={ boolean('isInline', false) }
            isDisabled={ boolean('isDisabled', false) }
            context={ select('Context', ['danger', 'warning', 'success'], 'success') }
            className={ text('Classname', '') }
            style={ object('Style', {}) }
        >
            <FormGroupLabel text={ text('Select label', 'My select label') } />
            <Select
                options={ selectOptions }
            />
        </FormGroup>
    </div>
);

const options = {
    inline: true,
    propTables: [FormGroup]
};

export default [title, description, component, options];
