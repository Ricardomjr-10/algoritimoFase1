const arrA = [1, 2, 3]
const arrB = [4, 5, 6]
let pro = 0
let sum = 0
let k = 2
let add = 2 * k
let add0 = (arrB[0] * add) 
let add1 = (arrB[1] * add) 
let add2 = (arrB[2] * add) 

for (let i = 0; i < arrA.length; i++) {
   pro = (arrA[i] * arrB[i])
    sum += pro 
}

let arrC = []

arrC.push(sum + add0)
arrC.push(sum + add1)
arrC.push(sum + add2)

arrC.push(sum - add0)
arrC.push(sum - add1)
arrC.push(sum - add2)

let menor = Math.min(...arrC)

console.log(menor)