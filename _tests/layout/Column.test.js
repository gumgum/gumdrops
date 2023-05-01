import renderer from 'react-test-renderer';
import React from 'react';
import Column from '../../components/layout/Column';

const props = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2
};

test('Expect <Column> to render properly', () => {
    const tree = renderer
        .create(
            <Column {...props}>
                <div>Content</div>
            </Column>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
