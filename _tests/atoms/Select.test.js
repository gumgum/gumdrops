import renderer from 'react-test-renderer';
import React from 'react';
import Select from '../../components/atoms/Select';

const defaultProps = {
    context: 'success',
    size: 'lg',
    text: '100',
    options: [
        {
            value: 'foo',
            name: 'Foot'
        },
        {
            value: 'woo',
            name: 'Woot'
        }
    ]
};

test('Expect <Select> to render properly', () => {
    const tree = renderer.create(<Select {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});
