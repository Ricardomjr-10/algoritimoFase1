const array = [1, 2, 4, 6, 3, 7, 8]

function missingNumber(array) {
    let n = array.length + 1
    let somaEsperada = n * (n + 1)/2
    let somaReal = 0    
    
    for (let i = 0; i < array.length; i++) {
       somaReal += array[i]
    }
    
    return somaEsperada - somaReal

}
console.log(missingNumber(array))