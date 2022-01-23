let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


// console.log(input);

input.shift();

function check(str) {
  if(str.length === 1) return true;
  let arr = [];
  
  for(let x of str) {
    arr.push(str.indexOf(x));
  }

  let sorted = arr.map(a => a).sort((a,b) => a-b);

  for(let i=0; i<arr.length; i++) {
    if(arr[i] !== sorted[i]) return false;
  }

  return true;
}

let answer = 0;

input.forEach((item) => {
  if(check(item)) answer++;
})

console.log(answer);