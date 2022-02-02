const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');


// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ');
const arr = input[1].split(' ').map(el => Number(el)).sort((a,b) => a-b);

function sum(arr, h) {
    return arr.reduce((acc, cur) => acc + (cur > h ? cur - h : 0), 0)
}

function solution(arr, k) {
    let start = arr[0];
    let end = arr[arr.length-1];

    while(start <= end) {
        let mid =  Math.floor((start+end) / 2);
    
        if(sum(arr, mid) > +k) {
            start = mid+1;
        } else if(sum(arr,mid) < +k) {
            end = mid;
        } else {
            return mid;
        }
    }
    return mid;
}
console.log(solution(arr, +k));
