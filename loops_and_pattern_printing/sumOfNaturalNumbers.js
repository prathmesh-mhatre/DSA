const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let n = parseInt(input[0])

let sum = 0;

while( n !== 0) {
    sum += n;
    n--;
}

console.log(sum);