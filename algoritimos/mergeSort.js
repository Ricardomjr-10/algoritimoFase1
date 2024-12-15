const array = [38, 27, 43, 10]
let pHalf = array.slice(0, 2)
let sHalf = array.slice(2, 4)

let pp1Half = pHalf.slice(0, 1)
let pp2Half = pHalf.slice(1)
let ss1Half = sHalf.slice(0, 1)
let ss2Half = sHalf.slice(1)

let Pmetade = ss2Half.concat(ss1Half)
let Smetade = pp2Half.concat(pp1Half)

let metadeSort = Smetade.concat(Pmetade).sort((a, b) => a - b)

console.log(metadeSort)

// console.log(pHalf)
// console.log(sHalf)
// console.log(pp1Half)
// console.log(pp2Half)
// console.log(ss1Half)
// console.log(ss2Half)