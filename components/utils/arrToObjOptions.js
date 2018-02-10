/**
 * Given an array, return an object with each element in the array set as the keys and values
 * @param   {Array}    arr
 * @returns {Object}
 */
const arrToObjOptions = arr => arr.reduce((acc, option) => ({ ...acc, [option]: option }), {});

export default arrToObjOptions;
