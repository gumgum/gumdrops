import mdx from './PointerEvents.mdx';
import Button from '../../components/atoms/Button';

const options = ['', '-pointer-events--auto', '-pointer-events--none'];

export default {
    title: 'Utilities/Pointer Events',
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        className: {
            options,
            control: { type: 'select' }
        },
        style: {
            control: { type: 'object' }
        },
        onClick: 'Clicked'
    }
};

const Template = args => {
    return (
        <div>
            <Button {...args}>Click me</Button>
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-pointer-events--auto'
};
