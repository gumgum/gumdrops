/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Table from '../../components/molecules/Table';
import TableBody from '../../components/molecules/TableBody';
import TableData from '../../components/molecules/TableData';
import TableFooter from '../../components/molecules/TableFooter';
import TableRow from '../../components/molecules/TableRow';

const defaultProps = {
    data: [
        {
            foo: 'Foo',
            bar: 'Bar'
        }
    ],
    columns: ['foo', 'bar'],
    className: 'custom-class',
    hasHeader: false,
    isInverse: false,
    isSecondary: false,
    isStriped: false,
    isResponsive: false,
    onRowClick: jest.fn(),
    size: 'lg'
};

const mockAnimate = function([from, to]) {
    this.style.height = to.height;
    return {
        onFinish: jest.fn(),
    }
}

Object.defineProperty(HTMLElement.prototype, 'animate', {
  value: mockAnimate,
  writable: true
});

Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    value: 100,
    writable: true
});

test('Expect <Table> to render properly', () => {
    const tree = renderer.create(<Table {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Table> to render customized', () => {
    const props = {
        ...defaultProps,
        hasHeader: true,
        isInverse: true,
        isSecondary: true,
        isStriped: true,
        isResponsive: true
    };
    const tree = renderer.create(<Table {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Table> to render using advanced configs', () => {
    const props = {
        ...defaultProps,
        columns: [
            {
                key: 'foo',
                children: 'Foo',
                headingProps: { style: { width: 100, onClick: jest.fn() } }
            },
            {
                key: 'bar',
                children: 'Bar',
                headingProps: { style: { width: 100, onClick: jest.fn() } }
            }
        ]
    };
    const tree = renderer.create(<Table {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Table> to sort by alpha ascending/descending order when a heading is clicked', () => {
    const props = {
        hasHeader: true,
        columns: ['foo'],
        data: [{ foo: 'zoo' }, { foo: 'bar' }, { foo: 'ok' }]
    };

    const { getByText, getAllByRole } = render(<Table {...props} />);
    const heading = getByText('foo');

    // Click on heading to sort by name ascending
    fireEvent.click(heading);

    const cells = getAllByRole('cell');
    expect(cells[0].textContent).toContain('bar');
    expect(cells[1].textContent).toContain('ok');
    expect(cells[2].textContent).toContain('zoo');

    // Click on heading again to sort by name descending
    fireEvent.click(heading);
    expect(cells[0].textContent).toContain('zoo');
    expect(cells[1].textContent).toContain('ok');
    expect(cells[2].textContent).toContain('bar');
});

test('Expect <Table> to manually set sort direction', () => {
    const props = {
        hasHeader: true,
        columns: [{ key: 'foo', children: 'Foo', headingProps: { sortDirection: 'asc' } }],
        data: [{ foo: 'bar' }]
    };

    const { getByText } = render(<Table {...props} />);

    const heading = getByText('Foo');
    expect(heading).toHaveClass('gds-table__header--sort-asc');
});

test('Expect <Table> to render when used without columns prop', () => {
    const tree = renderer.create(<Table>
        <TableBody>
            <TableData>
                Foo
            </TableData>
        </TableBody>
    </Table>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('Expect <Table> to render with expandable rows', () => {
    const props = {
        ...defaultProps,
        columns: [
            {
                key: 'foo',
                children: 'Foo',
                headingProps: { style: { width: 100, onClick: jest.fn() } }
            },
            {
                key: 'bar',
                children: 'Bar',
                renderExpandableColumn(cellData) {
                    return <div>Expandable - {cellData}</div>;
                }
            }
        ]
    };
    const tree = renderer.create(<Table {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
    const { queryByTestId } = render(<Table {...props} />);
    expect(queryByTestId('expandable-row-0')).toBeInTheDocument();
});

test('Expect <Table> not to render collapsible element when no renderExpandableColumn method is provided', () => {
    const props = {
        ...defaultProps,
        columns: [
            {
                key: 'foo',
                children: 'Foo',
                headingProps: { style: { width: 100, onClick: jest.fn() } }
            },
            {
                key: 'bar',
                children: 'Bar',
            }
        ]
    };
    const { queryByTestId } = render(<Table {...props} />);
    expect(queryByTestId('expandable-row-0')).not.toBeInTheDocument();
});

test('Expect <Table> to expand the row when the chevron is clicked', () => {
    const props = {
        ...defaultProps,
        customRowKey: 'foo',
        columns: [
            {
                key: 'foo',
                children: 'Foo',
                headingProps: { style: { width: 100, onClick: jest.fn() } }
            },
            {
                key: 'bar',
                children: 'Bar',
                renderExpandableColumn(cellData) {
                    return <div>Expandable - {cellData}</div>;
                }
            }
        ]
    };
    const { queryByTestId } = render(<Table {...props} />);
    const expandableRow = queryByTestId('expandable-row-Foo');
    expect(expandableRow.querySelector('.gds-table--collapsible').style.height).toEqual('0px');
    fireEvent.click(queryByTestId('row-Foo-key-1'));
    expect(queryByTestId('row-Foo-key-1')).toBeInTheDocument();
    expect(expandableRow.querySelector('.gds-table--collapsible').style.height).toEqual('100px');
});


test('Expect <Table> to render the table footer component as an object', () => {
    const props = {
        ...defaultProps,
        customRowKey: 'foo',
        columns: [
            {
                key: 'foo',
                children: 'Foo',
                headingProps: { style: { width: 100, onClick: jest.fn() } }
            },
            {
                key: 'bar',
                children: 'Bar',
                renderExpandableColumn(cellData) {
                    return <div>Expandable - {cellData}</div>;
                }
            }
        ],
        footer: {
            foo: 'Bar Footer',
            bar: 'Foo Footer'
        }
    };
    const { queryByTestId, debug } = render(<Table {...props} />);
    debug();
    const footer = queryByTestId('table-footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toMatchSnapshot();
});

test('Expect <Table> to render the table footer component as a JSX.Element', () => {
    const props = {
        ...defaultProps,
        customRowKey: 'foo',
        columns: [
            {
                key: 'foo',
                children: 'Foo',
                headingProps: { style: { width: 100, onClick: jest.fn() } }
            },
            {
                key: 'bar',
                children: 'Bar',
                renderExpandableColumn(cellData) {
                    return <div>Expandable - {cellData}</div>;
                }
            }
        ],
        footer: <TableFooter data-testid="table-footer-manual">
            <TableRow>
                <TableData colspan={2}>Footer!</TableData>
            </TableRow>
        </TableFooter>
    };
    const { queryByTestId } = render(<Table {...props} />);
    const footer = queryByTestId('table-footer-manual');
    expect(footer).toBeInTheDocument();
    expect(footer).toMatchSnapshot();
});
