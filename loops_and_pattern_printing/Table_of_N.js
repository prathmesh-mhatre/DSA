const readline = require('readline');

let i = 1
let n;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printPattern(n){
    while(i <= 10){
        console.log(`${n} x ${i} = ${n * i}`)
        i++
    }
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