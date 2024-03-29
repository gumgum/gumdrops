import Select from '../../components/atoms/Select';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import FormGroup from '../../components/molecules/FormGroup';

const options = [
    {
        name: 'bananas',
        value: '1'
    },
    {
        name: 'apples',
        value: '2'
    },
    {
        name: 'strawberries',
        value: '3'
    },
    {
        name: 'limes',
        value: '4'
    }
];
const contextOptions = ['', 'primary', 'no-border', 'dark'];
const sizeOptions = ['', 'xs', 'sm', 'lg'];

export default {
    title: 'Atoms/Select',
    component: Select,
    argTypes: {
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        },

        options: {
            options,
            control: { type: 'object' }
        },
        onChange: 'Select changed',
        name: { control: 'text' },
        value: { control: 'text' },
        customName: { control: 'text' },
        customValue: { control: 'text' }
    }
};

const Template = args => {
    return (
        <div>
            <p>Controlled example (change the value in the Controls section)</p>
            <FormGroup>
                <FormGroupLabel text="Fruits" />
                <Select {...args} />
            </FormGroup>
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    options,
    name: 'fruit',
    value: '2',
    customName: 'name',
    customValue: 'value'
};
