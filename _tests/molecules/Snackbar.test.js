/* globals shallow */
import React from 'react';
import Snackbar from '../../components/molecules/Snackbar';

describe('Expect <Snackbar>', () => {
    it('to render', () => {
        const wrapper = shallow(<Snackbar />);
        expect(wrapper.find('.gds-snackbar').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render a child component', () => {
        const wrapper = shallow(
            <Snackbar>
                <li className="gds-snackbar__notification">
                    <p>Test</p>
                </li>
            </Snackbar>
        );
        expect(wrapper.find('.gds-snackbar__notification').length).toBe(1);
        expect(wrapper.find('p').text()).toMatch('Test');
        expect(wrapper).toMatchSnapshot();
    });
});
