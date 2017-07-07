import React from 'react';

import { action } from '@kadira/storybook';
import { number, boolean, select } from '@kadira/storybook-addon-knobs';

import Pagination from '../../components/molecules/Pagination';

const sizes = ['xl', 'lg', 'sm', 'xs', ''];

const title = 'Pagination';

const description = `&nbsp;
\n
The \`<Pagination>\` component creates a set of indicators to show how many pages exist for the current list and helps navigate them.

&nbsp; \n
When a page change is detected, the \`onChange\` prop will be called with the next page number as its only argument

&nbsp; \n
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
        <Pagination
            activePage={ activePage }
            lastPage={ lastPage }
            boundaries={ false }
            justify={ false }
            size={ '' }
            onChange={ this.handlePageChange }
        />
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
size            | Any of \`xl, lg, sm, xs\` or leave unset to get default size  {string} {defaults to ''}
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
                size={ select('Size', sizes, '') }
                onChange={ this.handlePageChange }
            />

        );
    }
}

const component = () => <TestPagination />;

const options = {
    inline: true,
    propTables: [Pagination]
};

export default [title, description, component, options];
