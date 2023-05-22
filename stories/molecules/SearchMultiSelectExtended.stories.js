import React from 'react';
import PropTypes from 'prop-types';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import mdx from './SearchMultiSelectExtended.mdx';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import FormGroup from '../../components/molecules/FormGroup';
import SearchMultiSelectExtended from '../../components/molecules/SearchMultiSelectExtended';

// Props data
const optionsA = [
    {
        name: 'Lassie',
        value: 11,
        isSelected: false
    },
    {
        name: 'Snoopy',
        value: 21,
        isSelected: false
    },
    {
        name: 'Toto',
        value: 31,
        isSelected: false
    },
    {
        name: 'Brian Griffin',
        value: 41,
        isSelected: false
    }
];

const optionsB = [
    {
        name: 'Dogs',
        value: 'Dogs',
        isSelected: false,
        options: [
            {
                name: 'Lassie',
                value: 1,
                isSelected: false
            },
            {
                name: 'Snoopy',
                value: 2,
                isSelected: false
            },
            {
                name: 'Toto',
                value: 3,
                isSelected: false
            },
            {
                name: 'Brian Griffin',
                value: 4,
                isSelected: false
            }
        ]
    },
    {
        name: 'Cats',
        value: 'Cats',
        isSelected: false,
        options: [
            {
                name: 'Grumpy Cat',
                value: 5,
                isSelected: false
            },
            {
                name: 'Lil Bub',
                value: 6,
                isSelected: false
            },
            {
                name: 'Hello Kitty',
                value: 7,
                isSelected: false
            }
        ]
    }
];

const configSelect = {
    Normal: 'A',
    Nested: 'B'
};

const options = {
    A: optionsA,
    B: optionsB,
};

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

class SearchMultiSelectExtendedStory extends React.Component {
    static propTypes = {
        options: PropTypes.object
    };

    state = {
        options: this.props.options
    };

    componentDidUpdate(prevProps) {
        const { options } = this.props;
        if (prevProps.options != options) {
            this._updateOptions(options);
        }
    }

    _inputRef = React.createRef();

    _updateOptions = newOptions => {
        this.setState({options: newOptions});
        action('SearchMultiSelectExtended Updated')(newOptions);
    };

    _handleInputChange = value => action('SearchMultiSelect current value')(value);

    render() {
        return (
            <FormGroup>
                <FormGroupLabel text="options" />
                <SearchMultiSelectExtended
                    placeholder={text('Placeholder', 'My placeholder')}
                    options={this.state.options}
                    update={this._updateOptions}
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

export default {
    component: SearchMultiSelectExtended,
    title: 'Molecules/SearchMultiSelectExtended',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => {
    const selectedOptions = select('Options Config', configSelect, 'A');
    return <SearchMultiSelectExtendedStory options={options[selectedOptions]} />;
};

