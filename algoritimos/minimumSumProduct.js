const arrA = [1, 2, 3]
const arrB = [4, 5, 6]
let pro = 0
let pro1 = 0
let sum1 = 0
let sum2 = 0
let sum = 0
let k = 2
let add = 2 * k
let add0 = (arrB[0] * add) 
let add1 = (arrB[1] * add) 
let add2 = (arrB[2] * add) 

let sub0 = arrA[0] - add
let sub1 = arrA[1] - add
let sub2 = arrA[2] - add 

for (let i = 0; i < arrA.length; i++) {
   pro = (arrA[i] * arrB[i])
    sum += pro 
    sum1 += pro 
    sum2 += pro 
}
console.log(add0)