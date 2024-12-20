const array = [3, 2, 1]
const arrayInd = [1, 0, 2]

// for (let i = 0; i < array.length; i++) {
//     [array[arrayInd[i]], array[i]] = [array[i], array[arrayInd[i]]]
    
// }

//console.log(array)

function reorderArrayIndex(array, arrayInd) {
    for (let i = 0; i < array.length; i++) {
        [array[arrayInd[i]], array[i]] = [array[i], array[arrayInd[i]]]
         arrayInd.sort((a, b) => a - b)
        
    }
    return array
}

console.log(reorderArrayIndex(array, arrayInd))