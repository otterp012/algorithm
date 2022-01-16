
let fs = require('fs');

let input = fs.readFileSync('example.txt').toString().toUpperCase().trim().split('');

let map = new Map();
for(let x of input) {
    if(!map.has(x)) {
        map.set(x, 1)
    } else {
        map.set(x, Number(map.get(x))+1 );
    }
}

let arr = [];
for(let [key, value] of map) {
    arr.push([key, value]);
}

let sorted = arr.sort((a, b) => b[1] - a[1]);

if(sorted.length === 1) { console.log(sorted[0][0]) }
else if(sorted[0][1] === sorted[1][1]) console.log('?');
else console.log(sorted[0][0]);
