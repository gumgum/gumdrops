import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import Button from '../../components/atoms/Button';

const sizeOptions = ['', 'xs', 'sm', 'lg'];
const contextOptions = [
    'default',
    'outline',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger'
];

export default {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        docs: {
            description: {
                component:
                    'Wrap the content you want to appear as a Button in the `<Button>` component.'
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>Button Props</h2>
                    <ArgsTable />
                </>
            )
        }
    },
    argTypes: {
        type: { control: 'text' },
        disabled: { control: 'boolean' },
        isGroup: { control: 'boolean' },
        isBlock: { control: 'boolean' },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        },
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        },
        onClick: { action: 'button clicked' },
        group: { table: { disable: true } }
    }
};

const Template = args => {
    return (
        <Button {...args}>
            <i className="fa fa-check -m-r-2" />
            Great Success
        </Button>
    );
};

export const Default = Template.bind({});

Default.args = {
    type: 'button',
    context: 'default'
};
