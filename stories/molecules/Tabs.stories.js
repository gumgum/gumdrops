import Tabs from '../../components/molecules/Tabs';

import mdx from './Tabs.mdx';

const tabOptions = [
    { name: 'Tab 1', path: '/tab1' },
    { name: 'Tab 2', path: '/tab2' },
    { name: 'Tab 3', path: '/tab3' }
];

export default {
    title: 'Molecules/Tabs',
    component: Tabs,
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        location: { control: 'text' },
        options: { control: 'object' },
        onClick: 'clicked_tab'
    }
};

const Template = args => {
    return <Tabs {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    location: '/tab1',
    options: tabOptions
};
