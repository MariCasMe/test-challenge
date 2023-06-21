const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    //
    expect(calculator.sum(2,-5)).toBe(-3);
})

test('substracts a - b', () => {
   //
   expect(calculator.substract(2,-5)).toBe(7);
})

test('multiplies a * b', () => {
    //
    expect(calculator.multiply(2,-5)).toBe(-10);
})

test('divides a / b', () => {
    // Consider decimals
    expect(calculator.divide(5.2, 2.5)).toBe(2.08);
})

test('Raises to power a ^ b', () => {
    //
    expect(calculator.power(-5,2)).toBe(25);
})

