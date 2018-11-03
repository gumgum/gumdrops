import React from 'react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';
import LoadingDots from '../../../components/atoms/LoadingDots';

import readme from './README.md';
import SearchSelect from '../../../components/molecules/SearchSelect';

const options = [
    { id: 1, title: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Consectetur adipiscing elit ' },
    { id: 3, title: 'Sed do eiusmod tempor incididunt ut' },
    { id: 4, title: 'Labore et dolore magna aliqua' },
    { id: 5, title: 'Ut enim ad minim veniam' },
    { id: 6, title: 'Quis nostrud exercitation ullamco' },
    { id: 7, title: 'Laboris nisi ut aliquip ex ea commodo' },
    { id: 8, title: 'Consequat Duis' },
    { id: 9, title: 'Aute irure dolor in reprehenderit ' },
    { id: 10, title: 'In voluptate velit esse cillum dolore' },
    { id: 11, title: 'Eu fugiat nulla pariatur' },
    { id: 12, title: 'Deserunt mollit anim id est laborum' }
];

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    md: 'md'
};

const component = () => (
    <SearchSelect
        placeholder={text('Placeholder', 'Start typing...')}
        options={options}
        onChange={action('ON_CHANGE')}
        onSelect={action('ON_SELECT')}
        size={optionalSelect('Size', sizeOptions, '')}
        isLoading={boolean('isLoading', false)}
        debounceTime={number('debounceTime', 300)}
        renderLoader={() => (
            <LoadingDots size="sm" style={{ left: 'auto', right: '3em', top: '45%' }} />
        )}
    />
);

export default [readme, component];
