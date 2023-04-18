import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import LoadingDots from '../../components/atoms/LoadingDots';

const sizeOptions = ['', 'sm', 'lg'];

export default {
    title: 'Atoms/LoadingDots',
    component: LoadingDots,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<LoadingDots>` component is used to indicate asynchronous loading of content.'
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>LoadingDots Props</h2>
                    <ArgsTable />
                </>
            )
        }
    },
    argTypes: {
        whiteDots: { control: 'boolean' },
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => <LoadingDots {...args} />;

export const Default = Template.bind({});
