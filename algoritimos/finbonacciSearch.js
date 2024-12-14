// calculo dos numeros da fibonacci
let fibMinus2 = 0
let fibMinus1 = 1
let fib = 0
let array = []
let n = array.length
n = 5
let x


 while (fib <= n) {
    fib = fibMinus2 + fibMinus1
    fibMinus2 = fibMinus1
    fibMinus1 = fib
}

let indLeft = 0
let indRight = n -1

while (indLeft <= indRight) {
    let mid = indLeft + fibMinus2 - 1

    if (x === array[mid]) {
        return mid
    }
    if (x < array[mid]) {
        return  indRight = mid - 1
    }
}

let left = 0
let right = n - 1

while (left <= right) {
    i = min(fibMinus2, right)

    if (x === array[i]) {
        return i
    }
    if (x < array[i]) {
        right = i - 1
    }
}
console.log(fib)

