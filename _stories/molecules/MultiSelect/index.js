import React, { Component } from 'react';
import { text } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import MultiSelect from '../../../components/molecules/MultiSelect';

const options = Array(10)
    .fill({})
    .map((o, i) => ({
        name: `Option ${i + 1}`,
        value: i,
        selected: false
    }));

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    'No Value': ''
};

class MultiSelectOptions extends Component {
    state = {
        options
    };

    handleCallback = (index, value, selected) => {
        const options = this.state.options.map((o, i) => ({
            ...o,
            selected: i === index ? selected : o.selected
        }));

        this.setState({
            options
        });
    };

    render() {
        return (
            <MultiSelect
                placeholder={text('Placeholder', 'Select an option')}
                size={optionalSelect('Size', sizeOptions, '')}
                callback={this.handleCallback}
                options={this.state.options}
                className={text('className', '')}
            />
        );
    }
}

const component = () => <MultiSelectOptions />;

export default [readme, component];
