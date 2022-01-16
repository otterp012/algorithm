// let input = require('fs').readFileSync('example.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let count = 0;
let n = +input;

for(let i=1; i<= Number.MAX_SAFE_INTEGER; i++) {
    
    if(String(i).indexOf('666') !== -1) {
        count++;

        if(count === n) {
            console.log(i);
            break;
        }
    }
}

