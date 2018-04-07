# Breadcrumbs

### **NOTE**: The component will only render with a minimum width of **991px**

The `<Breadcrumbs>` component creates navigation links for the current pathname based on a configuration object.

[See the prototype here](https://ds.gumgum.com/stable/).

## Props

| name           | description                                                                                                                                                  | required |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| config         | Object that defines the app routes. See below for details.                                                                                                   | true     |
| pathname       | Current pathname either from react-router or window.location.pathname                                                                                        | true     |
| hideMenus      | Boolean attribute to prevent displaying subpath submenus                                                                                                     | false    |
| hideRoot       | Boolean attribute to prevent displaying the Root element (only if other breadcrumbs are available)                                                           | false    |
| linkComponent  | Optional component to display as the breadcrumbs. Receives prop "to" as its href                                                                             | false    |
| titleDecorator | Optional function for transforming titles when defaulting to the path. By default will Capitalize first letter and replace dashes and underscores for spaces | false    |

## Configuration

The configuration is simply an object that represents the app's routes:

| property | description                                                                                                                                     | required |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| title    | String to display in breadcrumbs and submenus Defaults to capitalized slug.                                                                     | false    |
| path     | Path value on the URL. Prepend with ":" to treat pathname value as parameters (ie /posts/:id). **Only one parameter is allowed for each level** | true     |
| subpaths | Optional Array containing objects of the same shape (title, path, subpaths)                                                                     | false    |

### Configuration Example:

```
const routes = {
    title: 'Home', // Root title
    path: 'home', // Root path is optional, defaults to '/'
    subpaths: [ // Children paths
        {
            title: 'Main Category', // Children Title
            path: 'category', // Children
            subpaths: [
                { // Each subpath group can specify one parameter
                    path: ':categoryId'
                },
                { // Or multiple specific paths
                    title: 'Sub Category 1', // Grand children title
                    path: 'subcategory-1' //Grand children path
                },
                {
                    title: 'Sub Category 2',
                    path: 'subcategory-2'
                },
                {
                    title: 'Sub Category 3',
                    path: 'subcategory-3'
                },
            ]
        },
        {
            path: 'products', // The title will default to "Products"
            subpaths: [
                {
                    path: ':id', // The value will be treated as a parameter, the title is optional
                    subpaths: [ // Add as many subpaths as you need!
                        {
                            path: 'edit'
                        }
                    ]
                }
            ]
        }
    ]
}
```

## Usage

### Using link component provided by the library:

```
render() {
    const pathname = '/products/12/edit';
    return (
        <header className="gds-page-header">
            <div className="gds-page-header__nav-bar">
                <Breadcrumbs pathname={pathname} config={routes} />
            </div>
        </header>
    );
}
```

### Passing a custom component and removing submenus:

```
const CustomLink = (props) => (
    <a href={props.to} >
        {props.children}
    </a>
);

render() {
    const pathname = '/products/12/edit';
    return (
        <header className="gds-page-header">
            <div className="gds-page-header__nav-bar">
                <Breadcrumbs
                    pathname={pathname}
                    config={routes}
                    linkComponent={CustomLink}
                    hideMenus />
            </div>
        </header>
    );
}
```

### Passing a custom title decorator and hiding the root breadcrumb:

```
_decorateTitle = (title) => title.toUpperCase();

render() {
    const pathname = '/products/12/edit';
    return (
        <header className="gds-page-header">
            <div className="gds-page-header__nav-bar">
                <Breadcrumbs
                    pathname={pathname}
                    config={routes}
                    titleDecorator={this._decorateTitle}
                    hideRoot />
            </div>
        </header>
    );
}
```
