/* globals shallow mount */
import React from 'react';
import SnackbarNotification from '../../components/atoms/SnackbarNotification';

const noop = () => {};

const props = {
    id: 1,
    text: 'Snackbar Message',
    context: 'info',
    callback: noop
};

describe('Expect <SnackbarNotification>', () => {
    it('to render the component', () => {
        const wrapper = shallow(<SnackbarNotification {...props} />);
        expect(wrapper.find('.gds-snackbar__notification').length).toBe(1);
        expect(wrapper.text()).toMatch('Snackbar Message');
        expect(wrapper).toMatchSnapshot();
    });

    it('to render a child component', () => {
        const wrapper = shallow(
            <SnackbarNotification id="1">Snackbar Message</SnackbarNotification>
        );
        expect(wrapper.find('p.gds-snackbar__notification-text').length).toBe(1);
        expect(wrapper.find('p.gds-snackbar__notification-text').text()).toMatch(
            'Snackbar Message'
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('to apply the given context as a css class', () => {
        const wrapper = shallow(<SnackbarNotification {...props} context="warning" />);
        expect(wrapper.find('.gds-snackbar__notification--warning').length).toBe(1);
        expect(wrapper.find('.gds-snackbar__notification-button--warning').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('to not render if there is no message', () => {
        const wrapper = shallow(<SnackbarNotification id="1" />);
        expect(wrapper.find('.gds-snackbar__notification').length).toBe(0);
        expect(wrapper).toMatchSnapshot();
    });

    it('to be hidden when close button is pressed', () => {
        const wrapper = shallow(<SnackbarNotification {...props} />);
        const closeBtn = wrapper.find('.gds-snackbar__notification-button');
        expect(wrapper.find('.gds-snackbar__notification--hidden').length).toBe(0);
        closeBtn.simulate('click');
        expect(wrapper.find('.gds-snackbar__notification--hidden').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('to call callback after hide', () => {
        const mockCallback = jest.fn();
        const wrapper = shallow(<SnackbarNotification {...props} callback={mockCallback} />);
        const closeBtn = wrapper.find('.gds-snackbar__notification-button');
        closeBtn.simulate('click');
        expect(mockCallback).toBeCalledTimes(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('to hide after 2 seconds', () => {
        jest.useFakeTimers();
        const callback = jest.fn();
        const wrapper = shallow(
            <SnackbarNotification {...props} msToClose={2000} callback={callback} />
        );
        jest.advanceTimersByTime(1000);
        expect(wrapper.find('.gds-snackbar__notification--hidden').length).toBe(0);
        expect(callback).toHaveBeenCalledTimes(0);
        jest.advanceTimersByTime(2500);
        // Calling update on wrapper to solve this issue:
        // https://github.com/airbnb/enzyme/issues/1229
        wrapper.update();
        expect(callback).toHaveBeenCalledTimes(1);
        expect(wrapper.find('.gds-snackbar__notification--hidden').length).toBe(1);
    });

    it('to not show close button', () => {
        const wrapper = shallow(<SnackbarNotification {...props} hideCloseButton />);
        expect(wrapper.find('.gds-snackbar__notification-button').length).toBe(0);
    });

    it('to not autoclose', () => {
        jest.useFakeTimers();
        const wrapper = shallow(<SnackbarNotification {...props} msToClose={0} />);
        expect(wrapper.find('.gds-snackbar__notification--hidden').length).toBe(0);
        jest.advanceTimersByTime(5000);
        wrapper.update();
        expect(wrapper.find('.gds-snackbar__notification--hidden').length).toBe(0);
    });
});
