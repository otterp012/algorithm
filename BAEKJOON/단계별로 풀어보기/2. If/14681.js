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
    let x = input[0]*1;
    let y = input[1]*1;
    
    if(x>0 && y>0) console.log(1);
    else if(x>0 && y<0) console.log(4);
    else if(x<0 && y<0) console.log(3);
    else console.log(2);
    process.exit();
});