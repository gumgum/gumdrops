import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import Card from '../../components/molecules/Card';
import CardBlock from '../../components/molecules/CardBlock';

const cardOptions = ['', 'divide-top', 'divide-bottom'];

export default {
    title: 'Molecules/CardBlock',
    component: CardBlock,
    parameters: {
        docs: {
            description: {
                component:
                    "The `<CardBlock>` component should be nested within a `<Card>` component to wrap the card's content into distinct chunks. Use the `option` prop to add a divider line on the top or bottom of the `<CardBlock>` component, to make the separation more clear."
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>CardBlock Props</h2>
                    <ArgsTable />
                </>
            )
        }
    },
    argTypes: {
        option: {
            options: cardOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => {
    return (
        <Card>
            <CardBlock {...args}>
                <p>Content in a CardBlock.</p>
            </CardBlock>
        </Card>
    );
};

export const Default = Template.bind({});
Default.parameters = { controls: { exclude: ['children'] } };
