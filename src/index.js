module.exports = function towelSort(matrix) {
    if (arguments.length === 0 || matrix.length === 0) return [];

    const matrixSort = matrix.reduce((accum, current, index) => {
        if (index % 2) {current.reverse();}
        return [...accum, ...current];
    }, []);

    return matrixSort;
}
