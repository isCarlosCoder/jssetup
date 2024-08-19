// tests/index.test.js

const { sum, subtract } = require('../src/index')

test('sum correctly adds two numbers', () => {
  expect(sum(1, 2)).toBe(3)
})

test('subtract correctly subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2)
})

test('sum throws error when arguments are not numbers', () => {
  expect(() => sum(1, 'a')).toThrow('Os argumentos devem ser números')
})

test('subtract throws error when arguments are not numbers', () => {
  expect(() => subtract(5, 'b')).toThrow('Os argumentos devem ser números')
})
