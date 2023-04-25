import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import Tag from '../../components/atoms/Tag';

const sizeOptions = ['', 'sm', 'xs'];
const contextOptions = ['', 'normal', 'primary', 'success', 'warning', 'danger'];

export default {
    title: 'Atoms/Tag',
    component: Tag,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Tag>` component is used to indicate active or selected items, filters or options. Refer to [this](http://design-prototypes.gumgum.com/black-tie/documentation/#icons-btl) page for icon names.'
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>Tag Props</h2>
                    <ArgsTable />
                </>
            )
        }
    },
    argTypes: {
        optionIcon: { control: 'text' },
        optionLabel: { control: 'text' },
        text: { control: 'text' },
        hasOption: { control: 'boolean' },
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        },
        onClick: 'tag_click',
        onOptionClick: 'option_click'
    }
};

const Template = args => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
    context: 'primary',
    hasOption: true,
    optionIcon: 'bt-times',
    optionLabel: 'Delete Tag',
    text: 'Sample Text'
};
