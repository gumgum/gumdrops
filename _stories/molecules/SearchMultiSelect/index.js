import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import SearchMultiSelect from '../../../components/molecules/SearchMultiSelect';
import FormGroupLabel from '../../../components/atoms/FormGroupLabel';
import FormGroup from '../../../components/molecules/FormGroup';

const description = `&nbsp;
\n
#### Example:
\`\`\`
state = {
    names: namesList
};

_updateNames = (names) => this.setState({ names });

render() {
    return (
        < FormGroup >
           < FormGroupLabel text="names" / >
           < SearchMultiSelect
               placeholder="some placeholder text"
               options={ this.state.names }
               update={ this._updateNames }
               context="primary"
               size="md"
           / >
        < /FormGroup >
    );
}
\`\`\`

&nbsp; \n
#### Options:
The format of the options must be an array of objects that contains at least three properties: name, isSelected, and key.\n
&nbsp; \n

property   | description
-----------|------------
name       | the text displayed on the dropdown
isSelected | boolean that determines if the option is selected or not
key        | uniquely identifies each options (key must be unique)

\`\`\`
[
    {
        name: 'Jose Santos',
        isSelected: true,
        key: 0
    },
    ...
]
\`\`\`


&nbsp; \n
#### Props:
prop name   | description
------------|------------
options     | list of options {array of objects}
update      | callback that returns the latest change on options {function}
context     | for now, this only affects the color of the Tag elements. (For not it only affects the tags, but it will support the input itself soon).
placeholder | placeholder text {String}
size        | size for the input, only md or sm are allowed {String}

#### Context list:
'primary', 'secondary', 'success', 'warning', 'info', 'danger', 'white'\n
&nbsp; \n

#### Keybindings:
key   | description
------|------------
enter | toggles the currently highlighted option
up    | highlights the previous options
down  | highlights the next option
esc   | closes the dropdown
`;

class TestSearchMultiSelect extends React.Component {

    state = {
        names: namesList
    };

    _updateNames = (names) => {
        this.setState({ names });
        action('SearchMultiSelect Updated')(names);
    }

    render() {
        return (
            <FormGroup>
                <FormGroupLabel text="names" />
                <SearchMultiSelect
                    placeholder={ text('Placeholder', 'My placeholder') }
                    options={ this.state.names }
                    update={ this._updateNames }
                    context={ select('Context', contextOptions, 'primary') }
                    size={ select('Size', ['sm', 'md'], 'md') }
                />
            </FormGroup>
        );
    }
}

const component = () => <TestSearchMultiSelect />;

const options = {
    inline: true,
    propTables: [SearchMultiSelect]
};

// Props data
const namesList = [
    {
        name: 'Jose Santos',
        isSelected: true,
        key: 0
    },
    {
        name: 'Michele Larson',
        isSelected: true,
        key: 1
    },
    {
        name: 'Serge Basile',
        isSelected: false,
        key: 2
    },
    {
        name: 'Eder "Quesarito" Sanchez',
        isSelected: false,
        key: 3
    },
    {
        name: 'David "Henry" Mejorado',
        isSelected: false,
        key: 4
    }
];

const contextOptions = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'blue',
    'gold',
    'green',
    'orange',
    'purple',
    'red',
    'darkblue',
    'darkgreen',
    'darkred',
    'primary-dark',
    'success-dark',
    'warning-dark',
    'danger-dark',
    'blue-dark',
    'gold-dark',
    'green-dark',
    'orange-dark',
    'purple-dark',
    'red-dark',
    'darkblue-dark',
    'darkgold-dark',
    'darkgreen-dark',
    'darkred-dark'
];

export default [readme, component, description];
