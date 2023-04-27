/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import React from 'react';
import Pagination from '../../components/molecules/Pagination';

const defaultProps = {
    onChange: jest.fn(),
    lastPage: 100,
    activePage: 6,
    boundaries: false,
    justify: false,
    size: 'sm',
    className: 'custom-class'
};

test('Expect <Pagination> to render properly', () => {
    const tree = renderer.create(<Pagination {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Pagination> to render with boundaries and justify', () => {
    const props = {
        ...defaultProps,
        boundaries: true,
        justify: true
    };
    const tree = renderer.create(<Pagination {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Pagination> to disable next/prev buttons', () => {
    const props = {
        ...defaultProps,
        activePage: 1
    };
    const { getByLabelText } = render(<Pagination {...props} />);
    const prevButton = getByLabelText('Goto previous page');
    expect(prevButton.hasAttribute('disabled')).toBe(true);
});

test('Expect <Pagination> to change pages', () => {
    let activePage = 2;
    const handlePageChange = newPage => {
        activePage = newPage;
    };

    const { getByLabelText } = render(
        <Pagination activePage={activePage} lastPage={10} onChange={handlePageChange} />
    );

    const nextButton = getByLabelText('Goto next page');
    fireEvent.click(nextButton);

    expect(activePage).toEqual(3);
});
