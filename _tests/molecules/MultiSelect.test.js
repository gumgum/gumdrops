/* globals mount */
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
    callback: () => {},
    placeholder: 'placeholder',
    size: 'xs',
    className: 'custom-class'
};

describe('Expect <MultiSelect>', () => {
    it('to render', () => {
        const wrapper = mount(<MultiSelect {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to open and close', () => {
        const wrapper = shallow(<MultiSelect {...defaultProps} />);
        const menuBtn = wrapper.find('button[name="multiselectMenu"]');
        expect(wrapper.state().isOpen).toEqual(false);
        // open
        menuBtn.simulate('click');
        expect(wrapper.state().isOpen).toEqual(true);
        expect(wrapper).toMatchSnapshot();
        // close
        menuBtn.simulate('click');
        expect(wrapper.state().isOpen).toEqual(false);
    });
});
