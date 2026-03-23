const readline = require('readline');

let i = 2
let n;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printPattern(n){
    let result = '';
    while(i <= n){
        result += i + ' ';
        i+= 2
    }
    console.log(result);
}

function convertToInt(n){
    return parseInt(n);
}

rl.question("", (input) => {
    n = convertToInt(input);
    if(!Number.isNaN(n)){
        printPattern(n);
    } else {
        console.log("Given input is not a Number");
    }
    rl.close();
});