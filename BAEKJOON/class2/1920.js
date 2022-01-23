let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let a = input[1].split(' ').map(el => Number(el)).sort();

let b = input[3].split(' ').map(el => Number(el));

let s = new Set(a);

let answer = '';
for(let x of b) {
    if(s.has(x)) answer += '1'+'\n'
    else answer += '0'+'\n'
}

// console.log(answer);
console.log(a, b);
b.forEach((item) => {

    let start = 0;
    let end = a.length-1;
    let res = 0;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
    
        if(a[mid] === item) {
            res = 1;
            break;
        } else if (a[mid] > item) {
            end = mid -1;
        } else {
            start = mid + 1;
        }
    }
    console.log(res);
})

        // target이 arr[mid] 정렬된 배열의 중간값보다 작다면 , end를 수정해줌
        // 예를들어 arr[mid] 는, 3임 [1,2,3,4,5] 로 sort 했으므로,
        // target 은 1임 
        // arr[mid] > target이 성립하므로 
        // target은 무조건 중간값의 왼쪽 배열에만 존재함.
        // end의 값을 바꿔주면 while문이 돌면서 더 효율적으로 탐색할 수 있음.