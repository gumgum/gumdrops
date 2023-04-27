import renderer from 'react-test-renderer';
import React from 'react';
import FormGroup from '../../components/molecules/FormGroup';

const defaultProps = {
    isInline: false,
    isDisabled: false,
    context: 'warning',
    className: 'custom-class'
};

test('Expect <FormGroup> to render properly', () => {
    const tree = renderer
        .create(
            <FormGroup {...defaultProps}>
                <input type="text" />
            </FormGroup>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <FormGroup> to render disabled', () => {
    const props = {
        ...defaultProps,
        isDisabled: true
    };
    const tree = renderer
        .create(
            <FormGroup {...props}>
                <input type="text" />
            </FormGroup>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <FormGroup> to render inline', () => {
    const props = {
        ...defaultProps,
        isInline: true
    };
    const tree = renderer
        .create(
            <FormGroup {...props}>
                <input type="text" />
            </FormGroup>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
