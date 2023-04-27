import renderer from 'react-test-renderer';
import React from 'react';
import CardBlock from '../../components/molecules/CardBlock';

const defaultProps = {
    option: 'divide-top',
    className: 'custom',
    style: { width: 120 }
};

test('Expect <CardBlock> to render properly', () => {
    const tree = renderer
        .create(
            <CardBlock {...defaultProps}>
                <div>Foo</div>
            </CardBlock>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
