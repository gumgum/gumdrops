The `<CircularThumbnail>` component is used to display images within a circular frame. Recommended props to pass in are src="https://domain.com/yourimage.png" and alt="name". Any other props that are passed in are also accepted.

**Example**:
```
const circularThumbnailSizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    xl: 'xl',
    '': 'default'
};

const circularThumbnailContexts = {
    '': 'default',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger',
    white: 'white'
};

const component = () => (
    <CircularThumbnail
        context={ select('Context', circularThumbnailContexts, '') }
        size={ select('Size', circularThumbnailSizeOptions, '') }
        src={ text('Image Path', 'https://ds.gumgum.com/images/ken.png') }
        alt={ text('Alt Text', 'Ken Weiner') }
        className={ text('ClassName', '') }
        style={ object('Styles', {}) }
    />
);
```

**Props**:

**prop name**   | **description**
----------------|------------
context         | Any of \`secondary, success, info, warning, danger, white\` or leave unset to get default appearance  {string} {defaults to ''}
size            | Any of \`xl, lg, sm, xs\` or leave unset to get default size  {string} {defaults to ''}
src             | Url to image {string} {required}
alt             | Alt text of image {string} {required}
