function solution(s) {
    let answer = [];
    answer.push(s[0]);
    for(let i = 1; i < s.length; i++) {
        if(s[i] > s[i-1]) answer.push(s[i]);
    }
    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];

console.log(solution(arr));