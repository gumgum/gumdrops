import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import RadioButton from '../../components/atoms/RadioButton';

const contextOptions = ['', 'success', 'warning', 'danger'];

export default {
    title: 'Atoms/RadioButton',
    component: RadioButton,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<RadioButton>` component is used to display a standard radio button.'
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>RadioButton Props</h2>
                    <ArgsTable />
                </>
            )
        }
    },
    argTypes: {
        label: { control: { type: 'text' } },
        value: { control: { type: 'text' } },
        name: { control: { type: 'text' } },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        },
        onChange: { action: 'input changed' },
        onBlur: { action: 'input blurred' }
    }
};

const Template = args => <RadioButton {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'Yes',
    value: 'yes',
    name: 'my-radio-group'
};
