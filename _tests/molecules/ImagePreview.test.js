/**
 * @jest-environment jsdom
 */
import { create } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import ImagePreview from '../../components/molecules/ImagePreview';

const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC';
const LOAD_SUCCESS_SRC = 'LOAD_SUCCESS_SRC';

jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    createPortal: node => node
}));

describe('Expect <ImagePreview>', () => {
    const OriginalImage = global.Image;
    const onLoadMock = jest.fn();
    const onErrorMock = jest.fn();
    beforeAll(() => {
        global.Image = class {
            set src(src) {
                if (src === LOAD_FAILURE_SRC) {
                    this.onerror(new Error('mocked error'));
                    onErrorMock();
                } else if (src === LOAD_SUCCESS_SRC) {
                    this.onload();
                    onLoadMock();
                }
            }
        };
    });

    afterAll(() => {
        global.Image = OriginalImage;
    });
    it('to render in loading state', () => {
        const container = document.createElement('div');
        const tree = create(
            <ImagePreview src={LOAD_SUCCESS_SRC}>
                <input type="text" />
            </ImagePreview>,
            container
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should show on mouseEnter', () => {
        const { getByTestId, queryByTestId } = render(
            <ImagePreview src={LOAD_SUCCESS_SRC}>
                <input type="text" />
            </ImagePreview>
        );
        expect(onLoadMock).toHaveBeenCalled();
        const tooltip = getByTestId('image-preview-tooltip');
        expect(tooltip).toBeInTheDocument();
        // tooltip should exist
        // expect the opacity to be 0
        expect(tooltip.style.opacity).toBe('0');
        // hover over the span
        fireEvent.mouseEnter(getByTestId('image-preview-hover-element'));
        // tooltip should now be visible
        expect(tooltip.style.opacity).toBe('1');
        expect(queryByTestId('image-preview-load-failure')).not.toBeInTheDocument();
    });

    it('should hide on mouseLeave', () => {
        const { getByTestId, queryByTestId } = render(
            <ImagePreview src={LOAD_SUCCESS_SRC}>
                <input type="text" />
            </ImagePreview>
        );
        expect(onLoadMock).toHaveBeenCalled();
        const tooltip = getByTestId('image-preview-tooltip');
        expect(tooltip).toBeInTheDocument();
        const hoverElement = getByTestId('image-preview-hover-element');
        // tooltip should exist
        fireEvent.mouseEnter(hoverElement);
        // expect the opacity to be 0
        expect(tooltip.style.opacity).toBe('1');
        // hover over the span
        fireEvent.mouseLeave(hoverElement);
        // tooltip should now be visible
        expect(tooltip.style.opacity).toBe('0');
        // should not have a failure element
        expect(queryByTestId('image-preview-load-failure')).not.toBeInTheDocument();
    });

    it('should show the image on hover', () => {
        const { getByTestId } = render(
            <ImagePreview src={LOAD_SUCCESS_SRC}>
                <input type="text" />
            </ImagePreview>
        );
        expect(onLoadMock).toHaveBeenCalled();
        const image = getByTestId('image-preview-tooltip-image');
        expect(image).toBeInTheDocument();
        expect(image.attributes.src.value).toBe(LOAD_SUCCESS_SRC);
    });

    it('should show error text when image fails to load', () => {
        const { getByTestId } = render(
            <ImagePreview src={LOAD_FAILURE_SRC}>
                <input type="text" />
            </ImagePreview>
        );
        // should contain failure text
        expect(getByTestId('image-preview-load-failure')).toBeInTheDocument();
    });

    it('should not show the arrow element when prop is updated', () => {
        const { rerender, queryByTestId } = render(
            <ImagePreview src={LOAD_FAILURE_SRC}>
                <input type="text" />
            </ImagePreview>
        );
        expect(queryByTestId('image-preview-arrow')).toBeInTheDocument();
        rerender(
            <ImagePreview src={LOAD_FAILURE_SRC} showArrow={false}>
                <input type="text" />
            </ImagePreview>
        );
        // should contain failure text
        expect(queryByTestId('image-preview-arrow')).not.toBeInTheDocument();
    });
});
