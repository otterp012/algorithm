let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [width, hieght] = input[0].split(' ').map(el => Number(el));
input.shift();


let answer = Number.MAX_VALUE;
for(let i=0; i<width-7; i++) {
    for(let j=0; j<hieght-7; j++) {
       answer = Math.min(checkCheckboard(i,j), answer);
    }
}

console.log(answer);

function checkCheckboard(num1, num2) {
    // 시작지점 좌표를 받아서, 시작지점 좌표 기준의 cnt를 return 하는 함수
    let cnt1 = 0;
    let cnt2 = 0;
    for(let i=num1; i<num1+8; i++) {
        for(let j=num2; j<num2+8; j++) {
            // console.log(input[i][j]);
            if(i % 2 === 0) {
                if(j % 2 === 0) {
                    // i짝, j짝수일때,
                    if(input[i][j] !== 'W') cnt1++;
                } else {
                    // i짝, j홀수일때
                    if(input[i][j] !== 'B') cnt1++;
                }
            } else {
                if(j % 2 === 0) {
                    // i홀, j짝일때,
                    if(input[i][j] !== 'B') cnt1++;
                } else {
                    // i홀, j홀수일때
                    if(input[i][j] !== 'W') cnt1++;
                }
            }

            if(i % 2 === 0) {
                if(j % 2 === 0) {
                    // i짝, j짝수일때,
                    if(input[i][j] !== 'B') cnt2++;
                } else {
                    // i짝, j홀수일때
                    if(input[i][j] !== 'W') cnt2++;
                }
            } else {
                if(j % 2 === 0) {
                    // i홀, j짝일때,
                    if(input[i][j] !== 'W') cnt2++;
                } else {
                    // i홀, j홀수일때
                    if(input[i][j] !== 'B') cnt2++;
                }
            }
        }
    }

    return Math.min(cnt1, cnt2);
}

