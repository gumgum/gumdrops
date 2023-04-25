import TooltipIcon from '../../components/atoms/TooltipIcon';

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
const prefixOptions = ['fas', 'far', 'fal', 'fab'];

export default {
    title: 'Atoms/TooltipIcon',
    component: TooltipIcon,
    argTypes: {
        iconClassName: { control: { type: 'text' } },
        icon: { control: { type: 'text' } },
        label: { control: { type: 'text' } },
        fontSize: { control: { type: 'number' } },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        },
        prefix: {
            options: prefixOptions,
            control: { type: 'select' }
        },
        position: {
            positionOptions,
            control: { type: 'select' }
        },
        buttonStyles: {
            control: { type: 'object' }
        },
        onClick: 'Click on the icon'
    }
};

const Template = args => {
    return <TooltipIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    icon: 'edit',
    fontSize: 40,
    prefix: 'fas',
    label: 'This is a tooltip!',
    position: 'right'
};
