const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]

function findNumberIndex(array, value) {
    
    let result = array.find((number, index) => {
        if (number === value) {
            console.log(`O ${number} esta no index ${index}`)
        }
    })
}

//findNumberIndex(numbers, 55)

//const m = Math.floor(Math.sqrt(numbers.length))

//Defina o Tamanho do Bloco:

//O tamanho ideal do bloco é a raiz quadrada do tamanho do array. Isso geralmente proporciona um bom equilíbrio entre o número de saltos e a quantidade de comparações na busca linear final.

//const blockSize = Math.floor(Math.sqrt(numbers.length))

//Realize os Saltos:
//Comece no início do array

//Encontre o elemento do bloco correspondente ao valor procurado
//Se o elemento do bloco for o valor procurado, retorne o index correspondente
//Se o elemento do bloco for maior que o valor procurado, saia do loop e retorne -1
//Se o elemento do bloco for menor que o valor procurado, avance para o bloco seguinte


    //A variavel start inicia no index 0, e a variavel end assume o valor do tamanho do bloco
    //Enquanto o valor da posicao end for menor que o valor procurado, incrementa as variaveis start e end
    //Se o valor da posicao end for maior ou igual ao valor procurado, sai do loop
    //Se o valor da posicao end for maior que o tamanho do array, retorna -1
    //O loop tem como objetivo encontrar a posicao do bloco que contem o valor procurado
    //A variavel start assume o valor da posicao do bloco anterior, e a variavel end assume o valor da posicao do bloco atual
    //O loop percorre o array em saltos, aumentando a variavel start e end em blocos
    //Quando o loop termina, a variavel start assume o valor da posicao do bloco que contem o valor procurado
    //A variavel end assume o valor da posicao do bloco seguinte
    //O loop percorre o bloco de forma linear, verificando se o valor da posicao i e igual ao valor procurado
    //Se sim, retorna o valor da posicao i
function jumpSearch(array, value) {
    const blockSize = Math.floor(Math.sqrt(array.length))
    let start = 0
    let end = blockSize
    while (array[end] < value) {
        start = end
        end += blockSize
        if (end >= array.length) {
            return -1
        }
    }
    for (let i = start; i <= end; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

console.log(jumpSearch(numbers, 55))

module.exports = jumpSearch