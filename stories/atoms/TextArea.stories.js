import TextArea from '../../components/atoms/TextArea';

const sizeOptions = ['', 'xs', 'sm', 'lg'];
const resizeOptions = ['', 'resize-h', 'resize-v', 'no-resize'];

export default {
    title: 'Atoms/TextArea',
    component: TextArea,
    argTypes: {
        placeholder: { control: { type: 'text' } },
        value: { control: { type: 'text' } },
        size: {
            sizeOptions,
            control: { type: 'select' }
        },
        resize: {
            resizeOptions,
            control: { type: 'select' }
        },
        onChange: { action: 'input changed' }
    }
};

const Template = args => {
    return (
        <div>
            <p>Controlled example (change the value in the Controls section)</p>
            <TextArea {...args} />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    placeholder: 'This is a placeholder',
    value: 'Content goes here'
};
