import React from 'react';

import SearchMultiSelect from '../../components/molecules/SearchMultiSelect';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import FormGroup from '../../components/molecules/FormGroup';

const contextOptions = ['', 'success', 'warning', 'danger'];
const sizeOptions = ['', 'xs', 'sm', 'md'];

const namesList = [
    {
        name: 'Jose Santos',
        isSelected: true,
        key: 0
    },
    {
        name: 'Michele Larson',
        isSelected: true,
        key: 1
    },
    {
        name: 'Serge Basile',
        isSelected: false,
        key: 2
    },
    {
        name: 'Eder "Quesarito" Sanchez',
        isSelected: false,
        key: 3
    },
    {
        name: 'David "Henry" Mejorado',
        isSelected: false,
        key: 4
    },
    {
        name: 'Mahdiye \\ Maddie Jamali',
        isSelected: false,
        key: 5
    }
];

export default {
    title: 'Molecules/SearchMultiSelect',
    component: SearchMultiSelect,
    argTypes: {
        placeholder: { control: 'text' },
        termDivider: { control: 'text' },
        searchKeys: { control: 'number' },
        multiTerm: { control: 'boolean' },
        justify: { control: 'boolean' },
        onChange: 'change',
        update: 'update',
        context: {
            options: contextOptions,
            control: { type: 'select' }
        },
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => {
    return (
        <FormGroup>
            <FormGroupLabel text="names" />
            <SearchMultiSelect
                {...args}
                update={() => console.log('my update func')}
                onChange={() => console.log('on change')}
            />
        </FormGroup>
    );
};

export const Default = Template.bind({});

Default.args = {
    placeholder: 'My placeholder',
    options: namesList,
    size: 'md'
};
