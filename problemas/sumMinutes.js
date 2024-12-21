const T = '20:39'
const K = 534

const sumMinutes = (T, K) => {
    let minu = T.split(':').
    map(Number).
    reduce((a, b) => a * 60 + b) + K
    
    let horas = Math.floor((minu / 60) % 24)
    let min = minu % 60
    
    if (min < 10) {
        min = '0' + min
    }

    if (horas < 10) {
        horas = '0' + horas
    }
    
    return  `${horas}:${min}`

}

console.log(sumMinutes(T, K))