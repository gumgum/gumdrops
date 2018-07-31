/* globals mount */
import React from 'react';
import Toggle from '../../components/molecules/Toggle';

const defaultProps = {
    type: 'checkbox',
    label: 'Toggle Label',
    size: 'sm',
    style: { width: 100 },
    className: 'custom-class'
};

describe('Expect <Toggle>', () => {
    it('to render', () => {
        const wrapper = mount(<Toggle {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
