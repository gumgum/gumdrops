# BreadcrumbsWrapper

### **NOTE**: The component will only render with a minimum width of **991px**

**See the `<Breadcrumbs/>` component for an opinionated plug and play version**

The `<BreadcrumbsWrapper>` component helps when you need more customization than what the `<Breadcrumbs/>` component provides, use it together with the `<Breadcrumb>` component to get the desired styles or pass your own.

## BreadcrumbsWrapper Props

| name     | description                                | required |
| -------- | ------------------------------------------ | -------- |
| children | React components to display as breadcrumbs | true     |

## Breadcrumb Props

| name          | description                                                                                           | required |
| ------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| path          | Value to use for the link href or react-router's `to` prop.                                           | true     |
| linkComponent | Optional component to display as the breadcrumbs. Receives prop "to" as its href                      | true     |
| title         | String to display in breadcrumbs and submenus Defaults to capitalized slug.                           | false    |
| pathname      | Optional current pathname value, used to filter out the current pathname from submenus.               | false    |
| subpaths      | Optional Array containing objects of the same shape (title, path, subpaths), used to display submenus | false    |
| noLink        | Optional boolean that will display the title as text without link                                     | false    |

## Usage

### Create a custom array of breadcrumbs and pass it to the component:

```
class Header extends Component {
    state = {
        breadcrumbs: [
            {
                title: 'Home',
                to: '/'
            },
            {
                title: 'Publishers',
                to: '/publishers'
            },
            {
                title: 'Some Publisher',
                to: '/publishers/123'
            },
            {
                title: 'Random Page',
                to: '/random-route/123'
            }
        ]
    };

    render() {
        const { breadcrumbs } = this.state;

        return (
            <div>
                <header className="gds-page-header -color-bg-white">
                    <div className="gds-page-header__nav-bar">
                        <BreadcrumbsWrapper>
                            {breadcrumbs.map(({ title, to }, index) => (
                                <Breadcrumb
                                    key={to}
                                    linkComponent={Link}
                                    title={title}
                                    path={to}
                                    isLast={index === breadcrumbs.length - 1}
                                />
                            ))}
                        </BreadcrumbsWrapper>
                    </div>
                </header>
            </div>
        );
    }
}
```
