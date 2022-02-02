let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let array1 = input[1].split(' ').map(el => Number(el)).sort((a,b) => a-b);
let array2 = input[3].split(' ').map(el => Number(el))


function Searach(arr, n) {
    let left = 0;
    let right = arr.length-1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);

        if(arr[mid] === n) return 1;
        else if(arr[mid] > n) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }

    return 0;
}

let answer = '';
array2.forEach((item) => {
    answer += Searach(array1, item) + '\n'
})

console.log(answer);
