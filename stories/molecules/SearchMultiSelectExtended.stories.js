import React from 'react';
import SearchMultiSelectExtended from '../../components/molecules/SearchMultiSelectExtended';

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
        isSelected: false
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
        isSelected: false,
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
                isSelected: false
            }
        ]
    }
];

const sizeOptions = ['', 'xs', 'sm'];

export default {
    title: 'Molecules/SearchMultiSelectExtended',
    component: SearchMultiSelectExtended,
    argTypes: {
        placeholder: { control: 'text' },
        onChange: { action: 'change' },
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        }
    }
};


const Template = args => {
    return <SearchMultiSelectExtended {...args} />;
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


