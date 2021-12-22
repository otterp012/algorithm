function solution(s) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let i=0; i<s.length; i++){
        if(s[i] > max) {
            max = sumPlace(s[i]);
            answer = s[i];
        } 
    }
    
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(arr));
let str = 460;

function sumPlace(str) {
    let sum = 0;
    while(str > 0) {
        sum += str%10;
        str = Math.floor(str/10);
    }
    return sum;
}

console.log(sumPlace(137), sumPlace(123));

