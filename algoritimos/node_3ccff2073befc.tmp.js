let n = 3

const minOf2 = (a, b) => {
    return a < b ? a : b
}

const minimizeCashFlow = (graph) => {
    let mxCredit = -1,
        src,
        mxCreditSrc
    for (let i = 0; i < n; i++) {
        if (graph[i][0] > mxCredit) {
            mxCredit = graph[i][0]
            mxCreditSrc = i
        }
    }
    src = mxCreditSrc
    let count = 0
    while (count < n - 1) {
        let maxV = -1,
            dest
        for (let i = 0; i < n; i++) {
            if (graph[src][i] > maxV) {
                maxV = graph[src][i]
                dest = i
            }
        }
        let min = minOf2(-graph[src][0], maxV)
        graph[src][0] += min
        graph[dest][0] -= min
        graph[src][dest] -= min
        graph[dest][src] += min
        if (graph[src][0] == 0) {
            count++
            src = dest
        }
    }
    return graph
}

console.log(minimizeCashFlow([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))