let n = 3

const getMin = arr => {
    let min = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] < arr[min]) {
            min = i
        }
    }
    return min
}

const getMax = arr => {
    let max = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[max]) {
            max = i
        }

    }
    return max
}