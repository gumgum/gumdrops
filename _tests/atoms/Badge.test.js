import renderer from 'react-test-renderer';
import React from 'react';
import Badge from '../../components/atoms/Badge';

test('Expect <Badge> to render properly', () => {
    const props = {
        text: 'This is text',
        context: 'inverse',
        className: 'foo-class',
        style: {
            width: '1000px'
        }
    };
    const tree = renderer
        .create(
            <Badge {...props}>
                <div>foo</div>
            </Badge>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Badge> to render properly with empty', () => {
    const props = {
        text: 'Ignored text',
        context: 'inverse',
        className: 'foo-class',
        empty: true,
        style: {
            width: '1000px'
        }
    };
    const tree = renderer.create(<Badge {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
