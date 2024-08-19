// src/index.js

/**
 * Função para somar dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} - A soma dos dois números.
 */
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os argumentos devem ser números')
  }
  return a + b
}

/**
 * Função para subtrair dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} - A diferença dos dois números.
 */
function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os argumentos devem ser números')
  }
  return a - b
}

// Exemplo de uso
const resultSum = sum(10, 5)
const resultSubtract = subtract(10, 5)

console.log(`Soma: ${resultSum}`) // Soma: 15
console.log(`Subtração: ${resultSubtract}`) // Subtração: 5

module.exports = { sum, subtract }
