let n = 3

const getMin = arr => {
    let min = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] < arr[min]) {
            min = i
        }
        return min
    }
}