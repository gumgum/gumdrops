import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import mdx from './TablePaginationFooter.mdx';
import Pagination from '../../../components/molecules/Pagination';
import TablePaginationFooter from '../../../components/molecules/TablePaginationFooter';
import Select from '../../../components/atoms/Select';

export default {
    component: TablePaginationFooter,
    title: 'Molecules/TablePaginationFooter',
    decorators: [withKnobs],
    parameters: {
        subcomponents: { Pagination, Select },
        docs: { page: mdx }
    }
};

const sizeOptions = [
    { name: '10', value: '10' },
    { name: '20', value: '20' },
    { name: '50', value: '50' },
    { name: '100', value: '100' }
];

export const Default = () => (
    <TablePaginationFooter
        totalPages={number('Total Pages', 10)}
        totalElements={number('Total Elements', 100)}
        handlePageChange={() => {}}
        handleSizeChange={() => {}}
        activePage={number('Active Page', 7)}
        size={number('Size', 10)}
        sizeOptions={sizeOptions}
    />
);
