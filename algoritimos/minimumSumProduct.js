const arrA = [1, 2, 3]
const arrB = [4, 5, 6]
let arrC = []
let sum = 0

for (let i = 0; i < arrA.length; i++) {
    arrC.push(arrA[i] * arrB[i])
    sum += arrC[i]
}
console.log(sum)