import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';
import Row from '../../components/layout/Row';

export default {
    title: 'Layout/Row',
    component: Row,
    parameters: {
        docs: {
            description: {
                component: 'A `<Row>` component is meant to hold one or more `<Column>` components.'
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>Row Props</h2>
                    <ArgsTable />
                </>
            )
        }
    }
};

const Template = args => <Row {...args}>Example</Row>;

export const Default = Template.bind({});

Default.args = {
    style: { border: '1px dashed red' }
};
