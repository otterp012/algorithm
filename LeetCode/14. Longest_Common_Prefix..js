var longestCommonPrefix = function(strs) {
    
};

let strs = ["cir","car"]
console.log(!!(strs))
if(strs === [""]) {
    return '';
} else if (strs.length === 1) {
    return strs[0];
}
// const map = new Map();
// for(let i=0; i<strs.length; i++) {
//     for(let j=0; j<strs[i].length; j++) {
//         if(!map.has(strs[i][j])) {
//             map.set(strs[i][j], 1);
//         } else {
//             map.set(strs[i][j], map.get(strs[i][j])+1);
//         }
//     }
// }

// let answer = '';
// [...map].forEach((items) => {
//     if(items[1] === strs.length) answer += items[0];
// })

// console.log(map);
// map객체 쓰면 금방 끝날줄 알았는데 아니였음


// 처음 계획대로 memo 이용하기

let memo;
let temp;
if(strs.length === 0) return '';
for(let i=0; i<strs.length-1; i++) {
    temp ='';
    for(let j=0; j<Math.min(strs[i].length, strs[i+1].length); j++) {
        if(i===0) {
            if(strs[i][j] === strs[i+1][j]) temp += strs[i][j];
            else break;
        } else {
            if(memo[j] === strs[i+1][j]) temp += memo[j];
            else continue;
        }
    }
    memo = temp;
    if(memo === '') { 
        memo = '';
        break;
    } 
}

console.log(memo);


// var longestCommonPrefix = function(strs) {
//     let memo;
//     let temp;
    
//     if(strs === [""]) {
//         return '';
//     } else if (strs.length === 1) {
//         return strs[0];
//     }
    
//     for(let i=0; i<strs.length-1; i++) {
//         temp ='';
//         for(let j=0; j<Math.min(strs[i].length, strs[i+1].length); j++) {
//             if(i===0) {
//                 if(strs[i][j] === strs[i+1][j]) temp += strs[i][j];
//                  else break;
//             } else {
//                 if(memo[j] === strs[i+1][j]) temp += memo[j];
//             }
//         }
//         memo = temp;
//         if(memo === '') { 
//             return '';
//         } 
//     }
//     return memo;

// };