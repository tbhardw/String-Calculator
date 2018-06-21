'use strict';

const util = require('./stringCalc');

//test to add two numbers 
test('Sum of 1,2 is 3', () => {
    expect(util.stringCalc(1,2)).toBe(3);
});

//test to add an empty string
test('Sum of an empty string is 0', () => {
    expect(util.stringCalc('')).toBe(0);
});

//test to add numbers separated by the new line characters
test('Sum of numbers separated by new line characters is 5', () => {
    expect(util.stringCalc(2 \n 3)).toBe(5);
});

//test to add multiple numbers
test('Sum of multiple numbers separated by commas like 1,2,3 is 6', () => {
    expect(util.stringCalc(1,2,3)).toBe(6);
});