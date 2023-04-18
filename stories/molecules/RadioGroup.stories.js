import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import RadioGroup from '../../components/molecules/RadioGroup';

const contextOptions = ['', 'success', 'warning', 'danger'];

const sizeOptions = ['', 'xs', 'sm'];

export default {
    title: 'Molecules/RadioGroup',
    component: RadioGroup,
    parameters: {
        docs: {
            description: {
                component: 'The `<RadioGroup>` component is used to group radio buttons.'
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>RadioGroup Props</h2>
                    <ArgsTable />
                </>
            )
        }
    },
    argTypes: {
        name: { control: 'text' },
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        },
        options: { control: 'object' },
        defaultValue: { control: 'text' },
        onChange: 'change',
        onBlur: 'blur'
    }
};

const Template = args => {
    return <RadioGroup {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    name: 'my-radio-group',
    defaultValue: 'ice cream',
    options: [
        { label: 'cake', value: 'cake' },
        { label: 'ice cream', value: 'ice cream' }
    ]
};
