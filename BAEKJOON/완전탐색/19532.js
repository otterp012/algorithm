
const input = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(Number);

for(let i= -999; i<=999; i++) {
    for(let j= -999; j<=999; j++) {
        if( (input[0] * i + input[1] * j === input[2]) &&
            (input[3] * i + input[4] * j === input[5])) {
                console.log(`${i} ${j}`)
            }
    }
}