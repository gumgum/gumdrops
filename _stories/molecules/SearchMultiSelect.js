import React from 'react';

import { action } from '@storybook/addon-actions';
import { array, boolean, select, text } from '@storybook/addon-knobs';

import { contextPalette } from '../../constants/molecules/searchMultiSelect';

import FormGroup from '../../components/molecules/FormGroup';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import SearchMultiSelect from '../../components/molecules/SearchMultiSelect';

const title = 'SearchMultiSelect';

const description = `&nbsp;
\n
The \`<SearchMultiSelect>\` is similar to the \`<MultiSelect>\` component, but it is tailored for situations where there are way too many options that the \`<MultiSelect>\` becomes impractical. As the name suggests the \`<SearchMultiSelect>\` comes with a case insenstive term matching, and a small tag indicator to show you how many options were selected, as well a small balloon where you can quickly see what options you have selected so far.\n
&nbsp; \n
#### Example:
\`\`\`
state = {
    names: namesList
};

_updateNames = (names) => this.setState({ names });

render() {
    return (
        <FormGroup>
           <FormGroupLabel text="names" />
           <SearchMultiSelect
               placeholder="some placeholder text"
               options={ this.state.names }
               update={ this._updateNames }
               context="primary"
           />
        </FormGroup>
    );
}
\`\`\`

&nbsp; \n
#### Options:
The format of the options must be an array of objects that contains at least three properties: \`name\`, \`isSelected\`, and \`key\`.\n
&nbsp; \n

property   | description
-----------|------------
name       | the text displayed on the dropdown
isSelected | boolean that determines if the option is selected or not
key        | uniquely identifies each options (key must be \`unique\`)

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
                    context={ select('Context', contextPalette, 'primary') }
                />
            </FormGroup>
        );
    }
}

/* eslint-disable react/no-multi-comp */
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

export default [title, description, component, options];
