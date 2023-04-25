import React from 'react';
import { withKnobs, text, object, select, array } from '@storybook/addon-knobs';

import mdx from './FormInputWrapper.mdx';
import FormInputWrapper from '../../../components/atoms/FormInputWrapper';
import TextInput from '../../../components/atoms/TextInput';

export default {
    component: FormInputWrapper,
    title: 'Atoms/FormInputWrapper',
    decorators: [withKnobs],
    parameters: {
        component: FormInputWrapper,
        subcomponents: { TextInput },
        docs: { page: mdx }
    }
};

export const Default = () => (
    <FormInputWrapper
        label={text('Label', 'Password')}
        errors={array('Errors', ['Error 1', 'Error 2'])}
        errorStyles={object('Error Styles', {})}
        groupClassName={text('Group Classname', '')}
        context={select('Context', ['danger', 'success', 'warning'], 'danger')}>
        <TextInput className="-m-b-4" name="password" type="password" placeholder="*******" />
    </FormInputWrapper>
);
