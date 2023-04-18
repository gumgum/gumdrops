import mdx from './UserSelect.mdx';

const options = ['', '-user-select--none'];

export default {
    title: 'Utilities/UserSelect',
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
