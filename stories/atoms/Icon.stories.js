import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import Icon from '../../components/atoms/Icon';

const contextOptions = ['', 'primary', 'secondary', 'danger'];
const prefixOptions = ['fas', 'far', 'fal', 'fab'];

export default {
    title: 'Atoms/Icon',
    component: Icon,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Icon>` displays an item from the <a href="https://fontawesome.com/v5/search" target="_blank">Font Awesome</a> library. It is useful in combination of a tooltip or to trigger an action (see `<TooltipIcon>`). Any other props that are passed in are also accepted.'
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>Icon Props</h2>
                    <ArgsTable />
                </>
            )
        }
    },
    argTypes: {
        icon: { control: 'text' },
        prefix: {
            options: prefixOptions,
            control: { type: 'select' }
        },
        fontSize: { control: 'number' },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
    icon: 'info-circle',
    fontSize: 40,
    prefix: 'fas'
};
