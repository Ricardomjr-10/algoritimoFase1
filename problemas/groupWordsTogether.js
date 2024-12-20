const words = [ "may", "student", "students", "dog",
    "studentssess", "god", "cat", "act",
    "tab", "bat", "flow", "wolf", "lambs",
    "amy", "yam", "balms", "looped", 
    "poodle"];

const groupWordsTogether = (words) => {
    //criando objeto vazio
    const wordsObj = {}
    //iterando sobre cada item do array words
    words.forEach(word => {
        //criando um array com as letras da palavra, colocando em ordem alfabetica e juntando em uma string
        const sorted = word.split("").sort().join("")
        //verificando se a palavra ja existe no objeto, se sim, adicionando a palavra ao array, se nao, criando um array com a palavra
        wordsObj[sorted] = wordsObj[sorted] ? [...wordsObj[sorted], word] : [word]
    })
    //retorna o objeto com as palavras agrupadas
    return Object.values(wordsObj)
}

console.log(groupWordsTogether(words))