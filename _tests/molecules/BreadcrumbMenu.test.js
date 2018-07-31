/* globals mount */
import React from 'react';
import BreadcrumbMenu from '../../components/molecules/BreadcrumbMenu';
import BreadcrumbLink from '../../components/molecules/BreadcrumbLink';

const defaultProps = {
    path: '/foo/bar', // parent path
    menu: [
        {
            title: 'Test 1',
            path: 'test'
        },
        {
            title: 'Test 2',
            path: 'test/test'
        }
    ],
    linkComponent: BreadcrumbLink
};

describe('Expect <BreadcrumbMenu>', () => {
    it('to render', () => {
        const wrapper = mount(<BreadcrumbMenu {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
