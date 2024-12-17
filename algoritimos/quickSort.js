const quickSort = array => {
    if (array.length <= 1) {
        return array
    }

    let pivot = array[0]
    let left = []
    let rigth = []

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            rigth.push(array[i])
        }
    }

    return quickSort(left).concat(pivot).concat(quickSort(rigth))
}

console.log(quickSort([38, 27, 43, 10,20,7]))

module.exports = quickSort