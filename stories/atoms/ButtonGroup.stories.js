import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import ButtonGroup from '../../components/atoms/ButtonGroup';
import Button from '../../components/atoms/Button';

const sizeOptions = ['', 'xs', 'sm', 'lg'];

export default {
    title: 'Atoms/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<ButtonGroup>` wraps a series of `<Button>` components with a group prop.'
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>ButtonGroup Props</h2>
                    <ArgsTable of={ButtonGroup} />
                    <h2>Button Props</h2>
                    <ArgsTable of={Button} />
                </>
            )
        }
    },
    argTypes: {
        responsive: { control: 'boolean' },
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => {
    return (
        <ButtonGroup {...args}>
            <Button group context="default">
                Button 1
            </Button>
            <Button group context="primary">
                Button 2
            </Button>
            <Button group context="secondary">
                Button 3
            </Button>
        </ButtonGroup>
    );
};

export const Default = Template.bind({});
