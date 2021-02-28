module.exports = {
    ...require('./jest-common'),
    displayName: 'components',
    testEnvironment: 'jest-environment-jsdom',
    //setupFiles: ['jest-localstorage-mock'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testMatch: ['**/__tests__/**/*.test.js']
};
