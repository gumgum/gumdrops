import Card from '../../components/molecules/Card';
import CardImage from '../../components/molecules/CardImage';

const cardOptions = ['', 'top', 'bottom'];

const sizeOptions = ['', 'xs', 'sm', 'md', 'lg', 'xl'];

export default {
    title: 'Molecules/CardImage',
    component: CardImage,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<CardImage>` component is used to append images inside of a `<Card>`. It can add an image to the top or bottom of the card.'
            }
        }
    },
    argTypes: {
        url: { control: 'text' },
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
        <Card>
            <CardImage {...args} />
        </Card>
    );
};

export const Default = Template.bind({});

Default.args = {
    url: 'https://app.gumgum.com/images/gradient-theme/dark/gg_grid.svg'
};
