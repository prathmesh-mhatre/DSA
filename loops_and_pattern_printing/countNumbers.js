const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = parseInt(input[0]);
const integers = input[1].trim().split(/\s+/).map(Number);

let positive = 0;
let negative = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < n; i++) {
    if (integers[i] % 2 === 0) even++;
    else odd++;

    if (integers[i] > 0) positive++;
    else if (integers[i] < 0) negative++;
}

console.log(positive);
console.log(negative);
console.log(even);
console.log(odd);