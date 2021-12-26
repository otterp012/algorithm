

function sum(num) {
    let answer = 0;
    let tmp = num;
    while(num > 0) {
        answer += num%10;
        num = Math.floor(num/10);
    }

    return answer + tmp;
}

function isSelfNum(num) {
    
}
for(let i=0; i<100; i++){
    console.log(sum(i));
}