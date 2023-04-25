import Snackbar from '../../components/molecules/Snackbar';
import SnackbarNotification from '../../components/atoms/SnackbarNotification';

const contextOptions = ['', 'success', 'info', 'warning', 'danger', 'hidden'];

export default {
    title: 'Molecules/Snackbar',
    component: Snackbar,
    subcomponents: { SnackbarNotification },
    argTypes: {
        id: { control: 'number' },
        text: { control: 'text' },
        msToClose: { control: 'number' },
        hideCloseButton: { control: 'boolean' },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => {
    return (
        <Snackbar>
            <SnackbarNotification
                {...args}
                callback={() => console.log('notification 1 callback')}
            />
            <SnackbarNotification
                id="2"
                text="This notification will hide in 5 secs..."
                context="danger"
                msToClose={5000}
                callback={() => console.log('notification 2 callback')}
            />
            <SnackbarNotification id="3" msToClose={0} context="info">
                This notification content is passed as a child
            </SnackbarNotification>
        </Snackbar>
    );
};

export const Default = Template.bind({});

Default.args = {
    text: 'You can test the options on this notification with the controls on the right. All controls on the right are for the <SnackbarNotification> component. The <Snackbar> component is a wrapper that needs to wrap the notifications.',
    id: 1,
    msToClose: 0
};

Default.parameters = { controls: { exclude: ['children'] } };
