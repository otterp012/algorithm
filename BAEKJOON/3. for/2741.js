
let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = +input
for(let i=1; i<= num; i++) {
    console.log(i);
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
      const num = +input[0];
    for(let i=1; i<= num; i++) {
        console.log(i);
    }
    
    process.exit();
});