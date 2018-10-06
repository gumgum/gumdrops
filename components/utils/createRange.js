const createRange = (start = 0, end) =>
    Array.from({ length: end + 1 - start }, (v, k) => k + start);

export default createRange;
