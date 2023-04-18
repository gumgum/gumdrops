import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
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
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>FormInputWrapper Props</h2>
                    <ArgsTable of={FormInputWrapper} />
                </>
            )
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
