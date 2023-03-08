import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import TextInput from '../../components/atoms/TextInput';
import FormGroup from '../../components/molecules/FormGroup';

export default {
    title: 'Atoms/FormGroupLabel',
    component: FormGroupLabel,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<FormGroupLabel>` component is used to add a label to your `<FormGroup>`.'
            }
        }
    },
    argTypes: {
        text: { control: 'text' }
    }
};

const Template = args => {
    return (
        <FormGroup>
            <FormGroupLabel {...args} />
            <TextInput name="password" type="password" defaultValue="Passw00rd" />
        </FormGroup>
    );
};

export const Default = Template.bind({});

Default.args = {
    text: 'Password'
};
