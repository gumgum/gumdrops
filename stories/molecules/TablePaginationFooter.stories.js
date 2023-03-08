import TablePaginationFooter from '../../components/molecules/TablePaginationFooter';

import mdx from './TablePaginationFooter.mdx';

const sizeOptions = [
    { name: '10', value: '10' },
    { name: '20', value: '20' },
    { name: '50', value: '50' },
    { name: '100', value: '100' }
];

export default {
    title: 'Molecules/TablePaginationFooter',
    component: TablePaginationFooter,
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        totalPages: { control: 'number' },
        totalElements: { control: 'number' },
        activePage: { control: 'number' },
        size: { control: 'number' },
        sizeOptions: { type: 'object' }
    }
};

const Template = args => {
    return (
        <TablePaginationFooter
            {...args}
            handlePageChange={() => console.log('page change')}
            handleSizeChange={() => console.log('page change')}
        />
    );
};

export const Default = Template.bind({});

Default.args = {
    totalPages: 10,
    totalElements: 100,
    activePage: 7,
    size: 10,
    sizeOptions
};
