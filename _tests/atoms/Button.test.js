/* globals mount */
import React from 'react';
import Button from '../../components/atoms/Button';

const defaultProps = {
    isGroup: false,
    isBlock: false,
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
            isGroup: true
        };
        const wrapper = mount(<Button {...props}>My Cool Button</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it('to renders as a blocked button', () => {
        const props = {
            ...defaultProps,
            isBlock: true
        };
        const wrapper = mount(<Button {...props}>My Cool Button</Button>);
        expect(wrapper).toMatchSnapshot();
    });
});
