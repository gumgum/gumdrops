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
            isStriped: true
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
});
