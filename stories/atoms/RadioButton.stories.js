import RadioButton from '../../components/atoms/RadioButton';

const contextOptions = ['', 'success', 'warning', 'danger'];

export default {
    title: 'Atoms/RadioButton',
    component: RadioButton,
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
