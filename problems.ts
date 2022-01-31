export function FizzBuzzConvert(number) {
    if(number % 15 === 0) {
        return 'FizzBuzz';
    }

    if(number % 5 === 0) {
        return 'Buzz';
    }

    if(number % 3 === 0) {
        return 'Fizz';
    }

    return number.toString();
}

export function FizzBuzzConvertModified(number) {
    let result = '';

    if(number % 15 === 0) {
        result = 'FizzBuzz';
    }

    if(!result && number % 5 === 0) {
        result = 'Buzz';
    }

    if(!result && number % 3 === 0) {
        result = 'Fizz';
    }

    if(result && number.toString().includes('3')) {
        result += 'Fizz';
    }

    if(result && number.toString().includes('5')) {
        result += 'Buzz';
    }

    return result ? result : number.toString();
}
