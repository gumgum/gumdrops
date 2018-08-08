/* globals mount */
import React from 'react';
import LoadingDots from '../../components/atoms/LoadingDots';

const defaultProps = {
    className: 'cool-class',
    size: 'lg',
    style: { width: '100px' }
};

describe('Expect <LoadingDots>', () => {
    it('to render', () => {
        const wrapper = mount(<LoadingDots {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render as white', () => {
        const props = {
            ...defaultProps,
            isWhite: true
        };

        const wrapper = mount(<LoadingDots {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
