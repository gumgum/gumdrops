/* globals mount */
import React from 'react';
import Tag from '../../components/atoms/Tag';

const defaultProps = {
    context: 'primary',
    className: 'custom-class',
    onClick: () => {},
    onOptionClick: () => {},
    hasOption: true,
    optionIcon: 'bt-times',
    optionLabel: 'Remove me',
    size: 'sm',
    style: { wdith: '100%' },
    text: 'Cool Tagz'
};

describe('Expect <Tag>', () => {
    it('to render', () => {
        const wrapper = mount(<Tag {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render without option', () => {
        const props = {
            ...defaultProps,
            hasOption: false,
            onOptionClick: undefined,
            optionIcon: undefined
        };
        const wrapper = mount(<Tag {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
