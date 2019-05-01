/* globals mount shallow */
import React from 'react';
import SearchSelectOptions from '../../components/molecules/SearchSelectOptions';
import charCodes from '../../constants/charCodes';

const options = [
    { id: 1, title: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Consectetur adipiscing elit ' },
    { id: 3, title: 'Sed do eiusmod tempor incididunt ut' },
    { id: 4, title: 'Labore et dolore magna aliqua' },
    { id: 5, title: 'Ut enim ad minim veniam' },
    { id: 6, title: 'Quis nostrud exercitation ullamco' },
    { id: 7, title: 'Laboris nisi ut aliquip ex ea commodo' },
    { id: 8, title: 'Consequat Duis' },
    { id: 9, title: 'Aute irure dolor in reprehenderit ' },
    { id: 10, title: 'In voluptate velit esse cillum dolore' },
    { id: 11, title: 'Eu fugiat nulla pariatur' },
    { id: 12, title: 'Deserunt mollit anim id est laborum' }
];

const defaultProps = {
    handleOptionClick: () => {}
};

describe('Expect <SearchSelectOptions>', () => {
    it('to render', () => {
        const wrapper = shallow(<SearchSelectOptions options={options} {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render no results', () => {
        const wrapper = shallow(
            <SearchSelectOptions options={[]} {...defaultProps} noResultsMessage="oh no!" />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('to call handleOptionClick', () => {
        const handleOptionClick = jest.fn();
        const wrapper = shallow(
            <SearchSelectOptions options={options} handleOptionClick={handleOptionClick} />
        );
        const optionBtn = wrapper.find('button').first();
        optionBtn.simulate('click');

        expect(handleOptionClick).toBeCalledWith(options[0]);
    });

    it('to handle focus with arrow keys', () => {
        const wrapper = mount(<SearchSelectOptions options={options} {...defaultProps} />);
        [
            ['[name="option0"]', charCodes.ARROW_DOWN, 1],
            ['[name="option1"]', charCodes.ARROW_UP, 0],
            ['[name="option0"]', charCodes.ARROW_LEFT, 11],
            ['[name="option11"]', charCodes.ARROW_RIGHT, 0]
        ].forEach(([name, code, expected]) => {
            wrapper.find(name).simulate('keydown', { keyCode: code, preventDefault: () => {} });
            expect(wrapper.state().focusedIndex).toBe(expected);
        });
    });
});
