import React from 'react';
import { number, boolean, selectV2 as select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Pagination from '../../../components/molecules/Pagination';

const sizeOptions = ['xl', 'lg', 'sm', 'xs', ''];

class TestPagination extends React.Component {
    state = {
        activePage: 7,
        lastPage: 70
    };

    handlePageChange = newPage => {
        const activePage = newPage;
        this.setState({ activePage });
        action('Page change')(activePage);
    };

    render() {
        const { activePage, lastPage } = this.state;

        return (
            <Pagination
                activePage={number('Current Page', activePage)}
                lastPage={number('Last Page', lastPage)}
                boundaries={boolean('Show Boundaries', false)}
                justify={boolean('Justify', false)}
                size={select('Size', sizeOptions, '')}
                onChange={this.handlePageChange}
            />
        );
    }
}

TestPagination.displayName = 'Pagination';

const component = () => <TestPagination />;

export default [readme, component];
