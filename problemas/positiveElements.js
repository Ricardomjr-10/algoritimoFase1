const array = [-1, 3, -5, 6, 3, 6, -7, -4, -9, 10]

let par = 0
let impar = 1
for (let i = 0; i < array.length; i++) {
    if (array[par] < 0) {
       if (array[impar] > 0) {
           [array[par], array[impar]] = [array[impar], array[par]]
           par += 2
           impar += 2
       } else {
           impar += 2
       }
    } else {
        par += 2
    }
}

console.log(array)