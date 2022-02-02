let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let sorted = input[1].split(' ').map(el => Number(el)).sort((a,b) => a-b);
let k = input[3].split(' ').map(el => Number(el));

let answer = '';
k.forEach((item) => {
    answer += ( upperBound(sorted, item) - lowerBound(sorted, item) ) + '\n'
})

console.log(answer);
function lowerBound(arr, n) {
    let start = 0;
    let end = arr.length;

    while(start < end) {
        let mid = Math.floor((start + end)/2);

        if(arr[mid] >= n) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

// n보다 같거나 큰 값이 처음 나오는 것 == lowerBound.

function upperBound(arr, n) {
    let start = 0;
    let end = arr.length;

    while(start < end) {
        let mid = Math.floor((start + end)/2);

        if(arr[mid] > n) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

// 인덱스보다 초과한 값.
