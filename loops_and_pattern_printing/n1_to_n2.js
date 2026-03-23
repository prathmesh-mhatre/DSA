const readline = require('readline');

let n1;
let n2;



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printPattern(n1, n2){
    while(n1 <= n2){
        console.log(n1)
        n1++
    }
}

function convertToInt(n){
    return parseInt(n);
}

rl.question("Enter 2 Numbers: ", (input) => {
    const twoInputs = input.split(" ");
    n1 = convertToInt(twoInputs[0]);
    n2 = convertToInt(twoInputs[1]);
    if(!Number.isNaN(n1) && !Number.isNaN(n2)){
        printPattern(n1, n2);
    } else {
        console.log("Given input is not a Number");
    }
    rl.close();
});