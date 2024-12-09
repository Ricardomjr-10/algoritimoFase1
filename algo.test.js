
const missingNumber = require('./algoritomos/missingNumber.js')
const jumpSearch = require('./algoritomos/jumpSearch.js')

test('Missing number', () => {
    expect(missingNumber([1, 2, 4, 6, 3, 7, 8])).toBe(5)
})

test('Jump Search', () => {
    expect(jumpSearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 55)).toBe(10)
})