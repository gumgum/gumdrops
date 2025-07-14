import Table from '../../components/molecules/Table';
import TableData from '../../components/molecules/TableData';
import TableFooter from '../../components/molecules/TableFooter';
import ToolTip from '../../components/atoms/Tooltip';

const columnsSimple = ['id', 'name', 'title', 'age', 'height'];

const columnsCustom = [
    { key: 'id', children: 'ID' },
    { key: 'name', children: 'First Name' },
    { key: 'title', children: 'Job Title' },
    { key: 'age', children: 'Age (years)' },
    { key: 'height', children: 'Height' }
];

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
        headingProps: {
            onClick: console.log('column_heading_clicked')
        }
    },
    {
        key: 'title',
        children: (
            <ToolTip text="Uses a custom click handler">
                Job Title (sorted by length) <i className="fa fa-info-circle -m-r-2" />
            </ToolTip>
        ),
        headingProps: {
            onClick: console.log('column_heading_clicked')
        },
        sortCompareAsc: (a, b) => a.title.length - b.title.length,
        sortCompareDesc: (a, b) => b.title.length - a.title.length
    },
    { key: 'age', children: 'Age (years)' },
    {
        key: 'height',
        children: 'Height',
        headingProps: {
            style: {
                width: '120px'
            },
            className: 'custom-class'
        },
        dataCellDecorator: heightCellDecorator
    }
];

const columnsExpandable = [
    ...columnsAdvanced,
    {
        key: 'age',
        children: 'Row Data',
        renderExpandableColumn(cellData, key, rowData, column) {
            return (<div>
                <pre>{JSON.stringify({
                    cellData,
                    key,
                    rowData,
                    column
                }, null, 2)}</pre>
            </div>)
        },
        renderExpandableTrigger(cellData, key, rowData, column, { isExpanded, onToggle }) {
            return (
                <TableData key={key} onClick={onToggle}>
                    {cellData} <i className={`fa fa-chevron-${isExpanded ? 'up' : 'down'}`} />
                </TableData>
            );
        }
    },
    {
        key: 'summary',
        children: ' Summary',
        renderExpandableColumn(cellData, key, rowData, column) {
            return (<div>
                <p>Hi, my name is {rowData.name} and I am {rowData.age} years old and I work as a {rowData.title} and i am {rowData.height} tall.</p>
            </div>)
        }
    },
]

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

const heightCellDecorator = (cellData, key) => (
    <TableData key={key} context={!cellData ? 'negative' : undefined}>
        {cellData ? cellData : 'n/a'}
    </TableData>
);

const sizeOptions = ['', 'xs', 'sm', 'lg', 'xl'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const createPerson = () => ({
    name: names[getRandomInt(0, names.length - 1)],
    title: jobTitles[getRandomInt(0, jobTitles.length - 1)],
    age: getRandomInt(18, 70),
    height: Math.random() < 0.9 ? `${getRandomInt(4, 7)}'${getRandomInt(1, 11)}"` : null
});

const generateData = amount =>
    Array(amount)
        .fill(null)
        .map((_, i) => ({
            id: i,
            ...createPerson()
        }));

export default {
    title: 'Molecules/Table',
    component: Table,
    argTypes: {
        columns: { control: 'object' },
        hasHeader: { control: 'boolean' },
        isInverse: { control: 'boolean' },
        isSecondary: { control: 'boolean' },
        isStriped: { control: 'boolean' },
        isResponsive: { control: 'boolean' },
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        },
        numOfRows: { control: { type: 'range', min: 1, max: 100, step: 1 } }
    }
};

const Template = args => {
    return (
        <div>
            <p>
                These examples use automatically generated data. See the Docs for how to format your
                own data.
            </p>
            <Table
                {...args}
                onRowClick={() => console.log('row clicked')}
                data={generateData(args.numOfRows)}
                handleSizeChange={() => console.log('page change')}
                onChange={() => console.log('page change')}
            />
        </div>
    );
};


export const Simple = Template.bind({});
Simple.args = {
    columns: columnsSimple,
    numOfRows: 10
};
Simple.parameters = { controls: { exclude: ['children', 'data'] } };

export const Custom = Template.bind({});
Custom.args = {
    columns: columnsCustom,
    numOfRows: 10
};
Custom.parameters = { controls: { exclude: ['children', 'data'] } };

export const Advanced = Template.bind({});
Advanced.args = {
    columns: columnsAdvanced,
    numOfRows: 10,
};
Advanced.parameters = { controls: { exclude: ['children', 'data'] } };

export const Expandable = Template.bind({});
Expandable.args = {
    columns: columnsExpandable,
    numOfRows: 10,
    customRowKey: 'id'
};
Expandable.parameters = { controls: { exclude: ['children', 'data'] } };

export const Footer = Template.bind({});

Footer.args = {
    columns: columnsAdvanced,
    numOfRows: 5,
    footer: [
        {
            id: '123',
            name: '',
            title: '',
            age: 'Average Age: 30',
            height: 'Average Height: 5\'8"',
        },
        {
            id: 'total',
            name: 'Total Rows',
            title: '',
            age: 'Rows: 5',
            height: ''
        }
    ]
}
