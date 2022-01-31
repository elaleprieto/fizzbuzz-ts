// const chai = window.chai;
// const expect = chai.expect;


import {FizzBuzzConvert, FizzBuzzConvertModified} from "./problems";

describe("FizzBuzzShould", () => {
    const tests = [
        {args: 1, expected: '1'},
        {args: 2, expected: '2'},
        {args: 3, expected: 'Fizz'},
        {args: 4, expected: '4'},
        {args: 5, expected: 'Buzz'},
        {args: 6, expected: 'Fizz'},
        {args: 9, expected: 'Fizz'},
        {args: 10, expected: 'Buzz'},
        {args: 15, expected: 'FizzBuzz'},
        {args: 30, expected: 'FizzBuzz'},
    ];

    tests.forEach(({args, expected}) => {
        it(`convert ${args} to ${expected}`, () => {
            expect(expected).toBe(FizzBuzzConvert(args));
        });
    });
});

describe("FizzBuzzModifiedShould", () => {
    const tests = [
        {args: 1, expected: '1'},
        {args: 2, expected: '2'},
        {args: 3, expected: 'FizzFizz'},
        {args: 4, expected: '4'},
        {args: 5, expected: 'BuzzBuzz'},
        {args: 6, expected: 'Fizz'},
        {args: 9, expected: 'Fizz'},
        {args: 10, expected: 'Buzz'},
        {args: 15, expected: 'FizzBuzzBuzz'},
        {args: 30, expected: 'FizzBuzzFizz'},
    ];

    tests.forEach(({args, expected}) => {
        it(`convert ${args} to ${expected}`, () => {
            expect(expected).toBe(FizzBuzzConvertModified(args));
        });
    });
});
