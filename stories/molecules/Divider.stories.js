import Divider from '../../components/molecules/Divider';

import mdx from './Divider.mdx';

export default {
    title: 'Molecules/Divider',
    component: Divider,
    parameters: {
        docs: {
            page: mdx
        },
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
    return <Divider {...args} callback={() => console.log('divider_toggled')} />;
};

export const Default = Template.bind({});

Default.args = {
    collapsible: true,
    open: true
};
