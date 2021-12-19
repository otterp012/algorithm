function solution(s) {
    let answer = "NO";
    s = s.toUpperCase();
    if(s === s.split("").reverse().join("")) answer = "YES";
    return answer;
}

let str = "gooG";
console.log(solution(str));

