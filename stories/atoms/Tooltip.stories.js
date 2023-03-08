import Tooltip from '../../components/atoms/Tooltip';
import Button from '../../components/atoms/Button';

const positionOptions = [
    '',
    'top',
    'top-right',
    'right',
    'bottom-right',
    'bottom',
    'bottom-left',
    'left',
    'top-left'
];
const contextOptions = ['', 'primary', 'secondary', 'danger'];
const sizeOptions = ['', 'lg'];
const variationOptions = ['', 'always', 'no-animate', 'bounce'];

export default {
    title: 'Atoms/Tooltip',
    component: Tooltip,
    parameters: {
        docs: {
            description: {
                component:
                    "The `<Tooltip>` component is a small explanatory message that appears when hovering over an element. Tooltips require a 'text' prop containing their message. Any other props that are passed in are also accepted."
            }
        }
    },
    argTypes: {
        text: { control: { type: 'text' } },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        },
        position: {
            options: positionOptions,
            control: { type: 'select' }
        },
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        },
        variations: {
            options: variationOptions,
            control: { type: 'select' }
        },
        style: { control: 'object' }
    }
};

const Template = args => {
    return (
        <Tooltip {...args}>
            <Button>Button with Tooltip</Button>
        </Tooltip>
    );
};

export const Default = Template.bind({});

Default.args = {
    text: 'I am a tooltip!',
    position: 'right'
};
