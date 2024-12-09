// calculo dos numeros da fibonacci
let fibMinus2 = 0
let fibMinus1 = 1
let fib
let n = array.length

while (fib <= n) {
    fib = fibMinus2 + fibMinus1
    fibMinus2 = fibMinus1
    fibMinus1 = fib
}
