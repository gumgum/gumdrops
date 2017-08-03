import React from 'react';
import { number, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Pagination from '../../../components/molecules/Pagination';

const sizeOptions = ['xl', 'lg', 'sm', 'xs', ''];

const description = `&nbsp;
\n
#### Example:
\`\`\`
state = {
    activePage: 7,
    lastPage: 70
}

handlePageChange = (nextPage) => this.setState({
    activePage: nextPage,
})

render() {
    const {
        activePage,
        lastPage,
    } = this.state;
    return (
        < Pagination
            activePage={ activePage }
            lastPage={ lastPage }
            boundaries={ false }
            justify={ false }
            size={ '' }
            onChange={ this.handlePageChange }
        / >\n
    );
}
\`\`\`

&nbsp; \n
#### Props:
**prop name**   | **description**
----------------|------------
activePage      | Current active page  {number} {defaults to 1}
lastPage        | Total number of pages  {number} {required}
boundaries      | Whether or not to always show the start and end pages  {boolean} {defaults to false}
justify         | Whether or not to take the whole available width of the container  {boolean} {defaults to false}
size            | Any of 'xl, lg, sm, xs' or leave unset to get default size  {string} {defaults to ''}
onChange        | Callback to run when changing a page. Receives an object with next page and offsets {function} {required}
`;

class TestPagination extends React.Component {

    state = {
        activePage: 7,
        lastPage: 70
    }

    handlePageChange = (newPage) => {
        const activePage = newPage;
        this.setState({ activePage });
        action('Page change')(activePage);
    }

    render() {
        const {
            activePage,
            lastPage
        } = this.state;

        return (
            <Pagination
                activePage={ number('Current Page', activePage) }
                lastPage={ number('Last Page', lastPage) }
                boundaries={ boolean('Show Boundaries', false) }
                justify={ boolean('Justify', false) }
                size={ select('Size', sizeOptions, '') }
                onChange={ this.handlePageChange }
            />

        );
    }
}

const component = () => <TestPagination />;

export default [readme, component, description];
