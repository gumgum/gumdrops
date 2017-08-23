The standard  `<Divider>` component is used to separate distinct segments of content.

If the divider is collapsible, pass in a callback function that sets the state, and include the state in your component.

**Example**:
```
state {
    open: false
}

const toggle = () => {
    this.setState({ open: !this.state.open });
};

return(
    <div>
        <Divider
            label="Collapsible Label"
            collapsible
            open={ this.state.open }
            callback= { this.toggle }
        />
        this.state.open && <div>Content to show when toggled open</div>
    </div>
)
```
