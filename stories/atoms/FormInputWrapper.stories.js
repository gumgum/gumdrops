import FormInputWrapper from '../../components/atoms/FormInputWrapper';
import TextInput from '../../components/atoms/TextInput';

const contextOptions = ['danger', 'success', 'warning'];

export default {
    title: 'Atoms/FormInputWrapper',
    component: FormInputWrapper,
    subcomponents: { TextInput },
    parameters: {
        docs: {
            description: {
                component:
                    "`<FormInputWrapper>` is used to wrap a form's inputs to (usually) display error messages. It is composed of the first example in `<FormGroup>` doc, with: `<FormGroup>` to contains all the elements, `<FormGroupLabel>` to display a title above the input, and `<FormGroupTextHelp>` to display a message below the input."
            }
        }
    },
    argTypes: {
        label: { control: 'text' },
        errors: { control: 'array' },
        errorStyles: { control: 'object' },
        groupClassName: { control: 'text' },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => {
    return (
        <FormInputWrapper {...args}>
            <TextInput className="-m-b-4" name="password" type="password" placeholder="*******" />
        </FormInputWrapper>
    );
};

export const Default = Template.bind({});

Default.args = {
    label: 'Password',
    errors: ['Error 1', 'Error 2'],
    context: 'danger'
};
