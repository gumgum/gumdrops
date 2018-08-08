/* globals mount */
import React from 'react';
import Pagination from '../../components/molecules/Pagination';

const defaultProps = {
    onChange: () => {},
    lastPage: 100,
    activePage: 6,
    boundaries: false,
    justify: false,
    size: 'sm',
    className: 'custom-class'
};

describe('Expect <Pagination>', () => {
    it('to render', () => {
        const wrapper = mount(<Pagination {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render with boundaries and justify', () => {
        const props = {
            ...defaultProps,
            boundaries: true,
            justify: true
        };
        const wrapper = mount(<Pagination {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
