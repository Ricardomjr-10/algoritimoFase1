const missingNumber = require('./algoritomos/missingNumber.js')

test('Missing number', () => {
    expect(missingNumber([1, 2, 4, 6, 3, 7, 8])).toBe(5)
})