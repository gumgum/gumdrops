/* globals mount */
import React from 'react';
import ImagePreview from '../../components/molecules/ImagePreview';

const defaultProps = {
    src:
        'https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png'
};

describe('Expect <ImagePreview>', () => {
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
});
