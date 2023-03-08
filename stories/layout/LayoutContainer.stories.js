import Column from '../../components/layout/Column';
import Card from '../../components/molecules/Card';
import LayoutContainer from '../../components/layout/LayoutContainer';
import Row from '../../components/layout/Row';

export default {
    title: 'Layout/Layout Container',
    component: LayoutContainer,
    parameters: {
        docs: {
            description: {
                component:
                    "The `<LayoutContainer>` component is used for centering containers and for responsive grid columns. The grid system works exactly like Twitter Bootstrap's, with columns automatically stacking at mobile widths. All page content except for the gds-page-header and gds-slide-nav components should be placed inside the `<LayoutContainer />`. By default, the LayoutContainer has a max-width of 1200px. For a 100% width container, use the attribute `fullWidth`."
            }
        }
    },
    argTypes: {
        fullWidth: { type: 'boolean' },
        style: { control: 'object' }
    }
};

const Template = args => (
    <LayoutContainer {...args}>
        <Row>
            <Column md={4}>
                <Card option="underlined" className="-p-a-2">
                    Example
                </Card>
            </Column>

            <Column md={4}>
                <Card option="underlined" className="-p-a-2">
                    Example
                </Card>
            </Column>
            <Column md={4}>
                <Card option="underlined" className="-p-a-2">
                    Example
                </Card>
            </Column>
        </Row>
    </LayoutContainer>
);

export const Default = Template.bind({});

Default.args = {};
