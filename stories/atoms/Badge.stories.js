import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
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
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>Badge Props</h2>
                    <ArgsTable />
                </>
            )
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
