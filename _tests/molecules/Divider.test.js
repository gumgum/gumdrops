import renderer from 'react-test-renderer';
import React from 'react';
import Divider from '../../components/molecules/Divider';

const defaultProps = {
    label: 'Divider Label',
    centered: false,
    collapsible: false,
    open: false,
    callback: jest.fn(),
    style: { width: 150 }
};

test('Expect <Divider> to render properly', () => {
    const tree = renderer.create(<Divider {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Divider> to render open', () => {
    const props = {
        ...defaultProps,
        collapsible: false,
        open: true
    };
    const tree = renderer.create(<Divider {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
