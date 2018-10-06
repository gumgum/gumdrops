export const deprecateLog = (function() {
    const hash = {};
    return function(message) {
        if (typeof message !== 'string') {
            throw new Error('Must provide a string as a message');
        }

        if (!hash[message]) {
            console.log('%cGumdrops %cWarning:', 'color: #00a7cf', 'color: #e5a516', message); // eslint-disable-line no-console
            hash[message] = true;
        }
    };
})();

export const deprecateFunction = function(fn, message) {
    if (typeof fn !== 'function') return;

    return function(...args) {
        fn(...args);
        deprecateLog(message);
    };
};
