

function selectionSort(arr) {

    
    for(let i=0; i<arr.length; i++) {
        var lowest = i;
        // Store the first element as the smallest value you've seen so far.

        for(let j=i+1; j<arr.length; j++) {
            // i가 무슨 값에 있던지 그보다 하나 큰 위에 있는 값과 비교를 하면 되므로
            // j= i+1로 둠
            if(arr[lowest] > arr[j]) {
                lowest = j;
                // 제일 작은 값과 값의 인덱스를 이 루프를 통해 찾음
                // 이제 Swap 해야함
            }
        }
        console.log("***********************")
        console.log(arr);
        console.log("Swappint To:");
        if(i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            // Swap
        }
        console.log(arr);
        console.log("***********************")
    }
    return arr;
}

console.log(selectionSort([1,3,2,4,5]));