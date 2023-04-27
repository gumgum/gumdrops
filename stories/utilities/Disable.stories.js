import mdx from './Disable.mdx';

import { colors } from './constants';

const options = ['', '-disabled'];

const divStyle = {
    width: '100%',
    height: '50px',
    backgroundColor: colors.primary
};

export default {
    title: 'Utilities/Disable',
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
    return <div style={divStyle} {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    className: '-disabled'
};
