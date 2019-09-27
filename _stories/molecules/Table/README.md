# Table

The `<Table>` component creates a table from a provided data source. It allows for column configuration, alphanumeric sorting, custom sorting, and theming.

**Note:** The table component requires `React ^16.3.0`

## Usage

Simple usage of the `<Table>` just requires a `data` and `columns` prop. Data must be provided as an array of objects with keys that match column identifiers. Columns are also provided by an array that identifies the keys of the data to use. Array order will determine their order in the table. Here's an example:

```js
const data = [
    {
        name: 'John',
        age: 36
    },
    {
        name: 'Jane',
        age: 32
    }
];

const columns = ['name', 'age']; // table columns will be ordered by the array

const People = () => <Table columns={columns} data={data} />;
```

## Props

The following props can be passed to the `<Table>` component:

| name        | type       | description                                                                                                                                                                                                                                                | default |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data        | `Array`    | An `Array` of `Objects` with simple key/value pairs.                                                                                                                                                                                                       |         |
| columns     | `Array`    | An `Array` of `Strings` identifying the keys from the `data` to be displayed in columns. [Customization of columns](#columns) can be made by providing an `Array` of `Objects`. Order of the columns in the table is determined by the order of the array. |         |
| children    | `node`     | To render children in the `<Table>`. Use if you want to manually construct a table.                                                                                                                                                                        |         |
| className   | `String`   | Additional classes to be added to the `<table>`.                                                                                                                                                                                                           |         |
| hasHeader   | `Bool`     | Indicate if the tables should use a header.                                                                                                                                                                                                                | `true`  |
| isInverse   | `Bool`     | Indicate if the table theme should be inversed (dark).                                                                                                                                                                                                     |         |
| isSecondary | `Bool`     | Indicate if the table theme is the `secondary` style.                                                                                                                                                                                                      |         |
| isStriped   | `Bool`     | Indicate if the table theme should use striped rows.                                                                                                                                                                                                       |         |
| isResponsive| `Bool`     | Indicate if the table should be allowed ot scroll horizontally.                                                                                                                                                                                            |         |
| onRowClick  | `Function` | Click handler for rows. Will be called with the data contained in the row as the first arg.                                                                                                                                                                |         |
| customRowKey| `String`   | Column of the data to be used as key when creating `<Row>` elements.                                                                                                                                                                                       |         |
| size        | `String`   | Indicate the size of the table. One of `sm`, `lg`, `xs` or `xl`                                                                                                                                                                                            |         |

## Columns

For more advanced configuration you can supply additional properties to the `columns` array:

| property          | type       | description                                                                                                                                             |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key               | `String`   | Key representing the corresponding data property.                                                                                                       |
| children          | `Node`     | Custom markup to render in the column heading [See example](#custom-column-markup)                                                                      |
| disableSorting    | `Boolean`  | Disables ability to sort column data                                                                                                                    |
| dataCellDecorator | `Function` | Customize cell markup with a decorator, a function that is called with the cell data, a React key, and the row data. [See example](#custom-cell-markup) |
| headingProps      | `Object`   | Props object to be passed to the `<TableHeading>` component. [See example](#custom-heading-props)                                                       |
| sortCompareAsc    | `Function` | Custom ascending sort compare function. [See example](#custom-sorting)                                                                                  |
| sortCompareDesc   | `Function` | Custom descending sort compare function. [See example](#custom-sorting)                                                                                 |

## Advanced Column Examples

The `columns` prop config can take a number of more advanced configurations as seen above. Here are some examples of these advanced setups like customizing titles, markup, or sorting.

### Custom Column Markup

If custom markup is needed in the column heading, use the `children` property:

```jsx
const columns = [
    {
        key: 'name',
        children: 'Employee Name'
    },
    {
        key: 'age',
        children: <ToolTip text="Custom markup">Age (years)</ToolTip>
    }
];

const People = () => <Table columns={columns} data={data} />;
```

### Custom Cell Markup

Custom markup can be created for individual table data cells (`<td>`) by adding a `dataCellDecorator` function:

```js
import TableData from 'gumdrops/TableData';

const weightCellDecorator = (cellData, key, rowData) => (
    <TableData
        key={key}
        context={cellData < 200 ? 'positive' : cellData === 200 ? 'neutral' : 'negative'}>
        <a href={`/people/${rowData.name}`}>
            {cellData < 200 ? `↓ ${cellData}` : cellData === 200 ? cellData : `↑ ${cellData}`}
        </a>
    </TableData>
);

const columns = [
    { key: 'name', children: 'First Name' },
    { key: 'title', children: 'Job Title' },
    { key: 'age', children: 'Age (years)' },
    {
        key: 'weight',
        children: 'Weight (pounds)',
        dataCellDecorator: weightCellDecorator
    },
    { key: 'height', children: 'Height' }
];

const People = () => <Table columns={columns} data={data} />;
```

### Custom Sorting

Sorting can be customized with the `sortCompareAsc` and `sortCompareDesc` properties which define the compare functions to be used for ascending and descending sorting.

```js
const columnsAdvanced = [
    { key: 'name' },
    {
        key: 'title',
        children: 'Job Title (sorted by title length)',
        sortCompareAsc: (a, b) => a.title.length - b.title.length,
        sortCompareDesc: (a, b) => b.title.length - a.title.length
    },
    { key: 'age' },
    { key: 'weight' },
    { key: 'height' }
];

const People = () => <Table columns={columns} data={data} />;
```

### Custom Heading Props

Props can be passed to the `<TableHeading>` component with the `headingProps` property. This is useful when you need to size columns or sort the table data externally such as from an API.

```jsx
const columnsAdvanced = [
    { key: 'name' },
    {
        key: 'title',
        disableSorting: true,
        headingProps: {
            className: 'custom-class',
            style: {
                width: '10%'
            },
            onClick: this.sortColumn('title'), // sorting handled externally
            sortDirection: this.state.sortDirection // one of 'asc' or 'desc'
        }
    },
    { key: 'age' },
    { key: 'weight' },
    { key: 'height' }
];

const People = () => <Table columns={columns} data={data} />;
```

### Custom Row Key

Default behaviour is to generate each row's key using a sequential iterator, (row-0, row-1, etc).
If the Table has a `customRowKey` prop, this value will be generated from the column with the same name.

The following example will produce rows with keys `key-x123` and `key-y456` from data rows `id: x123` and `id: y456` respectively.

```js
const data = [
    { name : 'Alice', age: 20, id: 'x123' },
    { name : 'Bob', age: 20, id: 'y456' },
];

const People = () => <Table columns={columns} data={data} customRowKey="id"/>;
```
