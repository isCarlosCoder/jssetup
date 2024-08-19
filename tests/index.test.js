const { sum } = require('../src')

describe('sum', () => {
  test('Should return the sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('should return the sum of two negative numbers', () => {
    expect(sum(-1, -1)).toBe(-2)
  })

  test('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2)
  })

  test('should return 0 when adding 0 to 0', () => {
    expect(sum(0, 0)).toBe(0)
  })

  test('should throw an error when arguments are not numbers', () => {
    expect(() => sum(1, 'a')).toThrow('Invalid arguments')
  })
})
