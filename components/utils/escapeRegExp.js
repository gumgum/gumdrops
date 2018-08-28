/**
 * Escape special characters for RegEx
 * @param   {String}    term
 * @returns {Boolean}
 */
const escapeRegExp = term => {
    return term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export default escapeRegExp;
