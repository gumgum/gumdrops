import FormGroup from '../../components/molecules/FormGroup';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import FormGroupTextHelp from '../../components/atoms/FormGroupTextHelp';
import TextInput from '../../components/atoms/TextInput';
import Select from '../../components/atoms/Select';

const contextOptions = ['', 'danger', 'warning', 'success'];

const selectOptions = [
    {
        name: 'bananas',
        value: 1
    },
    {
        name: 'apples',
        value: 2
    },
    {
        name: 'strawberries',
        value: 3
    },
    {
        name: 'limes',
        value: 4
    }
];
export default {
    title: 'Molecules/FormGroup',
    component: FormGroup,
    subcomponents: { FormGroupLabel, FormGroupTextHelp },
    argTypes: {
        isInline: { control: 'boolean' },
        isDisabled: { control: 'boolean' },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => {
    return (
        <FormGroup {...args}>
            <FormGroupLabel text="Label" />
            <TextInput name="Cool username" placeholder="Bruce Lee" />
            <FormGroupTextHelp text="You got a cool username right there" />

            <FormGroupLabel text="My select label" />
            <Select options={selectOptions} />
        </FormGroup>
    );
};

export const Default = Template.bind({});

Default.parameters = { controls: { exclude: ['children'] } };
