// function insertionSort(arr){

//     for(let i=1; i<arr.length; i++) {
//         for(let j=0; j<=i; j++) {
//             if(arr[i] < arr[j]) {
//                 [arr[i],arr[j]] = [arr[j],arr[i]]
//             }
//         }
//     }

//     return arr;
// }

// console.log(insertionSort([2,1,9,76,4]));


function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
            console.log(arr);
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));