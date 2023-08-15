const hourglassSum = (arr: number[][]) => {

    if (!Array.isArray(arr) || arr.length !== 6)
        throw new Error('Must be have 6 rows');

    arr.forEach((x, row) => {
        //cada fila tiene que se un array
        if (!Array.isArray(arr[row]))
            throw new Error('Must be 6x6 matrix');

        if (arr[row].length !== 6)
            throw new Error('Must be have 6 columns');

        arr[row].forEach((element, col) => {
            if (arr[row][col] < -9 || arr[row][col] > 9)
                throw new Error('Value of arr[i][j] must be between -9 and 9');
        });
    });

    let maximum = null;
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            const sup = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1];
            const center = arr[i][j];
            const base = arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];

            const internalSum = base + center + sup;
            if (maximum === null || internalSum > maximum)
                maximum = internalSum;

        }
    }

    return maximum;
}

export { hourglassSum }