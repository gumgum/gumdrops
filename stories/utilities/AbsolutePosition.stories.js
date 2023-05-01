import mdx from './AbsolutePosition.mdx';

import { colors } from './constants';

const options = [
    '',
    '-abs-t-r',
    '-abs-t-l',
    '-abs-b-r',
    '-abs-b-l',
    '-pos-abs',
    '-pos-rel',
    '-pos-fix',
    '-pos-stc'
];

const outerDivStyle = {
    width: '100%',
    height: '300px',
    border: `1px solid ${colors.primary}`
};

const innerDivStyle = {
    width: '100px',
    height: '100px',
    border: `1px solid ${colors.secondary}`
};

export default {
    title: 'Utilities/AbsolutePosition',
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
            <div style={innerDivStyle} {...args} />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-abs-t-r'
};
