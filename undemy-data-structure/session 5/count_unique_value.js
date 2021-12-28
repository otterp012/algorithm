
function countUniqueValues(arr) {
    let pointer1 = 0;
    let pointer2 = 1;
    let cnt = 0;
    if(arr.length ===0 ) return 0;
    while(pointer2 < arr.length) {

        if(arr[pointer1] === arr[pointer2]) {
            pointer1++;
            pointer2++;
        } else {
            cnt++;
            pointer1++;
            pointer2++;
        }
    }

    return cnt+1;
}

let arr = [1,2,3,4,4,4,7,7,12,12,13];

console.log(countUniqueValues(arr));


// function countValues(arr) {
//     let map = new Map();

//     for(let x of arr) {
//         if(!(map.has(x))) map.set(x,1);
//         else map.set(x, +map.get(x)+1);
//     }

//     return map.size;
// }

// console.log(countValues(arr));
// 내 풀이 map 객체 이용하기




// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }
// countUniqueValues([1,2,2,5,7,7,99])

// 해설의 정답
