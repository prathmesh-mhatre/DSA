const readline = require('readline');

let n;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printLastDigit(n){
    console.log(n % 10)
}

function convertToInt(n){
    return parseInt(n);
}

rl.question("Enter a number: ", (input) => {
    n = convertToInt(input);
    if(!Number.isNaN(n)){
        printLastDigit(n);
    } else {
        console.log("Given input is not a Number");
    }
    rl.close();
});