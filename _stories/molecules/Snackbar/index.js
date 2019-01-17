import React from 'react';
import { text, boolean, object, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import Snackbar from '../../../components/molecules/Snackbar';
import SnackbarNotification from '../../../components/atoms/SnackbarNotification';

const contextOptions = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger',
    hidden: 'hidden',
    'No Value': ''
};

const component = () => (
    <Snackbar>
        <SnackbarNotification
            id={text('ID', '1')}
            text={text(
                'Text',
                'You can test this notification options with the knobs on the right.'
            )}
            context={optionalSelect('Context', contextOptions, '')}
            msToClose={number('Milliseconds to hide', 0)}
            hideCloseButton={boolean('hideCloseButton', false)}
            callback={action('hide_callback')}
            className={text('ClassName', '')}
            style={object('Style', {})}
        />
        <SnackbarNotification
            id="2"
            text="This notification will hide in 5 secs..."
            context="danger"
            msToClose={5000}
            callback={action('autohide_callback')}
        />
        <SnackbarNotification id="3" msToClose={0} context="info">
            This notification content is passed as a child
        </SnackbarNotification>
    </Snackbar>
);

export default [readme, component];
