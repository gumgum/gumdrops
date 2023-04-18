import { Title, Description, Primary, Source, ArgsTable } from '@storybook/addon-docs';

import Column from '../../components/layout/Column';
import Row from '../../components/layout/Row';
import Card from '../../components/molecules/Card';

export default {
    title: 'Layout/Column',
    component: Column,
    parameters: {
        docs: {
            description: {
                component:
                    'Responsive `<Column>` components are constructed using the breakpoint attributes. A breakpoint can be xs, sm, md, lg or xl. Width can be any integer from 1 to 12. The Design System uses a standard 12-column grid, so at a given breakpoint, columns ending in 3 will be 25% wide (3 of the 12 columns), columns ending in 6 will be 50% wide (6 of the 12 columns), columns ending in 9 will be 75% wide (9 of the 12 columns), and so on.'
            },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <h2>Component Example</h2>
                    <Primary />
                    <h2>Component Example Source</h2>
                    <Source />
                    <h2>Column Props</h2>
                    <ArgsTable />
                </>
            )
        }
    },
    argTypes: {
        xs: { control: 'number' },
        sm: { control: 'number' },
        md: { control: 'number' },
        lg: { control: 'number' },
        xl: { control: 'number' }
    }
};

const Template = args => (
    <Row>
        <Column {...args}>
            <Card option="underlined" className="-p-a-2">
                column a
            </Card>
        </Column>
        <Column {...args}>
            <Card option="underlined" className="-p-a-2">
                column b
            </Card>
        </Column>
    </Row>
);

export const Default = Template.bind({});

Default.args = {
    md: 6
};
