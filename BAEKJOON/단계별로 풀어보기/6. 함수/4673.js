

function sum(num) {
    let answer = 0;
    let tmp = num;
    while(num > 0) {
        answer += num%10;
        num = Math.floor(num/10);
    }

    return answer + tmp;
}



const selfNumMap = new Map();

for(let i=1; i<10000; i++){
    if(selfNumMap.has(sum(i))) break;
    else selfNumMap.set(i, sum(i));
}

const selfNumArr = [...selfNumMap.values()].sort((a,b) => a-b);

const arr = new Array(10000).fill(null);
arr.forEach((item, index) => {
    arr[index] = index + 1;
})

const arr2 = arr.filter(item => !selfNumArr.includes(item));

let answer = '';
arr2.forEach((item) => {
    answer += item + '\n'
})
console.log(answer);

