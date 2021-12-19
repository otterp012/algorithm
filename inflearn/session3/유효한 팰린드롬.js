function solution(s) {
    let answer = "NO";
    s = s.toUpperCase().replace(/[^a-z]/g, "");
    if(s === s.split("").reverse().join("")) answer = "YES";
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
