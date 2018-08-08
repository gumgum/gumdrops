/* globals mount */
import React from 'react';
import CircularThumbnail from '../../components/atoms/CircularThumbnail';

const defaultProps = {
    size: 'sm',
    context: 'danger',
    className: 'foo-class'
};

describe('Expect <CircularThumbnail>', () => {
    it('to render', () => {
        const wrapper = mount(<CircularThumbnail {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
