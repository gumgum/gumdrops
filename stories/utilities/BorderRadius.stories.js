import mdx from './BorderRadius.mdx';
import { colors } from './constants';

const options = [
    '',
    '-bor-rad-a-0',
    '-bor-rad-a-1',
    '-bor-rad-tl-0',
    '-bor-rad-tl-1',
    '-bor-rad-tr-0',
    '-bor-rad-tr-1',
    '-bor-rad-bl-0',
    '-bor-rad-bl-1',
    '-bor-rad-br-0',
    '-bor-rad-br-1',
    '-bor-rad-t-0',
    '-bor-rad-t-1',
    '-bor-rad-r-0',
    '-bor-rad-r-1',
    '-bor-rad-b-0',
    '-bor-rad-b-1',
    '-bor-rad-l-0',
    '-bor-rad-l-1'
];

const divStyle = {
    width: '100%',
    height: '200px',
    border: `1px solid ${colors.primary}`,
    padding: '10px'
};

export default {
    title: 'Utilities/BorderRadius',
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
            Note that this is a really subtle change.
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-bor-rad-a-0'
};
