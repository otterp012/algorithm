function solution(s) {
    let answer = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for(let x of s) {
        if(x > max) {
            answer++;
            max = x;
        }
    }
    return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(solution(arr));