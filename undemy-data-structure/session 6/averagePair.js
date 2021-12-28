
let arr = [1,3,3,5,6,7,10,12,19];



function averagePair(arr, n) {
    let pointer1 = 0;
    let pointer2 = arr.length-1;

    if(arr.length === 0) return false;

    while(true) {
        let average = (arr[pointer1]+arr[pointer2])/2;
        if( average < n ) {
            pointer1++;
        } else if ( average > n ) {
            pointer2--;
        } else if ( average === n ) {
            return true;
        }
    
        if(pointer1 === pointer2) {
            break;
        }
    }
    return false;
}

console.log(averagePair(arr, 8))

