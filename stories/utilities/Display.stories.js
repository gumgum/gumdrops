import mdx from './Display.mdx';

import { colors } from './constants';

const options = [
    '-block',
    '-inline-block',
    '-none',
    '-vis-hidden',
    '-sr-only',
    '-flex',
    '-block--xs',
    '-block--sm',
    '-block--md',
    '-block--lg',
    '-block--xl',
    '-inline-block--xs',
    '-inline-block--sm',
    '-inline-block--md',
    '-inline-block--lg',
    '-inline-block--xl',
    '-none--xs',
    '-none--sm',
    '-none--md',
    '-none--lg',
    '-none--xl',
    '-flex--xs',
    '-flex--sm',
    '-flex--md',
    '-flex--lg',
    '-flex--xl'
];

const aStyle = {
    backgroundColor: colors.primary,
    width: '100px',
    height: '100px'
};
const bStyle = {
    backgroundColor: colors.secondary,
    width: '100px',
    height: '100px'
};

export default {
    title: 'Utilities/Display',
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
    return (
        <div>
            <p>`className` is applied to the blue box in this example.</p>
            <div style={aStyle} {...args} />
            <div style={bStyle} />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-block'
};
