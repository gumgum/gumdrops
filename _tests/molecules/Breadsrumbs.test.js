/* globals mount */
import React from 'react';
import Breadcrumbs from '../../components/molecules/Breadcrumbs';

const defaultProps = {
    className: 'cool-crumbs',
    pathname: '/home/category/subcategory-2',
    config: {
        title: 'Start',
        path: '/',
        subpaths: [
            {
                title: 'Home',
                path: 'home',
                subpaths: [
                    {
                        title: 'Main Category',
                        path: 'category',
                        subpaths: [
                            {
                                title: 'Sub Category 1',
                                path: 'subcategory-1'
                            },
                            {
                                title: 'Sub Category 2',
                                path: 'subcategory-2'
                            },
                            {
                                title: 'Sub Category 3',
                                path: 'subcategory-3'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    titleDecorator: () => {},
    hideMenus: false,
    hideRoot: false
};

describe('Expect <Breadcrumbs>', () => {
    it('to render', () => {
        const wrapper = mount(<Breadcrumbs {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render a different path', () => {
        const props = {
            ...defaultProps,
            pathname: '/home'
        };
        const wrapper = mount(<Breadcrumbs {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render hidden root and menus', () => {
        const props = {
            ...defaultProps,
            hiddenMenus: true,
            hideRoot: true
        };
        const wrapper = mount(<Breadcrumbs {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
