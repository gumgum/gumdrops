import Divider from '../../components/molecules/Divider';

export default {
    title: 'Molecules/Divider',
    component: Divider,
    parameters: {
        actions: {
            handles: ['click', '.gds-divider__arrow']
        }
    },
    argTypes: {
        label: { control: 'text' },
        centered: { control: 'boolean' },
        open: { control: 'boolean' },
        collapsible: { control: 'boolean' }
    }
};

const Template = args => {
    return (
        <Divider {...args} callback={() => console.log('divider_toggled')}>
            console.log(args)
            {args.open && <div>Content to show when toggled open</div>}
        </Divider>
    );
};

export const Default = Template.bind({});

Default.args = {
    collapsible: true,
    open: true,
    label: 'See more'
};
