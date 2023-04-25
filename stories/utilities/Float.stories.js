import mdx from './Float.mdx';

import { colors } from './constants';

const options = [
    '',
    '-float-left',
    '-float-right',
    '-float-none',
    '-float-none--xs',
    '-float-none--sm',
    '-float-none--md',
    '-float-none--lg',
    '-float-none--xl'
];

const divStyleA = {
    width: '100px',
    height: '100px',
    border: `1px solid ${colors.primary}`
};

const divStyleB = {
    width: '100px',
    height: '100px',
    border: `1px solid ${colors.secondary}`
};

export default {
    title: 'Utilities/Float',
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
            <p>`className` is applied to the blue div in this example.</p>
            <div {...args} style={divStyleA} />
            <div style={divStyleB} />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-float-right'
};
