import renderer from 'react-test-renderer';
import React from 'react';
import Toggle from '../../components/molecules/Toggle';

const defaultProps = {
    type: 'checkbox',
    label: 'Toggle Label',
    size: 'sm',
    style: { width: 100 },
    className: 'custom-class'
};

test('Expect <Toggle> to render properly', () => {
    const tree = renderer.create(<Toggle {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});
