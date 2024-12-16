const arrA = [1, 2, 3]
const arrB = [4, 5, 6]
let pro = 0
let sum = 0
let k = 2
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


let menor = Math.min(...arrd)

console.log(menor)