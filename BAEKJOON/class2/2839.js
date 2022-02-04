const input = require('fs').readFileSync('example.txt').toString().trim();


let input = require('fs').readFileSync('/dev/stdin').toString().trim();


function solution(input) {
    
    let bigbag = Math.floor(input/5);
    let leftSugar = input%5;

    while(leftSugar%3 !== 0) {
        bigbag--;
        if(bigbag < 0) {
            return -1;
        }
        leftSugar += 5;
    }

    return bigbag + leftSugar/3;
}

console.log(solution(+input))