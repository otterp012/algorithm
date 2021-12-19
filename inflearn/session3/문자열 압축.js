function solution(s) {
    let answer = '';
    s += ' ';

    let cnt = 1;
    for(let i = 0; i < s.length-1; i++) {
        if(s[i] === s[i+1]) {
            cnt++;
        } else {
            answer+=s[i];
            if(cnt >= 2) answer += cnt;
            cnt = 1;
        }
    }
    return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));

