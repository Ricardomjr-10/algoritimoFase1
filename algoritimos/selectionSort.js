const array = [64, 25, 12, 22, 11]

const selectionSort = array => {
    for (let i = 0; i < array.length - 1; i++) {
        let minimo = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minimo]) {
                minimo = j
            }
        }
        let temp = array[i]
        array[i] = array[minimo]
        array[minimo] = temp
    }

    return array
}

console.log(selectionSort(array))

module.exports = selectionSort

