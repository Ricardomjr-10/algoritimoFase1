let n = 3

const getMin = arr => {
    let minInd = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] < arr[minInd]) {
            minInd = i
        }
    }
    return minInd
}

const getMax = arr => {
    let maxInd = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[maxInd]) {
            maxInd = i
        }

    }
    return maxInd
}

const minOf2 = (a, b) => {
    return a < b ? a : b
}

