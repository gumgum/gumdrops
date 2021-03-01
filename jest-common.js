const path = require('path');

module.exports = {
    rootDir: path.join(__dirname),
    moduleDirectories: [
        'node_modules',
        path.join(__dirname, './src'),
        __dirname // test dir
    ],
    moduleNameMapper: {
        '\\module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./style-mock.js'),
        '\\.scss$': require.resolve('./style-mock.js'),
        '\\.sass$': require.resolve('./style-mock.js')
    },
    //modulePathIgnorePatterns: [],
    watchPlugins: [
        'jest-watch-select-projects',
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ]
};
