const path = require('path');

module.exports = {
    displayName: 'lint',
    runner: 'jest-runner-eslint',
    testMatch: ['<rootDir>/src/**/*.js', '<rootDir>/__tests__/**/*.js']
};
