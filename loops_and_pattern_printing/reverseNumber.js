const readline = require('readline');

let i = 0
let n;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printReverseNumber(n){
    let out = "";
    while(n != 0){
        out += ( n % 10).toString();
        n = parseInt(n/10)
    }   
    console.log(parseInt(out));
}

function convertToInt(n){
    return parseInt(n);
}

rl.question("Enter a number: ", (input) => {
    n = convertToInt(input);
    if(!Number.isNaN(n)){
        printReverseNumber(n);
    } else {
        console.log("Given input is not a Number");
    }
    rl.close();
});