function solution() {
    let answer = [];


    for(let x of arr) {
        x = parseInt(String(x).split('').reverse().join(''));
        if(check(x)) answer.push(x);
    }
    function check(num){
        if(num===1) return false;
        for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
            if(num%i===0) return false;
        }
        return true;
    }
    
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));