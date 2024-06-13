import TextInput from '../../components/atoms/TextInput';

const sizeOptions = ['', 'xs', 'sm', 'lg'];

export default {
    title: 'Atoms/TextInput',
    component: TextInput,
    argTypes: {
        readOnly: { control: { type: 'boolean' } },
        type: {
            options: ['text', 'password'],
            control: { type: 'select' }
        },
        value: { control: { type: 'text' } },
        name: { control: { type: 'text' } },
        placeholder: { control: { type: 'text' } },
        size: {
            sizeOptions,
            control: { type: 'select' }
        },
        onChange: { action: 'input changed' }
    }
};

const Template = args => {
    return (
        <div>
            <p>Controlled example (change the value in the Controls section)</p>
            <TextInput {...args} />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    type: 'text',
    value:"",
    size: 'md',
    name: 'username',
    placeholder: 'My placeholder'
};
