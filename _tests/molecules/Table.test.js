/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Table from '../../components/molecules/Table';

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
