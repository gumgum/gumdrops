/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import { render, fireEvent, screen, act } from '@testing-library/react';
import React from 'react';
import SnackbarNotification from '../../components/atoms/SnackbarNotification';

const noop = jest.fn();

const props = {
    id: 1,
    text: 'Snackbar Message',
    context: 'info',
    callback: noop,
    size: 'sm'
};

test('Expect <SnackbarNotification> to render properly', () => {
    const tree = renderer.create(<SnackbarNotification {...props} />);
    expect(tree.toJSON()).toMatchSnapshot();
});

test('Expect <SnackbarNotification> to render child component', () => {
    const component = <SnackbarNotification id="1">Snackbar Message</SnackbarNotification>;
    render(component);
    expect(document.querySelectorAll('p.gds-snackbar__notification-text').length).toBe(1);
    expect(renderer.create(component).toJSON()).toMatchSnapshot();
});

test('Expect <SnackbarNotification> to apply the given context as a css class', () => {
    const component = <SnackbarNotification {...props} context="warning" />;
    render(component);
    expect(document.querySelectorAll('.gds-snackbar__notification--warning').length).toBe(1);
    expect(document.querySelectorAll('.gds-snackbar__notification-button--warning').length).toBe(1);
    expect(renderer.create(component).toJSON()).toMatchSnapshot();
});

test('Expect <SnackbarNotification> to not autoclose', () => {
    jest.useFakeTimers();
    const component = <SnackbarNotification {...props} msToClose={0} />;
    render(component);
    expect(document.querySelectorAll('.gds-snackbar__notification--hidden').length).toBe(0);
    jest.advanceTimersByTime(5000);
    expect(document.querySelectorAll('.gds-snackbar__notification--hidden').length).toBe(0);
});

test('Expect <SnackbarNotification> to not render if there is no message', () => {
    const component = <SnackbarNotification id="1" />;
    render(component);
    expect(document.querySelectorAll('.gds-snackbar__notification').length).toBe(0);
    expect(renderer.create(component).toJSON()).toMatchSnapshot();
});

test('Expect <SnackbarNotification> to be hidden when close button is pressed', () => {
    const component = <SnackbarNotification {...props} />;
    render(component);
    const button = screen.getByRole('button');
    expect(document.querySelectorAll('.gds-snackbar__notification--hidden').length).toBe(0);
    fireEvent.click(button);
    expect(document.querySelectorAll('.gds-snackbar__notification--hidden').length).toBe(1);
    expect(renderer.create(component).toJSON()).toMatchSnapshot();
});

test('Expect <SnackbarNotification> to call callback after hide', () => {
    const mockCallback = jest.fn();
    const component = <SnackbarNotification {...props} callback={mockCallback} />;
    render(component);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockCallback.mock.calls).toHaveLength(1);
    expect(renderer.create(component).toJSON()).toMatchSnapshot();
});

test('Expect <SnackbarNotification> to hide after 2 seconds', () => {
    jest.useFakeTimers();
    const mockCallback = jest.fn();

    const component = <SnackbarNotification {...props} msToClose={2000} callback={mockCallback} />;
    render(component);

    jest.advanceTimersByTime(1000);

    expect(mockCallback.mock.calls).toHaveLength(0);
    expect(document.querySelectorAll('.gds-snackbar__notification--hidden').length).toBe(0);

    act(() => jest.advanceTimersByTime(2500));
    expect(mockCallback.mock.calls).toHaveLength(1);
    expect(document.querySelectorAll('.gds-snackbar__notification--hidden').length).toBe(1);
});

test('Expect <SnackbarNotification> to not show close button', () => {
    const component = <SnackbarNotification {...props} hideCloseButton />;
    render(component);

    expect(document.querySelectorAll('.gds-snackbar__notification--hidden').length).toBe(0);
    expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
