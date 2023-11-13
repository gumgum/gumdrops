import React from 'react';

import SearchMultiSelect from '../../components/molecules/SearchMultiSelect';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import FormGroup from '../../components/molecules/FormGroup';

const contextOptions = ['', 'success', 'warning', 'danger'];

const optionsA = [
    {
        name: 'Lassie',
        value: 1,
        isSelected: true
    },
    {
        name: 'Snoopy',
        value: 2,
        isSelected: true
    },
    {
        name: 'Toto',
        value: 3,
        isSelected: false
    },
    {
        name: 'Brian Griffin',
        value: 3,
        isSelected: false
    }
];

const optionsB = [
    {
        name: 'All Pets',
        value: 0,
        isSelected: true,
    },
    {
        name: 'Dogs',
        value: 1,
        isSelected: false,
        options: [
            {
                name: 'Lassie',
                value: 1,
                isSelected: true
            },
            {
                name: 'Snoopy',
                value: 2,
                isSelected: true
            },
            {
                name: 'Toto',
                value: 3,
                isSelected: false
            },
            {
                name: 'Brian Griffin',
                value: 3,
                isSelected: false
            }
        ]
    },
    {
        name: 'Cats',
        value: 'cats',
        isSelected: true,
        options: [
            {
                name: 'Grumpy Cat',
                value: 1,
                isSelected: true
            },
            {
                name: 'Lil Bub',
                value: 2,
                isSelected: true
            },
            {
                name: 'Hello Kitty',
                value: 3,
                isSelected: true
            }
        ]
    }
];

const sizeOptions = ['', 'xs', 'sm'];

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
export const Nested = Template.bind({});

Default.args = {
    options: optionsA,
    placeholder: 'Select an option',
    size: 'md'
};

Nested.args = {
    options: optionsB,
    placeholder: 'Select an option'
};
