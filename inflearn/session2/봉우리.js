function solution(s) {
    let answer = 0;

    for(let i = 1; i < s.length-1; i++) {
        for(let j = 1; j < s[0].length-1; j++) {
            if(s[i][j] > s[i-1][j] &&
                s[i][j] > s[i+1][j] &&
                s[i][j] > s[i][j-1] &&
                s[i][j] > s[i][j+1]) answer++;
        }
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];


console.log(solution(arr));

// 좋지 않은 풀이!