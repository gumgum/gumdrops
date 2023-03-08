import React from 'react';

import Pagination from '../../components/molecules/Pagination';

import mdx from './Pagination.mdx';

const sizeOptions = ['', 'xs', 'sm', 'lg', 'xl'];

export default {
    title: 'Molecules/Pagination',
    component: Pagination,
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        activePage: { control: 'number' },
        lastPage: { control: 'number' },
        boundaries: { control: 'boolean' },
        justify: { control: 'boolean' },
        onChange: 'change',
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => {
    return <Pagination {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    activePage: 7,
    lastPage: 70
};
