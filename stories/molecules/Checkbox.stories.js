import Checkbox from '../../components/molecules/Checkbox';
import FormGroup from '../../components/molecules/FormGroup';

const sizeOptions = ['', 'xs', 'sm'];

export default {
    title: 'Molecules/Checkbox',
    component: Checkbox,
    argTypes: {
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        },
        label: { control: 'text' },
        onChange: 'checkbox_checked'
    }
};

const Template = args => {
    return (
        <FormGroup>
            <Checkbox {...args} />
        </FormGroup>
    );
};

export const Default = Template.bind({});

Default.args = {
    label: 'pineapple on pizza?'
};
