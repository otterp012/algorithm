function solution(s) {
    let answer = 0;
    let tmp = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 1) {
            tmp++;
            answer += tmp;
        } else {
            
            tmp = 0;
        }
    }
    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));