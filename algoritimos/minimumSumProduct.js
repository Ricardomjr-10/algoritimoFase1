const arrA = [1, 2, 3]
const arrB = [4, 5, 6]
const k = 2

const minimumSumProduct = (arrA, arrB, k) => {
    let pro = 0
    let sum = 0
    let add = 2 * k
    let arrd = []
    for (let i = 0; i < arrA.length; i++) {
       pro = (arrA[i] * arrB[i])
        sum += pro 
    }
    for (let i = 0; i < arrA.length; i++) {
        arrd.push(sum +(arrB[i] * add))
        arrd.push(sum - (arrB[i] * add))
    }
    return Math.min(...arrd)
}

console.log(minimumSumProduct(arrA, arrB, k))

module.exports = minimumSumProduct