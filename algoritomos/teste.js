const salta4 = (array, valor) => {
    const valordoSalto = Math.floor(Math.sqrt(array.length))

    let comeco = 0
    let fim = valordoSalto

    while (array[fim] < valor) {// array[fim] representa o o numero no index fim, que e 4 no comeco
        comeco = fim // o comeco que é 0 vai receber o fim que seria 4
        fim += valordoSalto // fim que era 4 vai receber 8
                            // comeca tudo novamente a partir do index 8, saltando de 4 em 4, 
                            //e retorna ate o index que contem  o numero menor que o valor procurado

        if (fim >= array.length) {// se o fim for maior que o tamanho do array é 
                                   //porque  o valor nao esta no array e retorna -1
            return -1
        }
    }                               //se o valor estiver no array, ele faz um loop  
                                    //ate o index do ultimo valor que o fim recebeu e retorna o index dele
    for (let i = comeco; i <= fim; i++) {
        if (array[i] === valor) {
            return i
        }
    }                             // se nao encontra o valor ele retorna -1
    return -1

}

const number = [0, 1, 1, 2, 3, 5, 10, 13, 21, 34, 55, 89, 144, 233, 377, 610]

console.log(salta4(number, 10))

const fibos = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return `O ${value} esta no index ${i}`
        }
    }
    return -1
}




let numb = [0, 1, 1, 2, 3, 5, 10]
console.log(fibos(numb, 2))