import renderer from 'react-test-renderer';
import React from 'react';
import Tag from '../../components/atoms/Tag';

const defaultProps = {
    context: 'primary',
    className: 'custom-class',
    onClick: jest.fn(),
    onOptionClick: jest.fn(),
    hasOption: true,
    optionIcon: 'bt-times',
    optionLabel: 'Remove me',
    size: 'sm',
    style: { wdith: '100%' },
    text: 'Cool Tagz'
};

test('Expect <Tag> to render properly', () => {
    const tree = renderer.create(<Tag {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Button> to render properly without option', () => {
    const props = {
        ...defaultProps,
        hasOption: false,
        onOptionClick: undefined,
        optionIcon: undefined
    };
    const tree = renderer.create(<Tag {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
