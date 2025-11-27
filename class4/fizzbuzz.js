// create a function that takes in a number
// if the number is divisible by 3: fizz
// if divisible by 5: buzz
// if divisible by 3 and 5: fizzbuzz
// or just return the number

function fizzbuzz(inputNumber){
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
        return 'FizzBuzz';
    } else if (inputNumber % 3 === 0) {
        return 'Fizz';
    } else if (inputNumber % 5 === 0) {
        return 'Buzz';
    } 
    return inputNumber;
}

for(let i = 1; i < 31; i++){
    console.log(fizzbuzz(i));
}