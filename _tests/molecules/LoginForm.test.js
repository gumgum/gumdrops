/* globals mount */
import React from 'react';
import LoginForm from '../../components/molecules/LoginForm';

const defaultProps = {
    capText: 'Text',
    logoText: 'Logo Text',
    onSubmit: () => {},
    recoveryFn: () => {},
    recoveryText: 'Recovery message'
};

describe('Expect <LoginForm>', () => {
    it('to render', () => {
        const wrapper = mount(
            <LoginForm {...defaultProps}>
                <input type="text" />
            </LoginForm>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
