import React from 'react';
import { select, button, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import SearchMultiSelect from '../../../components/molecules/SearchMultiSelect';
import FormGroupLabel from '../../../components/atoms/FormGroupLabel';
import FormGroup from '../../../components/molecules/FormGroup';

class TestSearchMultiSelect extends React.Component {
    state = {
        names: namesList
    };

    componentDidMount() {
        this._setFocus();
    }

    _setFocus = () => {
        if (this._inputRef.current) {
            this._inputRef.current.focus();
        }
    };

    _inputRef = React.createRef();

    _updateNames = names => {
        this.setState({ names });
        action('SearchMultiSelect Updated')(names);
    };

    _handleInputChange = value => action('SearchMultiSelect current value')(value);

    render() {
        return (
            <FormGroup>
                <FormGroupLabel text="names" />
                {button('Set focus', this._setFocus)}
                <SearchMultiSelect
                    inputRef={this._inputRef}
                    placeholder={text('Placeholder', 'My placeholder')}
                    options={this.state.names}
                    update={this._updateNames}
                    onChange={this._handleInputChange}
                    context={select('Context', contextOptions, 'primary')}
                    size={select('Size', ['xs', 'sm', 'md'], 'md')}
                    multiTerm={boolean('Multiple Terms', false)}
                    searchKeys={boolean('Search Keys', false)}
                    termDivider={text('Term Divider')}
                />
            </FormGroup>
        );
    }
}

const component = () => <TestSearchMultiSelect />; //eslint-disable-line react/no-multi-comp

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
    },
    {
        name: 'Mahdiye \\ Maddie Jamali',
        isSelected: false,
        key: 5
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

TestSearchMultiSelect.displayName = 'SearchMultiSelect';

export default [readme, component];
