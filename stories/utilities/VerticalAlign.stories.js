import mdx from './VerticalAlign.mdx';

const options = [
    '-va-sub',
    '-va-super',
    '-va-top',
    '-va-middle',
    '-va-bottom',
    '-va-text-top',
    '-va-text-bottom',
    ''
];

export default {
    title: 'Utilities/Vertical Align',
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
            <p>Here, the Vertical Align class is applied to the word "friend".</p>
            Hello, <span {...args}>friend</span>
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-va-sub'
};
