//import function
const { default: expect } = require('expect');
const fizzBuzz=require('../fizzBuzz');

test('FizzBuzz number',()=>{
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})
test('not a fizzbuzz number', ()=>{
    expect(fizzBuzz(2)).toBe(2);
})
