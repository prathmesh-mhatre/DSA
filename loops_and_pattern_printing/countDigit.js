const readline = require('readline');

let i = 0
let n;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countDigits(n){
    let count = 0;
    while(n != 0){
        n = parseInt(n/10)
        count++
    }   
    console.log(count);
}

function convertToInt(n){
    return parseInt(n);
}

rl.question("Enter a number: ", (input) => {
    n = convertToInt(input);
    if(!Number.isNaN(n)){
        countDigits(n);
    } else {
        console.log("Given input is not a Number");
    }
    rl.close();
});