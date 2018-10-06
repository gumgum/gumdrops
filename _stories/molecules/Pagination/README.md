The `<Pagination>` component creates a set of indicators to show how many pages exist for the current list and helps navigate them.

When a page change is detected, the `onChange` prop will be called with the next page number as its only argument.

**Example**:

```
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
```

**Props**:

| **prop name** | **description**                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| activePage    | Current active page {number} {defaults to 1}                                                              |
| lastPage      | Total number of pages {number} {required}                                                                 |
| boundaries    | Whether or not to always show the start and end pages {boolean} {defaults to false}                       |
| justify       | Whether or not to take the whole available width of the container {boolean} {defaults to false}           |
| size          | Any of \`xl, lg, sm, xs\` or leave unset to get default size {string} {defaults to ''}                    |
| onChange      | Callback to run when changing a page. Receives an object with next page and offsets {function} {required} |

**Keyboard Accessibility:**

When pagination is in focus, you can use the arrow key to navigate to the next (arrow right and arrow down) and previous (arrow up and arrow left) pages. You can also focus on the next/previous button and "press" them with the spacebar or enter keys.
