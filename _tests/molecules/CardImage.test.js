/* globals mount */
import React from 'react';
import CardImage from '../../components/molecules/CardImage';

const defaultProps = {
    option: 'top',
    className: 'custom',
    size: 'xl',
    style: { width: 120 },
    url: 'https://foo.bar'
};

describe('Expect <CardImage>', () => {
    it('to render', () => {
        const wrapper = mount(<CardImage {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
