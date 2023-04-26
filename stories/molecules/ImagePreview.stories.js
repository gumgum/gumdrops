import React from 'react';
import Button from '../../components/atoms/Button';
import ImagePreview from '../../components/molecules/ImagePreview';

const positionOptions = [
    'top',
    'left',
    'right',
    'bottom'
]

export default {
    component: ImagePreview,
    title: 'Molecules/ImagePreview',
    argTypes: {
        position: {
            options: positionOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => (
    <div
        className="gds-flex gds-flex--justify-center"
        style={{
            padding: 200
        }}>
        <ImagePreview {...args}>
            <Button>Hover Me</Button>
        </ImagePreview>
    </div>
);

export const Default = Template.bind({});

Default.parameters = { controls: { exclude: ['children'] } };
Default.args = {
    showArrow: true,
    position: 'top',
    maxHeight: 200,
    arrowSize: 5,
    padding: 5,
    src: 'https://app.gumgum.com/images/gradient-theme/dark/gg_grid.svg'
}
