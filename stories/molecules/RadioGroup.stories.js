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
            }
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
