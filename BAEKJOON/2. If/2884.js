
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');


let h = +input[0];  
let m = +input[1];  

m -= 45;

if (m < 0) {
    m += 60;
    h--;

    if (h === -1) {
        h = 23;
    }
}

console.log(h + ' ' + m);
