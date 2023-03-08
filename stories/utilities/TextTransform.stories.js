import mdx from './TextTransform.mdx';

const options = ['', '-text-tr-up', '-text-tr-low', '-text-tr-cap'];

export default {
    title: 'Utilities/Text Transform',
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        className: {
            options,
            control: { type: 'select' }
        },
        style: {
            control: { type: 'object' }
        }
    }
};

const Template = args => {
    return <div {...args}>Hello</div>;
};

export const Default = Template.bind({});

Default.args = {
    className: '-text-tr-cap'
};
