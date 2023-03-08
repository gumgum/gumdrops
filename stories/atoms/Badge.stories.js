import Badge from '../../components/atoms/Badge';

const contextOptions = [
    '',
    'inverse',
    'success',
    'success-inverse',
    'info',
    'info-inverse',
    'warning',
    'warning-inverse',
    'danger',
    'danger-inverse'
];

export default {
    title: 'Atoms/Badge',
    component: Badge,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Badge>` component is a numerical indicator of associated items. For a simple colored circle without a number inside, pass in the "empty" prop. If empty, it will not display any text within the badge.'
            }
        }
    },
    argTypes: {
        text: { control: 'text' },
        empty: { control: 'boolean' },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
    text: '2'
};
