import React from 'react';

import MultiSelect from '../../components/molecules/MultiSelect';

const optionsA = [
    {
        name: 'Lassie',
        value: 1,
        selected: true
    },
    {
        name: 'Snoopy',
        value: 2,
        selected: true
    },
    {
        name: 'Toto',
        value: 3,
        selected: false
    },
    {
        name: 'Brian Griffin',
        value: 3,
        selected: false
    }
];

const optionsB = [
    {
        name: 'All Pets',
        value: 0,
        selected: false
    },
    {
        name: 'Dogs',
        value: 1,
        selected: false,
        options: [
            {
                name: 'Lassie',
                value: 1,
                selected: true
            },
            {
                name: 'Snoopy',
                value: 2,
                selected: true
            },
            {
                name: 'Toto',
                value: 3,
                selected: false
            },
            {
                name: 'Brian Griffin',
                value: 3,
                selected: false
            }
        ]
    },
    {
        name: 'Cats',
        value: 'cats',
        selected: false,
        options: [
            {
                name: 'Grumpy Cat',
                value: 1,
                selected: true
            },
            {
                name: 'Lil Bub',
                value: 2,
                selected: true
            },
            {
                name: 'Hello Kitty',
                value: 3,
                selected: false
            }
        ]
    }
];

const sizeOptions = ['', 'xs', 'sm'];

export default {
    title: 'Molecules/MultiSelect',
    component: MultiSelect,
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
    return <MultiSelect {...args} />;
};

export const Default = Template.bind({});
export const Nested = Template.bind({});

Default.args = {
    options: optionsA,
    placeholder: 'Select an option',
    style: { maxHeight: '250px', overflowY: 'auto', position: 'relative' },
};

Nested.args = {
    options: optionsB,
    placeholder: 'Select an option',
    style: { maxHeight: '250px', overflowY: 'auto', position: 'relative' },
};
