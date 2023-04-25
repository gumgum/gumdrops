import renderer from 'react-test-renderer';
import React from 'react';
import CardImage from '../../components/molecules/CardImage';

const defaultProps = {
    option: 'top',
    className: 'custom',
    size: 'xl',
    style: { width: 120 },
    url: 'https://foo.bar'
};

test('Expect <CardImage> to render properly', () => {
    const tree = renderer.create(<CardImage {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});
