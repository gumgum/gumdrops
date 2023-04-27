/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import Snackbar from '../../components/molecules/Snackbar';

test('Expect <Snackbar> to render properly', () => {
    const tree = renderer.create(<Snackbar />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Snackbar> to render a child component', () => {
    const component = (
        <Snackbar>
            <li className="gds-snackbar__notification">
                <p>Test</p>
            </li>
        </Snackbar>
    );
    const { getByText } = render(component);

    expect(document.querySelectorAll('.gds-snackbar__notification').length).toBe(1);

    const notificationMessage = getByText(/Test/);
    expect(notificationMessage).toBeInTheDocument();

    expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
