import mdx from './Overflow.mdx';

import { colors } from './constants';

const options = [
    '',
    '-overflow-hidden',
    '-overflow-visible',
    '-overflow-x-hidden',
    '-overflow-y-hidden',
    '-overflow-x-scroll',
    '-overflow-y-scroll'
];

const outerDivStyle = {
    width: '400px',
    height: '300px',
    border: `1px solid ${colors.primary}`
};

const innerDivStyle = {
    width: '300px',
    height: '200px',
    border: `1px solid ${colors.secondary}`
};

export default {
    title: 'Utilities/Overflow',
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
        <div style={outerDivStyle}>
            <div {...args} style={innerDivStyle}>
                `className` is applied to the inner div in this example. `className` is applied to
                the inner div in this example.
                Longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongword`className`
                is applied to the inner div in this example. `className` is applied to the inner div
                in this example. `className` is applied to the inner div in this example.
                `className` is applied to the inner div in this example. `className` is applied to
                the inner div in this example. `className` is applied to the inner div in this
                example. `className` is applied to the inner div in this example. `className` is
                applied to the inner div in this example. `className` is applied to the inner div in
                this example. `className` is applied to the inner div in this example. `className`
                is applied to the inner div in this example. `className` is applied to the inner div
                in this example. `className` is applied to the inner div in this example.
            </div>
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-overflow-hidden'
};
