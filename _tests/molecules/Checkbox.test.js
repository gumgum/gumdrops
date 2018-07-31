/* globals mount */
import React from 'react';
import Checkbox from '../../components/molecules/Checkbox';

const defaultProps = {
    label: 'Check Me',
    size: 'xs',
    className: 'custom-class',
    style: { width: 140 }
};

describe('Expect <Checkbox>', () => {
    it('to render', () => {
        const wrapper = mount(<Checkbox {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render with other props', () => {
        const props = {
            ...defaultProps,
            onChange: () => {},
            value: 'foo'
        };
        const wrapper = mount(<Checkbox {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
