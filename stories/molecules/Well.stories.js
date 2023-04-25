import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import Well from '../../components/molecules/Well';

const contextOptions = ['', 'success', 'warning', 'info', 'danger'];

export default {
    title: 'Molecules/Well',
    component: Well,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Well>` component can be used for alert messages or other user notifications. If you pass in `button` and a callback function, the component will call that function when a user clicks on the x.'
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>Well Props</h2>
                    <ArgsTable />
                </>
            )
        }
    },
    argTypes: {
        text: { control: 'text' },
        button: { control: 'boolean' },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => <Well callback={() => console.log('well closed')} {...args} />;

export const Default = Template.bind({});

Default.args = {
    text: 'Default Well'
};
