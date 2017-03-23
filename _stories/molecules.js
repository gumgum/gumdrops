import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';

import * as options from '../constants/options';

import Well from '../components/molecules/well';

const stories = storiesOf('Molecules', module);
stories.addDecorator(withKnobs);

stories
    .addWithInfo(
        'Well',
        `The well component, prefixed by gds-well, can be used for alert messages or other user notifications. If you pass in a button=true and a callback function, the component will call that function when a user clicks on the x.
            \n
            type: success, warning, info, danger`,
        () => (
            <Well
                text={ text('Label', 'Default Well') }
                option={ select('Type', options.wellOptions, undefined) }
                button={ boolean('Button', false) }
                callback={ options.callbackFunc }
            />
        ),
        { inline: true, propTables: [Well]}
    )
    ;
