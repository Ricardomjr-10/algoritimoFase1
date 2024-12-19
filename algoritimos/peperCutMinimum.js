function perperCut (a, b) {
    let quadrados = []
    let area = a * b
    for (let i = a; i > 0; i--) {
        if (area >= i * i) {
            quadrados.push({ lado: i, area: i * i })
            area -= i * i
        }
    }
    return quadrados
}

console.log(perperCut(6, 8))




