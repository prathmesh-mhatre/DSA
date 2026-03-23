const readline = require('readline');

let i = 0
let n;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printSumOfDigits(n){
    let sum = 0;
    while(n != 0){
        sum += n % 10
        n = parseInt(n/10)
    }   
    console.log(sum);
}

function convertToInt(n){
    return parseInt(n);
}

rl.question("Enter a number: ", (input) => {
    n = convertToInt(input);
    if(!Number.isNaN(n)){
        printSumOfDigits(n);
    } else {
        console.log("Given input is not a Number");
    }
    rl.close();
});