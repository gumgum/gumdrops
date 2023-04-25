import React from 'react';
import { withKnobs, text, object, number, select, boolean } from '@storybook/addon-knobs';
import mdx from './ImagePreview.mdx';
import Button from '../../../components/atoms/Button';
import ImagePreview from '../../../components/molecules/ImagePreview';

const positionOptions = {
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom'
};

export default {
    component: ImagePreview,
    title: 'Molecules/ImagePreview',
    decorators: [withKnobs],
    parameters: {
        component: ImagePreview,
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div
        className="gds-flex gds-flex--justify-center"
        style={{
            padding: 200
        }}>
        <ImagePreview
            className={text('Classname', '')}
            padding={number('Padding', 5)}
            arrowSize={number('Arrow Size', 5)}
            showArrow={boolean('Show Arrow', true)}
            maxHeight={number('Max Height', 200)}
            position={select('Position', positionOptions, 'top')}
            style={object('Style', {})}
            src={text(
                'Src',
                'https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png'
            )}>
            <Button>Hover Me</Button>
        </ImagePreview>
    </div>
);
