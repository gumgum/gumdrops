import React from 'react';

import { action } from '@kadira/storybook';
import { number, boolean, select } from '@kadira/storybook-addon-knobs';

import FormGroup from '../../components/molecules/FormGroup';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import Pagination from '../../components/molecules/Pagination';

const sizes = ['xl', 'lg', 'sm', 'xs', ''];

const title = 'Pagination';

const description = `&nbsp;
\n
The \`<Pagination>\` component creates a set of indicators to show how many pages exist for the current list and helps navigate them.

&nbsp; \n
When a page changes, the component will call the handler passed as the \`onChange\` prop with an object containing both the next page and the next results' offset, so that you can use it with server APIs that accept either a page:

&nbsp; \n

 \`/api/users?page=4\`

&nbsp; \n

Or the start of the next set of results:

&nbsp; \n

 \`/api/users?offset=31\`

&nbsp; \n

The examples above request page 4, assuming there are 10 results per page (don't worry, you can use any number of results that you need).

&nbsp; \n
#### Example:
\`\`\`
state = {
    currentPage: 7,
    totalItems: 700,
    itemsPerPage 10,
    offset: 60 //It's not necessary to keep track of the offset, just shown here for demo purposes
};

handlePageChange = ({ page, offset }) => {
    this.setState({
        currentPage: page,
        offset
    });

    getResourcesFromServer('/api/resource?page=' + page)
    // alternatively
    // getResourcesFromServer('/api/resource?offset=' + offset)
}

render() {
    const {
        currentPage,
        totalItems,
        itemsPerPage
    } = this.state;
    return (
        <Pagination
            currentPage={ currentPage }
            totalItems={ totalItems }
            itemsPerPage={ itemsPerPage }
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
currentPage     | Current active page  {number} {defaults to 1}
totalItems      | Total number of individual items being paginated (this is NOT the total number of pages)  {number} {required}
itemsPerPage    | Number of items shown per page  {number} {defaults to 10}
boundaries      | Whether or not to always show the start and end pages  {boolean} {defaults to false}
justify         | Whether or not to take the whole available width of the container  {boolean} {defaults to false}
size            | Any of \`xl, lg, sm, xs\` or leave unset to get default size  {string} {defaults to ''}
onChange        | Callback to run when changing a page. Receives an object with next page and offsets {function} {required}
`;

class TestPagination extends React.Component {

    state = {
        currentPage: 1,
        totalItems: 700,
        itemsPerPage: 10,
        offset: 0
    }

    handlePageChange = ({ page, offset }) => {
        const currentPage = page;
        this.setState({
            currentPage,
            offset
        });
        action('Page change')(currentPage, offset);
    }

    render() {
        const {
            currentPage,
            totalItems,
            itemsPerPage
        } = this.state;
        return (
            <Pagination
                currentPage={ number('Current Page', currentPage) }
                totalItems={ number('Total Items', totalItems) }
                itemsPerPage={ number('Results Per Page', itemsPerPage) }
                boundaries={ boolean('Show Boundaries', false) }
                justify={ boolean('Justify', false) }
                size={ select('Size', sizes, '') }
                onChange={ this.handlePageChange }
            />

        );
    }
}

/* eslint-disable react/no-multi-comp */
const component = () => <TestPagination />;

const options = {
    inline: true,
    propTables: [Pagination]
};

export default [title, description, component, options];
