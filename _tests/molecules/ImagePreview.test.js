/* globals mount */
import React from 'react';
import ImagePreview from '../../components/molecules/ImagePreview';

const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC';
const LOAD_SUCCESS_SRC = 'LOAD_SUCCESS_SRC';
const defaultProps = {
    src: LOAD_SUCCESS_SRC
};

describe('Expect <ImagePreview>', () => {
    beforeAll(() => {
        // Mocking Image.prototype.src to call the onload or onerror
        // callbacks depending on the src passed to it
        Object.defineProperty(global.Image.prototype, 'src', {
            // Define the property setter
            set(src) {
                console.log('src', src);
                if (src === LOAD_FAILURE_SRC) {
                    this.onerror(new Error('mocked error'))
                } else if (src === LOAD_SUCCESS_SRC) {
                    this.onload()
                }
            },
        });
    });
    it('to render', () => {
        const wrapper = mount(
            <div>
                <ImagePreview {...defaultProps}>
                    <input type="text" />
                </ImagePreview>
            </div>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should show on hover', () => {
        const wrapper = mount(
            <div>
                <ImagePreview {...defaultProps}>
                    <input type="text" />
                </ImagePreview>
            </div>
        );
        const getTooltip = () => wrapper.find('.image-preview-tooltip');
        const tooltip = getTooltip();
        // tooltip should exist
        expect(tooltip.exists()).toBe(true);
        // expect the opacity to be 0
        expect(tooltip.getDOMNode().style.opacity).toBe('0');
        wrapper.find('ImagePreview > span').simulate('mouseEnter');
        // tooltip should now be visible
        expect(tooltip.getDOMNode().style.opacity).toBe('1');
    });

    it('should show error text when image fails to load', () => {
      const wrapper = mount(
          <div>
              <ImagePreview src={LOAD_FAILURE_SRC}>
                  <input type="text" />
              </ImagePreview>
          </div>
      );
      // should contain failure text
      expect(wrapper.contains('Failed to load GIF.')).toBe(true);
  });
});
