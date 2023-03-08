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
            }
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
