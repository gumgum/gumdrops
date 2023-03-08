import mdx from './ZIndex.mdx';

import { colors } from './constants';

const options = [
    '',
    '-z-1',
    '-z-2',
    '-z-3',
    '-z-4',
    '-z-5',
    '-z-6',
    '-z-7',
    '-z-8',
    '-z-9',
    '-z-neg'
];

const aDivStyles = {
    backgroundColor: colors.primary,
    width: '100%',
    height: '200px',
    zIndex: 500
};

const bDivStyles = {
    backgroundColor: 'white',
    width: '50px',
    height: '50px',
    position: 'absolute',
    top: '50%',
    right: '50%'
};

export default {
    title: 'Utilities/Z-Index',
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
            <p>
                The blue div is set to z-index 500. The z-index classes use steps of 100. Change the
                class value to above or below 500 to set the class on the white div.
            </p>
            <div style={aDivStyles} />
            <div style={bDivStyles} {...args} />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-z-6'
};
