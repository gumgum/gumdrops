import React from 'react';
import readme from './README.md';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import Table from '../../../components/molecules/Table';
import TableData from '../../../components/molecules/TableData';
import ToolTip from '../../../components/atoms/Tooltip';

const jobTitles = [
    'Motel Maid',
    'Twister Operator',
    'Butane Compressor Operator',
    'Optomechanical Technician',
    'Automobile Body Repair Supervisor',
    'Underground Bolting Machine Operator',
    'Funeral Arranger',
    'Cellist',
    'Labor Economist',
    'Cast-Iron Drain Pipe Layer'
];

const names = [
    'Roselle',
    'Jena',
    'Monnie',
    'Ena',
    'Tonja',
    'Christie',
    'Gretta',
    'Clora',
    'Sona',
    'Magan',
    'Sybil',
    'Elly',
    'Shakira',
    'Carri',
    'Piedad',
    'Valorie',
    'Melinda',
    'Tracie',
    'Brynn',
    'Flossie'
];

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    xl: 'xl',
    '': 'No Value'
};

// Column options

const columnsSimple = ['id', 'name', 'title', 'age', 'weight', 'height'];

const columnsCustom = [
    { key: 'id', children: 'ID' },
    { key: 'name', children: 'First Name' },
    { key: 'title', children: 'Job Title' },
    { key: 'age', children: 'Age (years)' },
    { key: 'weight', children: 'Weight (pounds)' },
    { key: 'height', children: 'Height' }
];

const weightCellDecorator = (cellData, key, rowData) => (
    <TableData
        key={key}
        context={cellData < 200 ? 'positive' : cellData === 200 ? 'neutral' : 'negative'}>
        {cellData < 200 ? `↓ ${cellData}` : cellData === 200 ? cellData : `↑ ${cellData}`}
    </TableData>
);

const heightCellDecorator = (cellData, key, rowData) => (
    <TableData key={key} context={!cellData ? 'negative' : undefined}>
        {cellData ? cellData : 'n/a'}
    </TableData>
);

const columnsAdvanced = [
    { key: 'id', children: 'ID' },
    {
        key: 'name',
        children: (
            <ToolTip text="Uses a custom click handler">
                First Name <i className="fa fa-user -m-r-2" />
            </ToolTip>
        ),
        disableSorting: true,
        onHeadingClick: action('column_heading_clicked')
    },
    {
        key: 'title',
        children: (
            <ToolTip text="Uses a custom click handler">
                Job Title (sorted by length) <i className="fa fa-info-circle -m-r-2" />
            </ToolTip>
        ),
        onHeadingClick: action('column_heading_clicked'),
        sortCompareAsc: (a, b) => a.title.length - b.title.length,
        sortCompareDesc: (a, b) => b.title.length - a.title.length
    },
    { key: 'age', children: 'Age (years)' },
    {
        key: 'weight',
        children: 'Weight (pounds)',
        dataCellDecorator: weightCellDecorator
    },
    { key: 'height', children: 'Height', dataCellDecorator: heightCellDecorator }
];

// Column select options

const columnOptions = {
    simple: 'simple',
    custom: 'custom',
    advanced: 'advanced'
};

const columnConfig = {
    simple: columnsSimple,
    custom: columnsCustom,
    advanced: columnsAdvanced
};

// Sample data

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const createPerson = () => ({
    name: names[getRandomInt(0, names.length - 1)],
    title: jobTitles[getRandomInt(0, jobTitles.length - 1)],
    age: getRandomInt(18, 70),
    weight: getRandomInt(110, 250),
    height: Math.random() < 0.9 ? `${getRandomInt(4, 7)}'${getRandomInt(1, 11)}"` : null
});

const generateData = amount =>
    Array(amount)
        .fill(null)
        .map((_, i) => ({
            id: i,
            ...createPerson()
        }));

const component = () => {
    const numOfRows = number('Rows', 10, {
        range: true,
        min: 1,
        max: 100,
        step: 1
    });

    return (
        <Table
            columns={columnConfig[optionalSelect('Column Config', columnOptions, 'simple')]}
            data={generateData(numOfRows)}
            hasHeader={boolean('hasHeader', true)}
            isInverse={boolean('isInverse', false)}
            isSecondary={boolean('isSecondary', false)}
            isStriped={boolean('isStriped', false)}
            onRowClick={boolean('onRowClick', false) ? action('row_clicked') : undefined}
            size={optionalSelect('Size', sizeOptions, '')}
        />
    );
};

export default [readme, component];
