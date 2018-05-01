The `<DocumentTitle>` component is used to set the document.title value in an easy way.

It can either be used to wrap around content, or as a standalone component that won't render anything and just change the document.title value.

## Props

| name     | description                                | required |
| -------- | ------------------------------------------ | -------- |
| title    | String to be used as document.title value. | false    |
| children | Any Nodes to be rendered.                  | false    |

**Standalone Example**:

```
state = {
    id: 123,
    name: 'The Client'
};

render() {
    const { id, name } = this.state;
    const pageTitle = `${id} | ${name} | My Page`;

    return (
        <div>
            <DocumentTitle title={pageTitle} />
            <p>Some Random content</p>
        </div>
    )
};
```

Sometimes you may need to set the document title inside a render function, this is where the wrapper is helpful.

**Wrapper Example**:

```
render() {
    return (
        <Route
            path="/settings"
            render={() => (
                <DocumentTitle title="Settings | My Page" >
                    <p>Settings</p>
                </DocumentTitle>
            )}
        />
        <Route
            path="/financials"
            render={() => (
                <DocumentTitle title="Financials | My Page" >
                    <p>Financials</p>
                </DocumentTitle>
            )}
        />
    )
};
```
