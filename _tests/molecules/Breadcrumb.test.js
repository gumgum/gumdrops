/* globals mount */
import React from 'react';
import Breadcrumb from '../../components/molecules/Breadcrumb';
import BreadcrumbLink from '../../components/molecules/BreadcrumbLink';

const defaultProps = {
    title: 'Breadcrumb Title',
    pathname: '/foo/bar/fat/bat',
    path: 'woohoos',
    subpaths: [{ title: 'Cool', path: 'cool' }, { title: 'Cool', path: 'wow' }],
    isLast: false,
    linkComponent: BreadcrumbLink,
    className: 'custom-class'
};

describe('Expect <Breadcrumb>', () => {
    it('to render', () => {
        const wrapper = mount(<Breadcrumb {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render as last', () => {
        const props = {
            ...defaultProps,
            isLast: true
        };
        const wrapper = mount(<Breadcrumb {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render without subpath menu', () => {
        const props = {
            ...defaultProps,
            subpaths: null
        };
        const wrapper = mount(<Breadcrumb {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render with hidden menus', () => {
        const props = {
            ...defaultProps,
            hideMenus: true
        };
        const wrapper = mount(<Breadcrumb {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
