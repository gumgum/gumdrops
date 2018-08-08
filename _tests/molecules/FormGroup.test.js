/* globals mount */
import React from 'react';
import FormGroup from '../../components/molecules/FormGroup';

const defaultProps = {
    isInline: false,
    isDisabled: false,
    context: 'warning',
    className: 'custom-class'
};

describe('Expect <FormGroup>', () => {
    it('to render', () => {
        const wrapper = mount(
            <FormGroup {...defaultProps}>
                <input type="text" />
            </FormGroup>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('to render disabled', () => {
        const props = {
            ...defaultProps,
            isDisabled: true
        };
        const wrapper = mount(
            <FormGroup {...props}>
                <input type="text" />
            </FormGroup>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('to render inline', () => {
        const props = {
            ...defaultProps,
            isInline: true
        };
        const wrapper = mount(
            <FormGroup {...props}>
                <input type="text" />
            </FormGroup>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
