import Row from '../../components/layout/Row';

export default {
    title: 'Layout/Row',
    component: Row,
    parameters: {
        docs: {
            description: {
                component: 'A `<Row>` component is meant to hold one or more `<Column>` components.'
            }
        }
    }
};

const Template = args => <Row {...args}>Example</Row>;

export const Default = Template.bind({});

Default.args = {
    style: { border: '1px dashed red' }
};
