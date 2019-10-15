import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import mdx from './Select.mdx';
import Select from '../../../components/atoms/Select';
import FormGroupLabel from '../../../components/atoms/FormGroupLabel';
import FormGroup from '../../../components/molecules/FormGroup';

const options = [
    {
        name: 'bananas',
        value: '1'
    },
    {
        name: 'apples',
        value: '2'
    },
    {
        name: 'strawberries',
        value: '3'
    },
    {
        name: 'limes',
        value: '4'
    }
];

const contextOptions = {
    'No Value': '',
    primary: 'primary',
    'no-border': 'no-border',
    dark: 'dark'
};

const sizeOptions = {
    'No Value': '',
    xs: 'xs',
    sm: 'sm',
    lg: 'lg'
};

export default {
    component: Select,
    title: 'Atoms/Select',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div>
        <p>Controlled example (change the value in the Knobs section)</p>
        <FormGroup>
            <FormGroupLabel text="Fruits" />
            <Select
                options={object('Options', options)}
                name={text('Name', 'fruit')}
                value={text('Value', '2')}
                customName={text('Custom Name', 'name')}
                customValue={text('Custom Value', 'value')}
                onChange={action('Select changed')}
                context={optionalSelect('Context', contextOptions, '')}
                size={optionalSelect('Size', sizeOptions, '')}
                className={text('Classname', '')}
                style={object('Style', {})}
            />
        </FormGroup>
    </div>
);
