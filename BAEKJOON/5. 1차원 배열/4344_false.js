let input = require('fs').readFileSync('example.txt').toString().split('\n');

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let arr = [];
let sum = 0;
let answer = '';
for(let i =1; i<input.length; i++) {
    sum = 0;
    
    for(let j=1; j<input[i].split(' ').length; j++) {
        sum += +input[i].split(' ')[j];
    }
    arr.push(sum / +input[i].split(' ')[0])
}

let tmp=0;

for(let i =1; i<input.length; i++) {
    tmp = 0;
    
    for(let j=1; j<input[i].split(' ').length; j++) {
        if(input[i].split(' ')[j] > arr[i-1]) {
           tmp++;
        }
    }
    if(input[0] === '1' && input[i].split(' ')[0] ==='1') answer = '100.000%';
    else {  
        answer += ((tmp/(input[i].split(' ').length-1))*100).toFixed(3) + '%\n'
    }
}

console.log(answer);


//  console.log(input[0]);
//    console.log(input[i].split(' ')[0]);