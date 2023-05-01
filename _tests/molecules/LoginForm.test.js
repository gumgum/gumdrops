import renderer from 'react-test-renderer';
import React from 'react';
import LoginForm from '../../components/molecules/LoginForm';

const defaultProps = {
    capText: 'Text',
    logoText: 'Logo Text',
    onSubmit: jest.fn(),
    recoveryFn: jest.fn(),
    recoveryText: 'Recovery message'
};

test('Expect <LoginForm> to render properly', () => {
    const tree = renderer
        .create(
            <LoginForm {...defaultProps}>
                <input type="text" />
            </LoginForm>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
