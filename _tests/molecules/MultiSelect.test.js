/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import React from 'react';
import MultiSelect from '../../components/molecules/MultiSelect';

const options = [
    { name: 'All Pets', value: 0, selected: false },
    {
        name: 'Dogs',
        value: 1,
        selected: false,
        options: [
            { name: 'Lassie', value: 1, selected: true },
            { name: 'Snoopy', value: 2, selected: true },
            { name: 'Toto', value: 3, selected: false },
            { name: 'Brian Griffin', value: 3, selected: false }
        ]
    },
    {
        name: 'Cats',
        value: 'cats',
        selected: false,
        options: [
            { name: 'Grumpy Cat', value: 1, selected: true },
            { name: 'Lil Bub', value: 2, selected: true },
            { name: 'Hello Kitty', value: 3, selected: false }
        ]
    }
];

const defaultProps = {
    options,
    callback: jest.fn(),
    placeholder: 'placeholder',
    size: 'xs',
    className: 'custom-class'
};

test('Expect <MultiSelect> to render properly', () => {
    const tree = renderer.create(<MultiSelect {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});
