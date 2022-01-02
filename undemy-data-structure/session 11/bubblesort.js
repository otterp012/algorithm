

// let arr = [1, 3, 2, 4, 5];

// // 내가 작성한 코드

// function bubbleSort(arr) {
//     for(let i= arr.length; i>0; i--) {
//         for(let j=0; j<i-1; j++) {
//             if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//         }
//     return arr;
// }}


// console.log(bubbleSort(arr));


// UNOPTIMIZED VERSION OF BUBBLE SORT
// function bubbleSort(arr){
//     for(var i = arr.length; i > 0; i--){
//       for(var j = 0; j < i - 1; j++){
//         console.log(arr, arr[j], arr[j+1]);
//         if(arr[j] > arr[j+1]){
//           var temp = arr[j];
//           arr[j] = arr[j+1];
//           arr[j+1] = temp;         
//         }
//       }
//     }
//     return arr;
//   }
  
//   // ES2015 Version
//   function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
  
//     for (let i = arr.length; i > 0; i--) {
//        // 맨 뒤부터, 한칸씩 정렬이 되기 때문에 i는 맨 뒤부터 시작해서 하나씩 줄어든다.
//       for (let j = 0; j < i - 1; j++) {
//        // j는 j와 다음 요소를 구분하기 때문에 길이의-1까지만 돌면 된다.
//        // i번째는 이미 정렬되어 있는 걸 알기 때문에 j는 i가 길이가 된다. i-1까지만 돌면 된다.
//         if (arr[j] > arr[j + 1]) {
//           swap(arr, j, j + 1);
//         }
//       }
//     }
//     return arr;
//   }
  
//   bubbleSort([8,1,2,3,4,5,6,7]);
// - 위의bubblesort는 어느정도 정렬된 경우에도 그냥 처음부터 끝까지 비교를 하려고함.

// Optimized BubbleSort with noSwaps


function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      // 매번 자리바꾸기가 없다고 일단 가정
      for(var j = 0; j < i - 1; j++){
        //   console.log(arr, arr[j], arr[j+1]);
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;      
          // 그치만 자리바꾸기가 있었던 경우 noSwaps를 flase로   
        }
      }
      if(noSwaps) break;
        // nowSwaps ==== true일때 break
    }
    return arr;
  }
  
  bubbleSort([8,1,2,3,4,5,6,7]);