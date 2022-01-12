var reverse = function(num) {
    let answer = String(Math.abs(num)).split('').reverse().join('')
    if(num < 0) {
        answer = '-' + answer;
    }
    
    answer = parseInt(answer);
    if(answer > (2**31-1) || answer < -(2**31)) return 0;
    else return answer;
};