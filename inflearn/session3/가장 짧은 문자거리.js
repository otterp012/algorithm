function solution(s, n) {
    let answer = [];
    let tmp = 0;

    for(let x of s) {
        if(x === n) {
            tmp = 0;
            answer.push(tmp);
        } else {
            answer.push(++tmp);
        }
    }

    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] === n) {
            tmp = 0;
            answer[i] = Math.min(answer[i], tmp);
        } else {
            answer[i] = Math.min(answer[i], ++tmp);
        }
    }
    return answer;
}

let str = "teachermode"
console.log(solution(str, "e"));