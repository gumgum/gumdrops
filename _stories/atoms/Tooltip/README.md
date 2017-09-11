The `<Tooltip>` component is a small explanatory message that appears when hovering over an element. Tooltips require a 'text' prop containing their message. Any other props that are passed in are also accepted.

**Example**:
```
const tooltipPositions = {
    top: 'top',
    'top-right': 'top-right',
    right: 'right',
    'bottom-right': 'bottom-right',
    bottom: 'bottom',
    'bottom-left': 'bottom-left',
    left: 'left',
    'top-left': 'top-left'
};

const tooltipContexts = {
    '': 'default',
    success: 'success',
    warning: 'warning',
    info: 'info',
    danger: 'danger'
};

const tooltipSizeOptions = {
    lg: 'lg',
    '': 'default'
};

const tooltipVariationsOptions = {
    always: 'always',
    'no-animate': 'no-animate',
    bounce: 'bounce',
    '': 'default'
};

const component = () => (
    <Tooltip
        text={ text('Text', 'I am a tooltip!') }
        position={ select('Position', tooltipPositions) }
        context={ select('Context', tooltipContexts, '') }
        size={ select('Size', tooltipSizeOptions, '') }
        className={ text('ClassName', '') }
        style={ object('Styles', {}) }
        variations={ select('Variations', tooltipVariationsOptions, '') }
    >
        <Button context="default">
            Button with Tooltip
        </Button>
    </Tooltip>
);
```

**Props**:

**prop name**   | **description**
----------------|------------
text            | Text to appear in tooltip {string} {required}
position        | Any of \`top, top-right, right, bottom-right, bottom, bottom-left, left, top-left\` or leave unset to get default position  {string} {defaults to 'top'}
context         | Any of \`success, info, warning, danger\` or leave unset to get default appearance  {string} {defaults to ''}
size            | Use \`lg\` for large tooltip size. {string} {defaults to ''}
variations      | Any of \`always, no-animate, bounce\` to control behavior / animation of tooltip. {string} {defaults to ''}
