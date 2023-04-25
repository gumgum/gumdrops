import mdx from './Cursor.mdx';

import { colors } from './constants';

const options = [
    '',
    '-cursor--default',
    '-cursor--pointer',
    '-cursor--context-menu',
    '-cursor--help',
    '-cursor--progress',
    '-cursor--crosshair',
    '-cursor--text',
    '-cursor--copy',
    '-cursor--move',
    '-cursor--not-allowed',
    '-cursor--zoom-in',
    '-cursor--zoom-out',
    '-cursor--grab',
    '-cursor--grabbing'
];

const divStyle = {
    width: '100%',
    height: '200px',
    border: `1px solid ${colors.primary}`,
    padding: '10px'
};

export default {
    title: 'Utilities/Cursor',
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
            Hover inside this box to see different cursor options!
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-cursor--default'
};
