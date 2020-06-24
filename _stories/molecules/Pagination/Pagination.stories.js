import React from 'react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './Pagination.mdx';
import Pagination from '../../../components/molecules/Pagination';

const sizeOptions = { xl: 'xl', lg: 'lg', sm: 'sm', xs: 'xs', 'No Value': '' };

export default {
    component: Pagination,
    title: 'Molecules/Pagination',
    decorators: [withKnobs],
    parameters: {
        component: Pagination,
        docs: { page: mdx }
    }
};

class PaginationStory extends React.Component {
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
                size={optionalSelect('Size', sizeOptions, '')}
                onChange={this.handlePageChange}
            />
        );
    }
}

PaginationStory.displayName = 'Pagination';

export const Default = () => {
    return <PaginationStory />;
};

Default.story = {
    parameters: {
        info: { source: false }
    }
};
