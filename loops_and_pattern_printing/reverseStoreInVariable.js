const readline = require('readline');

let i = 0
let n;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printReverseNumber(n){
    let answer = 0;
    while(n != 0){
        let last = parseInt(n % 10);
        answer *= 10;
        answer += last;
        n = parseInt(n/10);
    }   
    console.log(answer);
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