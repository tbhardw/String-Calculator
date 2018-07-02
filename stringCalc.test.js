'use strict';

const stringCalc = require('./stringCalc');

//Test 1: test to add two numbers 
test('To Test the sum of two numbers', () => {
    expect(stringCalc('1,2')).toBe(3);
});

//Test 2: test to add an empty string
test('To Test the sum of an empty string to be 0', () => {
    expect(stringCalc('')).toBe(0);
});

//Test 3: test to add numbers separated by the new line characters
test('To test the sum of two numbers separated by new line characters', () => {
    expect(stringCalc('2\n3')).toBe(5);
});

//Test 4: test for negative numbers 
test('To Test the sum when the input is a negative number', () => {
    expect(function(){stringCalc('-1')}).toThrow('negatives not allowed -1');
});

//Test 5: test to add multiple numbers
test('To Test the sum when more than two numbers are added', () => {
    expect(stringCalc('1,2,3')).toBe(6);
});

//Test 6: test to add numbers separated by multiple delimiters
test('To Test the sum of numbers separated by multiple delimiters', () => {
    expect(stringCalc('//;\n1;2')).toBe(3);
});

//Test 7: test for all negative number inputs
test('To Test the sum when the inputs are both positive and negative numbers', () => {
    expect(function(){stringCalc('-1,-2,3')}).toThrow('negatives not allowed -1,-2');
});

//Test 8: test for both positive and negative numbers 
test('To Test the sum when both the inputs are negative numbers', () => {
    expect(function(){stringCalc('-2,-3')}).toThrow('negatives not allowed -2,-3');
});

//Test 9: test for the sum of numbers when an input is greater than 1000
test('To Test the sum when one of the inputs being added is greater than 1000', () => {
    expect(stringCalc('2,1001')).toBe(2);
});

//Test 10: test for the sum of numbers when the input is separated by a * delimiter
test('To Test the sum when the inputs are separated by a * delimiter', () => {
    expect(stringCalc('//[***]\n1***2***3')).toBe(6);
});

//Test 11: test for the sum of numbers when multiple inputs are greater than 1000
test('To Test the sum when two of the inputs being added are greater than 1000', () => {
    expect(stringCalc('2,1001,2000')).toBe(2);
});

//Test 12: test for the sum of numbers when multiple numbers being added are less than 1000
test('To Test the sum when two of the inputs being added are less than 1000 alongwith a number greater than 1000', () => {
    expect(stringCalc('2,4,2000')).toBe(6);
});

//Test 13: test for the sum of numbers when multiple numbers added are separated by delimiters and are greater than 1000
test('To Test the sum when two of the inputs being added are less than 1000 alongwith a number greater than 1000 separated by delimiters', () => {
    expect(stringCalc('2,4;,3*2000')).toBe(9);
});