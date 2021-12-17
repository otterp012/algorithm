function solution(s) {
    let answer = [];

    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    for(let i = 0; i < s.length; i++) {
        sum = sum2 = 0;
        for(let j = 0; j < s[0].length; j++) {
                sum += s[i][j];
                sum2 += s[j][i];
        }

        sum3 += s[i][i];
        sum4 += s[i][s.length-i-1];
        max = Math.max(max, sum, sum2, sum3, sum4);
    }
    answer = max;
    return answer;
}

let arr = [[10, 13, 10, 12, 15], 
            [12, 39, 30, 23, 11],
            [11, 25, 50, 53, 15],
            [19, 27, 29, 37, 27],
            [19, 13, 30, 13, 19]];
console.log(solution(arr));
// 155