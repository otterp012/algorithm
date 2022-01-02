// 반을 나눔 - sorted만 가능

//Divide and Conquer


function binarySearch(arr, n) {

    let left = 0;
    let right = arr.length-1;
    let medium = (left+right)/2;


    while(left < right) {

        if(arr[medium] < n) {
            left++;
        } else {
            right--;
        }

        medium = Math.floor((left+right)/2);
    }
    
    if(arr[medium] === n) return medium;
    else return -1;
}

let arr = [1, 2, 3, 4, 5];

console.log(binarySearch(arr, 3));


// Original Solution
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if(arr[middle] === elem){
//         return middle;
//     }
//     return -1;
// }

// Refactored Version
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }

// binarySearch([2,5,6,9,13,15,28,30], 103)