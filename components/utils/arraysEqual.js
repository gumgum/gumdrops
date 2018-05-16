/**
 * Traverse two arrays, and checks if they are equal
 * @param   {Array}    arr1
 * @param   {Array}    arr2
 * @returns {Boolean}
 */
const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

export default arraysEqual;
