const { default: expect } = require('expect');
const validation = require('../factorial');

test('the factorial of a number', ()=>{
    expect(validation(4)).toBe(24);
})
test('the factorial of zero', ()=>{
    expect(validation(0)).toBe(1);
})
test('the factorial of a negative number', ()=>{
    expect(validation(-2)).toBe(-1);
})