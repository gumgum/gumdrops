import mdx from './Color.mdx';

const divBorderStyle = {
    width: '400px',
    height: '400px',
    border: '2px solid'
};

export default {
    title: 'Utilities/Color',
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        className: {
            control: { type: 'text' }
        },
        style: {
            control: { type: 'object' }
        }
    }
};

const Template = args => {
    return (
        <div>
            <div style={divBorderStyle} {...args}>
                <p {...args} style={{ padding: '10px' }}>
                    See the "Docs" tab for class variations to type into the `className` controls
                    text input. Due to the way Storybook controls work, the class will be applied to
                    the background, border, and text in this example.
                </p>
            </div>
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-color-bg-pri'
};
