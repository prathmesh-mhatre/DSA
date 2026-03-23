const readline = require('readline');

var i = 1
var n;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printPattern(n){
    while(i <= n){
        console.log(i)
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