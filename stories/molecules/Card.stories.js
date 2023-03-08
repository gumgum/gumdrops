import Card from '../../components/molecules/Card';
import CardBlock from '../../components/molecules/CardBlock';
import CardImage from '../../components/molecules/CardImage';

const cardOptions = ['', 'white', 'underlined', 'underlined-secondary'];

const sizeOptions = ['', 'xs', 'sm', 'md', 'lg', 'xl'];

export default {
    title: 'Molecules/Card',
    component: Card,
    subcomponents: { CardBlock, CardImage },
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Card>` component is a standard container component, designed to hold groups of related information. Cards are usually arranged in a uniform grid. You can nest `<CardBlock>` and `<CardImage>` components within a `<Card>`.'
            }
        }
    },
    argTypes: {
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        },
        option: {
            options: cardOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => {
    return (
        <div>
            <Card {...args}>
                <CardBlock>
                    <p>Content in a plain Card.</p>
                </CardBlock>
            </Card>
            <Card {...args}>
                <CardBlock>
                    <p>Content in a plain CardBlock.</p>
                </CardBlock>
                <CardBlock option="divide-top">
                    <p>Content in a CardBlock with a top divider.</p>
                </CardBlock>
            </Card>
            <Card {...args}>
                <CardImage url="https://app.gumgum.com/images/gradient-theme/dark/gg_grid.svg" />
                <CardBlock option="divide-top">
                    <p>Card with a CardImage and a CardBlock.</p>
                </CardBlock>
            </Card>
        </div>
    );
};

export const Default = Template.bind({});
Default.parameters = { controls: { exclude: ['children'] } };
