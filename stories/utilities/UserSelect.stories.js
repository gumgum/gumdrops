import mdx from './UserSelect.mdx';

import { colors } from './constants';

const options = ['', '-user-select--none'];

export default {
    title: 'Utilities/User Select',
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        className: {
            options,
            control: { type: 'select' }
        }
    }
};

const Template = args => {
    return (
        <span {...args}>
            Text that cannot be selected if{' '}
            <code className="gds-text--code">-user-select-none</code>
        </span>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-user-select--none'
};
