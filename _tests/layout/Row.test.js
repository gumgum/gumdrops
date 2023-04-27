import renderer from 'react-test-renderer';
import React from 'react';
import Row from '../../components/layout/Row';

const props = {
    className: 'cool-stuff'
};

test('Expect <Row> to render properly', () => {
    const tree = renderer
        .create(
            <Row {...props}>
                <div>Content</div>
            </Row>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
