import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import FormGroupTextHelp from '../../components/atoms/FormGroupTextHelp';
import TextInput from '../../components/atoms/TextInput';
import FormGroup from '../../components/molecules/FormGroup';

export default {
    title: 'Atoms/FormGroupTextHelp',
    component: FormGroupTextHelp,
    parameters: {
        docs: {
            description: {
                component:
                    "`<FormGroupTextHelp>` is used to give warning or hints on `<input>` elements. They must be wrapped by a `<FormGroup>` component. The color of this component is dependent on the `FormGroup's context`."
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>FormGroupTextHelp Props</h2>
                    <ArgsTable />
                </>
            )
        }
    },
    argTypes: {
        text: { control: 'text' }
    }
};

const Template = args => {
    return (
        <FormGroup context="danger">
            <TextInput name="password" type="password" defaultValue="badpassword" />
            <FormGroupTextHelp {...args} />
        </FormGroup>
    );
};

export const Default = Template.bind({});

Default.args = {
    text: 'Your password is incorrect'
};
