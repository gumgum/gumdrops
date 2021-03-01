module.exports = {
    ...require('./jest-common'),
    collectCoverageFrom: ['**/src/**/*.ts', '**/src/**/*.tsx'],
    projects: ['./jest-lint.js', './jest-client.js']
};
