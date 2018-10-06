/* globals mount */
import React from 'react';
import Divider from '../../components/molecules/Divider';

const defaultProps = {
    label: 'Divider Label',
    centered: false,
    collapsible: false,
    open: false,
    callback: () => {},
    style: { width: 150 }
};

describe('Expect <Divider>', () => {
    it('to render', () => {
        const wrapper = mount(<Divider {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render open', () => {
        const props = {
            ...defaultProps,
            collapsible: false,
            open: true
        };
        const wrapper = mount(<Divider {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
