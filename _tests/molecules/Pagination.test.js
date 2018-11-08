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

    it('to disable next/prev buttons', () => {
        const props = {
            onChange: () => {},
            lastPage: 2,
            activePage: 1,
            boundaries: true,
            justify: true
        };
        const wrapper = mount(<Pagination {...props} />);
        expect(wrapper.find('button [name="prev"]').props().disabled).toBe(true);
        expect(wrapper.find('button [name="next"]').props().disabled).toBe(false);
        wrapper.setProps({ activePage: 2 });
        expect(wrapper.find('button [name="prev"]').props().disabled).toBe(false);
        expect(wrapper.find('button [name="next"]').props().disabled).toBe(true);
    });
});
