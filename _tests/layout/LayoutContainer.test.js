import renderer from 'react-test-renderer';
import React from 'react';
import LayoutContainer from '../../components/layout/LayoutContainer';

test('Expect <LayoutContainer> to render properly', () => {
    const tree = renderer
        .create(
            <LayoutContainer>
                <div>Content</div>
            </LayoutContainer>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <LayoutContainer> to render as full width', () => {
    const props = {
        fullWidth: true
    };
    const tree = renderer
        .create(
            <LayoutContainer {...props}>
                <div>Content</div>
            </LayoutContainer>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
