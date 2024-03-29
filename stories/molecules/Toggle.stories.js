import Toggle from '../../components/molecules/Toggle';

const typeOptions = ['checkbox', 'radio'];

const sizeOptions = ['', 'sm', 'xs'];

export default {
    title: 'Molecules/Toggle',
    component: Toggle,
    argTypes: {
        label: { control: 'text' },
        onText: { control: 'text' },
        offText: { control: 'text' },
        type: {
            options: typeOptions,
            control: { type: 'select' }
        },
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        },

        onChange: 'toggle_checked'
    }
};

const Template = args => {
    return <Toggle {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    label: 'Default Toggle',
    type: 'checkbox'
};
