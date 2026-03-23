const readline = require('readline');

let n;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printPattern(n){
    let result = '';
    while(n >= 1){
        result += n + ' ';
        n--;
    }
    console.log(result.trim());
}

function convertToInt(n){
    return parseInt(n, 10);
}

rl.question("", (input) => {
    n = convertToInt(input);
    if(!Number.isNaN(n)){
        printPattern(n);
    }
    rl.close();
});