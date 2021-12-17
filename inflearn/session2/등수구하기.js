function solution(s) {
    let answer = new Array(s.length).fill(s.length+1);

    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length; j++) {
            if(s[i] >= s[j]) answer[i]--;
        }
    }
    return answer;
}

let arr = [87, 89, 92, 100, 96];

console.log(solution(arr));
// [ 5, 4, 3, 1, 2 ]