/* globals mount */
import React from 'react';
import Avatar from '../../components/molecules/Avatar';

const defaultProps = {
    open: false,
    menuCallback: () => {},
    optionCallback: () => {},
    username: 'Kenny',
    img: 'http://foo.com',
    menuOptions: [
        {
            name: 'test',
            path: '/test'
        },
        {
            name: 'moar',
            path: '/more'
        }
    ],
    className: 'custom-class',
    style: { width: '100px' }
};

describe('Expect <Avatar>', () => {
    it('to render', () => {
        const wrapper = mount(<Avatar {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('to render opened', () => {
        const props = {
            ...defaultProps,
            open: true
        };
        const wrapper = mount(<Avatar {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
