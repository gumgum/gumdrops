import mdx from './Margin.mdx';

import { colors } from './constants';

const options = [
    '',
    '-m-a-0',
    '-m-a-1',
    '-m-a-2',
    '-m-a-3',
    '-m-a-4',
    '-m-a-5',
    '-m-a-6',
    '-m-t-0',
    '-m-t-1',
    '-m-t-2',
    '-m-t-3',
    '-m-t-4',
    '-m-t-5',
    '-m-t-6',
    '-m-b-0',
    '-m-b-1',
    '-m-b-2',
    '-m-b-3',
    '-m-b-4',
    '-m-b-5',
    '-m-b-6',
    '-m-r-0',
    '-m-r-1',
    '-m-r-2',
    '-m-r-3',
    '-m-r-4',
    '-m-r-5',
    '-m-r-6',
    '-m-l-0',
    '-m-l-1',
    '-m-l-2',
    '-m-l-3',
    '-m-l-4',
    '-m-l-5',
    '-m-l-6',
    '-m-v-0',
    '-m-v-1',
    '-m-v-2',
    '-m-v-3',
    '-m-v-4',
    '-m-v-5',
    '-m-v-6',
    '-m-h-0',
    '-m-h-1',
    '-m-h-2',
    '-m-h-3',
    '-m-h-4',
    '-m-h-5',
    '-m-h-6',
    '-m-a-0-xs',
    '-m-a-1-xs',
    '-m-a-2-xs',
    '-m-a-3-xs',
    '-m-a-4-xs',
    '-m-a-5-xs',
    '-m-a-6-xs',
    '-m-a-0-sm',
    '-m-a-1-sm',
    '-m-a-2-sm',
    '-m-a-3-sm',
    '-m-a-4-sm',
    '-m-a-5-sm',
    '-m-a-6-sm',
    '-m-a-0-md',
    '-m-a-1-md',
    '-m-a-2-md',
    '-m-a-3-md',
    '-m-a-4-md',
    '-m-a-5-md',
    '-m-a-6-md',
    '-m-a-0-lg',
    '-m-a-1-lg',
    '-m-a-2-lg',
    '-m-a-3-lg',
    '-m-a-4-lg',
    '-m-a-5-lg',
    '-m-a-6-lg',
    '-m-a-0-xl',
    '-m-a-1-xl',
    '-m-a-2-xl',
    '-m-a-3-xl',
    '-m-a-4-xl',
    '-m-a-5-xl',
    '-m-a-6-xl',
    '-m-t-0-xs',
    '-m-t-1-xs',
    '-m-t-2-xs',
    '-m-t-3-xs',
    '-m-t-4-xs',
    '-m-t-5-xs',
    '-m-t-6-xs',
    '-m-t-0-sm',
    '-m-t-1-sm',
    '-m-t-2-sm',
    '-m-t-3-sm',
    '-m-t-4-sm',
    '-m-t-5-sm',
    '-m-t-6-sm',
    '-m-t-0-md',
    '-m-t-1-md',
    '-m-t-2-md',
    '-m-t-3-md',
    '-m-t-4-md',
    '-m-t-5-md',
    '-m-t-6-md',
    '-m-t-0-lg',
    '-m-t-1-lg',
    '-m-t-2-lg',
    '-m-t-3-lg',
    '-m-t-4-lg',
    '-m-t-5-lg',
    '-m-t-6-lg',
    '-m-t-0-xl',
    '-m-t-1-xl',
    '-m-t-2-xl',
    '-m-t-3-xl',
    '-m-t-4-xl',
    '-m-t-5-xl',
    '-m-t-6-xl',
    '-m-b-0-xs',
    '-m-b-1-xs',
    '-m-b-2-xs',
    '-m-b-3-xs',
    '-m-b-4-xs',
    '-m-b-5-xs',
    '-m-b-6-xs',
    '-m-b-0-sm',
    '-m-b-1-sm',
    '-m-b-2-sm',
    '-m-b-3-sm',
    '-m-b-4-sm',
    '-m-b-5-sm',
    '-m-b-6-sm',
    '-m-b-0-md',
    '-m-b-1-md',
    '-m-b-2-md',
    '-m-b-3-md',
    '-m-b-4-md',
    '-m-b-5-md',
    '-m-b-6-md',
    '-m-b-0-lg',
    '-m-b-1-lg',
    '-m-b-2-lg',
    '-m-b-3-lg',
    '-m-b-4-lg',
    '-m-b-5-lg',
    '-m-b-6-lg',
    '-m-b-0-xl',
    '-m-b-1-xl',
    '-m-b-2-xl',
    '-m-b-3-xl',
    '-m-b-4-xl',
    '-m-b-5-xl',
    '-m-b-6-xl',
    '-m-r-0-xs',
    '-m-r-1-xs',
    '-m-r-2-xs',
    '-m-r-3-xs',
    '-m-r-4-xs',
    '-m-r-5-xs',
    '-m-r-6-xs',
    '-m-r-0-sm',
    '-m-r-1-sm',
    '-m-r-2-sm',
    '-m-r-3-sm',
    '-m-r-4-sm',
    '-m-r-5-sm',
    '-m-r-6-sm',
    '-m-r-0-md',
    '-m-r-1-md',
    '-m-r-2-md',
    '-m-r-3-md',
    '-m-r-4-md',
    '-m-r-5-md',
    '-m-r-6-md',
    '-m-r-0-lg',
    '-m-r-1-lg',
    '-m-r-2-lg',
    '-m-r-3-lg',
    '-m-r-6-lg',
    '-m-r-0-xl',
    '-m-r-1-xl',
    '-m-r-2-xl',
    '-m-r-3-xl',
    '-m-r-4-xl',
    '-m-r-5-xl',
    '-m-r-6-xl',
    '-m-l-0-xs',
    '-m-l-1-xs',
    '-m-l-2-xs',
    '-m-l-3-xs',
    '-m-l-4-xs',
    '-m-l-5-xs',
    '-m-l-6-xs',
    '-m-l-0-sm',
    '-m-l-1-sm',
    '-m-l-2-sm',
    '-m-l-3-sm',
    '-m-l-4-sm',
    '-m-l-5-sm',
    '-m-l-6-sm',
    '-m-l-0-md',
    '-m-l-1-md',
    '-m-l-2-md',
    '-m-l-3-md',
    '-m-l-4-md',
    '-m-l-5-md',
    '-m-l-6-md',
    '-m-l-0-lg',
    '-m-l-1-lg',
    '-m-l-2-lg',
    '-m-l-3-lg',
    '-m-l-4-lg',
    '-m-l-5-lg',
    '-m-l-6-lg',
    '-m-l-0-xl',
    '-m-l-1-xl',
    '-m-l-2-xl',
    '-m-l-3-xl',
    '-m-l-4-xl',
    '-m-l-5-xl',
    '-m-l-6-xl',
    '-m-v-0-xs',
    '-m-v-1-xs',
    '-m-v-2-xs',
    '-m-v-3-xs',
    '-m-v-4-xs',
    '-m-v-5-xs',
    '-m-v-6-xs',
    '-m-v-0-sm',
    '-m-v-1-sm',
    '-m-v-2-sm',
    '-m-v-3-sm',
    '-m-v-4-sm',
    '-m-v-5-sm',
    '-m-v-6-sm',
    '-m-v-0-md',
    '-m-v-1-md',
    '-m-v-2-md',
    '-m-v-3-md',
    '-m-v-4-md',
    '-m-v-5-md',
    '-m-v-6-md',
    '-m-v-0-lg',
    '-m-v-1-lg',
    '-m-v-2-lg',
    '-m-v-3-lg',
    '-m-v-4-lg',
    '-m-v-5-lg',
    '-m-v-6-lg',
    '-m-v-0-xl',
    '-m-v-1-xl',
    '-m-v-2-xl',
    '-m-v-3-xl',
    '-m-v-4-xl',
    '-m-v-5-xl',
    '-m-v-6-xl',
    '-m-h-0-xs',
    '-m-h-1-xs',
    '-m-h-2-xs',
    '-m-h-3-xs',
    '-m-h-4-xs',
    '-m-h-5-xs',
    '-m-h-6-xs',
    '-m-h-0-sm',
    '-m-h-1-sm',
    '-m-h-2-sm',
    '-m-h-3-sm',
    '-m-h-4-sm',
    '-m-h-5-sm',
    '-m-h-6-sm',
    '-m-h-0-md',
    '-m-h-1-md',
    '-m-h-2-md',
    '-m-h-3-md',
    '-m-h-4-md',
    '-m-h-5-md',
    '-m-h-6-md',
    '-m-h-0-lg',
    '-m-h-1-lg',
    '-m-h-2-lg',
    '-m-h-3-lg',
    '-m-h-4-lg',
    '-m-h-5-lg',
    '-m-h-6-lg',
    '-m-h-0-xl',
    '-m-h-1-xl',
    '-m-h-2-xl',
    '-m-h-3-xl',
    '-m-h-4-xl',
    '-m-h-5-xl',
    '-m-h-6-xl'
];

const aStyle = {
    backgroundColor: colors.primary,
    width: '100px',
    height: '100px',
    display: 'inline-block'
};
const bStyle = {
    backgroundColor: colors.secondary,
    width: '100px',
    height: '100px',
    display: 'inline-block'
};

const cStyle = {
    backgroundColor: colors.tertiary,
    width: '100px',
    height: '100px',
    display: 'block'
};

export default {
    title: 'Utilities/Margin',
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
            <div style={cStyle} />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-m-a-0'
};
