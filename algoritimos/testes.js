// function sortArrayAscending(array) {
//     for (let i = 0; i < array.length - 1; i++) { // o ultimo elemento do array, valor do ultimo index
//         for (let j = 0; j < array.length - 1 - i; j++) {// iteramos pelo array de tras para frente
//             if (array[j] > array[j + 1]) {
//                 let temp = array[j]; // troca a posicao do index do array com o proximo elemento do array
//                 array[j] = array[j + 1];// ex: index 0 com index 1
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }

// console.log(sortArrayAscending([5,6,7,2,1,3,4]))

// ////////////////////////////////////////////////////////////////////

// const array = [38, 27, 43, 10,20,7]

// const mergeSort = array => {
//     let mArray = array.length/2

//     let pHalf = array.slice(0, mArray)
//     let sHalf = array.slice(mArray, mArray * 2)
    
//     let oMetade = pHalf.length/2

//     let pp1Half = pHalf.slice(0, oMetade)
//     let pp2Half = pHalf.slice(oMetade)
//     let ss1Half = sHalf.slice(0, oMetade)
//     let ss2Half = sHalf.slice(oMetade)
    
//     let Pmetade = ss2Half.concat(ss1Half)
//     let Smetade = pp2Half.concat(pp1Half)
    
//     let metadeSort = Smetade.concat(Pmetade).sort((a, b) => a - b)

//     return metadeSort
// }

// console.log(mergeSort(array))

// // console.log(pHalf)
// // console.log(sHalf)
// // console.log(pp1Half)
// // console.log(pp2Half)
// // console.log(ss1Half)
// // console.log(ss2Half)

const quickSort = array => {
    if (array.length <= 1) {
        return array
    }

    let pivot = array[0]
    let left = []
    let right = []

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    return quickSort(left).concat(pivot).concat(quickSort(right))
}

console.log(quickSort([38, 27, 43, 10,20,7]))


const le = [7]
const pi = [10,27,38]
const ri = [43,20]

console.log(le.concat(pi).concat(ri))