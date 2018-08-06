/* globals mount */
import React from 'react';
import Button from '../../components/atoms/Button';

const defaultProps = {
    group: false,
    size: 'sm',
    onClick: () => {},
    text: 'This is text',
    context: 'danger',
    className: 'foo-class',
    style: {
        width: '1000px'
    },
    onBlur: () => {}
};

describe('Expect <Button>', () => {
    it('to render', () => {
        const wrapper = mount(<Button {...defaultProps}>My Cool Button</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it('to renders as a group button', () => {
        const props = {
            ...defaultProps,
            group: true
        };
        const wrapper = mount(<Button {...props}>My Cool Button</Button>);
        expect(wrapper).toMatchSnapshot();
    });
});
