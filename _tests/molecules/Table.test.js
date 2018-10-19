/* globals mount */
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
    onRowClick: () => {},
    size: 'lg'
};

describe('Expect <Table>', () => {
    it('to render', () => {
        const wrapper = mount(<Table {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render customized', () => {
        const props = {
            ...defaultProps,
            hasHeader: true,
            isInverse: true,
            isSecondary: true,
            isStriped: true,
            isResponsive: true
        };
        const wrapper = mount(<Table {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render using advanced configs', () => {
        const props = {
            ...defaultProps,
            columns: [
                {
                    key: 'foo',
                    children: 'Foo',
                    headingProps: { style: { width: 100, onClick: () => {} } }
                },
                {
                    key: 'bar',
                    children: 'Bar',
                    headingProps: { style: { width: 100, onClick: () => {} } }
                }
            ]
        };
        const wrapper = mount(<Table {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('sorts by alpha ascending/descending order when a heading is clicked', () => {
        const props = {
            hasHeader: true,
            columns: ['foo'],
            data: [{ foo: 'zoo' }, { foo: 'bar' }, { foo: 'ok' }]
        };
        const curOrder = ['zoo', 'bar', 'ok'];
        const asc = ['bar', 'ok', 'zoo'];
        const desc = ['zoo', 'ok', 'bar'];

        const wrapper = mount(<Table {...props} />);
        const data = wrapper.find('td');
        data.forEach((node, i) => expect(node.text()).toBe(curOrder[i]));

        const heading = wrapper.find('TableHeading');
        heading.simulate('click');
        data.forEach((node, i) => expect(node.text()).toBe(asc[i]));

        heading.simulate('click');
        data.forEach((node, i) => expect(node.text()).toBe(desc[i]));
    });

    it('sorts by numeric ascending/descending order when a heading is clicked', () => {
        const props = {
            hasHeader: true,
            columns: ['foo'],
            data: [{ foo: 1235 }, { foo: 99 }, { foo: 180 }]
        };
        const curOrder = [1235, 99, 180];
        const asc = [99, 180, 1235];
        const desc = [1235, 180, 99];

        const wrapper = mount(<Table {...props} />);
        const data = wrapper.find('td');
        data.forEach((node, i) => expect(parseInt(node.text())).toEqual(curOrder[i]));

        const heading = wrapper.find('TableHeading');
        heading.simulate('click');
        data.forEach((node, i) => expect(parseInt(node.text())).toEqual(asc[i]));

        heading.simulate('click');
        data.forEach((node, i) => expect(parseInt(node.text())).toEqual(desc[i]));
    });

    it('manually set sort direction', () => {
        const props = {
            hasHeader: true,
            columns: [{ key: 'foo', children: 'Foo', headingProps: { sortDirection: 'asc' } }],
            data: [{ foo: 'bar' }]
        };

        const wrapper = mount(<Table {...props} />);
        expect(wrapper.find('th').hasClass('gds-table__header--sort-asc')).toEqual(true);
        wrapper.setProps({
            columns: [{ key: 'foo', children: 'Foo', headingProps: { sortDirection: 'desc' } }]
        });
        expect(wrapper.find('th').hasClass('gds-table__header--sort-desc')).toEqual(true);
    });
});
