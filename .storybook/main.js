module.exports = {
    stories: ['../_stories/**/*.stories.@(js|mdx)'],
    addons: [
        '@storybook/addon-knobs/register',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null
            }
        },
        '@storybook/addon-options/register',
        '@storybook/addon-actions/register'
    ]
};
