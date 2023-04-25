import renderer from 'react-test-renderer';
import React from 'react';
import Card from '../../components/molecules/Card';

const defaultProps = {
    option: 'underlined-secondary',
    size: 'sm',
    className: 'custom',
    style: { width: 120 }
};

test('Expect <Card> to render properly', () => {
    const tree = renderer
        .create(
            <Card {...defaultProps}>
                <div>Foo</div>
            </Card>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
