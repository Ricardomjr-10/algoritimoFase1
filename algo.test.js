const missingNumber = require('./algoritimos/missingNumber.js')
const jumpSearch = require('./algoritimos/jumpSearch.js')
const selectionSort = require('./algoritimos/selectionSort.js')
const minimumSumProduct = require('./algoritimos/minimumSumProduct.js')
const quickSort = require('./algoritimos/quickSort.js')

test('Missing number', () => {
    expect(missingNumber([1, 2, 4, 6, 3, 7, 8])).toBe(5)
})

test('Jump Search', () => {
    expect(jumpSearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 55)).toBe(10)
})

test('Selection Sort', () => {
    expect(selectionSort([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64])
})

test('Minimum Sum Product', () => {
    expect(minimumSumProduct([1, 2, 3], [4, 5, 6], 2)).toBe(8)
})

test('Quick Sort', () => {
    expect(quickSort([38, 27, 43, 10,20,7])).toEqual([7, 10, 20, 27, 38, 43])
})