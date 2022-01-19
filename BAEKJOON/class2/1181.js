let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
input.shift();

let sorted = input.sort().sort((a,b) => {
    if (a.length > b.length) {
        return 1;
      }
      if (a.length < b.length) {
        return -1;
      }
      // a must be equal to b
});


let answer = ''
sorted.forEach((item,index) => {
    // console.log(item);
    if(sorted.indexOf(item) === index) {
        answer += item + '\n'
    }
})

console.log(answer);