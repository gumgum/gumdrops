import PageBreadcrumbs from '../../components/molecules/PageBreadcrumbs';

const pathOptions = [
    '/',
    '/home',
    '/home/static-page',
    '/home/category',
    '/home/category/subcategory-1',
    '/home/category/subcategory-2',
    '/home/category/subcategory-3',
    '/home/products/42',
    '/home/products/42/edit'
];

const pathOptionsNoConfig = ['/', '/home', '/about-me', '/contact'];

const configOptions = {
    title: 'Home',
    path: 'home',
    subpaths: [
        {
            title: 'Main Category',
            path: 'category',
            subpaths: [
                {
                    title: 'Sub Category 1',
                    path: 'subcategory-1'
                },
                {
                    title: 'Sub Category 2',
                    path: 'subcategory-2'
                },
                {
                    title: 'Sub Category 3',
                    path: 'subcategory-3'
                }
            ]
        },
        {
            title: 'Products',
            path: 'products',
            subpaths: [
                {
                    path: ':id',
                    subpaths: [
                        {
                            path: 'edit'
                        }
                    ]
                }
            ]
        },
        {
            path: ':pageId'
        }
    ]
};

const printCode = code => (code ? '\n' + JSON.stringify(code, null, 4) + '\n\n' : '');

export default {
    title: 'Molecules/PageBreadcrumbs',
    component: PageBreadcrumbs,
    argTypes: {
        config: { control: 'object' },
        pathname: { control: 'text' },
        hideRoot: { control: 'boolean' }
    }
};

const Template = args => {
    return (
        <div>
            <PageBreadcrumbs {...args} />
            <p>Test these pathnames:</p>
            <pre>{args.config ? printCode(pathOptions) : printCode(pathOptionsNoConfig)}</pre>
            <p>Config:</p>
            <pre>{args.config ? printCode({ ...args.config }) : 'No config!'}</pre>
        </div>
    );
};

export const Config = Template.bind({});

Config.args = {
    config: configOptions,
    pathname: '/'
};

export const NoConfig = Template.bind({});
NoConfig.args = {
    pathname: '/'
};

Config.parameters = { controls: { exclude: ['linkComponent'] } };
NoConfig.parameters = { controls: { exclude: ['linkComponent', 'config'] } };
