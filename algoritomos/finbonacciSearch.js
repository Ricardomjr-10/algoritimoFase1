// calculo dos numeros da fibonacci
let fibMinus2 = 0
let fibMinus1 = 1
let fib = 0
let array = []
let n = array.length
n = 5


 while (fib <= n) {
    fib = fibMinus2 + fibMinus1
    fibMinus2 = fibMinus1
    fibMinus1 = fib
}

let indLeft = 0
let indRight = n -1
console.log(fib)