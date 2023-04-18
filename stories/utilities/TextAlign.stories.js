import mdx from './TextAlign.mdx';

import { colors } from './constants';

const options = [
    '',
    '-text-left',
    '-text-center',
    '-text-right',
    '-text-left--xs',
    '-text-left--sm',
    '-text-left--md',
    '-text-left--lg',
    '-text-left--xl',
    '-text-center--xs',
    '-text-center--sm',
    '-text-center--md',
    '-text-center--lg',
    '-text-center--xl',
    '-text-right--xs',
    '-text-right--sm',
    '-text-right--md',
    '-text-right--lg',
    '-text-right--xl'
];

const divStyle = {
    border: `1px solid ${colors.primary}`
};

export default {
    title: 'Utilities/TextAlign',
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
        <div style={divStyle} {...args}>
            Hello
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-text-center'
};
