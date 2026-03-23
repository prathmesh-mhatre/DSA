const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const numbers = input[0].split(" ")

let n = parseInt(numbers[0]);
let power = parseInt(numbers[1]);
let answer = 1;

while( power !== 0) {
    answer *= n
    power--;
}

console.log(answer);