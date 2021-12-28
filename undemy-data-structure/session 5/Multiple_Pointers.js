// creating pointers or values that correspond to an index or position ande
// move forwards the beginning, end or middle base on a certain condition.

// very efficient for solving problems with minimal space complexity as well.


// 특정한 방향으로 움직여가면서 값을 확인하는.
// 배열이나 스트링의 특점 지점을 확인하는 pointer 

// example
// write a function called sumZero which accepts a sorted array of integers.
// sum이 0이 되는 pair를 출력하라.
// 입력되는 배열은 정렬되어 있다!

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]


// O (n)으로 푸는걸 생각하면서 풀어본 풀이
// 원래는 그냥 이중 for문 돌리는 풀이로 풀지 않았을까?

function sumZero(arr) {

    let pointer1 = 0;
    let pointer2 = arr.length-1;

    while(pointer1 < pointer2) {
        if(arr[pointer1]+arr[pointer2]===0) {
            return [arr[pointer1], arr[pointer2]];
        } else if(sum > 0) {
            pointer2--;
        } else {
            pointer1++;
        }
    }
    return undefined;
}


let arr = [-3, -2, -1, 0, 1, 2, 3];
console.log(sumZero(arr));


// niave solution O(n^2)

// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }


// sumZero([-4,-3,-2,-1,0,1,2,5])