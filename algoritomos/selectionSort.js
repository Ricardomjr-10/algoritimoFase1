const array = [64, 25, 12, 22, 11]


for (let i = 0; i < array.length - 1; i++) {
    let minimo = Math.min(array[i])
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < minimo) {
            minimo = array[j]
        }
    }
    let temp = array[i]
    array[i] = minimo
    minimo = temp
}

console.log(array)